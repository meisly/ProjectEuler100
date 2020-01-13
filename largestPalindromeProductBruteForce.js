function largestPalindromeProduct(n) {
  let num1 = 0;
  for (let y = 0; y < n; y++) {
    num1 += '9';
  }
  num1 = parseInt(num1);
  let largest = 0;
  for (let num = parseInt(num1); num >= 10; num--) {
    for (let num2 = num; num2 >= 10; num2--) {
      let product = num * num2;
      let productString = product + "";
      if (isPalindrome(productString) && product > largest){
        console.log(product)
        largest = product;

      }
    }
  }
  return largest;
}

function isPalindrome(string) {
  let palindrome = true;
  for (let x = 0; x < string.length / 2; x++) {
    let back = string.length - 1;
    if (string[x] != string[back - x]) {
      palindrome = false;
    }
  }
  return palindrome;
}
