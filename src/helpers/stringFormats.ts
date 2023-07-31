export const conjugateWord = (word: string, amount: number): string => {
  return amount === 0 || amount > 1 ? `${word}s` : word;
}
