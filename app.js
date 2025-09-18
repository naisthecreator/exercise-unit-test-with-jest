// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar (156.5 / 1.07);
    return valueInYen;
}

const sum = (a,b)=>{
    return a+b
}
console.log(sum(7,3));
module.exports = {sum, fromEuroToDollar}