import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-40 bg-black text-white overflow-hidden">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1723600918746-41da46fc0606?q=80&w=837&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Football Team Victory"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-2xl"
        >
          Let’s Build Your Next Breakthrough Event.
        </motion.h2>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 px-10 py-4 bg-[#00c8ff] text-black font-semibold text-xl rounded-xl shadow-[0_0_30px_#00c8ff80] hover:bg-[#33d4ff] transition-all duration-300"
        >
          Start Your Event →
        </motion.button>
      </div>
    </section>
  );
}