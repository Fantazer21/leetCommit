const romanToInt = function (inputString) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let prev = 0,
        result = 0;

    for (let i = inputString.length - 1; i >= 0; i--) {
        let key = inputString[i],
            num = map[key];
        if (num < prev) {
            result -= num;
        } else {
            result += num;
        }

        prev = num;
    }

    return result;
};