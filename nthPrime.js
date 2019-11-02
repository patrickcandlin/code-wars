function getNthPrime(nth){
    let primes = []
    let start = 2

    while(primes.length < nth){
        if(isPrime(start)){
            primes.push(start)
        }
        ++start
    } 
    return primes[nth-1]
}

function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }

//test
console.log(isPrime(4))
console.log(getNthPrime(6), 13)
console.log(getNthPrime(10001), 104743)