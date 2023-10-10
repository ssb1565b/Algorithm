function solution(array) {
    const result = [Math.max(...array)]
    for (let i = 0; i <= array.length; i++){
        if(Math.max(...array) === array[i]){
            result.push(i)
        }
    }
    return result
}