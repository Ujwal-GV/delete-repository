import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Message({ next }) {
  const text = `It has always been such a beautiful feeling spending time with you. 
Every moment we've shared, even the small ones, means a lot to me.

Whenever I got to spend some quality time with you in the last year, it just felt right — calm, happy, and special in its own way.

I truly hope you keep smiling no matter what life throws at you, because your smile has a way of making everything better.

You deserve happiness, peace, success, and all the good things life has to offer.

And no matter where life takes us, I’ll always cherish these moments with you 💖

Happy Birthday again Girl!! 🎂✨`;

  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 30); // slightly faster for mobile

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-black px-6">

      {/* 💌 Typing text */}
      <p className="text-lg md:text-xl text-center leading-relaxed whitespace-pre-line">
        {display}
      </p>

      {/* 🎂 Final heading appears AFTER typing */}
      {done && (
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-3xl md:text-5xl font-bold mt-6 text-center"
        >
         Enjoy Your Day,
         ALVIDA
        </motion.h1>
      )}
    </div>
  );
}