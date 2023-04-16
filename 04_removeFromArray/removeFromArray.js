const removeFromArray = function() {
    arr = arguments[0];
    for (var i=1; i<arguments.length; i++){
        let j = arr.indexOf(arguments[i]);
        if(j != -1){
            arr.splice(j,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
