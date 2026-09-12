import React, { useState } from 'react';
import { Smartphone, Download, Check, X, Sparkles, ExternalLink } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { isInstallable, isInstalled, isAndroid, isIOS, install } = usePWAInstall();
  const [showModal, setShowModal] = useState(false);

  // If already installed and running inside standalone Android app container
  if (isInstalled) {
    return (
      <div 
        id="pwa-installed-badge"
        className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 text-[11px] font-medium"
        title="Running as an installed Android app"
      >
        <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
        <span>Android App Active</span>
      </div>
    );
  }

  const handleAction = async () => {
    if (isInstallable) {
      const installed = await install();
      if (!installed) {
        setShowModal(true);
      }
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <button
        id="pwa-install-app-btn"
        type="button"
        onClick={handleAction}
        className={`inline-flex items-center justify-center gap-1.5 rounded-lg font-semibold transition cursor-pointer shadow-xs ${
          compact
            ? 'p-1.5 text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60'
            : 'px-2.5 sm:px-3 py-1.5 text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60'
        }`}
        title={isAndroid ? 'Install on Android Phone' : 'Install App on Device'}
        aria-label="Install App"
      >
        {isAndroid ? (
          <Smartphone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
        ) : (
          <Download className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
        )}
        <span className="hidden sm:inline">
          {isAndroid ? 'Install Android App' : 'Install App'}
        </span>
      </button>

      {/* Android Installation Modal Guide */}
      {showModal && (
        <div 
          id="pwa-install-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-in fade-in duration-150"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Install Illusion_Dashboard
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Native Android &amp; Mobile App Experience
                </p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-slate-600 dark:text-slate-300">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Android Installation Steps:</span>
                </div>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-600 dark:text-slate-300 pl-1 leading-relaxed">
                  <li>
                    Open this app in <strong>Google Chrome</strong> or <strong>Samsung Internet</strong> on your Android phone.
                  </li>
                  <li>
                    Tap the <strong>three dots menu (⋮)</strong> at the top-right of your browser.
                  </li>
                  <li>
                    Select <strong>&quot;Install app&quot;</strong> or <strong>&quot;Add to Home screen&quot;</strong>.
                  </li>
                  <li>
                    Tap <strong>Install</strong>. Android will generate the official <strong>WebAPK</strong> with an icon in your app drawer!
                  </li>
                </ol>
              </div>

              {isIOS && (
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 space-y-1">
                  <span className="font-semibold text-amber-800 dark:text-amber-300">iOS (Safari) Steps:</span>
                  <p className="text-amber-700 dark:text-amber-400">
                    Tap the <strong>Share</strong> button in Safari, then scroll down and select <strong>&quot;Add to Home Screen&quot;</strong>.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Offline Support</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Fullscreen Window</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Live Sync to Cloud</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Zero Storage Bloat</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              {isInstallable && (
                <button
                  onClick={async () => {
                    await install();
                    setShowModal(false);
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition shadow-sm"
                >
                  Trigger Install Now
                </button>
              )}
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs transition"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
