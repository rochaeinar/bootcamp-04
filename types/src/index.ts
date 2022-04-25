// let a: any = 456;
// let b: any = ['test'];

// b = '';

// let c = a / b;


// let a: unknown = 30;
// let b  = a === 132;


// if (typeof a === 'number')
// {
//     let c = a + 10;
//     let d = a + 10;
// }


//BOOLEAN
// let a = true;
// var b = false;
// const c = true;

// let d: boolean = true;
// let e: true = true;
// let e2: true = true;
// let f: true = false;

// //NUMBER
// let a = 132;
// var b = Infinity * 0.1;
// const c = 5678;
// let d = a < c;
// let d2 = a / 0;

// let e: number = 100;
// let f: 3.14 = 3.14;
// //let g: 5.5 = 6; 

// let million: 1_000_000 = 1_000_000;
// let twoMillion = 2_000_000;

//BIGINT
//let a = 132n;


//STRINGS

// let a = 'test';
// let b = 'test 2';

// const c = '!';

// let d = a + ' ' + b + c;

// let e: string = 'zoom';

// let f: 'pedro' = 'pedro';
// //let g: 'pedro' = 'zoe';

//Symbol
// let a = Symbol('a');
// let b: symbol = Symbol('b');

// let a2 = Symbol('a');
// let c = a === b;
// let e = a === a2;
// let f = a === a;
// let e2 = a === a;
// //let d = a + 'x';

// const e = Symbol('e');
// const f: unique symbol = Symbol('f');
// const g: unique symbol = Symbol('f');

// let i = e === f;

//OBJECTS
// let a: object = {
//     b: 'x'
// };

// //a.b;

// let b = {
//     c: {
//         d: 'f'
//     }
// };

// let b2: {
//     c: {
//         d: 'f'
//     }
// } = {
//     c: {
//         d: 'f'
//     }
// };

// b.c.d;


// let c: { b: number } = {
//     b: 12
// }

// let d: {
//     firstName: string,
//     lastName: string
// } = {
//     firstName: 'pedro',
//     lastName: 'perez'
// };

// class Person {
//     constructor(
//         public firstName: string,
//         public lastName: string
//     ){}
// }

// let d = new Person('pedro', 'perez');
//let e = new Person('pedro', 'perez');

// e = {
//     firstName: 'pedro',
//     lastName: 'perez'
// }

//d.test;

// let i: number;

// let j = i * 3;

// let i;

// let j = i * 3;


// let a: {
//     b: number,
//     c?: string,
//     [key: number]: boolean
// };

// a = {
//     b: 1,
//     5: true,
//     10: true,
//     //20: 'true'
// }

// let tickets: {
//     [seatNumber: string]: string
// } = {
//     '1D' : 'pedro',
//     '2D' : 'pedro',
//     '3D' : 'pedro',
// }



//ALIAS

// type Age = number;
// type Person = {
//     name: string,
//     age: Age
// };

// let age: Age = 55;

// let driver: Person = {
//     name: 'test',
//     age: age
// }

// type Color = 'red';
// //type Color = 'tsdsd';

// let x = 5;

// if(x> 0)
// {
//     type Color = 'red';
//     let b: Color = 'blue';
// }else{
//     let c: Color = 'red';
// }


//UNION INTERSECION

// type Cat = {
//     name: string,
//     purrs: boolean
// }

// type Dog = {
//     name: string,
//     barks: boolean,
//     wags: boolean
// }

// type CatOrDogOrBoth = Cat | Dog;
// type CatAndDog = Cat & Dog;

// let a: CatOrDogOrBoth = {
//     name: 'Lilo',
//     purrs: true
// }

// a = {
//     name: 'dark',
//     barks: true,
//     wags: false
// }

// //Both
// a = {
//     name: 'Lilo',
//     purrs: true,
//     barks: true,
//     wags: false
// }

// let b: CatAndDog = {
//     purrs: true,
//     name: 'Lilo',
//     barks: true,
//     wags: false
// }


//ARRAYS

// let a = [1,2];
// let b = ['1,2', 'test'];
// let c: string[] = ['a'];

// type Mix = string | number; 

// let d = [1, 'a'];
// const e = [1, 'a'];
// let f = ['red'];
// f.push('blue');
// //d.push(true);
// //d[0] = true;

// let g = [];
// g.push(1);
// g.push('1');

// let a = [1, 'a', true];

// a.map(_ => {
//     if(typeof _ === 'number')
//     {
//         return _ * 3;
//     }
//     if(typeof _ === 'boolean')
//     {
//         return !_ ;
//     }
//     return _.toUpperCase();
// });


// function buildArray(): (string | number)[] {
//     let a = [];
//     a.push(1);
//     a.push('1');

//     return a;
// }

// let myArray = buildArray();
// myArray.push('test');
// //myArray.push(true);


//TUPLES

// let a: [number] = [1];
// // a = [2, 5];
// // a = [];

// let b: [string, string, number] = ['test', 'test2', 1963];
// //b = ['foo', 'bar', 'test', 195];

// let trainFares: [number, number?][] = [
//     [3.75],
//     [8.5, 7.7],
//     [9]
// ];

// let trainFares2: ([number] | [number, number])[] = [
//     [3.75],
//     [8.5, 7.7],
//     [9]
// ];

// let names: [string, ...string[]] = ['sara'];
// names = ['sara', 'pepe', 'maria'];
// names = [''];

// let list: [number, boolean, ...string[]] = [5, true];
// list = [5, false, 'sara', 'pepe'];

//READ ONLY ARRAY
let as: readonly number[] = [1, 2, 3];
// as.push(8);
// as.push(9);
// as.push(54);

// as = [5];

// let bs: readonly number[] = as.concat(4);

// let copied = as.slice();
// copied[0] = 100;


//VOID
// function c()
// {
//     let a = 2 + 2 ;
// }

// c();

// function d(): never
// {
//     throw TypeError('Always Error');
// }

// function e(): never
// {
//     while(true){

//     }
// }

// d();
// e();
// console.log

//ENUMS

enum Languaje {
    English = 0,
    Spanish = 1
}

let testEnum = Languaje.Spanish;


enum Languaje {
    Russian = 2
}

let test2 = Languaje['Russian'];

let test3 = Languaje['English'];

enum Languaje2 {
    English = 100,
    Spanish = 200 + 300,
    Russian
}

Languaje2.Russian

const enum Color {
    red = '#0x2354',
    blue = '#0x6456',
    Pink = 0xc1005,
    White = 255
}

let red = Color.red;

//let d = Color['red'];
//let e = Color[6];
//let f = Color[6];


const enum Flippable {
    Burguer = 'Burguer',
    Chair = 'Chair',
    Cup = 'Cup'
}

function flip(f: Flippable) {
    return ''
}

flip(Flippable.Burguer);
flip(Flippable.Cup);

// flip(54);
// flip('Cup');

let e = { type: 'test' };

let h = null;

//let test = 88.5n

let b = {
    c: {
        d: 'esfd'
    }
}
