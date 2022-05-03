import Lamp from './lamp';
export default class Button {

    public lamp2: Lamp | undefined;

    constructor(private lamp: Swichable) {
    }

    onButtonListener(status: boolean) {
        status ? this.lamp.turnOn() : this.lamp.turnOff();
    }
}