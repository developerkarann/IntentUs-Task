import { motion } from "framer-motion";

export default function OverviewSection() {
  return (
    <section className="relative w-full py-32 bg-black text-white overflow-hidden">
      {/* Layered Visual Background with Motion Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        {/* Main Stadium Visual */}
        <motion.img
          src="https://images.unsplash.com/photo-1508264165352-258a6c44f0ac?q=80&w=2400"
          alt="Futuristic Stadium Night Visual"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />

        {/* Motion Blur Light Trails */}
        <motion.img
          src="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2000"
          alt="Light Trails"
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-40"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
        />

        {/* Atmospheric Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-5xl font-extrabold mb-6"
        >
          Project Overview
        </motion.h2>

        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-4xl text-lg md:text-xl leading-relaxed mb-10"
        >
          This football championship stands as more than just a sports gathering — it’s engineered as a complete
          audiovisual experience. High-intensity atmospheres, immersive digital layers, and optimized fan engagement
          strategies merge to deliver a next-gen sports experience.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-gray-300 max-w-4xl text-lg md:text-xl leading-relaxed mb-14"
        >
          Through advanced motion graphics, interactive branding, crowd experience design, and seamless digital
          infrastructure, the event ensures a bold, futuristic presence both online and on-site. Every moment is crafted
          to feel alive, synchronized, and memorable.
        </motion.p>

        {/* Data Grid with Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
          {[
            { label: "Location", value: "Helsinki Stadium" },
            { label: "Duration", value: "3 Days" },
            { label: "Attendance", value: "5,000+ Fans" },
            { label: "Services Provided", value: "Branding, Web Dev, Motion, On-Site Media" },
            { label: "Year", value: "2025" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-sm uppercase tracking-wide text-[#00c8ff] font-semibold mb-2">
                {item.label}
              </h3>
              <p className="text-xl font-bold text-white">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
