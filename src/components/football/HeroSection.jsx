import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image / Visuals */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2400" 
          alt="Football Stadium"
          className="w-full h-full object-cover brightness-50"
        />

        {/* Futuristic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,140,255,0.35),transparent_70%)]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-[#00c8ff] mb-4"
        >
          <Sparkles className="w-5 h-5" />
          <span className="tracking-wide uppercase text-sm font-medium">
            Futuristic Sports Experience
          </span>
        </motion.div>

        <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-xl leading-tight">
          Championship Football Cup — 2025 Edition
        </h1>

        <p className="text-gray-300 mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          A next-gen sports event engineered for <span className="text-white font-semibold">12 teams</span>,
          <span className="text-white font-semibold"> 5,000 fans</span>, and an atmosphere built for pure energy.
        </p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <button className="px-6 py-3 bg-[#00c8ff] text-black font-semibold rounded-xl shadow-lg hover:bg-[#33d4ff] transition-all duration-300">
            Explore Event
          </button>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all duration-300">
            Watch Highlights
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
