let isDone: boolean = true;

const str: string = 'hello';

let num: number = 2;

// const sum: number = 'sum number';

// Type 'string' is not assignable to type 'number'.

let array: number[] = [1, 2, 3];

const strArr: Array<string> = ['hello', 'world'];

const objArr: Array<object> = [
    { item: 'value1' },
    { item: 'value2' }
];

// objArr.map(obj => {
//     console.log(`item: ${obj.item1}`)
// })

objArr.map((obj: any) => {
    console.log(`item: ${obj.item}`)
})


const foo = (obj: object): void => {
    console.log(obj);
};

const boo = (obj: Object): void => {
    console.log(obj);
}

// foo('hi')
// Argument of type 'string' is not assignable to parameter of type 'object'.

boo('hi')


function foo2(a: number, b: number): number {
    return a + b;
};

const boo2 = (a: number, b: number): number => {
    return a + b;
};

const noReturn = (): void => {
    console.log('hihi');
}

console.log(foo2(1, 2));
console.log(boo2(1, 2));
console.log(noReturn());


let a: null = null;
// let x: null = 2;

let b: undefined = undefined;
// let y: undefined = null;

console.log(b);


let myName: any = 'Woojin';
let myNameLength: number = (<string>myName).length;

let yourName: any = 'Lee';
let yourNameLength: number = (yourName as string).length;

console.log(`${myName}'s length is ${myNameLength}`);
console.log(`${yourName}'s length is ${yourNameLength}`);

const unknown: any = {
    name: 'Woojin',
    age: 27,
    organization: 'SOPT',
    completion: [30]
};

console.log(unknown);

console.log(typeof myName)