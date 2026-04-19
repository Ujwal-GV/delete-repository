import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";
import heroineImg from "../assets/25.png";

export default function Surprise({ next }) {
  const [revealed, setRevealed] = useState(false);

  const fireworkBurst = () => {
    const duration = 1500;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 30,
        startVelocity: 40,
        spread: 360,
        ticks: 60,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.6,
        },
      });
    }, 200);
  };

  const handleReveal = () => {
    setRevealed(true);
    fireworkBurst(); // 💥 trigger fireworks
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white px-4 overflow-hidden">

      {/* 🎁 Tap to reveal */}
      {!revealed && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <button
            onClick={handleReveal}
            className="px-6 py-3 bg-pink-500 rounded-xl active:scale-95"
          >
            Tap for a surprise 🎁
          </button>
        </motion.div>
      )}

      {/* 💥 Reveal content */}
      {revealed && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >

          {/* ✨ Flash glow */}
          <motion.div
            className="absolute w-[250px] h-[250px] bg-pink-500/30 blur-[80px] rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 0.5 }}
          />

          {/* 🖼️ Image */}
          <motion.img
            src={heroineImg}
            alt="surprise"
            className="w-[250px] md:w-[350px] rounded-xl z-10 shadow-2xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          />

          {/* 🎉 Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl mt-6 text-center"
          >
            🎉 Happy Birthday 🎉
          </motion.h1>
          <p>I know know, that was funny  haahaahaahaa</p>

          {/* 👉 Button */}
          <button
            onClick={next}
            className="mt-6 px-6 py-3 bg-pink-500 rounded-xl active:scale-95"
          >
            Check out for yourself →
          </button>
        </motion.div>
      )}
    </div>
  );
}