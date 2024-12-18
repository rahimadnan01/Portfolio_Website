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
// document.addEventListener("DOMContentLoaded", () => {
//   const body = document.body;

//   const disableScroll = () => {
//     body.style.overflow = "hidden";
//   };

//   const enableScroll = () => {
//     body.style.overflow = "auto";
//   };

//   let greet_animation = () => {
//     disableScroll();

//     greetings.forEach((greeting, index) => {
//       setTimeout(() => {
//         start_h1.textContent = greeting;
//       }, index * 300);
//     });

//     gsap.to("#start-page", {
//       top: "-100%",
//       delay: 2.2,
//       duration: 0.5,
//       ease: "sine.in",
//       onComplete: enableScroll,
//     });
//   };

//   greet_animation();
// });

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

gsap.to(".about-text p", {
  opacity: 1,
  y: -20,
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: ".about-text p",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: 2,
  },
});
gsap.to(".svg-con", {
  opacity: 1,
  y: -60,
  duration: 0.5,
  ease: "ease-out",
  scrollTrigger: {
    trigger: ".svg-con",
    scroller: "body",
    start: "top 60%",
    end: "top 20%",
    scrub: 2,
  },
});

// svg Animation
let svgContainer = document.querySelector(".svg-con");
let cyInit = "100";
let cyFin = "100";

svgContainer.addEventListener("mousemove", (event) => {
  let rect = svgContainer.getBoundingClientRect();
  let cursorX = event.clientX - rect.left;
  let cursorY = event.clientY - rect.top;

  let clampX = Math.max(50, Math.min(150, cursorX));
  let clampY = Math.max(50, Math.min(150, cursorY));

  gsap.to("svg circle", {
    fill: "#455ce9",
    duration: 0.5,
    ease: "power3.out",
  });

  gsap.to("svg circle", {
    attr: { cx: clampX, cy: clampY },
    duration: 0.5,
    ease: "power3.out",
  });
});

svgContainer.addEventListener("mouseleave", () => {
  gsap.to("svg circle", {
    attr: { cx: 100, cy: 100 },
    duration: 1,
    ease: "elastic.out(1, 0.3)",
  });

  gsap.to("svg circle", {
    fill: "#1e1f21",
    duration: 0.5,
    ease: "power3.inOut",
  });
});

// work animation

let works = document.querySelectorAll(".work1"); // Select all work divs

works.forEach((item) => {
  const workAnime = item.querySelector(".work1-animation"); // Select animation specific to this div
  let paraLeft = item.querySelector(".left");
  let paraRight = item.querySelector(".right");

  item.addEventListener("mousemove", (event) => {
    let rect = item.getBoundingClientRect();
    let cursorX = event.clientX - rect.left;
    let cursorY = event.clientY - rect.top;

    // Clamp cursor positions
    let clampX = Math.max(50, Math.min(rect.width - 50, cursorX));
    let clampY = Math.max(50, Math.min(rect.height - 50, cursorY));

    // Update animation position
    workAnime.style.top = `${clampY}px`;
    workAnime.style.left = `${clampX}px`;

    // Apply GSAP animations
    gsap.to(workAnime, {
      opacity: 1,
      scale: 1.3,
      ease: "power3.out",
      scrub: 1.5,
    });
    gsap.to(paraLeft, {
      opacity: 0.7,
      ease: "power3.out",
      scrub: 1,
    });
    gsap.to(paraRight, {
      opacity: 0.7,
      ease: "power3.out",
      scrub: 1,
    });
  });

  item.addEventListener("mouseleave", () => {
    workAnime.style.left = "50%"; // Reset to center (adjust as necessary)
    workAnime.style.top = "50%";

    // Reset animations
    gsap.to(workAnime, {
      opacity: 0,
      scrub: 1,
    });
    gsap.to(paraLeft, {
      opacity: 1,
      ease: "power3.out",
      scrub: 1.5,
    });
    gsap.to(paraRight, {
      opacity: 1,
      ease: "power3.out",
      scrub: 1.5,
    });
  });
});

// Projects animation
gsap.to(".projectLine-1", {
  x: 150,
  duration: 2,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".projectLine-1",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
  },
});
gsap.to(".projectLine-2", {
  x: -150,
  duration: 2,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".projectLine-2",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
  },
});

// Contact Svg
let contactSvgContainer = document.querySelector(".contact-sectionSvg");
let cyInit2 = "100";
let cyFin2 = "100";
contactSvgContainer.addEventListener("mousemove", (event) => {
  let rect = contactSvgContainer.getBoundingClientRect();
  let cursorX = event.clientX - rect.left;
  let cursorY = event.clientY - rect.top;

  let clampX = Math.max(50, Math.min(150, cursorX));
  let clampY = Math.max(50, Math.min(150, cursorY));

  gsap.to("svg circle", {
    attr: { cx: clampX, cy: clampY },
    duration: 0.5,
    ease: "power3.out",
  });
});

contactSvgContainer.addEventListener("mouseleave", () => {
  gsap.to("svg circle", {
    attr: { cx: 100, cy: 100 },
    duration: 1,
    ease: "elastic.out(1, 0.3)",
  });
});
