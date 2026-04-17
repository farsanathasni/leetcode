/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Array.isArray(obj)){
        return obj.length===0
    }
    const object=Object.keys(obj)
    return object.length===0
};