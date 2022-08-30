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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLG1CQUFtQjtBQUM1RCx5Q0FBeUMsbUJBQW1CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxtQkFBbUI7QUFDNUQseUNBQXlDLG1CQUFtQjtBQUM1RDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xpZGVzaG93Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCd0ZXN0Jyk7XG5jb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsSW1hZ2VzJyk7XG5jb25zdCByaWdodEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodCcpO1xuY29uc3QgbGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0Jyk7XG5jb25zdCByYWRpb0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0U2xpZGUnKTtcbmxldCBpbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJzZWxlY3RTbGlkZVwiXTpjaGVja2VkJykudmFsdWU7XG5sZXQgaW50ZXJ2YWxJRCA9IHdpbmRvdy5zZXRJbnRlcnZhbChyaWdodENsaWNrLCA1MDAwKTtcblxucmFkaW9CdXR0b25zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gIHJhZGlvLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJhZGlvLnZhbHVlKTtcbiAgICBpbmRleCA9IHJhZGlvLnZhbHVlIC0gMTtcbiAgICAvL3JpZ2h0Q2xpY2soKTtcbiAgICBpZiAoaW5kZXggPT0gNykge1xuICAgICAgaW5kZXggPSAwO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgIHNsaWRlcy5zdHlsZS5sZWZ0ID0gYCR7LTIyNSAqIGluZGV4fXB4YDtcbiAgICAvL2luZGV4Kys7XG4gICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgaW50ZXJ2YWxJRCA9IHdpbmRvdy5zZXRJbnRlcnZhbChyaWdodENsaWNrLCA1MDAwKTtcbiAgfTtcbn0pO1xuZnVuY3Rpb24gcmlnaHRDbGljaygpIHtcbiAgbGV0IGxhc3QgPSBwYXJzZUludChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwic2VsZWN0U2xpZGVcIl06Y2hlY2tlZCcpLnZhbHVlXG4gICk7XG4gIGNvbnNvbGUubG9nKGxhc3QpO1xuICBjb25zb2xlLmxvZyhsYXN0ICsgMSk7XG4gIGlmIChsYXN0ID09IDcpIHtcbiAgICBsYXN0ID0gMDtcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3ZhbHVlPVwiJHtwYXJzZUludChsYXN0KSArIDF9XCJdYCkuY2hlY2tlZCA9IHRydWU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3ZhbHVlPVwiJHtwYXJzZUludChsYXN0KSArIDF9XCJdYCkub25jaGFuZ2UoKTtcbn1cbmZ1bmN0aW9uIGxlZnRDbGljaygpIHtcbiAgbGV0IGxhc3QgPSBwYXJzZUludChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwic2VsZWN0U2xpZGVcIl06Y2hlY2tlZCcpLnZhbHVlXG4gICk7XG4gIGNvbnNvbGUubG9nKGxhc3QpO1xuICBjb25zb2xlLmxvZyhsYXN0ICsgLTEpO1xuICBpZiAobGFzdCA9PSAxKSB7XG4gICAgbGFzdCA9IDg7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt2YWx1ZT1cIiR7cGFyc2VJbnQobGFzdCkgLSAxfVwiXWApLmNoZWNrZWQgPSB0cnVlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt2YWx1ZT1cIiR7cGFyc2VJbnQobGFzdCkgLSAxfVwiXWApLm9uY2hhbmdlKCk7XG59XG5cbnJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByaWdodENsaWNrKCk7XG59KTtcbmxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxlZnRDbGljaygpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=