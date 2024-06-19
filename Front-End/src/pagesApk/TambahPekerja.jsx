import React from 'react'
import Sidebar from '../apkComponents/sidebarAdmin'
import Navbar from '../apkComponents/navbarAdmin'
import TambahPekerja from '../apkAdmin/tambahPekerja'

const tambahLayanan = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='main-content flex-1'>
                <Navbar />
                <TambahPekerja />
            </div>
        </div>
    )
}

export default tambahLayanan
