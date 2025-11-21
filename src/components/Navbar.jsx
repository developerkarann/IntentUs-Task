import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <> {/* NAVBAR */}
            <nav className="w-full flex justify-between fixed top-3 z-50 items-center px-10 text-white pt-0 ">
                <div className="flex items-center gap-4">
                    {/* Title */}
                    <Link to='/'>
                        <h1 className="text-5xl tracking-wide font-bold text-white bg-clip-text ">
                            Nevents
                        </h1>
                    </Link>

                    {/* Rotating Football Logo */}
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg"
                        alt="football logo"
                        className="w-10 h-10 animate-spin-slow drop-shadow-[0_0_1px_#00ffcc]"
                    />
                </div>

                <button className="px-6 py-2 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/10 transition">
                    Menu
                </button>
            </nav>
        </>
    )
}

export default Navbar

/* Add this animation to your global CSS or tailwind config */
/*
@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 6s linear infinite;
}
*/