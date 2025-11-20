import { motion } from 'framer-motion'

export default function ProcessFlipCards() {
    const steps = [
        {
            title: "STRATEGY",
            subtitle: "Strategy",
            text: "Goals and approach + Roadmap + Opportunities",
            img: "/Strategi.png",
        },
        {
            title: "RESEARCH",
            subtitle: "Research and Understanding",
            text: "Pain Points + Insights + User Personas + Competitor Analysis + User Journey",
            img: "/research.png",
        },
        {
            title: "IDEATE",
            subtitle: "Solution + Ideation",
            text: "Architecture + User Flows + Sketches + Wireframes + Brand Tone + Functionalities + Mood Board",
            img: "/ideate.png",
        },
        {
            title: "DESIGN",
            subtitle: "Prototype",
            text: "High Fidelity + Design System + Brand Identity + Visualization + Clickable Prototypes + Customisation Module",
            img: "/design.png",
        },
        {
            title: "TEST",
            subtitle: "Validation",
            text: "User Testing + Feedbacks + Quick Iteration",
            img: "/test.png",
        },
    ]

    return (
        <div className="relative w-full min-h-screen bg-[#faf7f3] py-24 px-6 flex flex-col items-center overflow-hidden">

            {/* Creative animated background */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-10 left-10 w-[300px] h-[300px] bg-gradient-to-br from-pink-200 to-orange-200 rounded-full blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.5, scale: 1.1 }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl"
                />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-light mb-12 w-full max-w-6xl relative z-10"
            >
                THE PROCESS
            </motion.h2>

       
                <div className="flex items-center justify-end w-full max-w-6xl mb-10 relative z-10">
                    <div className="px-6 py-2 border border-black/20 rounded-full text-sm bg-white/60 backdrop-blur-lg shadow-sm">
                        project timeline - <span className="font-semibold">16 weeks</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 w-full max-w-6xl relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <FlipCard {...step} />
                        </motion.div>
                    ))}
                </div>
          
        </div>
    )
}

function FlipCard({ title, subtitle, text, img }) {
    return (
        <div className="w-full h-[300px] perspective">
            <div className="relative w-full h-full duration-700 transform-style-preserve-3d hover:rotate-y-180 cursor-pointer">

                {/* FRONT */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-200 backface-hidden shadow-xl">
                    <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover scale-105 opacity-90 transition-all"
                    />
                </div>

                {/* BACK */}
                <div className="absolute inset-0 bg-white rounded-2xl border border-black/10 p-6 backface-hidden rotate-y-180 flex flex-col justify-between shadow-xl">
                    <div>
                        <p className="text-sm text-gray-500">{subtitle}</p>
                        <h3 className="text-xl font-medium mt-1">{title}</h3>
                    </div>
                    <p className="text-sm text-gray-700 mt-4 leading-relaxed">{text}</p>
                </div>
            </div>
        </div>
    )
}
