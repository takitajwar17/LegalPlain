export type SimplificationLevel = 'basic' | 'moderate' | 'detailed';

export interface RiskAssessmentResult {
  score: number;
  issues: string[];
  recommendations: string[];
}

export interface DocumentSummaryProps {
  text: string;
  simplificationLevel: SimplificationLevel;
  language: string;
}

export interface SimplificationControlsProps {
  level: SimplificationLevel;
  onChange: (level: SimplificationLevel) => void;
}

export interface LanguageSelectorProps {
  selected: string;
  onChange: (language: string) => void;
}

export interface RiskAssessmentProps {
  text: string;
}

export interface SummarizerOptions {
  type?: 'key-points' | 'tl;dr' | 'teaser' | 'headline';
  format?: 'markdown' | 'plain-text';
  length?: 'short' | 'medium' | 'long';
  sharedContext?: string;
}

export interface SummarizerService {
  initialize(options?: SummarizerOptions): Promise<void>;
  summarize(text: string, context?: string): Promise<string>;
}

export interface AnalyzerService {
  initialize(): Promise<void>;
  analyze(text: string): Promise<RiskAssessmentResult>;
}