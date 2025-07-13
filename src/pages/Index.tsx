import { useState, useEffect } from "react";
import { QrCode, Coffee, Utensils, Cookie, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AnimatePresence } from "framer-motion";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import WelcomeAnimation from "@/components/WelcomeAnimation";
import LocationMap from "@/components/LocationMap";

const Index = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Check if user came from QR scan
  useEffect(() => {
    setShowWelcome(true);
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setShowMenu(true);
    localStorage.setItem("hasSeenWelcome", "true");
  };

  const menuData = {
    "cold-coffee": {
      title: "Cold Coffee",
      icon: <Coffee className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=250&fit=crop",
      items: [
        { name: "Cold Coffee", price: "₹70" },
        { name: "Mocha Iced", price: "₹90" },
        { name: "Hazelnut Cold Coffee", price: "₹129" }
        
      ]
    },
    "milkshake": {
      title: "Milkshake",
      icon: <Cookie className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=250&fit=crop",
      items: [
        { name: "Strawberry", price: "₹99" },
        { name: "Vanilla", price: "₹99" },
        { name: "Butterscotch", price: "₹99" },
        { name: "Oreo Shake", price: "₹99" },
        { name: "Cold Chocolate Shake", price: "₹129" },
        { name: "Kitkat Shake", price: "₹139" },
      ]
    },
    "mocktails": {
      title: "Mocktails",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=250&fit=crop",
      items: [
        { name: "Virgin Mint Mojito", price: "99"},
        { name: "Green Apple Refresher", price: "99"},
        { name: "Watermelon Refresher", price: "99"},
        { name: "Virgin Strawberry", price: "99"},
        { name: "Passion Fruit", price: "99"},
      ]
    },
    "chai": {
      title: "Chai",
      icon: <Coffee className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=250&fit=crop",
      items: [
        { name: "Adrak Tea", price: "₹15" },
        { name: "Kulhad Chai", price: "₹30" },
        { name: "Lemon Tea", price: "₹35" }
      ]
    },
    "ice-tea": {
      title: "Ice-Tea",
      icon: <Coffee className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=250&fit=crop",
      items: [
        { name: "Lemon Ice Tea", price: "₹89" },
        { name: "Peach Passion", price: "₹109" },
        { name: "Watermelon", price: "109"},
        { name: "Blueberry", price: "109"},
      ]
    },
    "hot-coffee": {
      title: "Hot Coffee",
      icon: <Coffee className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=250&fit=crop",
      items: [
        { name: "Black Coffee (200ml)", price: "₹29" },
        { name: "Normal Hot Coffee (Small)", price: "₹29" },
        { name: "Normal Hot Coffee (Medium)", price: "₹39" },
        { name: "Cappuccino", price: "₹95" },
        { name: "Hazelnut Hot", price: "₹99" },
        { name: "Hot Chocolate", price: "₹149" },
      ]
    },
    "momos-steam": {
      title: "Momos - Steam",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://img.clevup.in/360704/vegSteammomos-1717590621198.jpeg?width=600&format=webp",
      items: [
        { name: "Veg Steam Momos", price: "₹39 (5pec) / 69 (10pec)" },
        { name: "Paneer Steam Momos", price: "49 (5pec) / 79 (10pec)" },
        { name: "Chicken Steam Momos", price: "49 (5pec) / 79 (10pec)" }
      ]
    },
    "momos-fried": {
      title: "Momos - Fried",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://cdn.dotpe.in/longtail/store-items/8635073/KAqPycAS.webp",
      items: [
        { name: "Veg Fried Momos", price: "₹49 (5pec) / 89 (10pec)" },
        { name: "Paneer Fried Momos", price: "59 (5pec) / 99 (10pec)" },
        { name: "Chicken Fried Momos", price: "59 (5pec) / 99 (10pec)" }
      ]
    },
    "momos-kurkure": {
      title: "Momos - Kurkure",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://c.ndtvimg.com/2022-10/57qe3h68_kurkure-momo_625x300_28_October_22.png?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886",
      items: [
        { name: "Veg Kurkure", price: "₹59 (pec) / 99 (10pec)" },
        { name: "Paneer Kurkure", price: "69 (5pec) / 109 (10pec)" },
        { name: "Chicken Kurkure", price: "69 (5pec) / 109 (10pec)" }
      ]
    },
    "pasta": {
      title: "Pasta",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png",
      items: [
        { name: "White Sauce Pasta", price: "₹159" },
        { name: "Red Sauce Pasta", price: "₹159" },
        { name: "Mix Sauce Pasta", price: "₹169" },
        { name: "Smoked Chicken Pasta", price: "₹199" }
      ]
    },
    "sandwich": {
      title: "Sandwich",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://www.cookclickndevour.com/wp-content/uploads/2018/08/cheese-toast-sandwich-recipe-1.jpg",
      items: [
        { name: "Aloo", price: "₹49" },
        { name: "Veg Sandwich", price: "₹79" },
        { name: "Veg Grilled Sandwich", price: "₹89" },
        { name: "Cheese Corn Sandwich", price: "₹99" },
        { name: "Paneer Sandwich", price: "₹139" },
        { name: "Chicken Sandwich", price: "₹139" }
      ]
    },
    "pizza": {
      title: "Pizza (6\" / 9\")",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop",
      items: [
        { name: "Margaritta", price: "₹89 / 159" },
        { name: "Corn Pizza", price: "₹99 / 179" },
        { name: "Onion Pizza", price: "₹109 / 179" },
        { name: "Farmhouse", price: "₹119 / 189" },
        { name: "Paneer Tikka", price: "₹119 / 199" },
        { name: "Chicken Tikka", price: "₹119 / 199" },
        { name: "Smoked Chicken", price: "₹119 / 199" }
      ]
    },
    "maggi": {
      title: "Maggi",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=250&fit=crop",
      items: [
        { name: "Extra Masala Add-On", price: "₹10" },
        { name: "Classic Maggi", price: "₹49" },
        { name: "Vegetable Maggi", price: "₹69" },
        { name: "Chilli Garlic Maggi", price: "₹89" },
        { name: "Egg Maggi", price: "₹99" },
        { name: "Veg Cheese Maggi", price: "₹99" }
      ]
    },

    "sweetcorn": {
      title: "Sweetcorn",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://rakskitchen.net/wp-content/uploads/2022/01/crispy-corn-recipe.jpg",
      items: [
        { name: "Steamed Salted Sweetcorn (S/M)", price: "₹39 / 59" },
        { name: "Peri-Peri Sweetcorn (S/M)", price: "₹59 / 89" },
        { name: "Cheesy Sweetcorn (S/M)", price: "₹79 / 99" }
      ]
    },
    "fries": {
      title: "Fries",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=250&fit=crop",
      items: [
        { name: "Salted Fries", price: "₹69" },
        { name: "Peri-Peri Fries", price: "₹79" },
        { name: "Cheesy Fries (Salted/Peri-Peri)", price: "₹119" }
      ]
    },
    "garlic-bread": {
      title: "Garlic Bread",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5dLVCgT8j8evpL38IluG6wt4GJzXjDLzUA&s",
      items: [
        { name: "Cheese Garlic Bread", price: "₹99" }
      ]
    },
    "burger": {
      title: "Burger",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=250&fit=crop",
      items: [
        { name: "Extra Cheese per slice", price: "₹29" },
        { name: "Extra Patty", price: "₹30" },
        { name: "Aloo Tikki Burger", price: "₹49" },
        { name: "Veg Burger", price: "₹79" },
        { name: "Double Cheese Burger", price: "₹119" },
        { name: "Crunchy Burger", price: "₹99" },
        { name: "Chicken Burger", price: "₹109" },
        { name: "Chicken cheese Burger", price: "₹149" },
        { name: "Crunchy Chicken", price: "₹139" },
      ]
    }
  };

  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <WelcomeAnimation onComplete={handleWelcomeComplete} />
        )}
      </AnimatePresence>

      {showMenu && (
        <div className="min-h-screen bg-gradient-to-br from-olive-100 via-olive-200 to-olive-300">


          {/* Professional Header with subtle animations */}
          <div
  className="relative overflow-hidden text-white py-16 px-4"
  style={{
    background: "linear-gradient(90deg, #16a34a 0%, #166534 100%)"
  }}
>
  <div className="absolute inset-0 bg-black opacity-10"></div>
  <div className="relative z-10 text-center max-w-4xl mx-auto">
    <div className="animate-fade-in">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
        Chapter 1 Cafe
      </h1>
      <p className="text-xl md:text-2xl font-light mb-8 text-white/90">
        Feel the taste
      </p>
    </div>

    {/* Contact Info and Actions */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
      <button
        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full focus:outline-none hover:bg-white/20 transition"
        onClick={() => window.open("tel:+918447412646")}
        aria-label="Call Chapter 1 Cafe"
        type="button"
      >
        <Phone className="w-4 h-4" />
        <span className="text-sm font-medium">+91 8447412646</span>
      </button>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-white text-olive-600 hover:bg-olive-50 font-semibold px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            <QrCode className="w-4 h-4 mr-2" />
            QR Code
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <QRCodeGenerator />
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-white/20 border border-white/30 text-white hover:bg-white/30 font-semibold px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            <MapPin className="w-4 h-4 mr-2" />
            Location
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Chapter 1 Cafe Location</DialogTitle>
          </DialogHeader>
          <LocationMap />
        </DialogContent>
      </Dialog>
    </div>

    {/* New Launched Items Banner - Now inside header and more attractive */}
    <div className="flex justify-center mt-4">
      <Dialog>
        <DialogTrigger asChild>
          <button
            className="flex flex-col items-center gap-2 px-8 py-5 rounded-2xl bg-gradient-to-r from-green-500 via-yellow-400 to-orange-400 shadow-xl hover:scale-105 transition-transform duration-300 border-4 border-white/60"
            aria-label="See new launched items"
          >
            <span className="text-3xl animate-bounce">✨</span>
            <span className="text-xl font-bold text-white drop-shadow-lg tracking-wide">
              🎉 Just Launched!
            </span>
            <span className="text-sm text-white/90 font-medium">
              Explore our latest chef specials &amp; seasonal treats.
            </span>
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full font-semibold tracking-wide mt-2 animate-shimmer text-white">
              Tap to see what's new!
            </span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-md backdrop-blur-lg bg-white/90 rounded-2xl shadow-2xl">
          <div className="flex flex-col items-center justify-center py-8">
            <div className="animate-bounce mb-4">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=200&fit=crop"
                alt="New Launch"
                className="w-40 h-24 object-cover rounded-xl shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-olive-700 mb-2 flex items-center gap-2">
              <span role="img" aria-label="megaphone">📢</span>
              Introducing Our Latest Creations!
            </h3>
            <p className="text-gray-700 text-center mb-4">
              We regularly launch new items to delight your taste buds.<br />
              These are chef's specials, seasonal treats, or customer favorites—brought to you first!
            </p>
            <ul className="text-left text-olive-700 font-semibold mb-4 space-y-1">
              <li>• Unique flavors &amp; recipes</li>
              <li>• Limited-time offers</li>
              <li>• Special combos &amp; festive treats</li>
            </ul>
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full font-bold shadow animate-pulse">
              Try them before anyone else!
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  </div>

  {/* Subtle background elements */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full"></div>
    <div className="absolute top-20 right-20 w-16 h-16 bg-white/5 rounded-full"></div>
    <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/5 rounded-full"></div>
    <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-white/5 rounded-full"></div>
    <div className="absolute bottom-20 right-10 w-14 h-14 bg-white/5 rounded-full"></div>
  </div>
</div>

          {/* Menu Content with professional cards and images */}
          <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(menuData).map(([key, section]) => (
              <div
                key={key}
                className="bg-white/95 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="relative w-full aspect-[16/7] overflow-hidden">
                  <img
                    src={
                      key === "sweetcorn"
                        ? "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=900&h=400&fit=crop"
                        : section.image
                    }
                    alt={section.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/80 rounded-full p-2 shadow">
                    {section.icon}
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-olive-700 mb-3 flex items-center gap-2">
                    {section.title}
                  </h2>
                  <ul className="space-y-2 flex-1">
                    {section.items.map((item, idx) => {
                      // Highlight "Extra", "Add-On", "Add On", "Addon" in item names
                      const parts = item.name.split(/(Extra|Add[- ]?On|Addon)/i);
                      return (
                        <li
                          key={idx}
                          className={`flex justify-between items-center rounded-lg px-4 py-2 transition
                            ${
                              /extra|add[- ]?on|addon/i.test(item.name)
                                ? "bg-yellow-50 border-l-4 border-yellow-400 font-semibold text-yellow-900"
                                : "bg-olive-50 hover:bg-olive-100"
                            }`}
                        >
                          <span className="text-gray-800 font-medium flex flex-wrap items-center gap-1">
                            {parts.map((part, i) =>
                              /extra|add[- ]?on|addon/i.test(part) ? (
                                <span
                                  key={i}
                                  className="inline-block bg-yellow-300 text-yellow-900 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ml-1"
                                >
                                  {part}
                                </span>
                              ) : (
                                <span key={i}>{part}</span>
                              )
                            )}
                          </span>
                          <span className="text-olive-700 font-bold text-lg">{item.price}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* --- Qutab Institutional Area (Main Outlet) --- */}
          <div className="flex flex-col items-center mb-12">
            <span className="text-lg md:text-2xl font-bold text-olive-700 mb-3 tracking-wide drop-shadow">
              Order from Qutab Institutional Area
            </span>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Zomato */}
              <a
                href="https://www.zomato.com/ncr/chapter-1-qutab-institutional-area-new-delhi/order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg px-7 py-5 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
                aria-label="Order from Zomato"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
                  alt="Zomato"
                  className="w-16 h-16 object-contain mb-2 group-hover:scale-110 transition"
                />
                <span className="text-base md:text-lg font-bold" style={{ color: "#E23744" }}>
                  Zomato
                </span>
                <span className="text-xs text-gray-600 text-center mt-1">
                  Qutab Institutional Area, New Delhi
                </span>
                <button className="mt-3 px-4 py-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold shadow hover:scale-105 transition">
                  Order Now
                </button>
              </a>
              {/* Swiggy */}
              <a
                href="https://www.swiggy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg px-7 py-5 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
                aria-label="Order from Swiggy"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
                  alt="Swiggy"
                  className="w-16 h-16 object-contain mb-2 group-hover:scale-110 transition"
                />
                <span className="text-base md:text-lg font-bold" style={{ color: "#FC8019" }}>
                  Swiggy
                </span>
                <span className="text-xs text-gray-600 text-center mt-1">
                  Qutab Institutional Area, New Delhi
                </span>
                <button className="mt-3 px-4 py-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold shadow hover:scale-105 transition">
                  Order Now
                </button>
              </a>
              {/* Magicpin */}
              <a
                href="https://magicpin.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg px-7 py-5 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
                aria-label="Order from Magicpin"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3vawke4UFzJcg65Wy2KAKTmYwqHlbPf6HA&s"
                  alt="Magicpin"
                  className="w-16 h-16 object-contain mb-2 group-hover:scale-110 transition"
                />
                <span className="text-base md:text-lg font-bold" style={{ color: "#6C47FF" }}>
                  Magicpin
                </span>
                <span className="text-xs text-gray-600 text-center mt-1">
                  Qutab Institutional Area, New Delhi
                </span>
                <button className="mt-3 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow hover:scale-105 transition">
                  Order Now
                </button>
              </a>
            </div>
          </div>


          {/* --- Google Review and Instagram (Side by Side & Responsive) --- */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            {/* Google Review */}
            <a
              href="https://g.page/r/CekUwwDsaYMBEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg px-7 py-5 hover:scale-105 hover:shadow-2xl transition-all duration-300 group w-full md:w-80 mb-6 md:mb-0"
              aria-label="Google Review"
            >
              <img
                src="https://www.seekpng.com/png/detail/351-3512666_googlereview-logo-gray-google-logo-250-x-250.png"
                alt="Google Logo"
                className="w-50 h-20 mb-2 group-hover:scale-110 transition"
              />
              <span className="text-base md:text-lg font-bold text-orange-500">
                Google Feedback
              </span>
              <span className="text-xs text-gray-600 text-center mt-1">
                Share your experience with us!
              </span>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/cafe_chapter_1?igsh=bjVsemUzZWkybzRz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg px-7 py-5 hover:scale-105 hover:shadow-2xl transition-all duration-300 group w-full md:w-80"
              aria-label="Follow us on Instagram"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-16 h-16 mb-2 group-hover:scale-110 transition"
              />
              <span className="text-base md:text-lg font-bold" style={{ color: "#E1306C" }}>
                @cafe_chapter_1
              </span>
              <span className="text-xs text-gray-600 text-center mt-1 max-w-xs">
                We announce new items and offers on Instagram first!
                <br />
                <span className="font-semibold text-orange-500">
                  Follow us for more &amp; exciting outlet offers!
                </span>
              </span>
            </a>
          </div>

           {/* --- Other Outlets --- */}
          <div className="flex flex-col items-center mb-12">
            <span className="text-lg md:text-2xl font-bold text-orange-400 mb-3 tracking-wide drop-shadow">
              Order from Our Other Outlets
            </span>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Yusuf Sarai - Swiggy */}
              <a
                href="https://www.swiggy.com/restaurants/cafe-chapter-1-south-extension-south-extension-729152/dineout"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg px-7 py-5 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
                aria-label="Order from Swiggy Yusuf Sarai"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
                  alt="Swiggy"
                  className="w-16 h-16 object-contain mb-2 group-hover:scale-110 transition"
                />
                <span className="text-base md:text-lg font-bold" style={{ color: "#FC8019" }}>
                  Swiggy
                </span>
                <span className="text-xs text-gray-600 text-center mt-1">
                  Yusuf Sarai, New Delhi
                </span>
                <button className="mt-3 px-4 py-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold shadow hover:scale-105 transition">
                  Order Now
                </button>
              </a>
              {/* Yusuf Sarai - Zomato */}
              <a
                href="https://www.zomato.com/ncr/chapter-1-qutab-institutional-area-new-delhi/order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg px-7 py-5 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
                aria-label="Order from Zomato Yusuf Sarai"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
                  alt="Zomato"
                  className="w-16 h-16 object-contain mb-2 group-hover:scale-110 transition"
                />
                <span className="text-base md:text-lg font-bold" style={{ color: "#E23744" }}>
                  Zomato
                </span>
                <span className="text-xs text-gray-600 text-center mt-1">
                  Yusuf Sarai, New Delhi
                </span>
                <button className="mt-3 px-4 py-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold shadow hover:scale-105 transition">
                  Order Now
                </button>
              </a>
              {/* Yusuf Sarai - Magicpin */}
              <a
                href="https://magicpin.in/New-delhi/Yusuf-sarai/Restaurant/Cafe-chapter-1/store/155b58c/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg px-7 py-5 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
                aria-label="Order from Magicpin Yusuf Sarai"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3vawke4UFzJcg65Wy2KAKTmYwqHlbPf6HA&s"
                  alt="Magicpin"
                  className="w-16 h-16 object-contain mb-2 group-hover:scale-110 transition"
                />
                <span className="text-base md:text-lg font-bold" style={{ color: "#6C47FF" }}>
                  Magicpin
                </span>
                <span className="text-xs text-gray-600 text-center mt-1">
                  Yusuf Sarai, New Delhi
                </span>
                <button className="mt-3 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow hover:scale-105 transition">
                  Order Now
                </button>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-8 text-olive-700">
            <p className="text-lg font-light">Scan QR code for quick access to our digital menu</p>
            <p className="text-sm mt-2">Call us: +91 8447412646</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;