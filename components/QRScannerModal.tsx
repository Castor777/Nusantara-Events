
import React, { useRef, useEffect, useState } from 'react';
import { X, Camera, RefreshCw, Zap, ShieldCheck } from 'lucide-react';

interface QRScannerModalProps {
  onClose: () => void;
  onScan: (code: string) => void;
}

const QRScannerModal: React.FC<QRScannerModalProps> = ({ onClose, onScan }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setHasPermission(true);
        }
      } catch (err) {
        console.error("Camera access denied:", err);
        setHasPermission(false);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Simulation: Since real QR decoding requires a heavy library (like jsQR),
  // we simulate the "match" after 3 seconds of "scanning" for this prototype.
  useEffect(() => {
    if (hasPermission && scanning) {
      const timer = setTimeout(() => {
        // Mock finding a valid event code (e.g., event ID '1')
        onScan('1');
        setScanning(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [hasPermission, scanning, onScan]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 rounded-full text-white hover:bg-slate-700 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-black text-white italic uppercase tracking-tighter flex items-center justify-center gap-2">
              <Zap className="text-mantis-400" size={20} fill="currentColor" /> Nusantara Scanner
            </h3>
            <p className="text-slate-400 text-xs mt-1">Point your camera at an event flyer or badge</p>
          </div>

          <div className="relative aspect-square w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-950">
            {hasPermission === false ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                < ShieldCheck className="text-red-400 mb-2" size={32} />
                <p className="text-sm text-slate-300 font-bold uppercase tracking-widest">Camera Denied</p>
                <p className="text-[10px] text-slate-500 mt-2">Please enable camera permissions in your browser settings to use quick registration.</p>
              </div>
            ) : (
              <>
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 border-[40px] border-black/40 pointer-events-none"></div>
                
                {/* Scanning Animation */}
                <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 h-1 bg-mantis-400/50 shadow-[0_0_15px_rgba(76,175,80,0.8)] animate-bounce"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-mantis-400"></div>
                <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-mantis-400"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-mantis-400"></div>
                <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-mantis-400"></div>
              </>
            )}
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
              <RefreshCw className="animate-spin" size={12} />
              Searching for valid event IDs...
            </div>
            <p className="text-[10px] text-slate-600 italic">
              Nusantara's proprietary QR standard identifies events across SG, ID, TH, and VN instantly.
            </p>
          </div>
        </div>

        <div className="bg-slate-950/50 p-4 border-t border-slate-800 flex justify-center">
           <div className="flex items-center gap-2 text-mantis-400 text-[10px] font-bold uppercase tracking-widest">
             <ShieldCheck size={14} /> Encrypted P2P Auth
           </div>
        </div>
      </div>
    </div>
  );
};

export default QRScannerModal;