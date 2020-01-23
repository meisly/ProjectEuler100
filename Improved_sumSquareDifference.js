
function sumSquareDifference(n) {
  
    let sumSq = ((n**3)/3)+((n**2)/2)+(n/6);
    let sum = n*(n+1)/2;2
    let sqSum = sum**2;
    let diff = sqSum - sumSq;
    
    return diff;

}

sumSquareDifference(10);
