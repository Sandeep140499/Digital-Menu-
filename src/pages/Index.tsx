
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
    const urlParams = new URLSearchParams(window.location.search);
    const fromQR = urlParams.get('qr') === 'true' || document.referrer.includes('qr');
    
    if (fromQR || window.location.hash === '#qr') {
      setShowWelcome(true);
    } else {
      setShowMenu(true);
    }
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setShowMenu(true);
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
      image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&h=250&fit=crop",
      items: [
        { name: "Veg Steam Momos", price: "₹40 / 80" },
        { name: "Paneer Steam Momos", price: "₹45 / 90" },
        { name: "Chicken Steam Momos", price: "₹45 / 90" }
      ]
    },
    "momos-fried": {
      title: "Momos - Fried",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=250&fit=crop",
      items: [
        { name: "Veg Fried Momos", price: "₹50 / 100" },
        { name: "Paneer Fried Momos", price: "₹60 / 120" },
        { name: "Chicken Fried Momos", price: "₹60 / 120" }
      ]
    },
    "momos-kurkure": {
      title: "Momos - Kurkure",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=250&fit=crop",
      items: [
        { name: "Veg Kurkure", price: "₹60 / 120" },
        { name: "Paneer Kurkure", price: "₹70 / 109" },
        { name: "Chicken Kurkure", price: "₹70 / 109" }
      ]
    },
    "pasta": {
      title: "Pasta",
      icon: <Utensils className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=250&fit=crop",
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
      image: "https://images.unsplash.com/photo-1619985632461-f33748ef8d51?w=400&h=250&fit=crop",
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
                  <span className="text-sm font-medium">+91 98765 43210</span>
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

          {/* Footer */}
          <div className="text-center py-8 text-olive-700">
            <p className="text-lg font-light">Scan QR code for quick access to our digital menu</p>
            <p className="text-sm mt-2">Call us: +91 98765 43210</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
