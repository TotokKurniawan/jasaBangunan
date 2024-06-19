import React from 'react'
import Sidebar from '../apkComponents/sidebarAdmin'
import Navbar from '../apkComponents/navbarAdmin'
import PesananAdmin from '../apkAdmin/pesanan'

const PesananAdminn = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='main-content flex-1'>
                <Navbar />
                <PesananAdmin />
            </div>
        </div>
    )
}

export default PesananAdminn
