var bowlsPlayed = 0;
var btn = document.getElementById("bowlings");
var disp = document.getElementById("display");
var scores = document.getElementById("scores");
var player = document.getElementById("player");
var leftBalls = document.getElementById("leftBalls");

const totalOvers = 20
const eachOver = 6
const totalBalls = totalOvers * eachOver

var numOfplayers = 10;
var totalscore = 0;


const action = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let getRandomInteger = Math.floor(Math.random() * (max - min)) + min
  return getRandomInteger;
}


btn.onclick = function () {
  bowlsPlayed++;
  let remainingBalls = totalBalls - bowlsPlayed
    disp.innerHTML = bowlsPlayed;
    scores.innerHTML = totalscore
    player.innerHTML = numOfplayers
    leftBalls.innerHTML = remainingBalls
    let bowlingMade = action(-1,7)

  let wide = -1
  let wicket = 0

  switch (bowlingMade) {
    //If wide totalScore will add up with 1
    case wide:{
      totalscore = totalscore + 1
      bowlsPlayed--
      console.log("wide",`random no. between -1 to 6 is ${bowlingMade}`,"It is a no ball so totalScore will add up by 1 ",totalscore)
    }
      break;

    //If out number of players deducted and wicket on that ball with log
    case wicket:{
      let boldonBall = (bowlsPlayed/6).toFixed(1)
      numOfplayers -= 1
      console.log("out",`random no. between -1 to 6 is ${bowlingMade}`,"Player out at ", boldonBall )
    }
    break;
    
    //numbers between 1-6 will add up the score
    default:
      totalscore = totalscore + bowlingMade
      console.log("playBall",`random no. between -1 to 6 is ${bowlingMade}`, "Current/Actual Score ",totalscore)
      break;
  }
}
