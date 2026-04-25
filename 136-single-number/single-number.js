/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let set= new Set()

    let result=[]

    for(let n of nums){
        if(set.has(n)){
            set.delete(n)            
        }else{
            set.add(n)
        }
    }
    return [...set][0]

};