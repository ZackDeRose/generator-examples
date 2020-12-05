import { fibonnacciSequence } from './fibonnacci';
import { fibonnacciSugaredIterator } from './fibonnacci-sugared-iterator';

describe('fibonnacciIterator', () => {
  test('iterating', () => {
    let counter = 0;
    const sequence = fibonnacciSequence(20);
    for (const curr of fibonnacciSugaredIterator(20)) {
      expect(curr).toBe(sequence[counter]);
      counter++;
    }
  });
});
