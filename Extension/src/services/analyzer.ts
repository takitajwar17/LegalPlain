import { RiskAssessmentResult } from '../types';

export class LegalAnalyzer {
  private analyzer: any;
  private isReady: boolean = false;

  async initialize() {
    if (!('ai' in window && 'textAnalysis' in (window as any).ai)) {
      throw new Error('Chrome AI Text Analysis API is not supported');
    }

    const capabilities = await (window as any).ai.textAnalysis.capabilities();
    
    if (capabilities.available === 'no') {
      throw new Error('Chrome AI Text Analysis is not available');
    }

    this.analyzer = await (window as any).ai.textAnalysis.create({
      type: 'legal',
      format: 'structured',
      monitor(m: any) {
        m.addEventListener('downloadprogress', (e: any) => {
          console.log(`Downloaded ${e.loaded} of ${e.total} bytes`);
        });
      }
    });

    await this.analyzer.ready;
    this.isReady = true;
  }

  async analyze(text: string): Promise<RiskAssessmentResult> {
    if (!this.isReady) {
      throw new Error('Analyzer not initialized');
    }

    try {
      const analysis = await this.analyzer.analyze(text, {
        context: 'This is a legal document that needs risk assessment.',
      });

      // Process the analysis results
      const issues = analysis.risks.map((risk: any) => ({
        severity: risk.severity,
        description: risk.description,
      }));

      const recommendations = analysis.recommendations.map((rec: any) => ({
        priority: rec.priority,
        action: rec.action,
      }));

      // Calculate risk score (0-100)
      const score = Math.round(
        (1 - issues.reduce((acc: number, risk: any) => 
          acc + (risk.severity === 'high' ? 0.3 : risk.severity === 'medium' ? 0.15 : 0.05), 
        0)) * 100
      );

      return {
        score: Math.max(0, Math.min(100, score)),
        issues: issues.map(i => i.description),
        recommendations: recommendations.map(r => r.action),
      };
    } catch (error) {
      console.error('Analysis failed:', error);
      throw error;
    }
  }
}