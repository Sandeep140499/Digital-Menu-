import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Heart, MapPin } from "lucide-react";

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
            <filter
              id="sparkle-blur"
              x="0"
              y="0"
              width="18"
              height="18"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="1.5" />
            </filter>
          </defs>
        </svg>
      </motion.div>
    ))}
  </div>
);

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
          <div
            className="absolute inset-0 bg-[#16a34a] bg-opacity-90 backdrop-blur-[6px]"
            style={{
              background: "linear-gradient(120deg, #16a34a 60%, #166534 100%)",
            }}
          />
          <Sparkle />
          <motion.div
            className="relative z-10 text-white text-center space-y-5 w-full px-4 sm:px-6 md:px-10 max-w-xs sm:max-w-md md:max-w-3xl"
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
              <Coffee className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white drop-shadow-lg animate-bounce" />
            </motion.div>
            <motion.h1 className="text-xl sm:text-2xl md:text-3xl font-bold" transition={{ delay: 0.3 }}>
              {greeting}, Welcome to
            </motion.h1>
            <motion.h2 className="text-2xl sm:text-3xl md:text-5xl font-bold" transition={{ delay: 0.5 }}>
              Chapter 1 Cafe
            </motion.h2>
            <motion.p className="text-sm sm:text-base md:text-lg text-white/90" transition={{ delay: 0.7 }}>
              {suggestion}
            </motion.p>
            <motion.div
              className="flex justify-center items-center gap-2 text-xs sm:text-sm md:text-base font-semibold"
              transition={{ delay: 0.8 }}
            >
              Katwaria Sarai, Qutab Institutional Area{" "}
              <Heart className="w-5 h-5 text-green-200 fill-current animate-pulse" />
            </motion.div>

            {/* Partner Logos */}
            <motion.div transition={{ delay: 1 }}>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3">Our Online Partners</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {partnerImages.map((partner, idx) => (
                  <motion.div
                    key={partner.alt}
                    className="relative bg-white/90 rounded-xl px-3 py-2 w-[90px] sm:w-[100px] md:w-[120px] text-center hover:scale-105 transition duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + idx * 0.1 }}
                  >
                    <span className={`absolute left-1 top-1 ${partner.badgeColor} text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full shadow-lg`}>
                      {partner.badge}
                    </span>
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-1 mx-auto rounded shadow"
                      draggable={false}
                    />
                    <span
                      className="text-xs sm:text-sm font-bold"
                      style={{ color: partner.alt === "Zomato" ? "#E23744" : partner.alt === "Swiggy" ? "#FC8019" : "#6C47FF" }}
                    >
                      {partner.alt}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Instagram & Map */}
            <motion.div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4" transition={{ delay: 1.2 }}>
              {/* Instagram */}
              <div className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg px-4 py-3 w-full max-w-xs">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-10 h-10 sm:w-12 sm:h-12 mb-2"
                  draggable={false}
                />
                <span className="text-sm sm:text-base font-bold" style={{ color: "#E1306C" }}>
                  @cafe_chapter_1
                </span>
                <span className="text-xs text-gray-600 text-center mt-1">
                  New items & offers announced first on Instagram!
                  <br />
                  <span className="font-semibold text-green-700">Follow us for more & exciting outlet offers!</span>
                </span>
              </div>
              {/* Map */}
              <div className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg px-4 py-3 w-full max-w-xs">
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-green-700 mb-2" />
                <span className="text-sm sm:text-base font-bold text-green-700">Find our other outlet</span>
                <span className="text-xs text-gray-600 text-center mt-1">
                  135/3, Gautam Nagar, Yusuf Sarai, New Delhi
                </span>
              </div>
            </motion.div>

            {/* Daily Quote */}
            <motion.div className="mt-6 text-xs sm:text-sm md:text-base italic text-white/80" transition={{ delay: 1.4 }}>
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
