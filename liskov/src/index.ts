import Rectangle from './rectangle';
import Square from './square';


let rectangle = new Rectangle(10, 6);
console.log(rectangle.calculateArea());
test(rectangle);

function test(rectangle: Rectangle) {
    rectangle.width = 5;
    rectangle.length = 4;

    if (rectangle.calculateArea() != 20) {
        console.log('Error!');
    }
}