import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div 
      id="pwa-offline-indicator"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-xl bg-amber-600/95 dark:bg-amber-600 text-white px-3.5 py-2 text-xs font-semibold shadow-xl border border-amber-400/40 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200"
    >
      <WifiOff className="w-4 h-4 animate-pulse shrink-0" />
      <span>Offline Mode — Cached data is being used.</span>
    </div>
  );
};
