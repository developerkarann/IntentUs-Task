import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function ConnectSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/fifa.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Foreground Content */}
      <div className="relative z-10 text-center text-white">
        <p className="text-lg md:text-xl text-gray-300">Powered by</p>

        <div className="flex justify-center items-center gap-3">
          <h1 style={{fontFamily: ' Arupala Grotesk Trial'}} className="text-5xl tracking-wide font-bold text-white bg-clip-text ">
            Nevents
          </h1>

          {/* Rotating Football Logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg"
            alt="football logo"
            className="w-7 h-7 animate-spin-slow drop-shadow-[0_0_1px_#00ffcc]"
          />
        </div>

        <button
          className="
            mt-6 px-8 py-3 rounded-full text-black font-medium bg-white
            border border-white/40 shadow-lg flex items-center gap-2 mx-auto
            transition-all duration-300
            hover:scale-105 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
          "
        >
          Let's connect <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
}
