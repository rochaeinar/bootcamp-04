import Piece from './piece'
import Position from './position'

export default class Queen extends Piece {
    canMove(position: Position): boolean {
        // return Math.abs(this.position.getRank()) == Math.abs(position.getRank()) ||
        // this.position.getFile().charCodeAt(0) == position.getFile().charCodeAt(0) ||
        // Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) == 
        // Math.abs(this.position.getRank() - position.getRank())

        // let bishop = Math.abs(this.position.getRank() - position.getRank())
        // === Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0));

        // let rook = (+(Math.abs(this.position.getRank() - position.getRank()) === 0)
        // ^ +(Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) === 0))  === 1;

        // return (((+bishop) ^ (+rook)) === 1) &&
        // (this.position.getRank() != position.getRank() || this.position.getFile() != this.position.getFile());

        const bishopLikeMove = Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) ===

            Math.abs(this.position.getRank() - position.getRank());



        const rookLikeMove = (+(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0) === 0)

            ^ +(this.position.getRank() - position.getRank() === 0)) === 1

        const diffPosition = this.position.getFile() != position.getFile() || this.position.getRank() != position.getRank();



        return (+bishopLikeMove ^ +rookLikeMove) === 1 && diffPosition;
    }
}
