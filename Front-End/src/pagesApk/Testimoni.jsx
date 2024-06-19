import React from 'react'
import Sidebar from '../apkComponents/sidebar'
import Navbar from '../apkComponents/navbar'
import Testimoni from '../apkUser/testimoni'

const testimoni = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="main-content flex-1">
                <Navbar />
                <Testimoni />
            </div>
        </div>
    )
}

export default testimoni
