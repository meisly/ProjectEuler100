function largestPrimeFactor(number) {
  let largestPrimeFactor = 1;
  let num = number;
  while (num % 2 == 0) {
    largestPrimeFactor = 2;
    num = num / 2;
  }
  while (num % 3 == 0) {
    largestPrimeFactor = 3;
    num = num / 3;
  }
  let mult = 6;
  for (let mult = 6; mult <= number + 1; mult += 6) {
    while (num % (mult - 1) == 0) {
      largestPrimeFactor = mult - 1;
      num = num / (mult - 1)
    }
    while (num % (mult + 1) == 0){
      largestPrimeFactor = mult + 1;
      num = num /(mult + 1)
    }
  }

return largestPrimeFactor
}
