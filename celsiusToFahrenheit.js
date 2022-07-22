// Celsius to Fahrenheit Calculator

function celsiusToFahrenheit(celsius) {
    const result = (celsius * (9 / 5)) + 32;
    return result.toFixed(2);;
}

const input = 3;
const output = parseFloat(celsiusToFahrenheit(input));
console.log(input, 'degree celsius = ', output, 'degree fahrenheit');