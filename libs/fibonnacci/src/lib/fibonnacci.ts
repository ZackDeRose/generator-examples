export function fibonnacciSequence(length: number): number[] {
  let i = 0;
  const sequence = [];
  while (i < length) {
    if (i === 0 || i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 2] + sequence[i - 1]);
    }
    i++;
  }
  return sequence;
}

export function evenFibonnacciSequenceBetweenTenAndTwenty() {
  const sequence = fibonnacciSequence(20);
  const evenIndexesBetweenTenAndTwenty = [10, 12, 14, 16, 18];
  return sequence.filter((_, i) => evenIndexesBetweenTenAndTwenty.includes(i));
}
