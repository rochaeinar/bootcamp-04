export default class Rectangle {

    constructor(public length: number, public width: number) {

    }

    calculateArea() {
        return this.width * this.length;
    }
}