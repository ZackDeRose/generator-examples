export function* fibonnacciSugaredIterator(end = Infinity) {
  yield 1;
  const history = [1];
  while (history.length < end) {
    const length = history.length;
    const next = (history[length - 2] || 0) + history[length - 1];
    yield next;
    history.push(next);
  }
}
