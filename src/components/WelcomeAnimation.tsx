
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Sparkles, Heart } from "lucide-react";

interface WelcomeAnimationProps {
  onComplete: () => void;
}

const WelcomeAnimation = ({ onComplete }: WelcomeAnimationProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(1), 800);
    const timer2 = setTimeout(() => setCurrentStep(2), 1600);
    const timer3 = setTimeout(() => setCurrentStep(3), 2200);
    const timer4 = setTimeout(() => onComplete(), 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 bg-gradient-to-br from-olive-600 via-olive-700 to-olive-800 flex items-center justify-center z-50"
    >
      <div className="text-center text-white space-y-6">
        <AnimatePresence mode="wait">
          {currentStep >= 0 && (
            <motion.div
              key="welcome"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div className="relative">
                <Coffee className="w-20 h-20 text-white" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1"
                >
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {currentStep >= 1 && (
            <motion.h1
              key="title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-light text-white/90"
            >
              Welcome to
            </motion.h1>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {currentStep >= 2 && (
            <motion.div
              key="chapter"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-2"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Chapter-1
              </h2>
              <p className="text-lg md:text-xl font-light text-white/80">
                Feel the taste
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {currentStep >= 3 && (
            <motion.div
              key="heart"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex justify-center"
            >
              <Heart className="w-8 h-8 text-red-300 fill-current" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default WelcomeAnimation;
