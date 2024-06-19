import React from 'react'
import Sidebar from '../apkComponents/sidebarAdmin'
import Navbar from '../apkComponents/navbarAdmin'
import TambahLayanan from '../apkAdmin/tambahLayanan'

const tambahLayanan = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='main-content flex-1'>
                <Navbar />
                <TambahLayanan />
            </div>
        </div>
    )
}

export default tambahLayanan
