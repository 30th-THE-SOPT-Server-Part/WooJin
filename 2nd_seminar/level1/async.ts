// console.log('Hello Server');

// setTimeout((): void => {
//     console.log('Hello Server 2');
// }, 3000);

// console.log('Hello Server 3');


/**
 * callback hell
 */

// let serverList: string[] = [];

// setTimeout((name): void => {
//     serverList = [...serverList, name];
//     console.log(serverList);

//     setTimeout((name): void => {
//         serverList = [...serverList, name];
//         console.log(serverList);

//         setTimeout((name): void => {
//             serverList = [...serverList, name];
//             console.log(serverList);
//         }, 500, 'name3');
//     }, 500, 'name2');
// }, 500, 'name1');

/**
 * promise
 */

// const condition: boolean = true;

// const promise = new Promise((resolve, reject) => {
//     if (condition) {
//         setTimeout(() => {
//             resolve('Success');    
//         }, 1000);
//         // resolve('Success');
//     } else {
//         reject(new Error('Error! Condition is false'))
//     }
// });

// promise
//     .then((resolveData): void => console.log(resolveData))
//     .catch(err => console.log(err));

// console.log('test')

/**
 * promise chaining
 */

// Promise.resolve(123)
//     .then(res => {
//         console.log(res) // 123
//         return 456
//     })
//     .then(res => {
//         console.log(res) // 456
//         return Promise.resolve(123)
//     })
//     .then(res => {
//         console.log(res) //123
//         return 123
//     });
/**
 * 123
 * 456
 * 123
 */

    
// Promise.reject(new Error('something bad happened'))
//     .then(res => {
//         console.log(res) // not called
//         return 456
//     })
//     .catch(err => {
//         console.log(err.message) // something bad happened
//         return 123
//     })
//     .then(res => {
//         console.log(res) // 123
// })
/**
 * something bad happened
 * 123
 */

// const restaurant = (callback: () => void, time: number) => {
//     setTimeout(callback, time);
// };

// const order = (): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         restaurant(() => {
//             console.log('레스토랑 진행 상황 - 음식 주문');
//             resolve('음식 주문 시작');
//         }, 1000);
//     });
// }

// const cook = (progress: string): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         console.log('레스토랑 진행 상황 - 음식 조리');
//         console.log(`progress : ${progress}`)
//         restaurant(() => {
//             resolve(`${progress} -> 음식 조리 중`);
//         }, 2000);
//     });
// }

// const serving = (progress: string): Promise<string>  => {
//     return new Promise((resolve, reject) => {
//         console.log('레스토랑 진행 상황 - 음식 서빙');
//         console.log(`progress : ${progress}`)
//         restaurant(()=> {
//             resolve(`${progress} -> 음식 서빙 중`);
//         }, 3000);
//     });
// }

// const eat = (progress: string): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         console.log('레스토랑 진행 상황 - 음식 먹기');
//         console.log(`progress : ${progress}`)
//         restaurant(() => {
//             resolve(`${progress} -> 음식 먹는 중`);
//         }, 4000);
//     });
// }

// order()
//     .then(progress => cook(progress))
//     .then(progress => serving(progress))
//     .then(progress => eat(progress))
//     .then(progress => console.log(progress));

/** 
 * promise chaining - error
 */

// Promise.resolve(123)
//     .then(res => {
//         throw new Error('에러 발생!') 
//         return 456
//     })
//     .then(res => {
//         console.log(res) // 절대 실행되지 않음!
//         return Promise.resolve(789)
//     })
//     .catch(err => {
//         console.log(err.message) 
//     });

/**
 * async - await
 */

// 함수 표현식
// const asyncFunction1 = async () => {

// }

// // 함수 선언식
// async function asyncFunction2() {

// }

/**
 * Promise -> async/await
 */

let asyncFunc1 = (msg: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncFunc1 - ${msg}`);
        }, 1000);
    });
};

let asyncFunc2 = (msg: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncFunc2 - ${msg}`);
        }, 1500);
    });
};

const asyncMain = async (): Promise<void> => {
    let result = await asyncFunc1('hi');
    console.log(result);
    result = await asyncFunc2('hello');
    console.log(result);
};

const promiseMain = (): void => {
    asyncFunc1('hi').then((result: string) => {
        console.log(result);
        return asyncFunc2('hello');
    }).then((result: string) => {
        console.log(result);
    });
};

asyncMain();

promiseMain();