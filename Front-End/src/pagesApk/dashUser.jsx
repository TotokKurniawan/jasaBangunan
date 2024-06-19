import React from 'react'
import Sidebar from '../apkComponents/sidebar'
import Navbar from '../apkComponents/navbar'
import DashUser from '../apkUser/dashboardUser'

const dashUser = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="main-content flex-1">
                <Navbar />
                <DashUser />
            </div>
        </div>
    )
}

export default dashUser
