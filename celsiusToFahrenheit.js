// Celsius to Fahrenheit Calculator

function celsiusToFahrenheit(celsius) {
    const result = (celsius * (9 / 5)) + 32;
    return result;
}

const input = 0;
const output = celsiusToFahrenheit(input);
console.log(input, 'degree celsius = ', output, 'degree fahrenheit');