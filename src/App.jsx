import { useEffect, useState } from "react";
import Cover from "./components/Cover";
import Surprise from "./components/Surprise";
import Gallery from "./components/Gallery";
import Message from "./components/Message";
import FloatingPhotos from "./components/FloatingImages";
import { motion } from "framer-motion";


export default function App() {
  const [step, setStep] = useState(0);
  const [allowed, setAllowed] = useState(true);

  useEffect(() => {
    const viewed = localStorage.getItem("birthday_viewed");

    if (viewed) {
      setAllowed(false);
    } else {
      localStorage.setItem("birthday_viewed", "true");
      emailjs.send(
      "service_j7oz72p",
      "template_fg7ufxa",
      {
        time: new Date().toLocaleString(),
        device: navigator.userAgent,
      },
      "SjQOHdH8uVkOqmWoN"
    );
    }
  }, []);

  if (!allowed) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen flex items-center justify-center bg-black text-white text-center px-6"
    >
      <div className="max-w-md">
        <h1 className="text-2xl mb-4">💖</h1>
        <p>
          Some surprises are meant to be felt only once...  
          <br /><br />
          and remembered forever ✨
        </p>
        <br /><br />
        <p>And yes I won't be available for few weeks, and I won't be available for calls too, msg maadiru</p>
      </div>
    </motion.div>
  );
}

  const renderStep = () => {
    switch (step) {
      case 0: return <Cover onOpen={() => setStep(1)} />;
      case 1: return <Surprise next={() => setStep(2)} />;
      case 2: return <Gallery next={() => setStep(3)} />;
      default: return <Message />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      <FloatingPhotos />

      <div className="relative z-10">
        {renderStep()}
      </div>

    </div>
  );
}