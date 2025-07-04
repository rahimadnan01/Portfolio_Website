// ! creating work sections
let work_section = document.querySelector(".work-section");
let work_data = [
  {
    paraLeft: "Space-x Website",
    paraRight: "Development",
    image: "./assets/spacex-project.png",
    link: "https://stellular-biscuit-9fc2e5.netlify.app/",
  },

  {
    paraLeft: "Portfolio Website ",
    paraRight: "Development",
    image: "./assets/portfolio.png",
    link: "https://adorable-paprenjak-3e4413.netlify.app/",
  },

  {
    paraLeft: "Sidcup Landing page ",
    paraRight: "Development",
    image: "./assets/Sidcup.png",
    link: "https://unrivaled-granita-d93406.netlify.app/",
  },

  {
    paraLeft: "Flock Management System",
    paraRight: "Development and Designing",
    image: "./assets/Fms.png",
    link: "https://fms-gdb9-hafiz-rahims-projects.vercel.app/",
  },
  {
    paraLeft: "Quran Zone",
    paraRight: "Development",
    image: "./assets/quran-zone.png",
    link: "https://shiny-muffin-b81bb5.netlify.app/",
  },
];

for (let i = 0; i <= work_data.length; i++) {
  work_section.innerHTML += ` <div class="work1" id="${i}">
        <p class="left">${work_data[i].paraLeft}</p>
        <div class="work1-animation">
          <img id="${i}" src="${work_data[i].image}" alt="" />
          <div class="view"><a target="_blank" href="${work_data[i].link}">view</a></div>
        </div>
        <p class="right">${work_data[i].paraRight}</p>
      </div>`;
}
