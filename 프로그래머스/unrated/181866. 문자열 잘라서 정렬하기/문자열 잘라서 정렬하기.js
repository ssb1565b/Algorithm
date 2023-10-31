function solution(myString) {
    const separate =  myString.split("x")
    return separate.filter((el)=>el !== "").sort()
    
}