const sumAll = function(l , r) {

    if (typeof(l) != 'number' || typeof(r) != 'number')
        return "ERORR";

    if (l > r)
        [l , r] = [r , l];

    let ret = 0;
    for (let i = l ; i <= r ; i++)
        ret += i;

    return ret;
};

// Do not edit below this line
module.exports = sumAll;
