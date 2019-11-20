function splitManual(str, separator = "") {
    let result = []
    let tmp = ''
    for (let i = 0; i <= str.length; i++) {
        const char = str[i];
        if (char === separator[0] || i === str.length) {
            result.push(tmp)
            tmp = '';
        }
        else {
            tmp += char;
        }
    }
    return result;
}

console.log(splitManual("Hello World ", " "));
console.log(splitManual("F#ck Y#u! ", "#"));
console.log(splitManual("Lorem-ipsum-dolor-sit-amet", "-"));