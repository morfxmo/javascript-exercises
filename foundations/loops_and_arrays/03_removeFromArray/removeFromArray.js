const removeFromArray = function(arr , ...rems) {

    let ret = [];
    function isIn (num) {
        return rems.includes(num);
    }

    for (let i = 0 ; i < arr.length ; i++)
        if (!isIn(arr[i])) 
            ret.push(arr[i]);

    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
