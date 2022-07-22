// Finding simple interest in a Bank

// I = Pnr 
// A = P + I = P + Pnr

function interest(capital, rate, time) {
    const result = capital + (capital * (rate / 100) * time)
    return result;
}

const inputCapital = 500;
const inputRate = 2;
const inputTime = 2;

const output = interest(inputCapital, inputRate, inputTime);
console.log(output);
