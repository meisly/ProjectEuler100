let diffdict = {};
function sumSquareDifference(n) {
  if (diffdict[n]) {
    return diffdict[n];
  } else {
    let diff = 0;
    let sumSq = 0;
    let sum = 0;
    let sqSum = 0;

    for (let num = 1; num <= n; num++) {
      sumSq += num ** 2;
      sum += num;
    }

    sqSum = sum ** 2;
    diff = sqSum - sumSq;
    diffdict[n] = diff;

    return diff;
  }
}

sumSquareDifference(10);
