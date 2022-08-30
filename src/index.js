console.log('test');
const slides = document.querySelector('.allImages');
const rightButton = document.querySelector('#right');
const leftButton = document.querySelector('#left');
const radioButtons = document.querySelectorAll('.selectSlide');
let index = document.querySelector('input[name="selectSlide"]:checked').value;
let intervalID = window.setInterval(rightClick, 5000);

radioButtons.forEach((radio) => {
  radio.onchange = () => {
    console.log(radio.value);
    index = radio.value - 1;
    //rightClick();
    if (index == 7) {
      index = 0;
    }
    console.log('test');
    slides.style.left = `${-225 * index}px`;
    //index++;
    // console.log(index);
    clearInterval(intervalID);
    intervalID = window.setInterval(rightClick, 5000);
  };
});
function rightClick() {
  let last = parseInt(
    document.querySelector('input[name="selectSlide"]:checked').value
  );
  console.log(last);
  console.log(last + 1);
  if (last == 7) {
    last = 0;
  }

  document.querySelector(`input[value="${parseInt(last) + 1}"]`).checked = true;
  document.querySelector(`input[value="${parseInt(last) + 1}"]`).onchange();
}
function leftClick() {
  let last = parseInt(
    document.querySelector('input[name="selectSlide"]:checked').value
  );
  console.log(last);
  console.log(last + -1);
  if (last == 1) {
    last = 8;
  }

  document.querySelector(`input[value="${parseInt(last) - 1}"]`).checked = true;
  document.querySelector(`input[value="${parseInt(last) - 1}"]`).onchange();
}

rightButton.addEventListener('click', () => {
  rightClick();
});
leftButton.addEventListener('click', () => {
  leftClick();
});
