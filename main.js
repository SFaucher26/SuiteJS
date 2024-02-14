let div = document.querySelectorAll("div");
let btns = document.querySelectorAll("button");
let btn = document.querySelector("#toggle");
const delay = Math.floor(Math.random() * 5000);
console.log(delay);

console.log(delay);

const addClass = () => {
  for (let i = 0; i < div.length; i++) {
    const element = div[i];
    element.classList.add("active");
  }
};

const removeClass = () => {
  for (i = 0; i < div.length; i++) {
    const element = div[i];
    element.classList.remove("active");
  }
};

const toggleClass = () => {
  for (i = 0; i < div.length; i++) {
    const element = div[i];
    element.classList.toggle("active");
  }
};

const next = () => {
  for (i = 0; i < div.length; i++) {
    const element = div[i];
    const elementNext = element.nextElementSibling;
    if (element.classList.contains("active")) {
      removeClass();
      if (elementNext.classList.contains("box")) {
        elementNext.classList.add("active");
      } else {
        div[0].classList.add("active");
      }
    }
  }
};

// const prev = () => {
//   for (i = 0; i < div.length; i++) {
//     const element = div[i];
//     const elementPrev = element.previousElementSibling;
//     if (
//       element.classList.contains("active") &&
//       elementPrev.classList.contains("box")
//     ) {
//       removeClass();
//       elementPrev.classList.add("active");
//     }
//   }
// };

btns.forEach((element) => {
  element.addEventListener("click", () => {
    // if (element.id == "prev") {
    //     prev();
    // }

    if (element.id == "next") {
      //   next();
      // Se répète toutes les 2 secondes
      let boucle = setInterval(next, 500);

      // S'arrête après le temps de la variable delay qui est un Math.random
      setTimeout(() => {
        clearInterval(boucle);
      }, delay);

    
    }
    if (element.id == "toggle") {
      toggleClass();
    }
  });
});
