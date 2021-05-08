let userAnswer = document.querySelector("#userAnswer");
let logo = document.querySelector("#logo");
let timeClock = document.querySelector("#timeClock");
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
let radioButtonA = document.querySelector("#radioButtonA");
let radioButtonB = document.querySelector("#radioButtonB");
let radioButtonC = document.querySelector("#radioButtonC");
let radioButtonD = document.querySelector("#radioButtonD");
let startButton = document.querySelector("#startButton");
let submitButton = document.querySelector("#submitButton");
let imgArray = [
  "aquaman.png",
  "autoBots.png",
  "avenger.png",
  "batman.png",
  "batman.png",
  "blackPanther.png",
  "blackWidow.png",
  "captainAmerica.png",
  "captainMarvel.png",
  "deadPool.png",
  "decepticon.png",
  "fantasticFour.png",
  "flash.png",
  "greatAmericanHero.png",
  "greenGoblin.png",
  "greenLantern.png",
  "hawk.png",
  "hulk.png",
  "hulkRed.png",
  "incredibles.png",
  "nightWing.png",
  "robin.png",
  "spawn.png",
  "spiderman.png",
  "storm.png",
  "superman.png",
  "thePunisher.png",
  "thor.png",
  "thundercats.png",
  "wolverine.png",
  "wonderWoman.png",
];
let correctAnswer;
let timeleft = 10;
let scorePictureXCordinate = 100;
let scorePictureYCordinate = 0;
let arrayOfScoreBoardImg = [];
let scoreBoardImgCounter = 0;
let scoreBoardImage = new Image();
let timeLeftInterval;

function gameCompleted() {
  logo.src = "./assets/images/yes.png";
  clearInterval(timeLeftInterval);
  drawBackground();
  startButton.style.display = "inline";
  submitButton.style.display = "none";
  answerA.textContent = "You";
  answerB.textContent = "Guessed";
  answerC.textContent = "Them";
  answerD.textContent = "All";
  scoreBoardImgCounter = 0;
  scorePictureXCordinate = 100;
  scorePictureYCordinate = 0;
  imgArray = [
    "aquaman.png",
    "autoBots.png",
    "avenger.png",
    "batman.png",
    "batman.png",
    "blackPanther.png",
    "blackWidow.png",
    "captainAmerica.png",
    "captainMarvel.png",
    "deadPool.png",
    "decepticon.png",
    "fantasticFour.png",
    "flash.png",
    "greatAmericanHero.png",
    "greenGoblin.png",
    "greenLantern.png",
    "hawk.png",
    "hulk.png",
    "hulkRed.png",
    "incredibles.png",
    "nightWing.png",
    "robin.png",
    "spawn.png",
    "spiderman.png",
    "storm.png",
    "superman.png",
    "thePunisher.png",
    "thor.png",
    "thundercats.png",
    "wolverine.png",
    "wonderWoman.png",
  ];
}

// wrong answer is called when the wrong answer is submitted
function wrongAnswer() {
  drawBackground();
  clearInterval(timeLeftInterval);
  answerA.textContent = "Game";
  answerB.textContent = "Over";
  answerC.textContent = "Incorrect";
  answerD.textContent = "Answer";
  startButton.style.display = "inline";
  submitButton.style.display = "none";
  logo.src = "./assets/images/no2.png";
  scoreBoardImgCounter = 0;
  timeClock.textContent = null;
  scorePictureXCordinate = 100;
  scorePictureYCordinate = 0;
  imgArray = [
    "aquaman.png",
    "autoBots.png",
    "avenger.png",
    "batman.png",
    "batman.png",
    "blackPanther.png",
    "blackWidow.png",
    "captainAmerica.png",
    "captainMarvel.png",
    "deadPool.png",
    "decepticon.png",
    "fantasticFour.png",
    "flash.png",
    "greatAmericanHero.png",
    "greenGoblin.png",
    "greenLantern.png",
    "hawk.png",
    "hulk.png",
    "hulkRed.png",
    "incredibles.png",
    "nightWing.png",
    "robin.png",
    "spawn.png",
    "spiderman.png",
    "storm.png",
    "superman.png",
    "thePunisher.png",
    "thor.png",
    "thundercats.png",
    "wolverine.png",
    "wonderWoman.png",
  ];
}

