function* primeGenerator(limit) {
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    for (let num = 2; num <= limit; num++) {
      if (isPrime(num)) {
        yield num;
      }
    }
  }
  
  // Example usage:
  const primes = primeGenerator(30);
  for (let prime of primes) {
    console.log(prime);  // Outputs prime numbers up to the specified limit
  }
  