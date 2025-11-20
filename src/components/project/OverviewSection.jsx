import { motion } from 'framer-motion'

export default function OverviewFuturistic() {
  return (
    <div className="w-full min-h-screen bg-[#faf7f3] flex flex-col items-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <p className="tracking-[0.2em] text-sm text-gray-500">ABOUT PROJECT</p>
        <h1 className="text-4xl font-light mt-2">OVERVIEW</h1>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-center text-[15px] text-gray-700 leading-relaxed"
      >
        Manish Malhotra, a fashion icon known for his luxurious take on Indian fashion, needed a website revamp. Our goal was to create a user-friendly platform that showcases his designs and educates potential customers, including celebrities and high-net-worth individuals. The new website will reflect his brand identity, focusing on showcasing his collections, user experience, and brand storytelling.
      </motion.p>

      {/* 3 columns */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
        <AnimatedCard title="Brief">
          <p>
            Manish Malhotra is a powerhouse in the Indian fashion scene. For over 30 years, he's been a couturier, costume designer, entrepreneur, and even a film revivalist.
          </p>
        </AnimatedCard>

        <AnimatedCard title="Problems to Solve">
          <ul className="list-disc ml-5 space-y-2">
            <li>Develop a user-friendly interface guiding visitors through customization.</li>
            <li>Ensure responsive design across devices.</li>
            <li>Emphasize sustainability & modularity while keeping a modern style.</li>
          </ul>
        </AnimatedCard>

        <AnimatedCard title="Service">
          <div className="flex flex-wrap gap-3 mt-3">
            {['UI UX Design', 'Product Customisation', 'Design System'].map(item => (
              <span key={item} className="px-4 py-1 border border-black/20 rounded-full text-sm hover:bg-black hover:text-white transition-all cursor-pointer">
                {item}
              </span>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </div>
  )
}

function AnimatedCard({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white/60 backdrop-blur-lg border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
    >
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      <div className="text-[15px] text-gray-700 leading-relaxed">{children}</div>
    </motion.div>
  )
}
