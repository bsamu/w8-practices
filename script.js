// copy https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/
const person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "Peachfield str",
        city: "Budapest",
        country: "Hungary"
    }
}

let person2 = {
    ...person
}

// console.log(person2);

let person3 = Object.assign({}, person)
// person3.firstName = "Jane";
// person3.address.street = "Main str";

// console.log(person3);
// console.log(person);
// console.log(person3.firstName);

let person4 = JSON.parse(JSON.stringify(person)); // deep copy-ban a metódusok elb*szódnak, stringé alakítja azokat is
person4.firstName = "Jane";
person4.address.street = "Main str";

console.log(person4);
console.log(person);

// Spread
let nums = [2, 3];
let nums2 = [1, ...nums, 4];
console.log(nums2);

// callback

// filter

const ages = [32, 33, 16, 40];

function testFor() {
    const resultArr = [];
    for (const age of ages) {
        if (age >= 18) {
            resultArr.push(age);
        }
    }
    return resultArr;
}

console.log(testFor());

const result = ages.filter(checkAdult); // checkAdult annyiszor hívódik meg, ahány elem van ages-ben

function checkAdult(age) {
    return age >= 18;
}

// map

const array1 = [2, 4, 8, 14];
const map1 = array1.map(x => x * 3); //arrow function, x a paraméter, de 1 sorors, ezért nem kell zárójel, 1. sort automatikusan return-ol, olyan, mintha return x * 3 lenne
console.log(map1);

const array2 = [2, 4, 8, 14];
const map2 = array2.map(myFunction);

function myFunction(num) {
    return num * 5;
}
console.log(map2);

const array3 = [2, 4, 8, 14];
const map3 = array3.map((x, i) => x * i);
console.log(map3);

let array4 = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
]

let reformattedArray = array4.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj
})
console.log(reformattedArray);

var myObject = { 'a': 1, 'b': 2, 'c': 3 };

Object.keys(myObject).map(function (key, index) {
    myObject[key] *= 2;
});

console.log(myObject);

// reduce

const numbers = [99, 25, 33, 46];
let minimum = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     if (minimum > numbers[i]) {
//         minimum = numbers[i];
//     }
// }

// console.log(minimum)

const reducer = (prev, curr) => Math.min(prev, curr);
minimum = numbers.reduce(reducer);

console.log(minimum)

// ----------------

const names = ['Alice', 'Bob', 'Alice', 'Tiff', 'Ubul'];

const countNames = {};

for (let i = 0; i < names.length; i++) {
    if (countNames[names[i]]) {
        countNames[names[i]]++; // vagy =+ 1
    } else {
        countNames[names[i]] = 1;
    }
}

console.log(countNames);

let countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {}); // ,{} --> {}-be fog returnolni
console.log(countedNames)