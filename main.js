let scrolling = () => {
  let scrollItem = document.querySelectorAll(".scroll");
  for (var i = 0; i < scrollItem.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = scrollItem[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      scrollItem[i].classList.add("active");
    } else {
      scrollItem[i].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", scrolling);
// To check the scroll position on page load
scrolling();

// -----------------------------------------------------------------------------

const counters = document.querySelectorAll(".counter .cont");
const container = document.querySelector(".counter");
let activated = false;

window.addEventListener("scroll", () => {
  if (
    pageYOffset > container.offsetTop - container.offsetHeight - 200 &&
    activated === false
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
      let count = 0;
      let updateCount = () => {
        const target = parseInt(counter.getAttribute("data-count"));
        if (count < target) {
          count++;
          counter.innerText = count;
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
      activated = true;
    });
  } else if (
    pageYOffset < container.offsetTop - container.offsetHeight - 500 ||
    (pageXOffset === 0 && activated === true)
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
    });
    activated = false;
  }
});
