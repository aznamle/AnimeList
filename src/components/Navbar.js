import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='mx-auto max-w-7xl justify-between py-6 shadow-md top-0 inset-x-0 z-40'>
            <div className=''>
            <h1 className='text-3xl font-bold text-white'><Link to="/">AniSen</Link></h1>
            </div>
        </div>
    )
}

export default Navbar
