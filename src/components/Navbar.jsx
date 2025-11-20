import React from 'react'

const Navbar = () => {
    return (
        <>{/* NAVBAR */}
            <nav className="w-full flex justify-between fixed top-3 z-50 items-center px-10 text-white pt-0 ">
                <h1 className="text-5xl tracking-wide">intent</h1>

                <button className="px-6 py-2 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/10 transition">
                    Menu
                </button>
            </nav></>
    )
}

export default Navbar