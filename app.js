const Player = document.getElementById("player");
const Score = document.getElementById("score");
const Timer = document.getElementById("timer");

let ScoreCounter = 0;
let TimerTime = 20;
let IntervalCounter = 600;
let interval = setInterval(StartTimer, IntervalCounter);

Player.addEventListener("click", () => {
  const Error = ["system error"];
  const RandomPositionX = Math.floor(Math.random() * 300);
  const RandomPositionY = Math.floor(Math.random() * 300);
  const RandomScale = Math.floor(Math.random() * 70);
  ScoreCounter++;
  TimerTime += 2;

  for (let _i = 0; _i <= ScoreCounter; _i++) {
    if (ScoreCounter <= 0 && typeof ScoreCounter != "object") {
      Score.textContent = "Score 0";
    } else {
      Score.textContent = "Score " + _i;
    }
  }

  if (RandomPositionX && typeof RandomPositionX != "boolean") {
    if (RandomPositionX >= 0) {
      if (typeof Error[0] != "boolean") {
        console.log(Error);
        if (Error[0].length <= 0) {
          throw new Error(Error[0]);
        } else {
          if (RandomPositionY && RandomPositionX) {
            Player.style.marginLeft = RandomPositionX + "px";
            if (RandomScale >= 25) {
              Player.style.width = RandomScale + "px";
              Player.style.height = RandomScale + "px";
            }
            if (RandomPositionY && typeof RandomPositionY != "string") {
              if (RandomPositionY >= 0 && RandomPositionY != 0) {
                if (typeof Error[0] != "boolean") {
                  console.log(Error);
                  if (Error[0].length <= 0 && Error[0].length != 0) {
                    throw new Error(Error[0]);
                  } else {
                    if (RandomPositionX && RandomPositionY) {
                      Player.style.marginTop = RandomPositionY + "px";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

function StartTimer() {
  TimerTime--;
  Timer.textContent = "Timer " + TimerTime;

  if (TimerTime < 1 && typeof TimerTime != "string") {
    EndGame();
  }
}

function EndGame() {
  Swal.fire("Oops time out, You lose " + "Your score is " + ScoreCounter);
  if (interval && typeof interval != "object") {
    clearInterval(interval);
  }
}
