import { AICapabilities } from '../types';

export async function checkAICapabilities(): Promise<AICapabilities> {
  const capabilities = {
    summarizer: false,
    textAnalysis: false,
    languageDetection: false
  };

  try {
    // Check Summarizer API
    if ('ai' in window && 'summarizer' in (window as any).ai) {
      const available = (await (window as any).ai.summarizer.capabilities()).available;
      capabilities.summarizer = available !== 'no';
    }

    // Check Text Analysis API
    if ('ai' in window && 'textAnalysis' in (window as any).ai) {
      const available = (await (window as any).ai.textAnalysis.capabilities()).available;
      capabilities.textAnalysis = available !== 'no';
    }

    // Check Language Detection API
    if ('translation' in window && 'canDetect' in (window as any).translation) {
      const canDetect = await (window as any).translation.canDetect();
      capabilities.languageDetection = canDetect !== 'no';
    }
  } catch (error) {
    console.error('Error checking AI capabilities:', error);
  }

  return capabilities;
}