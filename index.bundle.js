/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log('test');
const slides = document.querySelector('.allImages');
const rightButton = document.querySelector('#right');
const leftButton = document.querySelector('#left');
const radioButtons = document.querySelectorAll('.selectSlide');
let index = document.querySelector('input[name="selectSlide"]:checked').value;
let intervalID = window.setInterval(rightClick, 5000);

function checkWeatherAPI() {
  // go check API
  console.log('checking weather API');
}
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsbUJBQW1CO0FBQzVELHlDQUF5QyxtQkFBbUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLG1CQUFtQjtBQUM1RCx5Q0FBeUMsbUJBQW1CO0FBQzVEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGlkZXNob3cvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ3Rlc3QnKTtcbmNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGxJbWFnZXMnKTtcbmNvbnN0IHJpZ2h0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0Jyk7XG5jb25zdCBsZWZ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQnKTtcbmNvbnN0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RTbGlkZScpO1xubGV0IGluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInNlbGVjdFNsaWRlXCJdOmNoZWNrZWQnKS52YWx1ZTtcbmxldCBpbnRlcnZhbElEID0gd2luZG93LnNldEludGVydmFsKHJpZ2h0Q2xpY2ssIDUwMDApO1xuXG5mdW5jdGlvbiBjaGVja1dlYXRoZXJBUEkoKSB7XG4gIC8vIGdvIGNoZWNrIEFQSVxuICBjb25zb2xlLmxvZygnY2hlY2tpbmcgd2VhdGhlciBBUEknKTtcbn1cbnJhZGlvQnV0dG9ucy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICByYWRpby5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyYWRpby52YWx1ZSk7XG4gICAgaW5kZXggPSByYWRpby52YWx1ZSAtIDE7XG4gICAgLy9yaWdodENsaWNrKCk7XG4gICAgaWYgKGluZGV4ID09IDcpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICBzbGlkZXMuc3R5bGUubGVmdCA9IGAkey0yMjUgKiBpbmRleH1weGA7XG4gICAgLy9pbmRleCsrO1xuICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgIGludGVydmFsSUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwocmlnaHRDbGljaywgNTAwMCk7XG4gIH07XG59KTtcbmZ1bmN0aW9uIHJpZ2h0Q2xpY2soKSB7XG4gIGxldCBsYXN0ID0gcGFyc2VJbnQoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInNlbGVjdFNsaWRlXCJdOmNoZWNrZWQnKS52YWx1ZVxuICApO1xuICBjb25zb2xlLmxvZyhsYXN0KTtcbiAgY29uc29sZS5sb2cobGFzdCArIDEpO1xuICBpZiAobGFzdCA9PSA3KSB7XG4gICAgbGFzdCA9IDA7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt2YWx1ZT1cIiR7cGFyc2VJbnQobGFzdCkgKyAxfVwiXWApLmNoZWNrZWQgPSB0cnVlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt2YWx1ZT1cIiR7cGFyc2VJbnQobGFzdCkgKyAxfVwiXWApLm9uY2hhbmdlKCk7XG59XG5mdW5jdGlvbiBsZWZ0Q2xpY2soKSB7XG4gIGxldCBsYXN0ID0gcGFyc2VJbnQoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInNlbGVjdFNsaWRlXCJdOmNoZWNrZWQnKS52YWx1ZVxuICApO1xuICBjb25zb2xlLmxvZyhsYXN0KTtcbiAgY29uc29sZS5sb2cobGFzdCArIC0xKTtcbiAgaWYgKGxhc3QgPT0gMSkge1xuICAgIGxhc3QgPSA4O1xuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdmFsdWU9XCIke3BhcnNlSW50KGxhc3QpIC0gMX1cIl1gKS5jaGVja2VkID0gdHJ1ZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdmFsdWU9XCIke3BhcnNlSW50KGxhc3QpIC0gMX1cIl1gKS5vbmNoYW5nZSgpO1xufVxuXG5yaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmlnaHRDbGljaygpO1xufSk7XG5sZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBsZWZ0Q2xpY2soKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9