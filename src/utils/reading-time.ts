const WORDS_PER_MINUTE = 200;

export const readingTimeMinutes = (text: string): number =>
  Math.max(1, Math.round(text.trim().split(/\s+/).length / WORDS_PER_MINUTE));
