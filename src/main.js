import './style/main.scss';

const qs = (element) => document.querySelector(element);

document.addEventListener('DOMContentLoaded', () => {

    const broccoli = qs('.JS-broccoli');
    let angle=0;

    broccoli.addEventListener('click', rollTheHollyBroccoli);

    function rollTheHollyBroccoli() {
        let randomAngle = Math.floor((Math.random()*360)+1);
        angle += 360*2+randomAngle;
        broccoli.classList.add('let-it-roll');
        broccoli.style.transform = "rotateZ(-"+angle+"deg)";
    }

});
