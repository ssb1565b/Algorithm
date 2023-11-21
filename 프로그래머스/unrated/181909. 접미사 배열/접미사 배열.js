function solution(my_string) {
    const text = my_string.split("").reverse()
    const result = [text[0]]
    for(let i =1; i<my_string.length; i++){
        result.push(result[i-1] + text[i])
    }
   return result.map((el)=> el.split("").reverse().join("")).sort()
}