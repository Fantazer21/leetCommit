const isPalindrome = function (x) {
    let a = String(x).split("").reverse().join("")
    return String(x) === a
};