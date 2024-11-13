import React, { useState, useEffect } from 'react';
import { Scale, Book, Settings, ChevronDown, Loader2 } from 'lucide-react';
import { SimplificationLevel } from './types';
import DocumentSummary from './components/DocumentSummary';
import SimplificationControls from './components/SimplificationControls';
import RiskAssessment from './components/RiskAssessment';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [originalText, setOriginalText] = useState<string>('');
  const [simplificationLevel, setSimplificationLevel] = useState<SimplificationLevel>('moderate');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [isControlsExpanded, setIsControlsExpanded] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

    getPageContent();
  }, []);

  return (
    <div className="w-[400px] min-h-[600px] bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-sm sticky top-0 z-10 border-b border-purple-500/20 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-2">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text">
              PlainLegal
            </h1>
          </div>
          <button 
            className="p-2 hover:bg-purple-500/10 rounded-full transition-all duration-300 transform hover:rotate-90"
            title="Settings"
          >
            <Settings className="w-5 h-5 text-purple-400" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
            <p className="text-sm text-purple-400">Loading content...</p>
          </div>
        ) : error ? (
          <div className="bg-red-900/20 backdrop-blur-sm rounded-xl p-4 border border-red-500/20">
            <div className="flex items-center space-x-2 text-red-400">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          </div>
        ) : (
          <>
            {/* Controls Panel */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden transition-all duration-300">
              <button
                onClick={() => setIsControlsExpanded(!isControlsExpanded)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-purple-500/10 transition-colors"
                title={isControlsExpanded ? 'Collapse settings' : 'Expand settings'}
              >
                <span className="font-medium text-purple-200">Analysis Settings</span>
                <ChevronDown 
                  className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${
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
              <RiskAssessment text={originalText} />
              <DocumentSummary
                text={originalText}
                simplificationLevel={simplificationLevel}
                language={selectedLanguage}
              />
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-gray-800/80 backdrop-blur-sm border-t border-purple-500/20 p-3">
        <div className="flex items-center justify-center text-sm">
          <div className="flex items-center space-x-2 px-3 py-1 bg-purple-500/10 rounded-full">
            <Book className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-medium">AI Powered</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;