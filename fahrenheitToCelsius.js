// Fahrenheit to Celsius Converter

function fahrenheitToCelsius(fahrenheit) {
    const result = (fahrenheit - 32) * (5 / 9);
    return result.toFixed(2);
}

const input = 0;
const output = parseFloat(fahrenheitToCelsius(input));
console.log(input, 'degree fahrenheit = ', output, 'degree celsius');