let start_h1 = document.querySelector(".start-h1");
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
let greet_animation = () => {
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
  });
};
greet_animation();
