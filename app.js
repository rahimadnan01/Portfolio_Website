// ! creating work sections
let work_section = document.querySelector(".work-section");
let work_data = [
  {
    paraLeft: "Space-x Website",
    paraRight: "Development",
    image: "./assets/spacex-project.png",
  },
  {
    paraLeft: "Wanderlust",
    paraRight: "Development",
    image: "./assets/wanderlst.png",
  },
  {
    paraLeft: "Portfolio Website ",
    paraRight: "Development",
    image: "./assets/portfolio.png",
  },
  {
    paraLeft: "Hospital Management system ",
    paraRight: "Development",
    image: "./assets/Appointment.png",
  },
  {
    paraLeft: "Sidcup Landing page ",
    paraRight: "Development",
    image: "./assets/Sidcup.png",
  },
];

for (let i = 0; i <= work_data.length; i++) {
  work_section.innerHTML += ` <div class="work1" id="${i}">
        <p class="left">${work_data[i].paraLeft}</p>
        <div class="work1-animation">
          <img id="${i}" src="${work_data[i].image}" alt="" />
          <div class="view">view</div>
        </div>
        <p class="right">${work_data[i].paraRight}</p>
      </div>`;
}
