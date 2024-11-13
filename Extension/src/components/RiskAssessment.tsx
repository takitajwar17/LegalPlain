import React, { useEffect, useState } from 'react';
import { AlertTriangle, Shield, CheckCircle, Loader2 } from 'lucide-react';
import { RiskAssessmentProps, RiskAssessmentResult } from '../types';

const RiskAssessment: React.FC<RiskAssessmentProps> = ({ text }) => {
  const [assessment, setAssessment] = useState<RiskAssessmentResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const analyzeRisks = async () => {
      if (!text?.trim()) return;
      
      try {
        setLoading(true);
        setError(null);
        
        // Simulated risk assessment since Chrome AI is not available
        const simulatedResult: RiskAssessmentResult = {
          score: 85,
          issues: [
            "Please note: This is a simulated assessment as Chrome AI is not available.",
            "For actual risk assessment, please ensure you're using Chrome with AI features enabled."
          ],
          recommendations: [
            "Enable Chrome AI features to get real-time risk analysis",
            "Contact support if you need assistance enabling AI features"
          ]
        };
        
        setAssessment(simulatedResult);
      } catch (err) {
        setError('AI features are not available. Please ensure you are using Chrome with AI features enabled.');
        console.error('Risk analysis failed:', err);
      } finally {
        setLoading(false);
      }
    };

    analyzeRisks();
  }, [text]);

  if (loading) {
    return (
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <Loader2 className="w-5 h-5 text-purple-400 animate-spin" />
          <span className="text-sm text-purple-400">Analyzing risks...</span>
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

  if (!assessment) return null;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400 bg-green-900/20';
    if (score >= 60) return 'text-yellow-400 bg-yellow-900/20';
    return 'text-red-400 bg-red-900/20';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-5 h-5" />;
    if (score >= 60) return <Shield className="w-5 h-5" />;
    return <AlertTriangle className="w-5 h-5" />;
  };

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-purple-200">Risk Assessment</h2>
          <div 
            className={`flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/20 ${getScoreColor(assessment.score)}`}
            title={`Risk Score: ${assessment.score}/100`}
          >
            {getScoreIcon(assessment.score)}
            <span className="font-bold">{assessment.score}/100</span>
          </div>
        </div>

        <div className="space-y-6">
          {assessment.issues.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-purple-200 mb-3">Potential Issues</h3>
              <ul className="space-y-2">
                {assessment.issues.map((issue, index) => (
                  <li
                    key={index}
                    className="text-sm bg-red-900/10 text-red-200 flex items-center space-x-2 p-2 rounded-lg border border-red-500/20 hover:bg-red-900/20 transition-colors"
                  >
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {assessment.recommendations.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-purple-200 mb-3">Recommendations</h3>
              <ul className="space-y-2">
                {assessment.recommendations.map((rec, index) => (
                  <li
                    key={index}
                    className="text-sm bg-green-900/10 text-green-200 flex items-center space-x-2 p-2 rounded-lg border border-green-500/20 hover:bg-green-900/20 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
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