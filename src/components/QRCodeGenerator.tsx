
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Download, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QRCodeGenerator = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const { toast } = useToast();
  
  // Get current URL for QR code
  const currentUrl = window.location.origin;

  useEffect(() => {
    // Generate QR code using a free QR code API
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(currentUrl)}`;
    setQrCodeUrl(qrUrl);
  }, [currentUrl]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      toast({
        title: "URL Copied!",
        description: "Menu URL has been copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Could not copy URL to clipboard",
        variant: "destructive",
      });
    }
  };

  const downloadQR = () => {
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = 'cafe-menu-qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "QR Code Downloaded!",
      description: "QR code has been saved to your device",
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <CardHeader className="text-center pb-4">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-800">
          <QrCode className="w-6 h-6 text-orange-600" />
          Digital Menu QR Code
        </CardTitle>
        <p className="text-gray-600 text-sm">Scan to access our menu instantly</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* QR Code Display */}
        <div className="flex justify-center">
          <div className="p-4 bg-white rounded-2xl shadow-lg border-4 border-orange-100">
            {qrCodeUrl ? (
              <img 
                src={qrCodeUrl} 
                alt="Menu QR Code" 
                className="w-64 h-64 object-contain"
              />
            ) : (
              <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <QrCode className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Generating QR Code...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* URL Display */}
        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-sm text-gray-600 mb-2">Menu URL:</p>
          <p className="text-xs text-gray-800 font-mono bg-white p-2 rounded border break-all">
            {currentUrl}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            onClick={copyToClipboard}
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy URL
          </Button>
          
          <Button 
            onClick={downloadQR}
            variant="outline"
            className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50"
          >
            <Download className="w-4 h-4 mr-2" />
            Download QR
          </Button>
        </div>

        {/* Instructions */}
        <div className="bg-orange-50 p-4 rounded-xl">
          <h4 className="font-semibold text-orange-800 mb-2">How to use:</h4>
          <ol className="text-sm text-orange-700 space-y-1">
            <li>1. Download or print the QR code</li>
            <li>2. Place it on tables or display boards</li>
            <li>3. Customers scan with their phone camera</li>
            <li>4. They'll instantly access your digital menu</li>
          </ol>
        </div>
      </CardContent>
    </div>
  );
};

export default QRCodeGenerator;
