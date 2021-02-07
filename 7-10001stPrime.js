let primes = [
    null,
    2,
    3,
    5,
    7,
    11,
    13
  ];

function nthPrime(n) {
  if (primes[n]) {
    return primes[n];
  } else {
    let lastInd = primes.length - 1;
    let lastPrime = primes[lastInd];
    return bananaBoat(lastPrime, n, primes)
  }
}
  
function bananaBoat(lastPrime, n, array) {
  while(array.length - 1 < n) {
    let nextPrime = getNextPrime(lastPrime, array);
    array.push(nextPrime);
    lastPrime = nextPrime;
  }
  return array[n];
}

function isNextPrime(number, primesArr) {
  for (let prime of primesArr) {
      if (number % prime === 0) {
        return false;
      }
    }
    return true;
}

function getNextPrime(lastPrime, primesArr) {
  for (let testValue = lastPrime;;) {
    if (isNextPrime(testValue, primesArr)) {
      return testValue;
    } else {
      testValue++;
    }
  }
}

console.log(nthPrime(100))
nthPrime(10001);
