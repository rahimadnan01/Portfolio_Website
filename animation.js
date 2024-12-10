let start_h1 = document.querySelector(".start-h1");
let navName = document.querySelector(".nav-text");
let liElem = document.querySelectorAll(".nav-text2 ul li");
let tl = gsap.timeline();

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "Salaam",
  "Yo!",
  "Sup!",
  "Hello, World 🌎",
];
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const disableScroll = () => {
    body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    body.style.overflow = "auto";
  };

  let greet_animation = () => {
    disableScroll();

    greetings.forEach((greeting, index) => {
      setTimeout(() => {
        start_h1.textContent = greeting;
      }, index * 300);
    });

    gsap.to("#start-page", {
      top: "-100%",
      delay: 2.2,
      duration: 0.5,
      ease: "sine.in",
      onComplete: enableScroll,
    });
  };

  greet_animation();
});

navName.addEventListener("mouseenter", () => {
  gsap.to(".nav-text", {
    duration: 0.5,
    ease: "bounce.out",
    x: -10,
  });

  gsap.to(".nav-text", {
    duration: 1.5,
    text: "© Rahim Adnan!",
    ease: "power1.inOut",
    delay: 0.1,
  });
});

navName.addEventListener("mouseleave", () => {
  gsap.to(".nav-text", {
    duration: 1.5,
    text: "© Code By Rahim",
    ease: "power1.inOut",
    delay: 0.1,
    x: 0,
  });
});

liElem.forEach((li) => {
  let liCir = li.querySelector(".li-cir");
  li.addEventListener("mouseenter", () => {
    gsap.to(liCir, {
      top: 40,
      opacity: 1,
      duration: 0.7,
      ease: "elastic.inOut(1,1)",
    });
  });

  li.addEventListener("mouseleave", () => {
    gsap.to(liCir, {
      top: -45,
      opacity: 0,
      duration: 0.5,
      ease: "elastic.inOut(1,1)",
    });
  });
});

// main page name animation
gsap.to(".nav-text4 p", {
  x: 2800,
  repeat: -1,
  duration: 10,
  ease: "power1.inOut",
});

gsap.to(".fa-globe", {
  rotate: 360,
  repeat: -1,
  scrub: 2,
  duration: 2,
  
});
