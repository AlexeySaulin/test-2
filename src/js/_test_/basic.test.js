import healthGradation from '../app';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const gradation = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];
const result = healthGradation(heroes);

test('toEqual', () => {
  expect(result).toEqual(gradation);
});

/* test('toBe', () => {
  expect(result).toBe(gradation);
}); */
