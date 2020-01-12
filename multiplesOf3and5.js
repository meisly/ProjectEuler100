function multiplesOf3and5(number) {
  let sum = 0;
  for(let y = 0 ; y < number; y++){
    if(y % 3 == 0){
      sum+=y;
    }else if(y % 5 == 0){
      sum+=y;
    }
  }
  return sum;
