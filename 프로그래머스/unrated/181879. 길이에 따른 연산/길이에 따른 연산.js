const solution = (num_list)=> {
    
    return num_list.length >= 11 ? num_list.reduce((acc,sum)=>{return acc + sum},0) :  num_list.reduce((acc,sum)=>{return acc * sum},1)
}