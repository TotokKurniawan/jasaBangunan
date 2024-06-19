const express = require("express");
const mysql = require("mysql");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "handyman",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use("/uploads", express.static("public/images"));

// BE login dan register
app.post("/login", (req, res) => {
  const { email, password, role } = req.body;

  // Validate role
  if (!["admin", "customer"].includes(role)) {
    return res.status(400).json({ status: "error", message: "Invalid role" });
  }

  const sql =
    "SELECT * FROM user WHERE email = ? AND password = ? AND role = ?";
  db.query(sql, [email, password, role], (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "error", message: "Database error" });
    }
    if (data.length === 1) {
      return res
        .status(200)
        .json({ status: "success", message: "Login successful", email });
    } else {
      return res.status(401).json({ status: "error", message: "Login failed" });
    }
  });
});
app.post("/register", (req, res) => {
  const { email, password, hint, jawabanHint } = req.body;
  const role = "customer"; // Tetapkan nilai langsung untuk peran (role) pengguna

  const sql =
    "INSERT INTO user (email, password, hint, jawab_hint, role) VALUES (?, ?, ?, ?, ?)";
  const values = [email, password, hint, jawabanHint, role];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "error", message: "Database error", details: err });
    }
    return res
      .status(201)
      .json({ status: "success", message: "Registration successful" });
  });
});
// End BE login dan register

// BE Tampilan user
// dashboard user
app.get("/totalPekerja", (req, res) => {
  const sql = "SELECT COUNT(id_pekerja) AS totalPekerja FROM pekerja";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
});
app.get("/totalPesanan", (req, res) => {
  const sql = "SELECT COUNT(id_pemesanan) AS totalPemesanan FROM pemesanan";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
});
app.get("/totalLayanan", (req, res) => {
  const sql = "SELECT COUNT(id_layanan) AS totalLayanan FROM layanan";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
});
app.get("/riwayatPesananUser", (req, res) => {
  const sql = `
    SELECT pemesanan.nama, pemesanan.status, pemesanan.waktu_pengajuan,pemesanan.estimasi_harga, layanan.kategori_layanan 
    FROM pemesanan 
    JOIN layanan ON layanan.id_layanan = pemesanan.id_layanan 
    ORDER BY pemesanan.status = 'pending' DESC;
  `;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});
// testimoni
app.post("/tambahTestimoni", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  const { nama, rating, description } = req.body;
  const sql =
    "INSERT INTO testimoni (nama,gambar, rating, keterangan) VALUES (?, ?, ?,?)";
  const values = [nama, req.file.filename, rating, description];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ Error: "Database error", Details: err });
    }
    return res
      .status(201)
      .json({ Status: "Success", InsertId: result.insertId });
  });
});
app.get("/Testimoni", (req, res) => {
  const sql = `SELECT * FROM testimoni`;
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (data.length > 0) {
      data.forEach((user) => {
        user.gambar = `http://localhost:8081/uploads/${user.gambar}`;
      });
      return res.json(data);
    } else {
      return res.status(404).json({ error: "No testimonial found" });
    }
  });
});

// pemesanan