// submitAnswer is called when either an answer is submited or 10 seconds has elapsed via the setInterval function

function submitAnswer() {
  timeleft = 10;
  timeClock.textContent = timeleft;
  if (scoreBoardImgCounter > 22) {
    gameCompleted();
  } else {
    if (radioButtonA.checked) {
      if (radioButtonA.value == correctAnswer) {
        drawScoreImage(correctAnswer);
        initGame();
      } else {
        wrongAnswer();
      }
    } else if (radioButtonB.checked) {
      if (radioButtonB.value == correctAnswer) {
        drawScoreImage(correctAnswer);
        initGame();
      } else {
        wrongAnswer();
      }
    } else if (radioButtonC.checked) {
      if (radioButtonC.value == correctAnswer) {
        drawScoreImage(correctAnswer);
        initGame();
      } else {
        wrongAnswer();
      }
    } else {
      if (radioButtonD.value == correctAnswer) {
        drawScoreImage(correctAnswer);
        initGame();
      } else {
        wrongAnswer();
      }
    }
  }
}

let randomImg;

function findNameInArray(img) {
  return img >= randomImg;
}
// initGame picks a random image from the array as the correctanswer and then picks 3 unique additional images to fill the rest of the A B C D multiple choice values.
function initGame() {
  timeClock.textContent = timeleft;
  let imgAnswerArray = [
    "aquaman.png",
    "autoBots.png",
    "avenger.png",
    "batman.png",
    "batman.png",
    "blackPanther.png",
    "blackWidow.png",
    "captainAmerica.png",
    "captainMarvel.png",
    "deadPool.png",
    "decepticon.png",
    "fantasticFour.png",
    "flash.png",
    "greatAmericanHero.png",
    "greenGoblin.png",
    "greenLantern.png",
    "hawk.png",
    "hulk.png",
    "hulkRed.png",
    "incredibles.png",
    "nightWing.png",
    "robin.png",
    "spawn.png",
    "spiderman.png",
    "storm.png",
    "superman.png",
    "thePunisher.png",
    "thor.png",
    "thundercats.png",
    "wolverine.png",
    "wonderWoman.png",
  ];
  let randomNumber1 = Math.floor(Math.random() * imgArray.length);
  randomImg = imgArray[randomNumber1];
  imgArray.splice(randomNumber1, 1);
  let imageToSplice = imgAnswerArray.findIndex(findNameInArray);
  imgAnswerArray.splice(imageToSplice, 1);
  let randomNumber2 = Math.floor(Math.random() * imgAnswerArray.length);
  let randomAnswer1 = imgAnswerArray[randomNumber2];
  imgAnswerArray.splice(randomNumber2, 1);
  let randomNumber3 = Math.floor(Math.random() * imgAnswerArray.length);
  let randomAnswer2 = imgAnswerArray[randomNumber3];
  imgAnswerArray.splice(randomNumber3, 1);
  let randomNumber4 = Math.floor(Math.random() * imgAnswerArray.length);
  let randomAnswer3 = imgAnswerArray[randomNumber4];
  correctAnswer = randomImg.substring(0, randomImg.indexOf("."));
  let incorrectAnswer1 = randomAnswer1.substring(0, randomAnswer1.indexOf("."));
  let incorrectAnswer2 = randomAnswer2.substring(0, randomAnswer2.indexOf("."));
  let incorrectAnswer3 = randomAnswer3.substring(0, randomAnswer3.indexOf("."));
  let randomAnswerArry = [
    correctAnswer,
    incorrectAnswer1,
    incorrectAnswer2,
    incorrectAnswer3,
  ];
  let randomNumberAnswerA = Math.floor(Math.random() * randomAnswerArry.length);
  let randomValueAnswerA = randomAnswerArry[randomNumberAnswerA];
  let randomValueAnswerACaplized =
    randomValueAnswerA.charAt(0).toUpperCase() + randomValueAnswerA.slice(1);
  answerA.textContent = randomValueAnswerACaplized;
  radioButtonA.value = randomValueAnswerA;
  randomAnswerArry.splice(randomNumberAnswerA, 1);
  let randomNumberAnswerB = Math.floor(Math.random() * randomAnswerArry.length);
  let randomValueAnswerB = randomAnswerArry[randomNumberAnswerB];
  let randomValueAnswerBCaplized =
    randomValueAnswerB.charAt(0).toUpperCase() + randomValueAnswerB.slice(1);
  answerB.textContent = randomValueAnswerBCaplized;
  radioButtonB.value = randomValueAnswerB;
  randomAnswerArry.splice(randomNumberAnswerB, 1);
  let randomNumberAnswerC = Math.floor(Math.random() * randomAnswerArry.length);
  let randomValueAnswerC = randomAnswerArry[randomNumberAnswerC];
  let randomValueAnswerCCaplized =
    randomValueAnswerC.charAt(0).toUpperCase() + randomValueAnswerC.slice(1);
  answerC.textContent = randomValueAnswerCCaplized;
  radioButtonC.value = randomValueAnswerC;
  randomAnswerArry.splice(randomNumberAnswerC, 1);
  let randomValueAnswerD =
    randomAnswerArry[Math.floor(Math.random() * randomAnswerArry.length)];
  let randomValueAnswerDCaplized =
    randomValueAnswerD.charAt(0).toUpperCase() + randomValueAnswerD.slice(1);
  answerD.textContent = randomValueAnswerDCaplized;
  radioButtonD.value = randomValueAnswerD;
  logo.src = "./assets/images/" + randomImg;
}

