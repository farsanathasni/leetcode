/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    for(let i=90; i>=65; i--){
        let letters=String.fromCharCode(i);
        if(s.includes(letters)&&s.includes(letters.toLowerCase())){
            return letters
        }
    }
    return "";
};