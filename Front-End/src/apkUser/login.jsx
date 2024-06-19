import React, { useState } from "react";
import Background from "../assets/img/handyman.png";
import Home from "../assets/img/home/Housejpg.jpg";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer"); // default role
  const [hint, setHint] = useState("");
  const [jawabanHint, setJawabanHint] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validasi sederhana untuk email dan password
    if (email.trim() === "" || password.trim() === "") {
      alert("Email dan password harus diisi");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();
      if (response.ok) {
        // Simpan email di localStorage
        localStorage.setItem("userEmail", email);

        // Navigasi berdasarkan role
        if (role === "admin") {
          navigate("/dashboardAdmin");
        } else if (role === "customer") {
          navigate("/dashboardUser");
        }
      } else {
        // Tangani error jika login gagal
        alert(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Terjadi kesalahan saat login");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      email.trim() === "" ||
      password.trim() === "" ||
      hint.trim() === "" ||
      jawabanHint.trim() === ""
    ) {
      alert("Semua field harus diisi");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, hint, jawabanHint, role }),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle success registration
        alert("Registrasi berhasil. Silakan login.");
        setIsRegister(false); // Kembali ke form login setelah registrasi berhasil
      } else {
        // Handle error jika registrasi gagal
        alert(data.message);
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("Terjadi kesalahan saat registrasi");
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center p-7 sm:p-20"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div
        className="container flex flex-col md:flex-row w-full max-w-4xl rounded-2xl shadow-lg overflow-hidden transition-transform duration-500 transform"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <div
          className={`w-full md:w-1/2 bg-black ${
            isRegister ? "order-1" : "order-2"
          }`}
        >
          <img
            src={Home}
            alt="Placeholder"
            className="w-full h-full bg-cover"
          />
        </div>
        <div
          className={`w-full md:w-1/2 p-8 flex items-center justify-center ${
            isRegister ? "order-2" : "order-1"
          }`}
        >
          <div className="w-full">
            {isRegister ? (
              <RegisterForm
                handleRegister={handleRegister}
                setIsRegister={setIsRegister}
                setEmail={setEmail}
                setPassword={setPassword}
                setJawabanHint={setJawabanHint} // <-- Perbaikan pada nama properti
                setHint={setHint}
              />
            ) : (
              <LoginForm
                setIsRegister={setIsRegister}
                handleLogin={handleLogin}
                setEmail={setEmail}
                setPassword={setPassword}
                setRole={setRole}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginForm({
  setIsRegister,
  handleLogin,
  setEmail,
  setPassword,
  setRole,
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Login</h2>
      <form className="mt-4" onSubmit={handleLogin}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Masuk Sebagai
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
          >
            Login
          </button>
        </div>
      </form>
      <p className="mt-4 text-sm text-gray-800">
        Belum punya akun?{" "}
        <button
          onClick={() => setIsRegister(true)}
          className="text-blue-600 hover:underline"
        >
          Register
        </button>
      </p>
    </div>
  );
}

function RegisterForm({
  handleRegister,
  setEmail,
  setPassword,
  setHint,
  setJawabanHint,
  setIsRegister,
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Register</h2>
      <form className="mt-4" onSubmit={handleRegister}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="mt-1 p-1 w-full border rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-1 w-full border rounded-md"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="hint"
            className="block text-sm font-medium text-gray-700"
          >
            Hint
          </label>
          <select
            id="hint"
            className="mt-1 p-1 w-full border rounded-md"
            onChange={(e) => setHint(e.target.value)}
          >
            <option disabled selected>
              -- Pilih Salah Satu --
            </option>
            <option value="Apa makanan favoritmu?">
              Apa makanan favoritmu?
            </option>
            <option value="Siapa nama ayahmu?">Siapa nama ayahmu?</option>
            <option value="Siapa nama ibumu?">Siapa nama ibumu?</option>
            <option value="Apa cita-citamu?">Apa cita-citamu?</option>
            <option value="Apa film favoritmu?">Apa film favoritmu?</option>
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="jawabanHint"
            className="block text-sm font-medium text-gray-700"
          >
            Jawaban Hint
          </label>
          <input
            type="text"
            id="jawabanHint"
            className="mt-1 p-1 w-full border rounded-md"
            onChange={(e) => setJawabanHint(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
          >
            Register
          </button>
        </div>
      </form>
      <p className="mt-4 text-sm text-gray-800">
        Sudah punya akun?{" "}
        <button
          onClick={() => setIsRegister(false)}
          className="text-blue-600 hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default Login;