// start game hide the start button and shows the submit button. It also calls InitGame and calls set interval which calls submitAnswer every 10 seconds.
function startGame() {
  submitButton.style.display = "inline";
  startButton.style.display = "none";
  initGame();
  timeLeftInterval = setInterval(function () {
    if (timeleft <= 0) {
      timeleft = 10;
      timeClock.textContent = timeleft;
      submitAnswer();
    }
    timeleft -= 1;
    timeClock.textContent = timeleft;
  }, 1000);
}

//////////////////////////////////////Canvas Code////////////////////////////////////
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let img = new Image();
img.src = "./assets/images/sandstone.png";
img.onload = function () {
  drawBackground();
};

function drawBackground() {
  ctx.drawImage(img, 0, 0);
}
// the drawScoreImage function  the background and each score symbol onto the canvas. The conditional statement is place the symbols.
function drawScoreImage(value) {
  let imagesize = 75;
  arrayOfScoreBoardImg.push(new Image());
  arrayOfScoreBoardImg[scoreBoardImgCounter].src =
    "./assets/scoreboard/" + value + ".png";
  scoreBoardImage.src = "./assets/scoreboard/" + value + ".png";
  scoreBoardImage.onload = function () {
    ctx.drawImage(
      scoreBoardImage,
      scorePictureXCordinate,
      scorePictureYCordinate,
      imagesize,
      imagesize
    );
  };

  scorePictureXCordinate = scorePictureXCordinate + imagesize;
  if (scorePictureXCordinate >= 600 && scorePictureYCordinate < 75) {
    scorePictureYCordinate = 75;
    scorePictureXCordinate = 175;
  } else if (scorePictureXCordinate >= 600 && scorePictureYCordinate == 75) {
    scorePictureYCordinate = 150;
    scorePictureXCordinate = 175;
  } else if (scorePictureXCordinate >= 600 && scorePictureYCordinate == 150) {
    scorePictureYCordinate = 225;
    scorePictureXCordinate = 175;
  } else if (scorePictureXCordinate >= 600 && scorePictureYCordinate == 225) {
    scorePictureYCordinate = 300;
    scorePictureXCordinate = 175;
  } else if (scorePictureXCordinate >= 600 && scorePictureYCordinate == 300) {
    scorePictureYCordinate = 375;
    scorePictureXCordinate = 175;
  }
  scoreBoardImgCounter++;
}
