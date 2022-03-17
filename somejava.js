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
const PlayCurrent = document.querySelector(".playContent .cardInfo");
const PlayPrevious = document.querySelector(".playContent .previousWeek");
const StudyCurrent = document.querySelector(".studyContent .cardInfo");
const StudyPrevious = document.querySelector(".studyContent .previousWeek");
const ExerciseCurrent = document.querySelector(".exerciseContent .cardInfo");
const ExercisePrevious = document.querySelector(
  ".exerciseContent .previousWeek"
);
const SocialCurrent = document.querySelector(".socialContent .cardInfo");
const SocialPrevious = document.querySelector(".socialContent .previousWeek");
const SelfCareCurrent = document.querySelector(".selfcareContent .cardInfo");
const SelfCarePrevious = document.querySelector(
  ".selfcareContent .previousWeek"
);

async function loadJson() {
  const data = await fetch("./data.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  return data;
}

function loadDaily() {
  for (let x = 0; x < data.length; x++) {
    let objTitle = data[x].title;
    let objTimeFrames = data[x].timeframes;

    if (objTitle === "Work") {
      WorkCurrent.innerHTML = `<h3>${objTimeFrames.daily.current}hrs</h3>`;
      WorkPrevious.innerHTML = `<h4>Yesterday - ${objTimeFrames.daily.previous}hrs</h4>`;
    }
    if (objTitle === "Study") {
      StudyCurrent.innerHTML = `<h3>${objTimeFrames.daily.current}hrs</h3>`;
      StudyPrevious.innerHTML = `<h4>Yesterday - ${objTimeFrames.daily.previous}hrs</h4>`;
    }
    if (objTitle === "Play") {
      PlayCurrent.innerHTML = `<h3>${objTimeFrames.daily.current}hrs</h3>`;
      PlayPrevious.innerHTML = `<h4>Yesterday - ${objTimeFrames.daily.previous}hrs</h4>`;
    }
    if (objTitle === "Exercise") {
      ExerciseCurrent.innerHTML = `<h3>${objTimeFrames.daily.current}hrs</h3>`;
      ExercisePrevious.innerHTML = `<h4>Yesterday - ${objTimeFrames.daily.previous}hrs</h4>`;
    }
    if (objTitle === "Social") {
      SocialCurrent.innerHTML = `<h3>${objTimeFrames.daily.current}hrs</h3>`;
      SocialPrevious.innerHTML = `<h4>Yesterday - ${objTimeFrames.daily.previous}hrs</h4>`;
    }
    if (objTitle === "Self Care") {
      SelfCareCurrent.innerHTML = `<h3>${objTimeFrames.daily.current}hrs</h3>`;
      SelfCarePrevious.innerHTML = `<h4>Yesterday - ${objTimeFrames.daily.previous}hrs</h4>`;
    }
  }
}

//   console.log(data[0]);

function loadWeekly() {
  for (let x = 0; x < data.length; x++) {
    let objTitle = data[x].title;
    let objTimeFrames = data[x].timeframes;

    if (objTitle === "Work") {
      WorkCurrent.innerHTML = `<h3>${objTimeFrames.weekly.current}hrs</h3>`;
      WorkPrevious.innerHTML = `<h4>Last Week - ${objTimeFrames.weekly.previous}hrs</h4>`;
    }
    if (objTitle === "Study") {
      StudyCurrent.innerHTML = `<h3>${objTimeFrames.weekly.current}hrs</h3>`;
      StudyPrevious.innerHTML = `<h4>Last Week - ${objTimeFrames.weekly.previous}hrs</h4>`;
    }
    if (objTitle === "Play") {
      PlayCurrent.innerHTML = `<h3>${objTimeFrames.weekly.current}hrs</h3>`;
      PlayPrevious.innerHTML = `<h4>Last Week - ${objTimeFrames.weekly.previous}hrs</h4>`;
    }
    if (objTitle === "Exercise") {
      ExerciseCurrent.innerHTML = `<h3>${objTimeFrames.weekly.current}hrs</h3>`;
      ExercisePrevious.innerHTML = `<h4>Last Week - ${objTimeFrames.weekly.previous}hrs</h4>`;
    }
    if (objTitle === "Social") {
      SocialCurrent.innerHTML = `<h3>${objTimeFrames.weekly.current}hrs</h3>`;
      SocialPrevious.innerHTML = `<h4>Last Week - ${objTimeFrames.weekly.previous}hrs</h4>`;
    }
    if (objTitle === "Self Care") {
      SelfCareCurrent.innerHTML = `<h3>${objTimeFrames.weekly.current}hrs</h3>`;
      SelfCarePrevious.innerHTML = `<h4>Last Week - ${objTimeFrames.weekly.previous}hrs</h4>`;
    }
  }
}

function loadMonthly() {
  for (let x = 0; x < data.length; x++) {
    let objTitle = data[x].title;
    let objTimeFrames = data[x].timeframes;

    if (objTitle === "Work") {
      WorkCurrent.innerHTML = `<h3>${objTimeFrames.monthly.current}hrs</h3>`;
      WorkPrevious.innerHTML = `<h4>Last Month - ${objTimeFrames.monthly.previous}hrs</h4>`;
    }
    if (objTitle === "Study") {
      StudyCurrent.innerHTML = `<h3>${objTimeFrames.monthly.current}hrs</h3>`;
      StudyPrevious.innerHTML = `<h4>Last Month - ${objTimeFrames.monthly.previous}hrs</h4>`;
    }
    if (objTitle === "Play") {
      PlayCurrent.innerHTML = `<h3>${objTimeFrames.monthly.current}hrs</h3>`;
      PlayPrevious.innerHTML = `<h4>Last Month - ${objTimeFrames.monthly.previous}hrs</h4>`;
    }
    if (objTitle === "Exercise") {
      ExerciseCurrent.innerHTML = `<h3>${objTimeFrames.monthly.current}hrs</h3>`;
      ExercisePrevious.innerHTML = `<h4>Last Month - ${objTimeFrames.monthly.previous}hrs</h4>`;
    }
    if (objTitle === "Social") {
      SocialCurrent.innerHTML = `<h3>${objTimeFrames.monthly.current}hrs</h3>`;
      SocialPrevious.innerHTML = `<h4>Last Month - ${objTimeFrames.monthly.previous}hrs</h4>`;
    }
    if (objTitle === "Self Care") {
      SelfCareCurrent.innerHTML = `<h3>${objTimeFrames.monthly.current}hrs</h3>`;
      SelfCarePrevious.innerHTML = `<h4>Last Month - ${objTimeFrames.monthly.previous}hrs</h4>`;
    }
  }
}

// if title =