app.post("/tambahPesanan", (req, res) => {
  const { nama, kontak, alamat, kategori, harga, spesifikasi, waktu } =
    req.body;
  const sql =
    "INSERT INTO pemesanan (nama, kontak, alamat, spesifikasi, estimasi_harga, status, waktu_pengajuan, estimasi, id_layanan) VALUES (?, ?, ?, ?, ?, 'pending', CURRENT_TIMESTAMP, ?, ?)";
  const values = [nama, kontak, alamat, spesifikasi, harga, waktu, kategori];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ Error: "Database error", Details: err });
    }
    return res
      .status(201)
      .json({ Status: "Success", InsertId: result.insertId });
  });
});
app.get("/kategoriLayanan", (req, res) => {
  const sql = "SELECT  * FROM layanan";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).json(data); // Mengirim data ke client
  });
});
// pengaturan
app.put("/profileUser", upload.single("file"), (req, res) => {
  const { nama_awal, nama_akhir, alamat, no_hp, email } = req.body;
  const newFileName = req.file ? req.file.filename : null;

  const sql =
    "UPDATE user SET nama_awal = ?, nama_akhir = ?, alamat = ?, no_hp = ?, gambar = ? WHERE email = ?";
  const values = [nama_awal, nama_akhir, alamat, no_hp, newFileName, email];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "Profile updated successfully" });
  });
});
app.put("/keamananUser", (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const sql =
    "UPDATE user SET password = ? WHERE password = ? AND role ='customer' ";
  db.query(sql, [newPassword, oldPassword], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Password incorrect" });
    }
    return res.status(200).json({ message: "Password updated successfully" });
  });
});
// profile
app.get("/profileUser", (req, res) => {
  const { email } = req.query;

  const sql = `
    SELECT nama_awal, nama_akhir, alamat, no_hp, gambar
    FROM user
    WHERE email = ?;
  `;
  db.query(sql, [email], (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (data.length > 0) {
      const user = data[0];
      user.gambar = `http://localhost:8081/uploads/${user.gambar}`;
      return res.json(user);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  });
});
// End BE tampilan user

// BE Tampilan Admin
// Dashboard admin
app.get("/riwayatPesananAdmin", (req, res) => {
  const sql = `
    SELECT pemesanan.nama,pemesanan.id_pemesanan, pemesanan.status, pemesanan.estimasi_harga, pemesanan.estimasi,pemesanan.spesifikasi, pemesanan.waktu_pengajuan, layanan.kategori_layanan 
    FROM pemesanan 
    JOIN layanan ON layanan.id_layanan = pemesanan.id_layanan
    WHERE pemesanan.status IN ('pending', 'proses');
  `;
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json(err);
    }
    console.log("Query result:", data);
    return res.json(data);
  });
});

app.put("/updateStatusProses/:id", (req, res) => {
  const { id } = req.params;
  const sql = "UPDATE pemesanan SET status = 'proses' WHERE id_pemesanan = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json({ message: "Status updated successfully" });
  });
});
app.put("/updateStatusSelesai/:id", (req, res) => {
  const { id } = req.params;
  const sql = "UPDATE pemesanan SET status = 'selesai' WHERE id_pemesanan = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json({ message: "Status updated successfully" });
  });
});
app.put("/updateStatusDitolak/:id", (req, res) => {
  const { id } = req.params;
  const sql = "UPDATE pemesanan SET status = 'ditolak' WHERE id_pemesanan = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json({ message: "Status updated successfully" });
  });
});

app.get("/riwayatPesananAdmin2/:id", (req, res) => {
  const { id } = req.params;
  const sql = `
    SELECT pemesanan.*, layanan.kategori_layanan 
    FROM pemesanan 
    JOIN layanan ON layanan.id_layanan = pemesanan.id_layanan
    WHERE id_pemesanan = ?;
  `;
  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json(err);
    }
    console.log("Query result:", data);
    return res.json(data);
  });
});

