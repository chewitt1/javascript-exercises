const repeatString = function(str, num) {
    if(num > 0){
        if(str != ""){
            let outVal = str;

            for(let i = 0; i < (num-1); i++){
                outVal += str;
            }
            return outVal;
        }
    }
    else if(num < 0){
        return "ERROR";
    }
    return "";
};

// Do not edit below this line
module.exports = repeatString;
