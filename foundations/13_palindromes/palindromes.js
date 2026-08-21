const palindromes = function (string) {
    string = string.toLowerCase();
    let cleanedString = "";
    for (const ch of string) {
        if (
            ("a" <= ch && ch <= "z") ||
            ("0" <= ch && ch <= "9")
        ) {
            cleanedString += ch;
        }
    }
    return cleanedString === cleanedString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
