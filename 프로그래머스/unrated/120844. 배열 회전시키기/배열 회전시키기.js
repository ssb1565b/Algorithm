function solution(numbers, direction) {
    if (direction === 'right') {
       [numbers[numbers.length-1],...numbers].pop()
    }
    if (direction === 'left') {
        [...numbers,numbers[0]].shift()
        
    }
}

function solution(numbers, direction) {
    var answer = [];

    if ("right" == direction) {
        numbers.unshift(numbers.pop()); // 맨 마지막 값을 맨 앞에 추가
    } else {
        numbers.push(numbers.shift()); // 맨 첫번쨰 값을 맨 뒤에 추가
    }
console.log(numbers)
    answer = numbers;

    return answer;
}