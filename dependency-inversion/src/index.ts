import Button from '../button';
import Lamp from '../lamp';

let lamp: Swichable = new Lamp();

let button = new Button(lamp);

button.onButtonListener(false);
button.onButtonListener(true);