export const shuffleArray = <T>(array?: T[]): T[] => {
  if (!Array.isArray(array)) return [];

  return [...array].sort(() => Math.random() - 0.5);
};
