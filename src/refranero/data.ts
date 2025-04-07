interface Refran {
  id: number;
  spanish: string;
  english: string;
  spanglish: string;
}

export const refranero: Refran[] = [
  {
    id: 0,
    spanish: 'Hola que tal?',
    english: 'Hey how you doing?',
    spanglish: 'Hello what about?',
  },
  {
    id: 1,
    spanish: 'Más sabe el diablo por viejo que por diablo',
    spanglish: 'The devil knows more for being old than for being the devil',
    english: 'With ages comes wisdom',
  },
];
