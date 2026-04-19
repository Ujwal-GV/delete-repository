import { motion } from "framer-motion";

// 👉 import images properly (recommended in Vite)
import img1 from "../assets/3.jpeg";
import img2 from "../assets/4.jpeg";
import img3 from "../assets/5.jpeg";
import img4 from "../assets/6.jpeg";
import img5 from "../assets/7.jpeg";
import img6 from "../assets/8.jpeg";
import img7 from "../assets/9.jpeg";
import img8 from "../assets/10.jpeg";
import img9 from "../assets/11.jpeg";
import img10 from "../assets/12.jpeg";
import img11 from "../assets/13.jpeg";
import img12 from "../assets/14.jpeg";
import img13 from "../assets/15.jpeg";
import img14 from "../assets/16.jpeg";
import img15 from "../assets/17.jpeg";
import img16 from "../assets/18.jpeg";
import img17 from "../assets/19.jpeg";
import img18 from "../assets/20.jpeg";
import img19 from "../assets/21.jpeg";
import img20 from "../assets/22.jpeg";
import img21 from "../assets/23.jpeg";
import img22 from "../assets/24.jpeg";

const baseImages = [img7, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22];

const images = Array.from({ length: 20 }, (_, i) => baseImages[i % baseImages.length]);

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingPhotos() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {images.map((img, i) => {
        const size = getRandom(80, 140);

        return (
          <motion.img
            key={i}
            src={img}
            className="absolute rounded-full shadow-lg opacity-60"
            style={{
              width: size,
              height: size,
              top: `${getRandom(0, 100)}%`,
              left: `${getRandom(0, 100)}%`,
            }}
            animate={{
              x: [0, getRandom(-400, 400)],
              y: [0, getRandom(-400, 400)],
              rotate: [0, getRandom(-45, 45)],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: getRandom(8, 14),
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}