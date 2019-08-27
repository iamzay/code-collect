import nav from "./nav";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import css from "./footer.css";
import buttonStyles from "./button.css";

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

button.addEventListener('click', e => {
    import('./footer').then((module) => {
        document.body.appendChild(module.footer);
    })
})

document.body.appendChild(button);
document.body.appendChild(image);
