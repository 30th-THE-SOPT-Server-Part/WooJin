const name = 'woojin';
console.log(typeof name);

let age = 18;
console.log(typeof age);

let server = true;
console.log(typeof server);

console.log(`Hello, my name is ${name}. I'm ${age} years old.`);

let arr = ["hi", 1, "I'm", true];

let num = [1, 2, 3, 4];
const newNumArr = num.map(x => x * 2)
console.log(newNumArr);

// newNumArr.map(x => {
//     console.log(x);
// })

for (const x of newNumArr) {
    console.log(x);
}
