import { SummarizerOptions, SummarizerService } from '../types';

export class ChromeSummarizer implements SummarizerService {
  private summarizer: any;
  private isReady: boolean = false;

  async initialize(options: SummarizerOptions = {}) {
    if (!('ai' in window && 'summarizer' in (window as any).ai)) {
      throw new Error('Chrome AI Summarizer API is not supported');
    }

    const capabilities = await (window as any).ai.summarizer.capabilities();
    
    if (capabilities.available === 'no') {
      throw new Error('Chrome AI Summarizer is not available');
    }

    this.summarizer = await (window as any).ai.summarizer.create({
      type: 'key-points',
      format: 'markdown',
      length: 'medium',
      ...options,
      monitor(m: any) {
        m.addEventListener('downloadprogress', (e: any) => {
          console.log(`Downloaded ${e.loaded} of ${e.total} bytes`);
        });
      }
    });

    await this.summarizer.ready;
    this.isReady = true;
  }

  async summarize(text: string, context?: string) {
    if (!this.isReady) {
      throw new Error('Summarizer not initialized');
    }

    try {
      const summary = await this.summarizer.summarize(text, {
        context: context || 'This is a legal document that needs to be simplified.',
      });
      return summary;
    } catch (error) {
      console.error('Summarization failed:', error);
      throw error;
    }
  }
}