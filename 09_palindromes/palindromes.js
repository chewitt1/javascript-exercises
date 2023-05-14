const reverseString = function(strIn) {
    strArr = strIn.split("");
    strArr.reverse();
    return strArr.join("");
};

const removePunctuation = function(strIn){
    let ret = strIn;
    ret = ret.replace(/!/g, "");
    ret = ret.replace(/,/g, "");
    ret = ret.replace(/\./g, "");
    ret = ret.replace(/ /g, "");
    return ret;
};

const palindromes = function (str) {
    str = removePunctuation(str.toLowerCase());
    let left = str.substring(0, ((str.length/2)));
    let right = (str.length % 2 == 0) ? str.substring((str.length/2)) : str.substring((str.length/2) + 1);
    let rLeft = reverseString(left);
    return (rLeft == right);
};




// Do not edit below this line
module.exports = palindromes;
