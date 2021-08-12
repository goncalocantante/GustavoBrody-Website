
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);


var title = document.getElementsByClassName("landing-page");

title.style.setProperty('height', window.innerHeight);
console.log(title.style.height);


