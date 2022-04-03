// const superman = {
//     name: 'clark',
//     age: 33
// }

// console.log(33 in superman);
// for(let key in superman){
//     console.log(key);
//     console.log(superman[key]);
// }

// makeObject = (name, age) => {
//     return {
//         name: name,
//         age: age,
//     }
// }

// const Mike = makeObject('Mike', 30);
// console.log(Mike);

// function isAdult(user) {
//     if (!('age' in user) || user.age < 20) {
//         return false;
//     }
//     return true;
// };

// const Mike = {
//     name: 'Mike',
//     age: 30,
// };

// const Jane = {
//     name: "Jane",
// };

// console.log(isAdult(Mike));
// console.log(isAdult(Jane));

// const Mike = {
//     name: 'Mike',
//     age: 30,
// };

// for (x in Mike) {
//     console.log(x)
// };

// for (x in Mike) {
//     console.log(Mike[x])
// };

// const superman = {
//     name: 'clark',
//     age: 33,
//     fly: function() {
//         console.log('fly');
//     }
// };

// superman.fly();

// let boy = {
//     name: 'Mike',
//     showName: function() {
//         console.log(this.name);
//     }
// };

// let man = boy;
// boy = null;
// man.showName();


// boy.showName();
// let boy = {
//     name: 'Mike',
//     showName: () =>  {
//         console.log(this);
//     }
// };
// boy.showName();

days = [1, 2, 3, 4, 5];
days.unshift(-1, 0);
days.shift();
console.log(days);