import { motion } from "framer-motion";

export default function PainPointsUI() {
  const cards = [1, 2, 3, 4]; // placeholder for 4 slides

  return (
    <div className="w-full min-h-screen bg-[#f7f7f5] text-black p-10 flex flex-col gap-10 overflow-hidden">
      <div className="flex flex-col gap-2">
        <h2 className="text-sm tracking-widest text-gray-600">USER JOURNEYS</h2>
        <h1 className="text-4xl font-semibold">PAIN POINTS & HYPOTHESIS</h1>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10"
          animate={{ x: [0, -1600] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {cards.map((c) => (
            <div
              key={c}
              className="w-[500px] h-[300px] bg-[#0c0c0c] rounded-2xl shadow-xl flex items-center justify-center text-white text-xl"
            >
              Card {c}
            </div>
          ))}
        </motion.div>
      </div>

      <p className="max-w-[500px] text-gray-700 leading-relaxed">
        Through this extensive user research we were able to identify the real
        pain points of the users and solve them providing a better user
        experience.
      </p>
    </div>
  );
}
