Number.prototype[Symbol.iterator] = function() {
  let from = 0;
  const to = Number(this);
  return {
    next() {
      return {
        done: from > to,
        value: from <= to ? from++ : undefined
      };
    }
  };
};

const number = [...10];
console.log(number);
