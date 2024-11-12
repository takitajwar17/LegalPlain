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
    <div className="w-[400px] min-h-[600px] bg-gradient-to-br from-indigo-50 via-white to-blue-50 text-gray-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b border-indigo-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 rounded-lg p-2">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 text-transparent bg-clip-text">
              PlainLegal
            </h1>
          </div>
          <button 
            className="p-2 hover:bg-indigo-50 rounded-full transition-all duration-300 transform hover:rotate-90"
            title="Settings"
          >
            <Settings className="w-5 h-5 text-indigo-600" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
            <p className="text-sm text-indigo-600">Loading content...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50/80 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center space-x-2 text-red-600">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          </div>
        ) : (
          <>
            {/* Controls Panel */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-100/50 overflow-hidden transition-all duration-300">
              <button
                onClick={() => setIsControlsExpanded(!isControlsExpanded)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-indigo-50/50 transition-colors"
                title={isControlsExpanded ? 'Collapse settings' : 'Expand settings'}
              >
                <span className="font-medium text-indigo-900">Analysis Settings</span>
                <ChevronDown 
                  className={`w-5 h-5 text-indigo-600 transition-transform duration-300 ${
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
      <footer className="fixed bottom-0 w-full bg-white/80 backdrop-blur-sm border-t border-indigo-100 p-3">
        <div className="flex items-center justify-center text-sm">
          <div className="flex items-center space-x-2 px-3 py-1 bg-indigo-50 rounded-full">
            <Book className="w-4 h-4 text-indigo-600" />
            <span className="text-indigo-600 font-medium">Chrome AI Powered</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;