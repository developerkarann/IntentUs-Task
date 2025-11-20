import { motion } from "framer-motion";
import { Star, Zap, Users, ShieldCheck } from "lucide-react";

export default function EventHighlights() {
  return (
    <section className="relative w-full py-40 bg-black text-white overflow-hidden">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0 opacity-55">
        <img
          src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Event Highlights Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Key Moments & Achievements
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-24"
        >
          A snapshot of standout milestones that defined the event’s success.
        </motion.p>

        {/* Highlights Grid */}
        <div className="mt-24 relative">
          {/* Horizontal Flip-Card Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
          >
            {[
              {
                title: "Fully booked within 48 hours",
                desc: "A surge of early registrations filled all seats almost instantly.",
                img: "https://images.unsplash.com/photo-1760046997065-25e4d6352bc8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "20+ sponsors on board",
                desc: "Top-tier brands joined the lineup to support and enhance the event.",
                img: "https://plus.unsplash.com/premium_photo-1683134393447-ea29c07775b2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "5000+ attendees",
                desc: "One of the largest turnouts in the event's history.",
                img: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="w-full h-[480px] perspective-1000"
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180 hover:scale-[1.04] hover:shadow-[0_0_40px_#00c8ff80] rounded-3xl shadow-2xl">
                  <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-3xl" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    <h3 className="absolute bottom-6 left-6 text-3xl font-extrabold w-4/5">{item.title}</h3>
                  </div>
                  <div className="absolute inset-0 rotate-y-180 backface-hidden bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl flex flex-col justify-center text-left">
                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-200 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline Underneath */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-32 border-l-2 border-white/20 pl-10 space-y-14 max-w-4xl mx-auto"
          >
            {[
              {
                title: "Pre-event Preparation",
                text: "Core planning, sponsor coordination, match schedules, and crowd flow modeling.",
              },
              {
                title: "Marketing & Hype Launch",
                text: "Visual rollouts, teasers, and interactive content to create buzz.",
              },
              {
                title: "On-ground Setup",
                text: "Lighting rigs, banners, media booth installation, and security routes.",
              },
              {
                title: "Live Execution",
                text: "Operational teams running the event with synchronized communication.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative pl-6"
              >
                <div className="absolute -left-3 top-2 w-4 h-4 rounded-full bg-[#00c8ff] shadow-lg" />
                <h4 className="text-2xl font-bold mb-1">{step.title}</h4>
                <p className="text-gray-300 text-lg">{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
