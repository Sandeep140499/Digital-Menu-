import { useEffect } from "react";
import { motion } from "framer-motion";
import { Coffee, Heart, MapPin } from "lucide-react";

interface WelcomeAnimationProps {
  onComplete: () => void;
}

const WelcomeAnimation = ({ onComplete }: WelcomeAnimationProps) => {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 2200);
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
                src="https://assets.magicpin.com/uber/images/magicpin-logo.svg"
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
                xmlns="http://www.w3.org/2000/svg"
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
