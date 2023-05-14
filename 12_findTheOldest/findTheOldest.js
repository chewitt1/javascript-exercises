const findTheOldest = function(arr) {
    oldest = arr[0];
    max = (arr[0].yearOfDeath != undefined) ? (arr[0].yearOfDeath -arr[0].yearOfBirth) : ((new Date().getFullYear()) - arr[0].yearOfBirth);
    if(arr.length > 1){
        for(let i = 1; i < arr.length; i++){
            let curr = (arr[i].yearOfDeath != undefined) ? (arr[i].yearOfDeath -arr[i].yearOfBirth) : ((new Date().getFullYear()) - arr[i].yearOfBirth)
            if(curr > max){
                max = curr;
                oldest = arr[i];
            }
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
