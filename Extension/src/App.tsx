import React, { useState, useEffect } from 'react';
import { Scale, Book, Settings, ChevronDown, Loader2, Sun, Moon } from 'lucide-react';
import { SimplificationLevel, AICapabilities } from './types';
import DocumentSummary from './components/DocumentSummary';
import SimplificationControls from './components/SimplificationControls';
import RiskAssessment from './components/RiskAssessment';
import LanguageSelector from './components/LanguageSelector';
import { SettingsPanel } from './components/SettingsPanel';
import { checkAICapabilities } from './utils/aiFeatures';
import { useTheme } from './contexts/ThemeContext';
import { useSettings } from './contexts/SettingsContext';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { settings, setIsOpen: setSettingsOpen } = useSettings();
  const [originalText, setOriginalText] = useState<string>('');
  const [simplificationLevel, setSimplificationLevel] = useState<SimplificationLevel>('moderate');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [isControlsExpanded, setIsControlsExpanded] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [aiCapabilities, setAICapabilities] = useState<AICapabilities | null>(null);

  useEffect(() => {
    const initializeAI = async () => {
      const capabilities = await checkAICapabilities();
      setAICapabilities(capabilities);
    };

    initializeAI();
  }, []);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        if (!tabs[0]?.id) {
          throw new Error('No active tab found');
        }

        const [result] = await chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: () => document.body.innerText,
        });

        if (!result?.result) {
          throw new Error('Failed to extract page content');
        }

        setOriginalText(result.result);
      } catch (err) {
        console.error('Failed to get page content:', err);
        setError('Failed to access page content. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (settings.autoSummarize) {
      getPageContent();
    }
  }, [settings.autoSummarize]);

  const isDark = theme === 'dark';

  return (
    <div className={`w-[400px] min-h-[600px] ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <SettingsPanel />
      
      {/* Header */}
      <header className={`${isDark ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm sticky top-0 z-10 border-b ${isDark ? 'border-purple-500/20' : 'border-purple-200'} p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-2">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
              PlainLegal
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleTheme}
              className={`p-2 ${isDark ? 'hover:bg-purple-500/10' : 'hover:bg-purple-100'} rounded-full transition-all duration-300`}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-purple-400" />
              ) : (
                <Moon className="w-5 h-5 text-purple-600" />
              )}
            </button>
            <button 
              onClick={() => setSettingsOpen(true)}
              className={`p-2 ${isDark ? 'hover:bg-purple-500/10' : 'hover:bg-purple-100'} rounded-full transition-all duration-300 transform hover:rotate-90`}
              title="Settings"
            >
              <Settings className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className={`w-8 h-8 ${isDark ? 'text-purple-500' : 'text-purple-600'} animate-spin`} />
            <p className={`text-sm ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Loading content...</p>
          </div>
        ) : error ? (
          <div className={`${isDark ? 'bg-red-900/20' : 'bg-red-50'} backdrop-blur-sm rounded-xl p-4 ${isDark ? 'border-red-500/20' : 'border-red-200'} border`}>
            <div className="flex items-center space-x-2 text-red-500">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          </div>
        ) : (
          <>
            {/* Controls Panel */}
            <div className={`${isDark ? 'bg-gray-800/80' : 'bg-white'} backdrop-blur-sm rounded-xl border ${isDark ? 'border-purple-500/20' : 'border-purple-200'} overflow-hidden transition-all duration-300`}>
              <button
                onClick={() => setIsControlsExpanded(!isControlsExpanded)}
                className={`w-full p-4 flex items-center justify-between text-left ${isDark ? 'hover:bg-purple-500/10' : 'hover:bg-purple-50'} transition-colors`}
                title={isControlsExpanded ? 'Collapse settings' : 'Expand settings'}
              >
                <span className={`font-medium ${isDark ? 'text-purple-200' : 'text-purple-700'}`}>Analysis Settings</span>
                <ChevronDown 
                  className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-purple-600'} transition-transform duration-300 ${
                    isControlsExpanded ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                isControlsExpanded ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="p-4 space-y-4">
                  <SimplificationControls
                    level={simplificationLevel}
                    onChange={setSimplificationLevel}
                  />
                  <LanguageSelector
                    selected={selectedLanguage}
                    onChange={setSelectedLanguage}
                  />
                </div>
              </div>
            </div>

            {/* Analysis Results */}
            <div className="space-y-6">
              <RiskAssessment 
                text={originalText} 
                aiCapabilities={aiCapabilities}
                privacyMode={settings.privacyMode}
              />
              <DocumentSummary
                text={originalText}
                simplificationLevel={simplificationLevel}
                language={selectedLanguage}
                aiCapabilities={aiCapabilities}
                privacyMode={settings.privacyMode}
              />
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className={`fixed bottom-0 w-full ${isDark ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm border-t ${isDark ? 'border-purple-500/20' : 'border-purple-200'} p-3`}>
        <div className="flex items-center justify-center text-sm">
          <div className={`flex items-center space-x-2 px-3 py-1 ${isDark ? 'bg-purple-500/10' : 'bg-purple-50'} rounded-full`}>
            <Book className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
            <span className={`${isDark ? 'text-purple-300' : 'text-purple-600'} font-medium`}>
              {aiCapabilities?.summarizer ? 'Chrome AI Powered' : 'AI Features Not Available'}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;