// layanan
app.get("/tampillayananadmin", (req, res) => {
  const sql =
    "SELECT * FROM layanan ORDER BY kategori_layanan = 'pembangunan' DESC";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    // Modifikasi setiap objek dalam array data untuk menyertakan path lengkap ke gambar
    const layananWithFullPath = data.map((layanan) => {
      return {
        ...layanan,
        gambar: `http://localhost:8081/uploads/${layanan.gambar}`,
      };
    });

    res.json(layananWithFullPath);
  });
});
app.post("/tambahLayananAdmin", upload.single("file"), (req, res) => {
  const { kategori_layanan, jenis_layanan, garansi } = req.body;
  const sql =
    "INSERT INTO layanan (gambar, kategori_layanan, jenis_layanan,  garansi) VALUES ( ?, ?, ?, ?)";
  const values = [req.file.filename, kategori_layanan, jenis_layanan, garansi];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ Error: "Database error", Details: err });
    }
    return res
      .status(201)
      .json({ Status: "Success", InsertId: result.insertId });
  });
});
app.put("/editlayananadmin/:id", (req, res) => {
  const id = req.params.id;
  const { kategori_layanan, jenis_layanan, garansi } = req.body;

  const sql =
    "UPDATE layanan SET kategori_layanan = ?, jenis_layanan = ?,garansi= ? WHERE id_layanan = ?";
  db.query(
    sql,
    [kategori_layanan, jenis_layanan, garansi, id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ message: "Pekerja success" });
    }
  );
});
app.delete("/hapuslayananadmin/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM layanan WHERE id_layanan = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "Pekerja success" });
  });
});
// pekerja
app.get("/tampilpekerjaadmin", (req, res) => {
  const sql = "SELECT * FROM pekerja";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.post("/tambahPekerjaAdmin", (req, res) => {
  const { nama_pekerja, kontak, alamat } = req.body;
  const sql =
    "INSERT INTO pekerja (nama_pekerja, kontak, alamat) VALUES (?, ?, ?)";
  db.query(sql, [nama_pekerja, kontak, alamat], (err, result) => {
    if (err) {
      console.error(); // Log the error detail
      return res.status(500).json({ message: "Database error", error: err });
    }
    return res.status(201).json({ message: "User added successfully" });
  });
});
app.put("/editpekerjaadmin/:id", (req, res) => {
  const id = req.params.id;
  const { nama_pekerja, kontak, alamat } = req.body;

  const sql =
    "UPDATE pekerja SET nama_pekerja = ?, kontak = ?, alamat = ? WHERE id_pekerja = ?";
  db.query(sql, [nama_pekerja, kontak, alamat, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "Pekerja success" });
  });
});
app.delete("/hapuspekerja/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM pekerja WHERE id_pekerja = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "Pekerja success" });
  });
});

// pemesanan
app.get("/tampilPesananAdmin", (req, res) => {
  const sql = `
    SELECT pemesanan.nama, pemesanan.status, pemesanan.waktu_pengajuan, layanan.kategori_layanan 
    FROM pemesanan 
    JOIN layanan ON layanan.id_layanan = pemesanan.id_layanan
    WHERE pemesanan.status IN ('selesai');
  `;
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json(err);
    }
    console.log("Query result:", data);
    return res.json(data);
  });
});
app.delete("/hapuspesananadmin/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM pemesanan WHERE id_pemesanan = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "Pekerja success" });
  });
});
// setting
app.put("/userAdmin", (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const sql =
    "UPDATE user SET password = ? WHERE password = ? AND role ='admin'";
  db.query(sql, [newPassword, oldPassword], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Password incorrect" });
    }
    return res.status(200).json({ message: "Password updated successfully" });
  });
});
app.put("/editprofileAdmin", upload.single("file"), (req, res) => {
  const { nama_awal, nama_akhir, alamat, no_hp, email } = req.body;
  const newFileName = req.file ? req.file.filename : null;

  const sql =
    "UPDATE user SET nama_awal = ?, nama_akhir = ?, alamat = ?, no_hp = ?, gambar = ? WHERE email = ?";
  const values = [nama_awal, nama_akhir, alamat, no_hp, newFileName, email];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "Profile updated successfully" });
  });
});
// profileadmin
app.get("/profileAdmin", (req, res) => {
  const sql = `
    SELECT nama_awal, nama_akhir, alamat, no_hp, gambar
    FROM user
    WHERE role = 'admin';
  `;
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    const adminWithFullPath = data.map((admin) => {
      return {
        ...admin,
        gambar: `http://localhost:8081/uploads/${admin.gambar}`,
      };
    });
    console.log("Query result:", adminWithFullPath);
    return res.json(adminWithFullPath);
  });
});
// End BE tampilan Admin

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
