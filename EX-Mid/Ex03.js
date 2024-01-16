function capToFron(str) {
    let up = ""
    let down = ""

    for (let i = 0; i < str.length; i++) {

        if (str[i] == str[i].toUpperCase()) {
            up += str[i]
        } else {
            0
            down += str[i]
        }
    }
    return up+down
}

console.log(capToFron("hApPy"));
console.log(capToFron("moveMENT"));
console.log(capToFron("shOrtCAKE"));