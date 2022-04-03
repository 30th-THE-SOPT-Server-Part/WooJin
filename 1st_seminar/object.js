const sopt = {
    season: 30,
    group: ['YB', 'OB'],
    part: ['server', 'plan', 'design', 'android', 'web', 'iOS'],
    president: '김규민',
    introduce: function () {
        this.part.map(name => {
            console.log(`솝트 내 파트는 ${name} 파트가 있어요!`)
        });
    }
}

// console.log(typeof sopt.group);
// console.log(typeof sopt.group[1]);
// sopt.introduce()

// console.log(sopt.season)

let array2 = [
    {
        name: '이우진',
        age: 5
    },
    {
        name: '김진아',
        age: 15
    }
];

// console.log(array2[1].age);

// function menu(dinner) {
//     return `Today's menu is ${dinner}.`;
// }

// console.log(menu('삼겹살'));

const menu = (dinner) => {
    return `Today's menu is ${dinner}.`;
}

const str2 = menu('곱창');
console.log(str2);

const func = (num) => {
    return num**2
}
const multiple = (func, num) => {
    console.log(func(num));
}

multiple(func, 3);

const a = 5;
console.log(typeof(typeof a));
console.log(typeof a)
if (typeof a == 'number') {
    console.log(a);
}