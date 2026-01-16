
import React, { useRef, useEffect, useState } from 'react';
import { X, Camera, RefreshCw, Zap, ShieldCheck, ScanLine, Terminal } from 'lucide-react';

interface QRScannerModalProps {
  onClose: () => void;
  onScan: (code: string) => void;
  mode?: 'register' | 'checkin';
}

const QRScannerModal: React.FC<QRScannerModalProps> = ({ onClose, onScan, mode = 'register' }) => {
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

  // Simulation: Scans a mock code after a brief delay
  useEffect(() => {
    if (hasPermission && scanning) {
      const timer = setTimeout(() => {
        // Return a mock result: 'REG-1' or 'REG-2' for testing check-ins
        onScan(Math.random() > 0.5 ? 'REG-1' : 'REG-2');
        setScanning(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [hasPermission, scanning, onScan]);

  const titles = {
    register: {
      title: 'Event Registration',
      subtitle: 'Scan an event flyer QR to register instantly',
      status: 'Searching for valid event IDs...',
      theme: 'from-mantis-400 to-emerald-600',
      icon: Zap
    },
    checkin: {
      title: 'Arrival Terminal',
      subtitle: 'Scan an attendee digital badge to authenticate arrival',
      status: 'Awaiting badge pulse...',
      theme: 'from-orange-500 to-red-600',
      icon: Terminal
    }
  };

  const activeMeta = titles[mode];
  const Icon = activeMeta.icon;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4">
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
              <Icon className={mode === 'register' ? 'text-mantis-400' : 'text-orange-400'} size={20} fill="currentColor" /> {activeMeta.title}
            </h3>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1 opacity-70">{activeMeta.subtitle}</p>
          </div>

          <div className={`relative aspect-square w-full max-w-[280px] mx-auto rounded-[2rem] overflow-hidden border-2 bg-slate-950 transition-colors duration-500 ${
            mode === 'register' ? 'border-mantis-500/30' : 'border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.1)]'
          }`}>
            {hasPermission === false ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <ShieldCheck className="text-red-400 mb-2" size={32} />
                <p className="text-sm text-slate-300 font-bold uppercase tracking-widest">Optical Sensor Offline</p>
                <p className="text-[10px] text-slate-500 mt-2 uppercase font-black leading-relaxed">Enable camera access in regional browser settings to initiate secure P2P arrival handshake.</p>
              </div>
            ) : (
              <>
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 border-[30px] border-slate-900/60 pointer-events-none"></div>
                
                {/* Scanning Animation */}
                <div className={`absolute inset-x-0 top-0 h-1 shadow-[0_0_20px_rgba(255,255,255,0.5)] animate-[scan_3s_ease-in-out_infinite] ${
                   mode === 'register' ? 'bg-mantis-400' : 'bg-orange-500'
                }`}></div>
                
                {/* HUD Elements */}
                <div className="absolute inset-0 p-4 pointer-events-none flex flex-col justify-between">
                   <div className="flex justify-between items-start opacity-40">
                      <div className="w-4 h-4 border-t-2 border-l-2 border-white"></div>
                      <div className="w-4 h-4 border-t-2 border-r-2 border-white"></div>
                   </div>
                   {mode === 'checkin' && (
                     <div className="text-[8px] font-mono text-orange-400/60 uppercase tracking-tighter text-left">
                        DETECTION_MODE: LIVE_ARRIVAL<br/>
                        NODE: MBS_SEA_01<br/>
                        PULSE: SYNCED
                     </div>
                   )}
                   <div className="flex justify-between items-end opacity-40">
                      <div className="w-4 h-4 border-b-2 border-l-2 border-white"></div>
                      <div className="w-4 h-4 border-b-2 border-r-2 border-white"></div>
                   </div>
                </div>
              </>
            )}
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
              <RefreshCw className="animate-spin" size={12} />
              {activeMeta.status}
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
               <p className="text-[9px] text-slate-500 uppercase font-black leading-relaxed tracking-wider">
                 {mode === 'register' 
                  ? "Standard Nusantara ID discovery active. Scan will resolve to localized registration flow." 
                  : "Scanning for official P2P attendee badges. Verified identity will be pushed to the ground ops ledger instantly."}
               </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-950/50 p-5 border-t border-slate-800 flex justify-center">
           <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] ${
             mode === 'register' ? 'text-mantis-400' : 'text-orange-400'
           }`}>
             <ShieldCheck size={14} /> Regional Node Auth Encrypted
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0%, 100% { top: 10%; opacity: 0; }
          50% { top: 90%; opacity: 1; }
        }
      `}} />
    </div>
  );
};

export default QRScannerModal;
