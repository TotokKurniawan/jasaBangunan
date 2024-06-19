import React from 'react'
import Sidebar from '../apkComponents/sidebarAdmin'
import Navbar from '../apkComponents/navbarAdmin'
import DashAdmin from '../apkAdmin/dashboardAdmin'

const dashUser = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="main-content flex-1">
                <Navbar />
                <DashAdmin />
            </div>
        </div>
    )
}

export default dashUser
