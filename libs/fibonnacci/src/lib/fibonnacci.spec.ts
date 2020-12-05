import {
  fibonnacciSequence,
  evenFibonnacciSequenceBetweenTenAndTwenty,
} from './fibonnacci';

describe('fibonnacciSequence', () => {
  it('should give us the fibonacci sequence based on the number provided', () => {
    expect(fibonnacciSequence(5)).toEqual([1, 1, 2, 3, 5]);
  });
});

describe('evenFibonnacciSequenceBetweenTenAndTwenty', () => {
  it('should give us the even fibonnacci numbers between 10 and 20', () => {
    expect(evenFibonnacciSequenceBetweenTenAndTwenty()).toEqual([
      89,
      233,
      610,
      1597,
      4181,
    ]);
  });
});
