import React from 'react'
import Sidebar from '../apkComponents/sidebarAdmin'
import Navbar from '../apkComponents/navbarAdmin'
import LayananAdmin from '../apkAdmin/layananAdmin'

const LayananAdminn = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='main-content flex-1'>
                <Navbar />
                <LayananAdmin />
            </div>
        </div>
    )
}

export default LayananAdminn
