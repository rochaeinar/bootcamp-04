import Piece from "./piece";
import King from "./king";
import Position from "./position";

class Game { }

const king = new King('White', 'A', 1);
console.log(king.canMove(new Position('B', 2)));
console.log(king.canMove(new Position('D', 2)));

// class King extends Piece { }
// class Queen extends Piece { }
// class Bishop extends Piece { }
// class Rook extends Piece { }
// class Pawn extends Piece { }
// class knight extends Piece { }

//new Piece('Black', 'A', 1);

//INTERFACES

type Sushi = {
    calories: number,
    saty: boolean,
    tasty: boolean
}

interface Sushi2 {
    calories: number,
    saty: boolean,
    tasty: boolean
}

//Types
type Food = {
    calories: number,
    tasty: boolean
}

type Sushi3 = Food & {
    salty: boolean
}

type Cake = Food & {
    sweet: boolean
}

interface Food2 {
    calories: number,
    tasty: boolean
}

interface Sushi4 extends Food {
    salty: boolean
}

interface Cake2 extends Food {
    sweet: boolean
}

class Test {

}

class Test2 {

}

class Test3 extends Test {

}

type test2 = {
    name: string
}

interface Sushi5 extends Test {
    salty: boolean
}

interface Sushi6 extends Sushi5, test2, Test, Test2 {
    salty: boolean
}

// type A = number;
// type B = A | string

// interface AA {
//     good(x: number): string
//     bad(x: number): string
// }

// interface BB extends AA {
//     good(x: number ): string
//     //bad(x: string): string
// }

interface A {
    good(x: number): string
}

interface A {
    bad(x: number): string
}

interface B extends A {
    good(x: number): string
}

class C implements B {
    good(x: number): string {
        throw new Error("Method not implemented.");
    }
    bad(x: number): string {
        throw new Error("Method not implemented.");
    }

}


interface Animal {
    readonly name: string
    eat(food: string): void
    sleep(hours: number): void
}

interface Feline {
    meow(): void;
    //code
}

abstract class Feline2 {
    abstract meow(): void;
}

class Feline3 {
    //abstract meow(): void;
}

class Cat implements Animal, Feline {
    readonly name: string

    constructor() {
        this.name = '';
    }

    meow(): void {
        throw new Error("Method not implemented.");
    }

    eat(food: string): void {
        throw new Error("Method not implemented.");
    }

    sleep(hours: number): void {
        throw new Error("Method not implemented.");
    }
}






