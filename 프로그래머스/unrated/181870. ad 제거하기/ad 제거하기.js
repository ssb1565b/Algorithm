function solution(strArr) {
    const ad = "ad"
    return strArr.filter((el)=>!el.includes(ad))
}