function solution(arr, intervals) {
    let result = []
    for(let i =0; i<2; i++){
      result.push(arr.slice(intervals[i][0], intervals[i][1]+1))
    }
   return result.flat()
}