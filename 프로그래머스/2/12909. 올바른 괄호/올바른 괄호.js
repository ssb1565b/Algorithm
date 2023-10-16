function solution(s){
    const stack = [];
    let result = true;
    
    if (s[0] == `)` || s[s.length - 1] == `(`) result = false;
    
    for (let i = 0; i < s.length; i++) {
        s[i] == `(` ? stack.push(i) : stack.pop();
    }
    
    if (stack.length !== 0) result = false;
    
    return result;
}