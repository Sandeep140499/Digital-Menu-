import { useEffect } from "react";
import { motion } from "framer-motion";
import { Coffee, Heart, MapPin } from "lucide-react";

interface WelcomeAnimationProps {
  onComplete: () => void;
}

const WelcomeAnimation = ({ onComplete }: WelcomeAnimationProps) => {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 4200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-olive-700 via-olive-800 to-olive-900 flex items-center justify-center z-50">
      <div className="text-center text-white space-y-6 px-4">
        <div className="flex justify-center mb-2">
          <Coffee className="w-16 h-16 text-white drop-shadow-lg" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Welcome to
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-1">
          Chapter-1
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-2">
          Feel the taste
        </p>
        <div className="flex justify-center items-center gap-2 text-lg font-semibold mb-4">
          Katwaria Sarai{" "}
          <Heart className="w-6 h-6 text-red-300 fill-current" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
            Order Online from our Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.zomato.com/ncr/chapter-1-cafe-katwaria-sarai-new-delhi/order"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              aria-label="Order from Zomato"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
                alt="Zomato"
                className="w-14 h-14 object-contain mb-1"
              />
              <span
                className="text-base font-bold"
                style={{ color: "#E23744" }}
              >
                Zomato
              </span>
            </a>
            <a
              href="https://www.swiggy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              aria-label="Order from Swiggy"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
                alt="Swiggy"
                className="w-14 h-14 object-contain mb-1"
              />
              <span
                className="text-base font-bold"
                style={{ color: "#FC8019" }}
              >
                Swiggy
              </span>
            </a>
            <a
              href="https://magicpin.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              aria-label="Order from Magicpin"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3vawke4UFzJcg65Wy2KAKTmYwqHlbPf6HA&s"
                alt="Magicpin"
                className="w-14 h-14 object-contain mb-1"
              />
              <span
                className="text-base font-bold"
                style={{ color: "#6C47FF" }}
              >
                Magicpin
              </span>
            </a>
            <a
              href="https://www.instagram.com/cafe_chapter_1?igsh=bjVsemUzZWkybzRz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              aria-label="Visit our Instagram"
            >
              <svg
                xmlns="data:image/png;base64,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"
                viewBox="0 0 448 512"
                className="w-14 h-14 mb-1"
              >
                <defs>
                  <linearGradient id="ig-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fd5" />
                    <stop offset="50%" stopColor="#ff543e" />
                    <stop offset="100%" stopColor="#c837ab" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#ig-gradient)"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9S388.6 1.7 353.3 0C317.7-1.7 130.3-1.7 94.7 0 59.4 1.7 28 9.9 1.7 36.2S1.7 123.4 0 158.7c-1.7 35.3-1.7 222.7 0 258.3 1.7 35.3 9.9 66.7 36.2 92.9s57.6 34.5 92.9 36.2c35.6 1.7 223 1.7 258.6 0 35.3-1.7 66.7-9.9 92.9-36.2s34.5-57.6 36.2-92.9c1.7-35.6 1.7-223 0-258.6zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.7 102.9-9 132.3z"
                />
              </svg>
              <span
                className="text-base font-bold"
                style={{ color: "#E1306C" }}
              >
                Instagram
              </span>
            </a>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <span className="text-sm text-white/80 mb-2">
            Know about our other outlet:
          </span>
          <button
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=135/3,+Gautam+Nagar,+Yusuf+Sarai,+New+Delhi,+Delhi+110049",
                "_blank"
              )
            }
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-olive-500 to-olive-700 text-white font-semibold shadow hover:scale-105 transition-transform duration-200"
            aria-label="Show more about this cafe"
          >
            <MapPin className="w-5 h-5" />
            Show more about this cafe
          </button>
        </div>
        <div className="mt-2 text-xs text-white/80">
          In collaboration with our trusted delivery partners.
        </div>
      </div>
    </div>
  );
};

export default WelcomeAnimation;
