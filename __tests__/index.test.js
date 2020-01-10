import { l } from '@hexlet/pairs-data';
import areQueensSafe from '../src/index';

test('Is Safe Queens', () => {
  const queens1 = l(2, 4, 1, 3);
  expect(areQueensSafe(queens1)).toBe(true);

  const queens2 = l(3, 6, 2, 5, 1, 4);
  expect(areQueensSafe(queens2)).toBe(true);

  const queens3 = l(1, 5, 8, 6, 3, 7, 2, 4);
  expect(areQueensSafe(queens3)).toBe(true);

  const queens4 = l(2, 4, 6, 1, 3, 5);
  expect(areQueensSafe(queens4)).toBe(true);
});

test('not safe', () => {
  const queens2 = l(1, 2, 3, 4, 5, 6);
  expect(areQueensSafe(queens2)).toBe(false);

  const queens3 = l(1, 5, 8, 6, 3, 7, 2, 8);
  expect(areQueensSafe(queens3)).toBe(false);

  const queens4 = l(1, 6, 2, 3, 4, 5);
  expect(areQueensSafe(queens4)).toBe(false);

  const queens5 = l(1, 7, 3, 6, 4, 2, 5, 8);
  expect(areQueensSafe(queens5)).toBe(false);

  const queens6 = l(1, 3, 5, 3, 6, 2);
  expect(areQueensSafe(queens6)).toBe(false);
});
