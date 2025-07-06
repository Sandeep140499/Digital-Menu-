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
        { name: "Cold Chocolate Shake", price: "₹99" },
        { name: "Oreo Shake", price: "₹99" },
        { name: "Kitkat Shake", price: "₹99" }
      ]
    },
    "mocktails": {
      title: "Mocktails",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=250&fit=crop",
      items: [
        { name: "Virgin Mint Mojito", price: "₹89" },
        { name: "Green Apple Refresher", price: "₹89" },
        { name: "Watermelon Refresher", price: "₹89" },
        { name: "Virgin Strawberry", price: "₹89" },
        { name: "Passion Fruit", price: "₹89" }
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
        { name: "Peach Passion", price: "₹89" },
        { name: "Watermelon", price: "₹89" },
        { name: "Blueberry", price: "₹89" }
      ]
    },
    "hot-coffee": {
      title: "Hot Coffee",
      icon: <Coffee className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=250&fit=crop",
      items: [
        { name: "Black Coffee", price: "₹29" },
        { name: "Normal Hot Coffee (Small)", price: "₹29" },
        { name: "Normal Hot Coffee (Medium)", price: "₹39" },
        { name: "Cappuccino", price: "₹95" },
        { name: "Hot Chocolate", price: "₹99" },
        { name: "Hazelnut Hot", price: "₹99" }
      ]
    },
    "momos-steam": {
      title: "Momos - Steam",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
      items: [
        { name: "Veg Steam Momos", price: "₹40 / 80" },
        { name: "Paneer Steam Momos", price: "₹45 / 90" },
        { name: "Chicken Steam Momos", price: "₹45 / 90" }
      ]
    },
    "momos-fried": {
      title: "Momos - Fried",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
      items: [
        { name: "Veg Fried Momos", price: "₹50 / 100" },
        { name: "Paneer Fried Momos", price: "₹60 / 120" },
        { name: "Chicken Fried Momos", price: "₹60 / 120" }
      ]
    },
    "momos-kurkure": {
      title: "Momos - Kurkure",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
      items: [
        { name: "Veg Kurkure", price: "₹60 / 120" },
        { name: "Paneer Kurkure", price: "₹70 / 109" },
        { name: "Chicken Kurkure", price: "₹70 / 109" }
      ]
    },
    "pasta": {
      title: "Pasta",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png",
      items: [
        { name: "White Sauce Pasta", price: "₹129" },
        { name: "Red Sauce Pasta", price: "₹129" },
        { name: "Mix Sauce Pasta", price: "₹139" },
        { name: "Smoked Chicken Pasta", price: "₹169" }
      ]
    },
    "sandwich": {
      title: "Sandwich",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=400&h=250&fit=crop",
      items: [
        { name: "Veg Grilled Sandwich", price: "₹59" },
        { name: "Cheese Corn Sandwich", price: "₹89" },
        { name: "Paneer Sandwich", price: "₹99" },
        { name: "Chicken Sandwich", price: "₹99" }
      ]
    },
    "pizza": {
      title: "Pizza (6\" / 9\")",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop",
      items: [
        { name: "Margaritta", price: "₹89 / 149" },
        { name: "Corn Pizza", price: "₹99 / 159" },
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
        { name: "Classic Maggi", price: "₹49" },
        { name: "Vegetable Maggi", price: "₹69" },
        { name: "Chilli Garlic Maggi", price: "₹89" },
        { name: "Egg Maggi", price: "₹89" },
        { name: "Veg Cheese Maggi", price: "₹99" },
        { name: "Extra Masala", price: "₹10" }
      ]
    },
    "sweetcorn": {
      title: "Sweetcorn",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=250&fit=crop",
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
      image: "https://www.locatelli.com/wp-content/uploads/2020/09/locatelli-italian-garlic-bread-recipe-1920-500x500.jpg",
      items: [
        { name: "Cheese Garlic Bread", price: "₹99" }
      ]
    },
    "burger": {
      title: "Burger",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=250&fit=crop",
      items: [
        { name: "Aloo Tikki Burger", price: "₹49" },
        { name: "Veg Burger", price: "₹79" },
        { name: "Crunchy Burger", price: "₹89" },
        { name: "Chicken Burger", price: "₹99" },
        { name: "Crunchy Chicken", price: "₹119" },
        { name: "Extra Cheese", price: "₹29" },
        { name: "Extra Patty", price: "₹30" }
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
          <div className="relative overflow-hidden bg-gradient-to-r from-olive-600 via-olive-700 to-olive-800 text-white py-16 px-4">
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
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+91 7800327061</span>
                </div>

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

          {/* New Launched Items Banner */}
          <div className="w-full flex justify-center py-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg text-white font-bold text-lg hover:scale-105 transition-transform duration-300 focus:outline-none"
                  aria-label="See new launched items"
                >
                  <span className="animate-bounce text-2xl">✨</span>
                  <span className="bg-white/20 px-4 py-1 rounded-full font-semibold tracking-wide animate-shimmer">
                    New Launched Items
                  </span>
                  <span className="animate-pulse text-2xl">🚀</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-md backdrop-blur-lg bg-white/80">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="animate-bounce mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=120&fit=crop"
                      alt="Coming Soon"
                      className="w-32 h-20 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span role="img" aria-label="megaphone">📢</span>
                    Coming Soon!
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    Exciting new items and offers will be launched here.<br />
                    Stay tuned for something delicious!
                  </p>
                  <span className="inline-block bg-gradient-to-r from-yellow-300 to-orange-400 text-white px-4 py-2 rounded-full font-bold shadow animate-pulse">
                    Attractive Offers Await!
                  </span>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Menu Content with professional animations */}
          <div className="max-w-4xl mx-auto px-4 py-12">
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <Accordion type="multiple" value={openSections} onValueChange={setOpenSections} className="w-full">
                  {Object.entries(menuData).map(([key, section], index) => (
                    <AccordionItem
                      key={key}
                      value={key}
                      className="border-b border-olive-100 last:border-b-0"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-gradient-to-r hover:from-olive-50 hover:to-green-50 transition-all duration-300 group">
                        <div className="flex items-center space-x-4 w-full">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gradient-to-r from-olive-500 to-green-600 rounded-full text-white group-hover:scale-105 transition-transform duration-300">
                              {section.icon}
                            </div>
                            <span className="text-lg font-semibold text-gray-800 group-hover:text-olive-600 transition-colors duration-300">
                              {section.title}
                            </span>
                          </div>
                          <div className="ml-auto mr-4">
                            <img
                              src={section.image}
                              alt={section.title}
                              className="w-16 h-10 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex justify-between items-center p-3 bg-gradient-to-r from-olive-25 to-green-25 rounded-xl hover:from-olive-50 hover:to-green-50 transition-all duration-300 hover:shadow-sm"
                            >
                              <span className="text-gray-700 font-medium">{item.name}</span>
                              <span className="text-olive-600 font-bold text-lg">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Social Media and Ordering Links */}
          <div className="flex flex-col items-center mb-8">
            <span className="text-lg md:text-2xl font-bold text-orange-400 mb-3 tracking-wide drop-shadow">
              Order from Our Partners App
            </span>
            <div className="flex flex-wrap justify-center gap-10">
              {/* Zomato */}
              <a
                href="https://www.zomato.com/ncr/chapter-1-cafe-katwaria-sarai-new-delhi/order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
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
              </a>
              {/* Swiggy */}
              <a
                href="https://www.swiggy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
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
              </a>
              {/* Magicpin */}
              <a
                href="https://magicpin.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                aria-label="Order from Magicpin"
              >
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Magicpin"
                  className="w-16 h-16 object-contain mb-2 group-hover:scale-110 transition"
                />
                <span className="text-base md:text-lg font-bold" style={{ color: "#6C47FF" }}>
                  Magicpin
                </span>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/cafe_chapter_1?igsh=bjVsemUzZWkybzRz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                aria-label="Visit our Instagram"
              >
                <svg
                  xmlns="data:image/jpeg;base64,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"
                  viewBox="0 0 448 512"
                  className="w-16 h-16 mb-2 group-hover:scale-110 transition"
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
                <span className="text-base md:text-lg font-bold" style={{ color: "#E1306C" }}>
                  Instagram
                </span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-8 text-olive-700">
            <p className="text-lg font-light">Scan QR code for quick access to our digital menu</p>
            <p className="text-sm mt-2">Call us: +91 7800327061</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
