import { MapPin, Navigation, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LocationMap = () => {
  const restaurantLocation = {
    name: "Chapter 1 Cafe",
    address: "Police Booth, Block A, Katwaria Sarai, New Delhi, Delhi, India, 110016",
    phone: "+91 7800327061",
    hours: "10:00 AM - 11:00 PM",
    rating: 4.8,
    coordinates: "28.5073, 77.1839" // Approximate coordinates for Katwaria Sarai, New Delhi
  };

  const handleGetDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantLocation.address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleCallNow = () => {
    window.location.href = `tel:${restaurantLocation.phone}`;
  };

  return (
    <div className="space-y-6">
      {/* Restaurant Info Card */}
      <Card className="bg-gradient-to-r from-olive-50 to-green-50 border-olive-200">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-olive-800 mb-2">{restaurantLocation.name}</h3>
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">{restaurantLocation.rating} Rating</span>
              </div>
            </div>
            <div className="p-3 bg-olive-600 rounded-full">
              <MapPin className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-olive-600" />
              <span className="text-sm">{restaurantLocation.address}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-olive-600" />
              <span className="text-sm">{restaurantLocation.hours}</span>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button 
              onClick={handleGetDirections}
              className="flex-1 bg-olive-600 hover:bg-olive-700 text-white"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
            
            <Button 
              onClick={handleCallNow}
              variant="outline" 
              className="flex-1 border-olive-600 text-olive-600 hover:bg-olive-50"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Map Placeholder */}
      <div className="relative w-full h-80 bg-gradient-to-br from-olive-100 to-green-100 rounded-xl overflow-hidden border border-olive-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="p-4 bg-olive-600 rounded-full mx-auto w-fit">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-olive-800 mb-2">Chapter 1 Cafe Location</h4>
              <p className="text-sm text-gray-600 mb-4 max-w-xs">{restaurantLocation.address}</p>
              <Button 
                onClick={handleGetDirections}
                size="sm"
                className="bg-olive-600 hover:bg-olive-700"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Open in Maps
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-3 h-3 bg-olive-400 rounded-full opacity-60"></div>
        <div className="absolute top-8 right-8 w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-6 left-8 w-4 h-4 bg-olive-300 rounded-full opacity-40"></div>
        <div className="absolute bottom-4 right-4 w-3 h-3 bg-green-300 rounded-full opacity-40"></div>
      </div>

      {/* Additional Info */}
      <div className="text-center text-sm text-gray-600">
        <p>Click "Get Directions" to open the location in your preferred maps app</p>
      </div>
    </div>
  );
};

export default LocationMap;
