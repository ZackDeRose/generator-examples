import { fibonnacciSequence } from './fibonnacci';
import { fibonnacciIterator } from './fibonnacci-iterator';

describe('fibonnacciIterator', () => {
  test('iterating', () => {
    let counter = 0;
    const sequence = fibonnacciSequence(20);
    for (const curr of fibonnacciIterator(20)) {
      expect(curr).toBe(sequence[counter]);
      counter++;
    }
  });
});
