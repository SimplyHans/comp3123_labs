// #1
const gretter = (myArray, counter) => {
    const greetText = 'Hello';

    for (const name of myArray) {
        console.log(`${greetText} ${name}`);
    }
};

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// #2
const capitalize = (string) =>{
    const [firstChar, ...rest] = string;
    const capitalizedFirstChar = firstChar.toUpperCase();
    const restOfString = rest.join('');

    return `${capitalizedFirstChar}${restOfString}`
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// #3
const colors = ['red', 'green', 'blue']
const caps = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const capitalizedColors = colors.map(caps)

console.log(capitalizedColors)

// #4
var values = [1, 60, 34, 30, 20, 5]
const filterLessThan20 = (array) =>{
    return array.filter(value => value < 20)
}
console.log(filterLessThan20(values))

// #5
var array = [1, 2, 3, 4]
const calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const calculateProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(calculateSum);
console.log(calculateProduct)

// #6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return `${this.model} SD has a balance of $${this.balance.toFixed(2)}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
const sedan = new Sedan('Volvo', 2018, 30000);
console.log(sedan.info());
