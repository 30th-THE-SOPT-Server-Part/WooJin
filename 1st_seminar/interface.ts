// interface Sopt {
//     name: string;
//     age: number;
//     organization: string;
//     completion: number[]; // or Array<number>
// }

// const sopt: Sopt = {
//     name: 'Woojin',
//     age: 27,
//     organization: 'SOPT',
//     completion: [30],
// };

// console.log(sopt);

// const sopts: Sopt[] = [
//     {
//         name: 'Woojin',
//         age: 27,
//         organization: 'SOPT',
//         completion: [30],
//     },
//     {
//         name: 'Tom',
//         age: 18,
//         organization: 'SOPT',
//         completion: [29, 30],
//     },
//     {
//         name: 'Carl',
//         age: 34,
//         organization: 'SOPT',
//         completion: [25, 28, 29],
//     }
// ];

// console.log(sopts);

/**
 * 선택적 프로퍼티
 */

interface Closet {
    name: string;
    shirt: number;
    pants: number;
    sunglass?: number;
    hat?: number;
}

const ohmygirl: Array<Closet> = [
    {
        name: '효정',
        shirt: 5,
        pants: 2,
    },
    {
        name: '아린',
        shirt: 2,
        pants: 8,
        hat: 2 // 선택적!
    }
];

/**
 * function interface
 */

const showOhmygirl = (arr: Closet[]) => {
    arr.map(e => {
        console.log(e.name);
        console.log(e.pants);
        console.log(e.shirt);
        console.log(e.hat);
        console.log(e.sunglass);
    })
};

showOhmygirl(ohmygirl);

const returnOhmygirl = (arr: Closet[]): Closet[] => {
    return arr;
};

console.log(returnOhmygirl(ohmygirl));

interface Sopt {
    season: number;
    group: string[];
    part: string[];
    president: string;
    introduce(): string[];
}

const currentSopt: Sopt = {
    season: 30,
    group: ['YB', 'OB'],
    part: ['King the Server', 'Plan', 'Design', 'Android', 'Web', 'iOS'],
    president: 'Kim',
    introduce: function () {
        return this.part.map(name => {
            console.log(`솝트 내 파트는 ${name} 등이 있어요!`);
            return `솝트 내 파트는 ${name} 등이 있어요!`
        });
    }
};

currentSopt.introduce();
console.log('------');
console.log(currentSopt.introduce());
