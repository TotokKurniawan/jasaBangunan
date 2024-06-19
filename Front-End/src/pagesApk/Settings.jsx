import React from 'react'
import Sidebar from '../apkComponents/sidebar'
import Navbar from '../apkComponents/navbar'
import Setting from '../apkUser/settings'

const Settings = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="main-content flex-1">
                <Navbar />
                <Setting />
            </div>
        </div>
    )
}

export default Settings
