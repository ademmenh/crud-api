
function logParams(arr) {

    if (arr.length===0) {
        return '';
    }

    let stringParams = '?'

    stringParams += `${arr[0][0]}=${arr[0][1]}`

    if (arr.length===1) {
        return stringParams;
    }

    // else
    for (let cn=1; cn<arr.length; cn++) {
        stringParams += `&${arr[cn][0]}=${arr[cn][1]}`;
    }
    return stringParams;
}

module.exports = logParams