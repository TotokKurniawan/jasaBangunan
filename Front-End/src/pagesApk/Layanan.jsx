import React from 'react'
import Sidebar from '../apkComponents/sidebar'
import Navbar from '../apkComponents/navbar'
import Layanan from '../apkUser/layanan'

const dashUser = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="main-content flex-1">
                <Navbar />
                <Layanan />
            </div>
        </div>
    )
}

export default dashUser
