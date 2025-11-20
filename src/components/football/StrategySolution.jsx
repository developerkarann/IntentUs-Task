import { motion } from "framer-motion";
import { Lightbulb, Map, Sparkles, Video, Flag } from "lucide-react";

export default function StrategySolution() {
  return (
    <section className="relative w-full py-40 bg-black text-white overflow-hidden">
      {/* Massive Cinematic Visual Background */}
      <div className="absolute inset-0 z-0 opacity-55">
        <img
          src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2400"
          alt="Strategy Visual Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Our Playbook for Success
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-[#00c8ff] text-xl md:text-2xl mb-16"
        >
          How our team approached planning, creativity, logistics, and execution.
        </motion.p>

        {/* Section Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="text-gray-300 max-w-4xl text-lg md:text-xl leading-relaxed mb-24"
        >
          Creating a next-gen football event meant crafting a strategy that balanced creativity, crowd engagement, and
          operational precision. Our approach blended cinematic visuals, technology-driven workflows, and streamlined
          event coordination to deliver an unforgettable, immersive atmosphere.
        </motion.p>

        {/* BIG Visual Sections (Not Cards) */}
        <div className="space-y-32">
          {/* 1. Concept Development */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <img
              src="https://images.unsplash.com/photo-1629217855633-79a6925d6c47?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Concept Development"
              className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
            />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-[#00c8ff] w-8 h-8" />
                <h3 className="text-3xl font-bold">Concept Development</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                We crafted the core creative direction — immersive visuals, dynamic motion language, and a stadium-wide
                energy concept that shaped the entire event identity.
              </p>
            </div>
          </motion.div>

          {/* 2. Logistics Mapping */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse"
          >
            <img
              src="https://images.unsplash.com/photo-1695954771698-0e25f158f09c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Logistics Mapping"
              className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="lg:order-first">
              <div className="flex items-center gap-3 mb-4">
                <Map className="text-[#00ff9d] w-8 h-8" />
                <h3 className="text-3xl font-bold">Logistics Mapping</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Coordinating crowd flow, match timings, sponsor zones, and on-site operational paths ensured the entire
                event ran with seamless precision.
              </p>
            </div>
          </motion.div>

          {/* 3. Experience Design */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <img
              src="https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Experience Design"
              className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
            />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-[#ffd45e] w-8 h-8" />
                <h3 className="text-3xl font-bold">Experience Design</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                We engineered a full sensory journey — from visual atmosphere to sound-driven hype moments — to make every
                match feel like a premium entertainment experience.
              </p>
            </div>
          </motion.div>

          {/* 4. Media Production */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse"
          >
            <img
              src="https://images.unsplash.com/photo-1649771544464-03bedb456a4f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Media Production"
              className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
            />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Video className="text-[#00c8ff] w-8 h-8" />
                <h3 className="text-3xl font-bold">Media Production</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                From motion graphics to highlight videos and sponsor reels, our team produced high-quality media stitched
                into the event’s visual story.
              </p>
            </div>
          </motion.div>

          {/* 5. Event Day Execution */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <img
              src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2400"
              alt="Event Day Execution"
              className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
            />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Flag className="text-[#ff5964] w-8 h-8" />
                <h3 className="text-3xl font-bold">Event Day Execution</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Live coordination, media deployment, team scheduling, and audience engagement came together to deliver
                a seamless, high-energy matchday experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
