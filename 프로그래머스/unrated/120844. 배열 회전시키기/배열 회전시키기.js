function solution(numbers, direction) {
    if (direction === 'right') {
       return  [numbers[numbers.length-1],...numbers].slice(0,numbers.length)
    }
    if (direction === 'left') {
        return [...numbers,numbers[0]].slice(1)
        
    }
}