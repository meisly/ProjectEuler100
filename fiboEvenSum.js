function fiboEvenSum(n) {
  let num1 = 1;
  let num2 = 2;
  let sum = 2;
  for(let x = 3; x <=n; x++){
    let numNext = num1 + num2;
    if(numNext % 2 == 0){
      sum+= numNext;
    }
    num1 = num2;
    num2 = numNext;
  }
  return sum;
}
