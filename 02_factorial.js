const factorialRecursive = (n) => {
    if (n == 0) return 1
    return factorial(n - 1)
}

const factorialIterative = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}

const factorialWithVector = (n) =>{
    const vector = new Array(n + 1)
    vector[0] = 1
    for(let i = 1; i<= n; i++)
    {
        vector[i] = i * vector[i -1]
    }
    return vector[n]
}