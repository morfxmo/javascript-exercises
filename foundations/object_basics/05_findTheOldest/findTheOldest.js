const findTheOldest = function(ppl) {
    let oldestAge = 0 , oldest = {};

    ppl.forEach((p) => {
        let last = 2026;
        if ("yearOfDeath" in p) last = p["yearOfDeath"];
        let currAge = last - p["yearOfBirth"];

        if (currAge >= oldestAge)
            oldestAge = currAge , oldest = p;
    })

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
