import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Heart, MapPin } from "lucide-react";

// Sparkle effect component
const Sparkle = () => (
  <div className="pointer-events-none absolute inset-0 z-0">
    {[...Array(18)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: 2.5 + Math.random() * 1.5,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <g filter="url(#sparkle-blur)">
            <circle cx="9" cy="9" r="2.5" fill="#b9fbc0" fillOpacity="0.8" />
            <circle cx="9" cy="9" r="1.5" fill="#16a34a" fillOpacity="0.7" />
          </g>
          <defs>
            <filter id="sparkle-blur" x="0" y="0" width="18" height="18" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="1.5" />
            </filter>
          </defs>
        </svg>
      </motion.div>
    ))}
  </div>
);

// Daily quotes for variety
const dailyQuotes = [
  "Savor the moment, one sip at a time.",
  "Good food, good mood, great day!",
  "Let your day begin with a perfect brew.",
  "Every meal is a story. Make yours delicious.",
  "A fresh start deserves a fresh cup.",
  "Taste the joy in every bite.",
  "Fuel your dreams with flavor.",
];

function getGreetingAndQuote() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "Welcome";
  let suggestion = "Enjoy your meal!";
  if (hour < 5) {
    greeting = "Good Night";
    suggestion = "Late cravings? We’re here for you!";
  } else if (hour < 12) {
    greeting = "Good Morning";
    suggestion = "Let’s start your day with a fresh breakfast!";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
    suggestion = "How about a tasty lunch or a cool drink?";
  } else if (hour < 21) {
    greeting = "Good Evening";
    suggestion = "Relax and enjoy a delicious dinner!";
  } else {
    greeting = "Good Night";
    suggestion = "End your day with a delightful treat!";
  }
  // Change quote daily
  const quote = dailyQuotes[now.getDay()];
  return { greeting, suggestion, quote };
}

interface WelcomeAnimationProps {
  onComplete: () => void;
}

const partnerImages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    alt: "Zomato",
    badge: "Popular",
    badgeColor: "bg-red-500",
    shadow: "shadow-lg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
    alt: "Swiggy",
    badge: "Trending",
    badgeColor: "bg-orange-500",
    shadow: "shadow-lg",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3vawke4UFzJcg65Wy2KAKTmYwqHlbPf6HA&s",
    alt: "Magicpin",
    badge: "Cashback",
    badgeColor: "bg-purple-600",
    shadow: "shadow-lg",
  },
];

const WelcomeAnimation = ({ onComplete }: WelcomeAnimationProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const { greeting, suggestion, quote } = useMemo(getGreetingAndQuote, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          {/* Blurred green background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-green-600 to-green-900 bg-opacity-80 backdrop-blur-[6px] transition-all duration-700" />
          {/* Sparkle effect */}
          <Sparkle />
          {/* Greeting Card */}
          <motion.div
            className="relative z-10 text-center text-white space-y-5 px-2 sm:px-4 w-full max-w-lg sm:max-w-xl md:max-w-2xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <motion.div
              className="flex justify-center mb-2"
              initial={{ scale: 0.7, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            >
              <Coffee className="w-14 h-14 sm:w-16 sm:h-16 text-white drop-shadow-lg animate-bounce" />
            </motion.div>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {greeting}, Welcome to
            </motion.h1>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Chapter-1
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/90 mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {suggestion}
            </motion.p>
            <motion.div
              className="flex justify-center items-center gap-2 text-base sm:text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Katwaria Sarai{" "}
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-green-200 fill-current animate-pulse" />
            </motion.div>
            {/* Partners Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3">
                Our Online Partners
              </h3>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
                {partnerImages.map((partner, idx) => (
                  <motion.div
                    key={partner.alt}
                    className={`relative flex flex-col items-center bg-white/90 rounded-xl ${partner.shadow} px-3 py-3 sm:px-5 sm:py-4 w-24 sm:w-32 md:w-40 hover:scale-105 hover:shadow-2xl transition-all duration-300 group`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + idx * 0.1 }}
                  >
                    <span className={`block absolute left-1 top-1 ${partner.badgeColor} text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full shadow-lg z-10`}>
                      {partner.badge}
                    </span>
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-1 sm:mb-2 rounded-xl shadow group-hover:scale-110 group-hover:brightness-95 transition"
                      draggable={false}
                    />
                    <span className="text-xs sm:text-base font-bold mt-1" style={{ color: partner.alt === "Zomato" ? "#E23744" : partner.alt === "Swiggy" ? "#FC8019" : "#6C47FF" }}>
                      {partner.alt}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Instagram and Map */}
            <motion.div
              className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {/* Instagram */}
              <div className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg px-4 py-3 w-full max-w-xs mb-4 md:mb-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-10 h-10 sm:w-12 sm:h-12 mb-2"
                  draggable={false}
                />
                <span className="text-sm sm:text-base font-bold" style={{ color: "#E1306C" }}>
                  @cafe_chapter_1
                </span>
                <span className="text-xs text-gray-600 text-center mt-1 max-w-xs">
                  New items &amp; offers announced first on Instagram!
                  <br />
                  <span className="font-semibold text-green-700">
                    Follow us for more &amp; exciting outlet offers!
                  </span>
                </span>
              </div>
              {/* Google Map */}
              <div className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg px-4 py-3 w-full max-w-xs">
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-green-700 mb-2" />
                <span className="text-sm sm:text-base font-bold text-green-700">
                  Find our other outlet
                </span>
                <span className="text-xs text-gray-600 text-center mt-1">
                  135/3, Gautam Nagar, Yusuf Sarai, New Delhi
                </span>
              </div>
            </motion.div>
            {/* Daily Quote */}
            <motion.div
              className="mt-6 text-xs sm:text-base italic text-white/80"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <span>“{quote}”</span>
            </motion.div>
            <div className="mt-2 text-xs text-white/80">
              In collaboration with our trusted delivery partners.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;
