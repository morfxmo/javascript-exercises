const palindromes = function (x) {
    x = x.toLowerCase();
    let news = "";
    for (let i = 0 ; i < x.length ; i++)
        if ((x.charCodeAt(i) >= 97 && x.charCodeAt(i) <= 122) || (x.charCodeAt(i) >= 48 && x.charCodeAt(i) <= 57))
            news += x[i];

    let i = 0 , j = news.length - 1;
    while (i <= j) {
        if (news[i++] !== news[j--])
            return false;
    }
    return true;
};

console.log("0".charCodeAt(0));
// Do not edit below this line
module.exports = palindromes;
