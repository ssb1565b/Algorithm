const solution = (num_list) => {
 return   num_list.reduce((acc,sum)=>acc*sum) >     num_list.reduce((acc,sum)=>acc+sum)**2 ? 0 : 1
}