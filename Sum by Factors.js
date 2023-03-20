function sumOfDivided(lst) {
    let primeFactors = {}; // object to store prime factors and their corresponding sums
  
    // helper function to get prime factors of a number
    function getPrimeFactors(num) {
      let factors = {};
      for (let i = 2; i <= Math.abs(num); i++) {
        while (Math.abs(num) % i === 0) {
          factors[i] = true;
          num /= i;
        }
      }
      return factors;
    }
  
    // loop through each number in the list and get its prime factors
    for (let i = 0; i < lst.length; i++) {
      let factors = getPrimeFactors(lst[i]);
      for (let factor in factors) {
        if (primeFactors[factor]) {
          primeFactors[factor] += lst[i];
        } else {
          primeFactors[factor] = lst[i];
        }
      }
    }
  
    // create an array of arrays where each sub-array contains a prime factor and its corresponding sum
    let result = [];
    for (let factor in primeFactors) {
      if (primeFactors.hasOwnProperty(factor)) {
        result.push([parseInt(factor), primeFactors[factor]]);
      }
    }
  
    // sort the sub-arrays by the prime factor in ascending order
    result.sort((a, b) => a[0] - b[0]);
  
    return result;
  }
  //by aziz ammar
  