import { useEffect } from "react";
import { motion } from "framer-motion";
import { Coffee, Sparkles, Heart } from "lucide-react";

interface WelcomeAnimationProps {
  onComplete: () => void;
}

const coffeeFloat = {
  animate: {
    y: [0, -20, 0],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  },
};

const heartGlow = {
  animate: {
    scale: [1, 1.3, 1],
    filter: [
      "drop-shadow(0 0 0px #f87171)",
      "drop-shadow(0 0 12px #f87171)",
      "drop-shadow(0 0 0px #f87171)",
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const shimmer = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    },
  },
};

const WelcomeAnimation = ({ onComplete }: WelcomeAnimationProps) => {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 bg-gradient-to-br from-olive-600 via-olive-700 to-olive-800 flex items-center justify-center z-50"
    >
      <motion.div
        className="text-center text-white space-y-8"
        initial={{ scale: 0.95, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Coffee Icon with floating and rotating sparkles */}
        <motion.div
          className="flex justify-center"
          variants={coffeeFloat}
          animate="animate"
        >
          <motion.div className="relative">
            <Coffee className="w-20 h-20 text-white drop-shadow-lg" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-1 -right-1"
            >
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Welcome Text with shimmer */}
        <motion.h1
          className="text-3xl md:text-4xl font-light text-white/90"
          style={{
            background:
              "linear-gradient(90deg, #fff 20%, #eab308 40%, #fff 60%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          variants={shimmer}
          animate="animate"
        >
          Welcome to
        </motion.h1>

        {/* Chapter Title and Subtitle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "backOut" }}
          className="space-y-2"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ letterSpacing: "-0.1em" }}
            animate={{ letterSpacing: "0.05em" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Chapter-1
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl font-light text-white/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Feel the taste
          </motion.p>
        </motion.div>

        {/* Heart with glowing animation */}
        <motion.div
          className="flex justify-center"
          variants={heartGlow}
          animate="animate"
        >
          <Heart className="w-8 h-8 text-red-300 fill-current" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeAnimation;
