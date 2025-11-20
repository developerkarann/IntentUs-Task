import { motion } from "framer-motion";
import { AlertTriangle, Clock, DollarSign } from "lucide-react";

export default function ProblemsPainPoints() {
  return (
    <section className="relative w-full py-36 bg-black text-white overflow-hidden">
      {/* Strong Visual Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img
          src="https://images.unsplash.com/photo-1502877828070-33c16dd8d3a5?q=80&w=2400"
          alt="Obstacles Visual"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Obstacles on the Field
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-gray-300 text-left max-w-3xl text-lg md:text-xl leading-relaxed mb-20"
        >
          Logistical roadblocks, creative challenges, tight deadlines, and budget boundaries shaped the project’s workflow.
          Each obstacle required structured decision-making and adaptive problem-solving.
        </motion.p>

        {/* Layout: Left-heavy visuals, right-aligned text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-12">
          {/* Large Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-10"
          >
            <img
              src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Logistics Issue"
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1682435566673-cedb75cd7459?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Creative Challenge"
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
            <img
              src="https://images.unsplash.com/photo-1600250395178-40fe752e5189?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Time Pressure"
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Text Block - Right Aligned */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="space-y-12 text-right"
          >
            {/* Card 1 */}
            <div className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-xl shadow-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-end items-center gap-3 mb-3">
                <AlertTriangle className="text-[#ff5e5e] w-7 h-7" />
                <h3 className="text-2xl font-bold">Logistical Issues</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Managing stadium access, team schedules, security flow, and equipment logistics required continuous
                coordination and quick decision‑making.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-xl shadow-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-end items-center gap-3 mb-3">
                <DollarSign className="text-[#00ffb3] w-7 h-7" />
                <h3 className="text-2xl font-bold">Budget Constraints</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Stretching design quality and digital production within a limited financial structure demanded creative
                allocation and optimized workflows.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-xl shadow-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-end items-center gap-3 mb-3">
                <Clock className="text-[#00c8ff] w-7 h-7" />
                <h3 className="text-2xl font-bold">Time Pressure</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                With a compressed timeline, tasks had to be executed rapidly without sacrificing creative quality or
                technical accuracy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
