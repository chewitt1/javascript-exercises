const sumAll = function(a, b) {
    if(typeof(a)== "number" && typeof(b)== "number"){
        if(a > 0 && b > 0){
            let sum = 0;
            if(a < b){
                for(i = a; i < (b+1); i++){
                    sum += i;
                }
                return sum;
            }
            else{
                for(i = b; i < (a+1); i++){
                    sum += i;
                }
                return sum;
            }
        }
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
