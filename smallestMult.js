//Uses prime factorization to find the lcm of all numbers between 1 and n

function smallestMult(n) {
  let primeFactorization = { 2: 0, 3: 0 };
  let lcm = 1;
  //creates dictionary of prime factors and their greatest powers for each number 1 to n
  for (let inta = 2; inta <= n; inta++) {
    primeFactorization = primeFactorizer(inta, primeFactorization);
  }
  //uses greatest prime powers to calculate lcm
  for (let [key, value] of Object.entries(primeFactorization)) {
    lcm = lcm * key ** value;
  }
  return lcm;
}

smallestMult(20);


function primeFactorizer(number, dictionary) {
  let num = number;
  let twos = 0;
  let threes = 0;
  //count factors of 2
  while (num % 2 == 0) {
    twos++;
    num = num / 2;
  }
  //count factors of 3
  while (num % 3 == 0) {
    threes++;
    num = num / 3;
  }
  //adds prime factors and their count to dictionary
  if (dictionary[2] < twos) {
    dictionary[2] = twos;
  }
  if (dictionary[3] < threes) {
    dictionary[3] = threes;
  }
  //primes will fit pattern n*6 +/- 1.  this will iterate through prime factors and count their occurences
  let mult = 6;
  for (let mult = 6; mult <= number + 1; mult += 6) {
    let counter1 = 0;
    let counter2 = 0;
    let num1 = mult - 1;
    let num2 = mult + 1;

    while (num % num1 == 0) {
      dictionary[num1] = 0;
      counter1++;
      num = num / (num1)
    }
    while (num % num2 == 0) {
      dictionary[num2] = 0;
      counter2++
      num = num / num2
    }
    //adds prime factors and their count to dictionary
    if (dictionary[num1] < counter1) {
      dictionary[num1] = counter1;
    }
    if (dictionary[num2] < counter2) {
      dictionary[num2] = counter2;
    }
  }
  return dictionary;
}
