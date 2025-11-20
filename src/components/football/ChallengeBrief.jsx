import { motion } from "framer-motion";
import { Target, AlertTriangle, Trophy } from "lucide-react";

export default function ChallengeBrief() {
  return (
    <section className="relative w-full py-40 bg-black text-white overflow-hidden">
      {/* Background visuals */}
      <div className="absolute inset-0 z-0 opacity-50">
        <img
          src="https://images.unsplash.com/photo-1508264165352-258a6c44f0ac?q=80&w=2400"
          alt="Football Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          The Challenge Brief
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-[#00c8ff] text-xl md:text-2xl mb-10"
        >
          The goals, constraints, and expectations set by the client.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-gray-300 max-w-4xl text-lg md:text-xl leading-relaxed mb-20"
        >
          The client’s objective was clear: create a high-impact football event capable of energizing the community,
          elevating team spirit, attracting sponsors, and establishing a visually powerful identity both online and on-site.
          They needed an unforgettable experience — from branding to digital presence to in-stadium atmosphere.
        </motion.p>

        {/* Futuristic 3D Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-14 perspective-1000">
          {[
            {
              label: "Goals",
              iconColor: "text-[#00c8ff]",
              img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              text: "Deliver a thrilling event experience, boost fan participation, elevate brand perception, and create a sponsorship-friendly environment.",
            },
            {
              label: "Constraints",
              iconColor: "text-[#ffae00]",
              img: "https://plus.unsplash.com/premium_photo-1661881970542-8447015772e8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              text: "Time limitations, stadium layout restrictions, budget control, and ensuring smooth digital integration across multiple platforms.",
            },
            {
              label: "Expectations",
              iconColor: "text-[#00ff9d]",
              img: "https://images.unsplash.com/photo-1641772623206-dc7358509b28?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              text: "Build a visually futuristic identity, enhance crowd engagement, and deliver a polished, high-quality event experience.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative w-full h-[420px] group perspective-1000"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 rounded-2xl shadow-xl">
                {/* Front Image */}
                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold">{item.label}</h3>
                </div>

                {/* Back Text */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col justify-center">
                  <p className="text-gray-200 text-lg leading-relaxed">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Component */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-32 border-l-2 border-white/20 pl-10 space-y-14"
        >
          {[
            {
              title: "Initial Discovery Phase",
              text: "Understanding the client’s goals, audience, stadium layout, and technical limitations.",
            },
            {
              title: "Concept Development",
              text: "Building early moodboards, motion direction, and visual planning.",
            },
            {
              title: "Experience Engineering",
              text: "Creating brand identity, digital web presence, and event engagement systems.",
            },
            {
              title: "Final Execution",
              text: "Launching visuals, motion assets, and on-site integrations across the event.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative pl-6"
            >
              <div className="absolute -left-3 top-2 w-4 h-4 rounded-full bg-[#00c8ff] shadow-lg" />
              <h4 className="text-xl font-bold mb-1">{step.title}</h4>
              <p className="text-gray-300 text-lg">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}