export const jsonld = (item: unknown): string =>
  JSON.stringify(item).replace(/</g, '\\u003c');
