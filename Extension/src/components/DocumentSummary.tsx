import React, { useEffect, useState } from 'react';
import { FileText, AlertTriangle, Loader2 } from 'lucide-react';
import { DocumentSummaryProps } from '../types';
import ReactMarkdown from 'react-markdown';

const DocumentSummary: React.FC<DocumentSummaryProps> = ({
  text,
  simplificationLevel,
  language,
}) => {
  const [summary, setSummary] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const generateSummary = async () => {
      if (!text?.trim()) return;

      try {
        setLoading(true);
        setError(null);

        // Simulated summary since Chrome AI is not available
        const simulatedSummary = `# Document Summary

Please note: This is a simulated summary as Chrome AI is not available.

## Key Points
- To get real-time AI-powered summaries, please ensure you're using Chrome with AI features enabled
- The document contains approximately ${text.split(' ').length} words
- Selected language: ${language}
- Simplification level: ${simplificationLevel}

## Next Steps
1. Enable Chrome AI features for real-time document analysis
2. Contact support if you need assistance with AI feature activation
3. Try refreshing the page once AI features are enabled`;

        setSummary(simulatedSummary);
      } catch (err) {
        console.error('Summary generation failed:', err);
        setError('AI features are not available. Please ensure you are using Chrome with AI features enabled.');
      } finally {
        setLoading(false);
      }
    };

    generateSummary();
  }, [text, simplificationLevel, language]);

  if (loading) {
    return (
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <Loader2 className="w-5 h-5 text-purple-400 animate-spin" />
          <span className="text-sm text-purple-400">Generating summary...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 backdrop-blur-sm rounded-xl p-4 border border-red-500/20">
        <div className="flex items-center space-x-2 text-red-400">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      </div>
    );
  }

  if (!summary) return null;

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-6">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <FileText className="w-5 h-5 text-purple-400" />
          </div>
          <h2 className="text-lg font-semibold text-purple-200">Simplified Summary</h2>
        </div>
        <div className="prose prose-sm max-w-none prose-invert prose-headings:text-purple-200 prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-purple-300">
          <ReactMarkdown>{summary}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default DocumentSummary;