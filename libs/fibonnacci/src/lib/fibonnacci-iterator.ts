interface FibonnacciNode {
  value: number;
  done: boolean;
  [Symbol.iterator]: () => {
    next: () =>
      | {
          done: true;
        }
      | { done: false; value: false };
  };
}

export function fibonnacciIterator<T extends FibonnacciNode>(
  end = Infinity
): T {
  let _curr = 1;
  const _history = [];
  const next = () => {
    if (_history.length < end) {
      _curr = _curr + (_history[_history.length - 2] || 0);
      _history.push(_curr);
      return {
        value: _curr,
        done: false,
        next,
      };
    } else {
      const next = () => ({ done: true, next });
      return {
        done: true,
        next,
      };
    }
  };
  return {
    value: _curr,
    done: false,
    [Symbol.iterator]: () => ({
      next,
    }),
  } as any;
}
