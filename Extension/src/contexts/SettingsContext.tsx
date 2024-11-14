import React, { createContext, useContext, useState, useEffect } from 'react';

interface Settings {
  autoSummarize: boolean;
  privacyMode: boolean;
  fontSize: 'small' | 'medium' | 'large';
  keyboardShortcuts: boolean;
  notifications: boolean;
  autoTranslate: boolean;
}

interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const defaultSettings: Settings = {
  autoSummarize: true,
  privacyMode: false,
  fontSize: 'medium',
  keyboardShortcuts: true,
  notifications: true,
  autoTranslate: false,
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(() => {
    const saved = localStorage.getItem('plainLegalSettings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('plainLegalSettings', JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  useEffect(() => {
    // Apply font size to root element
    document.documentElement.style.fontSize = {
      small: '14px',
      medium: '16px',
      large: '18px'
    }[settings.fontSize];

    // Setup keyboard shortcuts
    if (settings.keyboardShortcuts) {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.ctrlKey || e.metaKey) {
          switch (e.key.toLowerCase()) {
            case 's':
              e.preventDefault();
              updateSettings({ autoSummarize: !settings.autoSummarize });
              break;
            case 'p':
              e.preventDefault();
              updateSettings({ privacyMode: !settings.privacyMode });
              break;
            case ',':
              e.preventDefault();
              setIsOpen(true);
              break;
          }
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [settings.fontSize, settings.keyboardShortcuts]);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, isOpen, setIsOpen }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}