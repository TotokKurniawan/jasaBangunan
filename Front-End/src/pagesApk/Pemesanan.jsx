import React from 'react'
import Sidebar from '../apkComponents/sidebar'
import Navbar from '../apkComponents/navbar'
import Pemesanan from '../apkUser/pemesanan'

const pemesanan = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="main-content flex-1">
                <Navbar />
                <Pemesanan />
            </div>
        </div>
    )
}

export default pemesanan
