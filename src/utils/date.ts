export const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(date);
