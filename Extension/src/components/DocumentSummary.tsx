import React, { useEffect, useState } from 'react';
import { FileText, AlertTriangle, Loader2 } from 'lucide-react';
import { DocumentSummaryProps } from '../types';
import ReactMarkdown from 'react-markdown';
import { ChromeSummarizer } from '../services/summarizer';

const DocumentSummary: React.FC<DocumentSummaryProps> = ({
  text,
  simplificationLevel,
  language,
}) => {
  const [summary, setSummary] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [summarizer] = useState(() => new ChromeSummarizer());

  useEffect(() => {
    const generateSummary = async () => {
      if (!text?.trim()) return;

      try {
        setLoading(true);
        setError(null);
        await summarizer.initialize({
          type: 'key-points',
          format: 'markdown',
          length: simplificationLevel === 'basic' ? 'short' : 
                 simplificationLevel === 'detailed' ? 'long' : 'medium',
        });

        const context = `This is a legal document that needs to be simplified. ${
          language !== 'en' ? 'The summary should be suitable for translation.' : ''
        }`;

        const result = await summarizer.summarize(text, context);
        setSummary(result);
      } catch (err) {
        console.error('Summary generation failed:', err);
        setError('Failed to generate summary. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    generateSummary();
  }, [text, simplificationLevel, language]);

  if (loading) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <Loader2 className="w-5 h-5 text-indigo-600 animate-spin" />
          <span className="text-sm text-indigo-600">Generating summary...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50/80 backdrop-blur-sm rounded-xl p-4">
        <div className="flex items-center space-x-2 text-red-600">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      </div>
    );
  }

  if (!summary) return null;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-100/50 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <FileText className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Simplified Summary</h2>
        </div>
        <div className="prose prose-sm max-w-none prose-headings:text-indigo-900 prose-p:text-gray-600 prose-li:text-gray-600">
          <ReactMarkdown>{summary}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default DocumentSummary;