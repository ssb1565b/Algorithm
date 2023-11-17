function solution(binomial) {
    const value = binomial.split(" ");
    const a = Number(value[0])
    const b = Number(value[2])
    if (value[1] === "+"){
        return a + b
    }
     if (value[1] === "-"){
        return a - b
    }
    if (value[1] === "*"){
        return a * b
    }
}