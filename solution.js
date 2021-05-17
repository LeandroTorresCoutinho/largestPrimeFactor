function isPrime(num){
    for(let a = 2;a < num;a++){
        if(num % a == 0){
            return false;
        }
    }
    return true;
}

function findNextPrime(prime){
    let nextPrime = 0
    let i = prime + 1
    while(nextPrime == 0){
        if(isPrime(i)){
            nextPrime = i
        }else{
            i++
        }
    }
    return nextPrime
}

function findLargestPrimeFactor(number){
    let rest = number;
    let prime = 2;
    let primeFactors = []

    while(rest != 0 && rest != 1){
        if(rest % prime == 0){
            primeFactors.push(prime);
            rest = rest / prime;
        }else{
            prime = findNextPrime(prime)
        }
    }
    return primeFactors[primeFactors.length - 1];
}


console.log(findLargestPrimeFactor(600851475143));