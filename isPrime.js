
function isPrime(num) {
    if(num  <= 1 ) return false;
    if(num <= 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    let index = 5
    
    while( index * index <= num){
        if(num % index === 0 || num % (index+2) === 0) return false;
        index += 6
    }
    
    return true

  }

  function isPrime(num){
    if(num <= 1) return false;
    if(num <= 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false; 
    return !Array(Math.floor(Math.sqrt(num)))
            .fill()
            .map((v,i) => i + 1)
            .map(v => v >= 5 && num % v === 0)
            .includes(true)
  }


    
    console.log(isPrime(0),  false, "0 is not prime");
    console.log(isPrime(1),  false, "1 is not prime");
    console.log(isPrime(2),  true, "2 is prime");
    console.log(isPrime(73), true, "73 is prime");
    console.log(isPrime(75), false, "75 is not prime");
    console.log(isPrime(-1), false, "-1 is not prime");



    
    console.log(isPrime(3),  true, "3 is prime");
    console.log(isPrime(5),  true, "5 is prime");
    console.log(isPrime(7),  true, "7 is prime");
    console.log(isPrime(41), true, "41 is prime");
    console.log(isPrime(5099), true, "5099 is prime");
    


    
    console.log(isPrime(4),  false, "4 is not prime");
    console.log(isPrime(6),  false, "6 is not prime");
    console.log(isPrime(8),  false, "8 is not prime");
    console.log(isPrime(9), false, "9 is not prime");
    console.log(isPrime(45), false, "45 is not prime");
    console.log(isPrime(-5), false, "-5 is not prime");
    console.log(isPrime(-8), false, "-8 is not prime");
    console.log(isPrime(-41), false, "-41 is not prime");
    
