
function sum(fromN, toN) {
  if (toN === fromN) {
    return fromN;
  }

  return fromN + sum(fromN + 1, toN);
}

module.exports = sum;
