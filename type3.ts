// let name1: string = 'Woojin';
// console.log(name);

// let grade: number = 4;
// let isDeleted: boolean = false;

// const ages: number[] = [1, 2, 3, 4, 5];
// const ages2: Array<number> = [1, 2, 3, 4, 5];
// const ages3: Array<Object> = [1, 'hi', 2];

// console.log(ages3);
// console.log(typeof ages3);

// const f1 = (obj: object): void => {
//     console.log(obj);
// }

// const f2 = (obj: Object): void => {
//     console.log(obj);
// }

// f1([1, 2, 3, 4]);
// f2('hihi')

// const div = (x: number, y: number): number => {
//     return x / y;
// }


// let p: null = null;
// let u: undefined = undefined;

// console.log(p);
// console.log(typeof p);

// let name3: any = 'Woojin';
// let name3Length: number = (<string>name3).length;
// console.log(name3Length);

// let name4: any = 'Woojin';
// let name4Length: number = (name4 as string).length;
// console.log(name4Length);

interface Sopt {
    name: string;
    age: number;
    organization: string;
    completion?: number[];
}

const sopt2: Array<Sopt> = [
    {
        name: 'Woojin',
        age: 27,
        organization: 'SOPT',
        completion: [28, 29]
    },
    {
        name: 'Woojin2',
        age: 28,
        organization: 'SOPT',
    }
]

console.log(sopt2);