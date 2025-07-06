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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3vawke4UFzJcg65Wy2KAKTmYwqHlbPf6HA&s"
                  alt="Magicpin"
                  className="w-16 h-16 object-contain mb-2 group-hover:scale-110 transition"
                />
                <span className="text-base md:text-lg font-bold" style={{ color: "#6C47FF" }}>
                  Magicpin
                </span>
              </a>
              {/* Instagram */}
              <a
                href="data:image/png;base64,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"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                aria-label="Visit our Instagram"
              >
                <svg
                  xmlns="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEA8PEBAPEA0PEA8PDg0PEA8PDg8NFREWFhURFRUYHSggGBomHRUVITEhJSkrMC46FyAzRDMtNygtLi0BCgoKDg0OGBAQFy0lHiYtLSstLS0tLS0tKy0tLS0rKy0rKy0tLS0vLSstKystLS0vLS0rKy0tLystKy0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBgcFBAj/xABSEAABAwIBBwUIDAoJBQAAAAABAAIDBBESBQYhMUFRYQcTcYGRIjJSkqGxs8EUIyRCU2J0gpOiwtIVM0NUY3Ky0dPiFhclNHODo8PwRGS04fH/xAAaAQACAwEBAAAAAAAAAAAAAAABAgADBAUG/8QAOhEAAgECAgUJBwMFAQEBAAAAAAECAxEEEgUhMUFRYXGBkaGxwdHhExQVIjJS8CM0cjNCYoLxY1Mk/9oADAMBAAIRAxEAPwDcVCAoQFCFVy3n3SU5LI71Eo0WjIEYO4yauy630NHVamuWpcu3qKZ1orZrKdX5/wBdJfAY4G7BGwOdbi59/IAulT0bRjt1/nIUOtN7NRxp8u1j++qqg8BLI1vYDZaY4elHZBdQjlJ7WzyPq5Ha5JD0vcfWrFGK2JAsyPGd57USZRMSgcomJQOUMSAVAMSFx1AMSA6gGJQdQDEhcZQDEpcdQDEpcdQEupcZQC6lx1ATEpcZQDEd57VBlAcypkGqR46HuHrQtF7UN7M9MOWqtne1VS3gJpLdl7JHRpPbFdSD7JcDsUGf2UYu+kZM3wZWN1frMse26ongKEtitzAeHiy4ZF5RaWYhlQ00zzoxE44Cf1rXb1i3Fc+to6pHXDX3lM8NJbNZco3hwDmkOaQCHAggg6iCsDVtTM45AgKEBQgKEIK2rjhjfLK4MiYLuedQHrPDamhCU5KMVrI3YyXOvPKasLo48UVJqwA2fKN8hGz4urpXocLgYUVmlrl3c3mZpycuYrF1tK8oXQDlDEoHKGJAOULqByBdC4cgXQuMoBdC46gF1LjqAt0LjqAXQuOoBdC46piXUuOoBdS4ygJdS46gF1LjKAl1LjKAXUuOoCKXDkBG42ULKXJlCyNyZTu5s501FC4BpMlOT3dO49zxLD713kO1Z8RhoVlr28fMpq0Iz5zYckZUhqomzQuxMdoIOhzHbWOGwj/mhcGrSlTllkcycHB2Z7VWKChAUIY3n1nOayYxxu9yQuIZbVK8aDKeGsDhp2r0WCwvsY5pfU+zk8yuWsq+JbQZQuoHIF0LhyBdC4cgYlA5AuhcZQFuhcdUwuluOqYt0LjqmF0LjqmF0LjqmF1LjKAXQuOqYXUuOqYXUuMqYl0LjKAKXGyAjcOUFLhsFlLksKjclgUuSwWRuSwI3BY7WamX30M4eLmB9mzxj3zPCA8Iax1jaqMRQVaFt+4prUFUjbfuNtgma9rXsIcx7Q5jhpDmkXBC8+007M47TTsx6ACo8peWjTUnNMNpqomJttYiA9scOohvz1v0fR9pVzPYtfTuClcxy69BcbILdAOQMSFw5AugHIGJC42QLoXGUBboXHVMnpaWWX8VFLL/AIUb5P2QUkpxjtdhsqW06MWbGUHaqSf5zCz9qypeJpL+5EzQW89DczcpnVSP63wjzuS+90fu7xvaUvu7x4zJyp+au+mpvvpfe6P3dj8hlVpfd3+Qv9B8qfmp+mpvvoe90fu7H5B9vR+7sfkL/QfKn5qfpqb76nvdH7ux+Qyr0fu7H5B/QfKn5r/rU330Pe6P3djG94o/d2PyD+g+VPzU/TU331Pe6X3dj8g+80fu7H5CHMjKn5qfpqb76nvVL7u/yG96o/d2PyGnMzKY/wCkf1SQHzPU96pfd3h95o/d3+RDJmtlBuukn+a0P/ZJTLEUn/chliKT/uR4Kmhni0ywzRDfJFJGPrAJ1OMtjTLYyjLY0+k84T3GsClyWFUuSwI3BYEbksCNwWBS5LGm8lmVy+OSjebuh9shvr5lx7pvU4/XG5cvH0rSU1v2nLx1KzU1vL4ucYDGuVGvMte6O/c08bIwNmNwxuP1mj5q9Bo6GWjfj/wvpx1FRW25ZYELhsCFw2BC41hULjKJbM2sxKmrDZJPc9ObEPe28sjd7GbuJ7CsVfGwp6lrYk6sYalrZomScysn09iIRLIPys9pXX3gHuR1ALmVMXVnvtzGaVact5YWtAFgAANQGgBZioVQgKEBQgKEBQgKEBQgKEBQgKEBQhxcqZq0NTcyQMa8/lYhzUl95LdfXdXQxFSGxminiqsNkih5w8n88AMlM41EQ0llgKho6Bof1WPBbqWMjLVLU+w6VDHQnqnqfZ6FNWu5vsCNyWBG4LAjcFgRuSx2szK7mK6mdezXvEL+LZO5F+stPUqcTHPSkunqM+Kp5qUl09Rty4RwD5+zlnMlbWP31MwH6oeWt8gC9NQWWlFciNcVqRzbKy49hbIZhrBZLmGSFslchlE0rMHMkWZWVbLk2dBTuGho2SPG07m7NevVzMVi39EHzszVq39sTR1zTIChDmZQzgo6ckTVETHDWzEHSD5gufIrI0py2IthRqT+mLORLyg5NGqSR/6sMg/aAVnutTgXLBVuHaed/KRQjUypd0Rx+t4R90nyDrAVeQYeUyi+Bq/Eg/iI+6T4r86Bvh1Tiu3yG/1mUfwFX4sH8RT3SXFdvkH4bU+5dvkH9ZtH8BV+LB/ER90lxXb5E+GVPuXb5B/WbR/AVfiwfxFPdJcV2+QfhlT7l2+Qf1m0fwFX4sH8RT3SXFdvkT4ZV+5dvkKOUyi+Bq/Eg/iIe6T4r86CfC6v3Lt8iRnKTQnXHVDpjj9T1PdJ8UB6MrcV+dBPHyg5OOt8remF5/Zul91qCPR1fgus6lDnNQzECOpiLjqY53NvPQ19iVXKjOO1FM8LWh9UX+cx11WZwUIUzPfM5tQHVNO0NqgLvYLBtQPU/cduo7CNeHxGX5ZbO46GDxns3kn9Pd6GVkEaCCCNBBFiDuI2LpXO5YEbksCNwWBG4LCskLCHjvmEOHSDceZHbqA431M3r8Ix71wcjPM+zZgFY7FLK7wpJHdriV6KLtFI2xWoiUuNYELjJAlbHSLZyd5virqeckF6emwvcDqklPeM4jQSegDasmKrZI2W1lWIqZI2W1myLkHNPJlXKUVLE6aZ2GNvW5ztjWjaSmhBydkPCEpyyxMkzizzqqslrXOgp9QijcQ5w+O8aT0DR0610qdCEOVnXo4SENutlaAV1zXYVC4yQqFxkgQuNYVC4bBZS4bBZTMGwWRuGwlkbhsClyWFUuSwFG4bHbyDnTV0ZAY8yQjXTyEujtuadbOrRwKqqUoz27TLXwdOttVnxX5rNayBluGtiEsR0jRJG62ON+4+o7VzqlNwdmefr4edGWWX/TppCgzHlMyCIpG1kYsyZ2GcDU2a1w/5wBvxG8roYWrdZHuO3o3EZo+zltWzm9PzYUZbLnUsCNwWBG4LAUUwWLt+FjvWL2Zy/YlBdrPSV0rlSQiFxkhQErY6QtkrY6ibbmHkwU9DCLWfKOfk2HE8AgHobhHUuPiJ56j6jl4ieao+TUWFUFBjOfmXTV1TmNPuenc6OJuxzwbPk43OgcAN5XSoQyR5WdzCUPZwu9rK2rrmtIEtx7CoXGSFQuGwKXGsKhcNgUuGwKXDYVC5LBZG4bCWRuSx182s3pa6UsYQyNgBlmIuGA6gBtcbGw4FLOqoK5nxWJhh43e3ci/s5OaENwl1QXfCY2g34DDbyLL7zO5xnpSte9l1FKztzVkoHNcHc5TPOFktrOa/XgeN9gbEa7HUtNKsp851cJjI4hWtaS3eR482stOoqhkwvzZs2dg9/CTp0bSNY6OJT1IKcbFuJw6r03Hfu5zcGPDgHAgtIBBGog6iuWeUatqZ4svZOFTTTQG15GENJ2SDSx3U4Ap6c8sky2hV9lUjPh+Mwix2ix2g6wdy69z1lgRuCwI3BYEbgse32Qd5S2KciOSVfc5iQAJWx0hQkbLEieip+dlii+Fkji8dwb60kpWTYz+VN8D6Ga0AADQALAbguKcA5uctcaejqZgbOZE/Ad0hGFn1iE9OOaSRbQhnqRjymDgLptnpLCoXHSFS3GSFQuNYELhsKpcaxJTwPkOGNj5H+DG1z3dg0oN2BJxirydlynWhzTyi8XbSS/OMcZ7HOBSe1jxM7xuHW2a7X3DpM0MpN0mlk+a6J57GuKntY8SLHYZ/3rt8jlVVJLEbSxyRE6hIx0ZPRiGlMpJ7DTCUZ64tPm1kKNx7CqXJY1Tktaz2G8t741D+c33DWWHZbtWWv9R53S1/bK/DV2lxVJyyv5+tacnVOLUAwtPxxI3D5bDrVtF/Ojbo9v3iFvzUYwugepsbJyf1ploIbm7osUJ6GGzR4uFYK6tNnl9I08mIlbfr69vaWNUmEw7OqmEVdVsGoTOeBuElpAPrLqUpXgmeswks9CD5O7V4HKVty+wI3BYEbgsSKCHjKsuctIAEjZYkOStliR180YsVfRj9Ox3i916lTWfyMTEaqUnyG6rlnAKrylyWyfIPDkhb2SB32VdQ+s26PV666e4yBbbnoUgS3GSFQuMkCFw2JqSlkle2KJjpJHmzWNFyf3DidAQcrbSTlGEc0nZGjZv8ncbAH1jucfr5hhIibwc4aXHsHSqJVnuOJiNKyeqkrLjv9C7UtLHE0MiYyNg1MY0Nb2BUtt7TkznKbvJ3ZMgKChBk0TXtLXta9h0FrgHNI4gqBjJxd0yoZe5P6eUF9MfY8uvBpMDjuw+9+bo4FWxqtbTqYfStSGqp8y7fXp6zNspZOmppDFMwseNOnS1zfCadRC0KSew79KrCrHNB3R1s0M5XUMjsTS+nltzrBbEHDU9t9F9ltvUlnDMZsbgliIq2qS2eTNEZnrk0tx+yAN7THKH9GHDc9Sz+zlwOE9G4lO2TtRR89c7fZloYQ5tM12Il2h8rxqJGxo3deiy0UoZdb2nYwGA9h88/q7vUqVlemdI03knk9z1Ld04d40bR9lZcRtR5/TK/Ug+TxZeVnOOY/wAo0dsoSnw2QuPTgDfsroYd/Ij0+jHfDrkbKyr7m8VG4LAjcWxIiJY8ZTNnNSAJGyxIVK2WJHezFbfKNIPjvPZC8+pU1n8jKcWv0J/m9G3LnHnyncqjrUTB4VTGPqPPqV1D6jo6MV6z5vIydarnoEhUtx0gQuGxNSUr5ZGRRtLpJHBrGja71DaTssUG7EnKMIuUtiNmzVzbioY7Cz6h4HPTW0k+C3c0butZpzcjy2LxcsRLhHcvzedxIYzz1tbFA3HNIyJmrE9waL7hfWeCKVx6dKdR5YJt8hXKrlByew2aZpeMcRA+uWpvZs6ENE4iW2y535XGU/KJQOPdCeMb3xhw+oXFT2bDLQ+IWyz6fOxY8nZTp6huKCWOUDXgcCW8HDWOtK01tMFWhUpO04tHrQKjm5eyLDWRGKUaRcxyDv43+EPWNqaMnF6jRhsTOhPNHpXExjK+TZKWZ8Eos9mojvXsPevbwP7xsWlSurnrqFaNaCnHY/yx401y2wKAsKjcljROSZ3c1jdzoT2h49Sor7jg6aWuD5/A0BUHDMl5ThavHGniP1pB6ltw/wBHSem0T+36X4FTWi50rAiAVEBIiV2PIUWznpAkbLUhUrY6RYcwB/aVJ0zf+PIqaz+RlGNX/wCefR3o2pYTzhSuVg+44flTPQyq6jtZ1NEr9aX8fFGWK+56FIELjJCoXDY0vkwyGGRurXju5bsgv72IGzndLiOxo3qmpLccDS2JvJUY7Ft5/QviqOMVvPDOplCwMaA+qkF44z3rG6ucfbZuG23SQ0Y3OhgMBLEu71RW1+C/NRk2UK+aokMs0jpJDtcdDRuaNTRwCuWo9RSowpRywVkeZS5bYFCWJaaofE8SRvdHI3vXsJa4cL7uG1QWcIzjlkro1LMrPD2X7nns2qAu1w0MnaBpIGxw2jrG0CqUba0ea0ho32H6lP6e70/4+W3pDklU5Q8iCopjMwe30wLxbW+L37OOjSOjinhKzOpovE+yq5H9MtXTufgZKrz1NhUbgBEhoPJLrreim/3VVW3HB03sp/7eBoaoOCZRyoj3cz5LF6WVbKH0dJ6bQ/7d/wAn3IqKvOmCIATAJFBDylRswpAEjZYkLZI5FiRYuT9v9pUvTN6CRVVJfKzNj/28+jvRtCyHmilcqw9yQfKm+hlTwdmdbQ/9aX8fFGYYU+c9EGBLnCSU9MZHsjb30j2xt/Wc4NHlKmckpKMXJ7Fr6jeqOmbFHHEwWZGxrGjc1osPMqzxM5ucnJ7XrEr6tsMUkz+8iY57t9mi9hxUJSpupNQjtbsYTlKtkqJZJ5TeSRxcdzRsaOAFgOhWKSPb0aUaUFCOxfnaeZNctsClyWBS4bCqXJYfDK5jmvY4tewhzHjW1wNwQjcWUVJNSV0zcM3cqCrpopxYF7bPaNTZWnC8dFwbdSpaszxWLw7oVpU+Gzm3HRIQMxhWXaH2PVVEA72ORwYN0Z7pn1S1aE7q57jDVfa0YT4rt2PtPCiXAiA0Dkl76t6KbzyquruOFpzZT/28DRFSefMq5Uh7tj+Sx+llWqi/lPTaH/bv+T7kU9XpnVBMgAjcBIiVnnwqtzMiQ4MVTmWJDwxVOY6RYswW/wBo03+d6CRVuVzLpD9tPo70bEkPMFN5UR7lh+Ut9FIg3Y62h/60v4+KMzwpM56MXChnCdjM+AOr6UHVzhd1tY5w8rVIyuzLj5ZcNN8ne7Gyq08eVblInLaEtH5WWKM9AJf9hLJ2R1NEQzYm/BN+HiZQWpc56sQtTKQRpamUgjbJlIgJrhBG5DSuSeoJhqYtjJWSDhjbb/bSSPNadhapCfFW6n6l7SnCMk5Sow2vcR7+GJ56e6Z5mBWw2HrNDu+F5m13PxKsnudQEQWL/wAkvfVvRTeeVV1NiODpzZT/ANvA0VVHnjK+VL++x/JY/SyrRS+k9Pob9u/5PuRT1cmdUROgAmAPRKxA1YpTMyQ8NVLmWJDw1VuYyLBmI3+0Kb/O9A9LGV2ZNIftp9HejXVaeXKhymj3LD8pb6KRVVXZHW0P/Wl/HxRm+FZ8x6MMKXMMdjM84a6lPx3DrdG5o86enL5kY9IK+GmuTxRr62HkCrco8BdRB3wc0bz0EOZ53hVVfpOroeVsRbimvHwMuLVnzHqhC1MpBGlqZSCMLU6kEaWqxSIMITphNH5JoCI6uTY6SKPrY0uPpAozzenpfPTjyN9f/C/IHAMl5THg19vBgiaenE932grI7D1uhlbC9L8PIqiY6gqJC/8AJL31b0U3nlS1NiOBp3ZT/wBvA0VVHnTK+VL++x/JY/Syq+l9J6jQ37d/yfcinq06oFOmARMAemEJsK5MpmdIeGqpyHQ4NVbkE72ZDfd9P/m+hejTleaMmkf20+jvRrK1nlipcpI9zQ/KG+ikWfEu0VznW0P/AFpfx8UZ3hWHMekDChmCS0kpjkjlGkxvZIBvLXA28iKnZ3FqQU4OD3prrNpikD2te03a4BzTvaRcFdVO6ueHlFxbT2ogypRNnhlhdoEjC2/gnY7qNj1ISjmTRZQqulUjNbmYzU0zo3vjeML2OLXDc4epc1tp2Z7eE4zipR2MhLUVIcaWp1II0tTKQRharFII3AToAJJNgALkk6gBtKsUg34m0ZqZK9iUkUJ/GWL5f8VxuRfbbQOpXHiMfiPeK8prZsXMvy511DGYbnNXCorKmYaWukIYdhYwBjSOkNB606PdYKj7LDwg+Ha9ficxE0gmAaByS99W9FN55ks9iPP6e2U/9vA0VVnnTKuVH+/R/JY/Syq6nsPUaF/bv+T7kVBWnWBMgCFMmAkTlZ68K4UpFCHBqqch0PDVW5BO5mWPd1P0y+hemoS/UX5uMmkP20+jvRqq6R5UqvKKPc0Xyhvo5FkxjtBc/mdbQ/8AWl/HxRnuFc3MejFwoZgiYVMwTRMw8qc5D7HcfbIO9+NCTo7NXYulhKuaOV7V3HmtLYbJU9otku/129ZaFsOSVjO/Nn2T7dCAKhosW6AJmjUL7HDYerdbNXoZ/mjt7zraO0h7D9Op9Pd6GcTQuY4sc0te02c1wIcDuIK592nZnp4yUkpRd0RlqKkMMLU6kEbgJIAFySAANJJOoAb1YpBvvL/mXmiY3NqqltpBphhOth8N/wAbcNnTq104Pazzmk9JqadKk9W98eRcnLv5tt4VxwSvZ8ZZ9i0rsJtPMDFDbWLjun/NB7SN6Ddjo6Lwvt66uvlWt+C6e65jdrJkz2gJgAiA0HklGmt6Kb/dQkee09spf7eBoiQ86ZTyon3cz5LF6WVXQ2HqdC/tn/J9yKirDqgiAEyAPT3EOgGrzkpFCHhqqchhwakcgnZzS0VtOfjP8sbgnw8v1Y/m4y4/9tPo70amuweUKzn+29KzhOw/UePWsWO/prnOroh/rvmfejP8K5GY9IGFDMQTCpmCejJ9W+CRksZs9hvwcNrTwKenVcJKSK61KNWDhLYzUcj5UjqYxIw6dT2HvmO3H9+1d2jWjVjmieRxOGnQnll0Pie5Wmc8GU8j09SLTRtcRoDxdrx0OGnqVc6UJ/UjRQxVWg/05W7uortRmBEfxc8jRue1snmsszwa3SOpDTc19UE+bV5jIeT6O/d1D3DcyNrD2kuRWEW+QZacl/bTXS7+RYMk5v0tNpijHOfCv7uTqJ1dVlohSjDYjm4jHV6+qctXBal+c51FYZDy5Sr4qeN0srsLG9pOxoG0nchKSSuy2jRnWmoQV2Y7nDlaSsmdM/Q3vYo73EcY1Dp2k/8ApZ892e1wmFjhqahHpfF/mw5TmqyMjURq5MgJiGickrdFYd5gHYH/AL0JHnNPPXTXP4GgpTzxk/Kcfd44U8Q+vIfWrYbD1ehv23+z7kVNWHUBFABMgEiYrOqGry8pFKHBqrcgjg1VuQTp5uHDV05/SNHbo9asw8v1Y85nxivh58xqi7x5I4Ge7L0jj4L4z9a3rWLH/wBFvlR0dFO2IXMzPMK4WY9OLhUzEEwoXCGFHME9GT62WneJInYXaiNbXDwXDaFZTrSpvNFlVajCtHLNavzYXrI+dUE1myEQy7nH2tx+K71HyrsUMdTqapan2dZ53E6Mq0tcPmXb0osAK3HMBQgKEBQhwstZ001MCMXOzD8lGQbH4ztTfPwVFTEQhq2s6GF0bWr67Wjxfgt/dymcZbyxNVvxyu0C+CJuhjBwG/j/APFklVc3dnqMLhKeHjlgud72cpzUykaiNwVsWEic1XxkEYrUyGl8k7PaKl2+cN7I2n7SjPMaef6sFyePoXpA4RkPKO++UJB4McTevDi+0rYbD12iFbCrnZWU50gTCgiAemEO0GryUpFCHhqrcgjg1I2Eno5MEkcngSMf4rgfUhGeWSlwaYlSOeEo8U0a2vUHjTn5fp+dpp2AXJYXNG9ze6A7QFnxUM9GSXD1NODqezrwly9+ozKy8xmPXBhQuQMKlwiYUbkEIUuEaWprhPVR5SqIfxUr2DwQbs8U6PIrqdepD6ZNFNXD0qv1xT7+vadKPPCsbrMT+Lo9P1SFqjpCsuHUZJaJwz4rp87hJnlWHVzLeLYzfyuKb4hVfDq9SLRGGXHr9Dk12WaqYWknkc062ghjCOLW2B60ksRUn9UjZSwdClrhBd/ec0tQTNRG4KxMJG4K1MJG4K6LCROCuiwkbgr4sJrnJ1SGOgjJFjM+SY9BOFp62taetOzx+mKmfFSS3WXn2tlmUOWYlnfUCSvq3jSOdLPo2iP7CtjsPbYCGTDU0+F+vX4nITGsEwrBMgEiYrO9hXjZMoQ4NVbYRwakbIOwpGyXNLzfq+dponXu4NwP3426D22v1r02Dq+0oxlv2PoPK4yl7OtJbtq6TorSZTOMvZNMEzm29rcS+I7MBPe9Wrs3ry2MoOjVcdz1rm9D1WDxCrUk961P85Tn4Vkua7iYFLkuGFG4biFiNyXGliNw3GFqNxrjS1MmG4wtTphGEJ0wjCFYmMRuCsTCRuCtiwkbgrosJE4K6LGPRkjJb6qeOBl7vPdOHvIx3z+oeWw2rRB3KcRiI0KTqS3dr3I26CFsbGxsFmMa1jWjUGgWA7Arzwk5OUnJ7XrIMq1raeCWd2qJjn23kDQ3pJsOtQehSdWpGmt7sYO55cS5xu5xLnHe4m5ParT3qSSstgiYAIoAJkKermSjcpzHfljs5w3OcOwrxk9UmiiLvFMA1VNhuPDUjZLjw1Lclyw5o1/NyGFx7iUjDuEuodurqC6OjMTkn7OWx9/r5HM0lQzwzrau70LovQnAPJlPJ7KhhY/pa4d8128KjEYeFeGWXQ+Bfh8RKjPNH/pR8oZJlgNnt7n3sg0sd17DwK8ziMLUoP51q47j0VDFQrL5Xr4bzyc2s5fmE5tQmYQxohzDTGiHMMMaIykRujTDKRG5iZMZMic1MmOmRuCsTCMcFYmMROCtTCRuCuiwnoybkmeqfghYXH3ztUbOLnah5+C0U05bCqviaVCOao7d75kajmzm9HRRkDu5n252W1r/ABRuaFuhDKjyWOx08VO71RWxfm87Kcwmd8p+WwcNCw6i2Sot2sjP7XU3emR6PQmEtevLmXi/DrM+THoBUwoJgCFMhS3/AIMO4qvMcf25PlKHDPO3dLJ2YzZeQrq1SS5X3ltCV6UHyLuImtVDZbceGpSXHhiUFx7WIC3LjkHK/OARyH20aA4/lB95ehwGOVRezqP5u/1OFjMJkeeH093odpdQ54jmgixFwdYOkFBq+phTtsObUZCpn6cGA72Et8mryLFU0dh568tubV2bDVDHVo778/5c8j814tkkg6cJ9QWd6Ip7pPs8jQtJz3xRE7NUbJj1sB9aR6IW6fZ6jLSj+zt9BhzT/Tf6X8yHwj/07PUb4r/h2+g05o/px9F/Mp8If/07PUPxb/Dt9BpzP/Tj6L+ZT4S//p2eo3xf/Dt9BhzMP5wPov5kfhL+/s9Q/GP8O30GnMk/nA+h/nR+FP7+z1D8Z/8APt9BhzF/7n/R/nTLRj+/s9Rvjf8A59voAzDG2pPVEB9pOtHf59nqR6be6n2+hI3MKH308p/VDG+cFWLARX9zEem6m6C7T3UuZtEyxLHSkbZXkjraLA9ivjhacd1zNU0tiZ7HbmX4zuwwtY0NY1rGDU1oDWjoAV6SWpHPlKUneTux6IpXM7s52UbCxln1bx3DNYYD+Ufw3Db2kK5WOlo/R8sTLNLVBbXx5F+ajIZ5HPc573Fz3kuc46S5xNySmiz2EYqKUYqyRGrEEEyFYqYAYCe5HfO0DpOgJkLdLWzcvwQxZrnifeJFWzppsFS87JA147MJ8rfKvOaRhlrt8dfh4HZ0fUzUEuGo5jWLnm25K1iArZI1iArZIGICtjw1EDZ3Mn5cc2zZQXjY8d+Onf8A81rrYbSco/LV1rjv9fzac2vgoy1w1cm47lPVxyd44HhqcOrWuxSxFOqvklf84HOnSnD6kTK4rBQgKEBQgKEBQgKEBQgKEBQgKEBQh5q2vhgGKWRkY2YnAE9A1nqSynGO1ltKhUqu0ItlMy9n3oLKRpB1eyJBq4sYfO7sWeWIvqidzCaG15q76F4vy6yhVEjnuc97i57jdznElzjvJKEWegjFRSUVZHncFfFjEavRAToVipkA6uatHz1bSx7OdbI79SPuzfpw261G7JmPHVPZ4ecuS3XqNvWc8WcPOuixxiQDuoib/wCGdfZoPaubpOjnp51tXdvOho+tkm4Pf3lVaxefOy2StYgK2StYoK2PDFBbjwxSwLihiNgXHBigLnojrJm6pH9ZxedaIYqtDZN9/eVSo05bYonblWce+B6Wt9SvWkcQt/YVvC0nuHfhmb4nin96b4nX5Or1B7nS5Q/Dc26PxXfvR+KV+C6n5g9ypcX+dA05dm8GPxXfeR+KVuC6n5h9xpcX2eQ05fn8GLxXfeU+KVuC6n5h9wpcX2eQw5xT+DF4r/vKfFK3BdT8xvh9Li+zyGOzkqPBh8V/3kfidbgup+Yy0dR4vs8iJ2c9T4MPiv8AvKfE63BdT8x1oyjxfWvIgfnVVboh8x33kfiNbk6vUsWi6HL1+h5Zs6azY9jeiNvruj79We/sLY6Mw3B9ZzavLtY/Q6okt8QiP9gBD3mrLbL86DVTwWGhsprp199zjSkkkkkuOtxNyekopm2NkrIgcFdFjETgtEWEhcFoiwkRWiIRFYhWKmQDQuSzJR9trHDXeGHiAQZHdoaPmuSVHuPPaaxH00Vzvw8+lGhKo4Ajmggg6QdBB1EINX1MKdtaKflPJxhfYfi3aWHhuPELzOLwzoTtuezyO5h8Qqsb79552sWQubJGsRsK2PDFLC3HhiNhbjg1SwLi4FLEuGBGxLhhUsS4hYpYNxpapYNxhYpYNyNzVLDJkbmKDpkLmKDpkL2IjpnnkYmRameeRidFiZ5ZGKxFiZ5ZGq6LLUzzvCvixyJwV8QkLlogEhctMQjVcgM6OQckSVk7YI7gHTJJbRHFtceOwDaUW7K5lxWJjh6bnLoXFm20VIyGNkMYwxxtDGjgN+88VQ3c8XUqSqTc5bWTqCAoQiqadsjSxwuD2g7xxVdWlGrFxlsHp1JQlmiVuroHRHTpb7141Hp3FecxGFnQevZxOtSrxqLVt4EQas9ixseGo2FuPDVLC3Fwo2BcXCpYlwwo2BcMKlg3ELVLEuNLULDXGlqlg3I3NUGTI3NQHTInNRHTIHtUHTIHsRRameaRidFiZ5ZGJ0WJnllarolqZ5JGq6JamedwWiIxE9aIhIXLTAJ7ciZFnrJObhbcAjnJTojiG9x38NZV17GbE4qnh45pvmW9mwZvZDhoouaj0uNjLKR3cj953DcNnaVW3c8hisVPETzS6FwOogZgUIChAUII5oIsQCDrB0hBpSVmgpta0c6fJLTpYcPxTpHbsXMraNi9dN25Nxqhi2tUjxvopG62k8Rp8ywTwdaG2PVrNCrQlvI8KocbbRri4VLEuLhRsC4YVLEuGFSxLiFqFg3Glqlg3GFqFgpjHNUsOmRuagMmROaoOmQvaoWJnne1EsTPPI1MixM8sjU6LUzyStVqLUzxyhXRLYs8pFzYaTuGk9i0RLL2V2e2kzdrZu8p5beE9vNNtvu+1+paoRfAzVMdh6f1TXRr7iz5I5OhcOq5bj4GEkA8HPOnsA6VoirHKxGm91GPS/L85i8UdHFCwRxMbHG3UxgAHTxPFE4VSpOpLNN3ZOoIChAUIChAUIChAUIChCObUq6mwaO058y5VU1xPO5ZGWoalICgRCoQaUAjCgMMcoMiNyAyInKDoicoOiB6hYjzPTIsR5pE6LUQhXRGOhQ61tpmStsLpkjvVuhsOHiPqOgnM4KEBQgKEBQgKEP/2Q=="
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
