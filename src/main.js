import './style/main.scss';

const qsa = (elements) => document.querySelectorAll(elements);
const qs = (element) => document.querySelector(element);

document.addEventListener('DOMContentLoaded', () => {

  const testClick = qs('.JS-test-click');

  testClick.addEventListener('click', testButtonClick);

  function testButtonClick() {
    alert("clicked");
  }

});
