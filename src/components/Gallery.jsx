import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = import.meta.glob("../assets1/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

const basePhotos = Object.values(images);

function getRandomPhotos(arr, count = 20) {
  return Array.from({ length: count }, () => {
    return arr[Math.floor(Math.random() * arr.length)];
  });
}

export default function Gallery({ next }) {
  const [feed, setFeed] = useState(() => getRandomPhotos(basePhotos, 40));
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      if (!el) return;

      const nearBottom =
        el.scrollTop + el.clientHeight >= el.scrollHeight - 200;

      if (nearBottom) {
        setFeed((prev) => [...prev, ...getRandomPhotos(basePhotos, 30)]);
      }
    };

    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll);

    return () => el && el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen text-white flex flex-col items-center bg-white px-4">

      <h2 className="text-3xl mt-6 mb-4 text-black text-bold">Your Gallery</h2>
      <p className="text-black/70 mb-6 text-sm leading-relaxed">Scroll as much as you want cause it's never ending!!</p>

      <div
        ref={scrollRef}
        className="flex-1 w-full overflow-y-auto pb-20"
      >
        <div className="columns-2 md:columns-4 gap-4 space-y-4">

          {feed.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid"
            >
              <div className="bg-black/40 p-2 rounded-xl shadow-lg">
                <img
                  src={img}
                  loading="lazy"
                  className="w-full h-auto rounded-lg 
                             hover:scale-105 transition duration-300"
                />
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      <button
        onClick={next}
        className="fixed bottom-6 px-6 py-3 bg-pink-500 rounded-xl shadow-lg"
      >
        Still, you here? Great!! →
      </button>
    </div>
  );
}