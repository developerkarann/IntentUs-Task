import { motion } from "framer-motion";

export default function OverviewFuturistic() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 relative overflow-hidden">

      {/* Stadium Lights Background */}
      <div className="absolute inset-0 opacity-50">
        <img
          src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2400"
          className="w-full h-full object-cover"
          alt="stadium background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="tracking-[0.25em] text-sm text-gray-400">
            EVENT OVERVIEW
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-3">
            A Vision Engineered for the Game
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed"
        >
          A next-generation football event built for high-energy fan engagement, 
          seamless logistics, and immersive brand storytelling. Our objective: 
          architect an experience that elevates both the game and the crowd.
        </motion.p>

        {/* 🔥 Visual Image-Driven Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">

          {/* IMAGE 1 – Challenge / Brief */}
          <OverviewImageBlock
            title="The Brief"
            img="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=2400"
            text="Build an unforgettable football event where atmosphere, crowd energy, and team identity merge into one powerful experience."
          />

          {/* IMAGE 2 – Problems */}
          <OverviewImageBlock
            title="Problems to Solve"
            img="https://images.unsplash.com/photo-1518091901663-9168d9bdc5df?q=80&w=2400"
            text="Crowd management, real-time scheduling, brand integration, and creating a visual language that boosts audience excitement."
          />

          {/* IMAGE 3 – Services */}
          <OverviewImageBlock
            title="Services Delivered"
            img="https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=2400"
            text="Event Strategy, Match-day Experience Design, Visual Branding, Operations, and On-field Activation Management."
          />

        </div>
      </div>
    </section>
  );
}

/* 🔥 Reusable Image Block Component */
function OverviewImageBlock({ title, img, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[420px] group overflow-hidden rounded-3xl shadow-xl"
    >
      {/* Background Image */}
      <img
        src={img}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>

      {/* Text Content */}
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed max-w-[90%]">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
