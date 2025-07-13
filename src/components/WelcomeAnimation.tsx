import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Heart, MapPin } from "lucide-react";

// Sparkle effect
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
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
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

// Quotes
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
    shadow: "shadow-md",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
    alt: "Swiggy",
    badge: "Trending",
    badgeColor: "bg-orange-500",
    shadow: "shadow-md",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3vawke4UFzJcg65Wy2KAKTmYwqHlbPf6HA&s",
    alt: "Magicpin",
    badge: "Cashback",
    badgeColor: "bg-purple-600",
    shadow: "shadow-md",
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
          className="fixed inset-0 z-[100] flex items-center justify-center px-2 py-6 sm:py-8 overflow-y-auto"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          {/* Green Gradient BG */}
          <div className="absolute inset-0 bg-[#16a34a] bg-opacity-90 backdrop-blur-md" style={{
            background: "linear-gradient(120deg, #16a34a 60%, #166534 100%)",
          }} />
          <Sparkle />
          <motion.div
            className="relative z-10 text-center text-white space-y-4 w-full max-w-2xl px-3"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            {/* Icon */}
            <motion.div
              className="flex justify-center mb-2"
              initial={{ scale: 0.7, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            >
              <Coffee className="w-12 h-12 sm:w-14 sm:h-14 animate-bounce drop-shadow" />
            </motion.div>

            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {greeting}, Welcome to
            </motion.h1>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Chapter 1 Cafe
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {suggestion}
            </motion.p>

            <motion.div
              className="flex justify-center items-center gap-2 text-sm sm:text-base font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Katwaria Sarai, Qutab Institutional Area
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-green-200 animate-pulse" />
            </motion.div>

            {/* Online Partners Horizontal Scroll */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-4"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                Our Online Partners
              </h3>
              <div className="flex justify-center gap-4 overflow-x-auto px-1 pb-2">

                {partnerImages.map((partner, idx) => (
                  <motion.div
                    key={partner.alt}
                    className={`relative bg-white/90 rounded-xl ${partner.shadow} px-3 py-2 flex flex-col items-center min-w-[80px] sm:min-w-[100px] group`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                  >
                    <span className={`absolute left-1 top-1 text-[10px] sm:text-xs text-white px-2 py-0.5 rounded-full shadow ${partner.badgeColor}`}>
                      {partner.badge}
                    </span>
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-md mb-1 group-hover:scale-110 transition"
                      draggable={false}
                    />
                    <span className="text-xs sm:text-sm font-bold" style={{
                      color: partner.alt === "Zomato"
                        ? "#E23744"
                        : partner.alt === "Swiggy"
                          ? "#FC8019"
                          : "#6C47FF"
                    }}>
                      {partner.alt}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Instagram & Map */}
            <motion.div
              className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="bg-white/90 rounded-2xl px-4 py-3 shadow w-full max-w-xs text-sm text-gray-800">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-10 h-10 mx-auto mb-2"
                />
                <div className="font-bold text-center text-[#E1306C]">@cafe_chapter_1</div>
                <p className="text-xs mt-1 text-center">
                  New items & offers announced first on Instagram!
                  <br />
                  <span className="font-semibold text-green-700">Follow us for more!</span>
                </p>
              </div>
              <div className="bg-white/90 rounded-2xl px-4 py-3 shadow w-full max-w-xs text-sm text-gray-800">
                <MapPin className="w-6 h-6 mx-auto text-green-700 mb-1" />
                <div className="font-bold text-center text-green-700">Find our other outlet</div>
                <p className="text-xs mt-1 text-center">
                  135/3, Gautam Nagar, Yusuf Sarai, New Delhi
                </p>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              className="mt-4 text-xs sm:text-sm italic text-white/80"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              “{quote}”
            </motion.div>

            <div className="text-xs text-white/80">
              In collaboration with our trusted delivery partners.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;
