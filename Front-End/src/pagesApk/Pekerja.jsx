import React from 'react'
import Sidebar from '../apkComponents/sidebarAdmin'
import Navbar from '../apkComponents/navbarAdmin'
import Pekerja from '../apkAdmin/pekerja'

const pekerja = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='main-content flex-1'>
                <Navbar />
                <Pekerja />
            </div>
        </div>
    )
}

export default pekerja
