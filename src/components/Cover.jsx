import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Cover({ onOpen }) {
  return (
    <div className="h-screen flex items-center justify-center relative px-4 bg-black text-white overflow-hidden">

      {/* 🌸 Soft background glow (mobile friendly) */}
      <div className="absolute w-[220px] h-[220px] bg-pink-500/20 blur-[80px] rounded-full"></div>

      {/* 💖 Center Card */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-lg bg-white/10 border border-white/20 
                   rounded-2xl px-6 py-6 w-full max-w-sm 
                   shadow-xl text-center z-10"
      >
        {/* 👋 Title */}
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3 leading-snug">
          Hey Special One 💖
        </h1>

        {/* ✨ Subtitle */}
        <p className="text-white/70 mb-6 text-sm leading-relaxed">
          I made something just for you…  
          hope it makes you smile 😊
        </p>

        {/* 🎁 Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={onOpen}
          className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 
                     rounded-xl shadow-md active:scale-95 
                     flex items-center justify-center gap-2"
        >
          Open Card <FaHeart />
        </motion.button>
        <p className="text-white/70 mt-2 text-sm leading-relaxed">You only live once, and you can view only once (<span className="text-bold text-white">REMEMBER</span>)</p>
      </motion.div>

    </div>
  );
}