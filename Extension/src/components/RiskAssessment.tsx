import React, { useEffect, useState } from 'react';
import { AlertTriangle, Shield, CheckCircle, Loader2 } from 'lucide-react';
import { RiskAssessmentProps, RiskAssessmentResult } from '../types';
import { LegalAnalyzer } from '../services/analyzer';

const RiskAssessment: React.FC<RiskAssessmentProps> = ({ text }) => {
  const [assessment, setAssessment] = useState<RiskAssessmentResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analyzer] = useState(() => new LegalAnalyzer());

  useEffect(() => {
    const analyzeRisks = async () => {
      if (!text?.trim()) return;
      
      try {
        setLoading(true);
        setError(null);
        await analyzer.initialize();
        const result = await analyzer.analyze(text);
        setAssessment(result);
      } catch (err) {
        setError('Failed to analyze risks. Please try again.');
        console.error('Risk analysis failed:', err);
      } finally {
        setLoading(false);
      }
    };

    analyzeRisks();
  }, [text]);

  if (loading) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <Loader2 className="w-5 h-5 text-indigo-600 animate-spin" />
          <span className="text-sm text-indigo-600">Analyzing risks...</span>
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

  if (!assessment) return null;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-5 h-5" />;
    if (score >= 60) return <Shield className="w-5 h-5" />;
    return <AlertTriangle className="w-5 h-5" />;
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-100/50 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Risk Assessment</h2>
          <div 
            className={`flex items-center space-x-2 px-3 py-1 rounded-full ${getScoreColor(assessment.score)}`}
            title={`Risk Score: ${assessment.score}/100`}
          >
            {getScoreIcon(assessment.score)}
            <span className="font-bold">{assessment.score}/100</span>
          </div>
        </div>

        <div className="space-y-6">
          {assessment.issues.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Potential Issues</h3>
              <ul className="space-y-2">
                {assessment.issues.map((issue, index) => (
                  <li
                    key={index}
                    className="text-sm bg-red-50/50 text-gray-600 flex items-center space-x-2 p-2 rounded-lg border border-red-100 hover:bg-red-50 transition-colors"
                  >
                    <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {assessment.recommendations.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Recommendations</h3>
              <ul className="space-y-2">
                {assessment.recommendations.map((rec, index) => (
                  <li
                    key={index}
                    className="text-sm bg-green-50/50 text-gray-600 flex items-center space-x-2 p-2 rounded-lg border border-green-100 hover:bg-green-50 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;