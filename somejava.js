// const data = fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const WorkCurrent = document.querySelector(".workContent .cardInfo");
const WorkPrevious = document.querySelector(".workContent .previousWeek");
const Play = document.querySelector(".playContent");
const Study = document.querySelector(".studyContent");
const Exercise = document.querySelector(".exerciseContent");
const Social = document.querySelector(".socialContent");
const SelfCare = document.querySelector(".selfcareContent");

async function loadJson() {
  const data = await fetch("./data.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  return data;
}

function loadDaily() {
  //   const data = loadJson();
  for (let x = 0; x < data.length; x++) {
    let objTitle = data[x].title;
    console.log(objTitle);
    let objTimeFrames = data[x].timeframes;
    console.log(objTimeFrames.daily.current);
    console.log(objTimeFrames.daily.previous);

    if (objTitle === "Work") {
      WorkCurrent.innerHTML = `<h3>${objTimeFrames.daily.current}hrs</h3>`;
      WorkPrevious.innerHTML = `<h4>Yesterday - ${objTimeFrames.daily.previous}hrs</h4>`;
    }
  }
}

//   console.log(data[0]);

function loadWeekly() {}

function loadMonthly() {}

// if title =
