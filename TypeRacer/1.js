let txt1 = 'today we gonna take out the whole world and nobody gonna stop us from realizing our dreams, through blood, tears, sweat, we will rise from the ashes, we will rise from depth of hell, we will rise toTheSkies am i bright enough to shine in your spaces am i good enough to be your best they got all the right things on all the right places Anime is a diverse medium with distinctive production methods that have adapted in response to emergent technologies'
let txt2 = 'today is better than tomorrow, so, dont let to slip your chance, struggle for every tough moment in your life, and never gonna give you up, never gonna let you down, never gonna, turn around and hurt you i wanna take you somewhere bu i dont know where but its so cold and i dont know where add other words to the sentence after the joke. If you do, the audience will think that your take-off was only a setup for a bigger laugh coming up.'

let bigText = [txt1,txt2]

var isStarted = false

var element = document.body

let textWindow = document.getElementById("textWindow")

let inputBox = document.getElementById("wordInput")
let startButton = document.getElementById("start")
let textOfBox = document.getElementById("text")

let wrongWord = document.getElementById("wrongWordText")

let display = document.getElementById("timerButtonText")

var cnt = 0

let wordsTyped = []

var text1array = []


var intervalId

var isPaused = false;

// function stopTimer() {
//     clearInterval(intervalId);
//     // display.innerText = "";
//     // cnt = 0;
//     // isStarted = false;
// }

// function startTimer(duration, display) {
//     var timer = duration;
//     intervalId = setInterval(function time() {
//       display.innerText = timer;
//       if (timer == 0) {
//         clearInterval(intervalId);
//         congrates();
//         text1array = []
//         textOfBox.innerText = ""
//         return;
//       }
//       timer--;
//     }, 1000);
// }

function startTimer(duration, display) {
    var timer = duration;
    intervalId = setInterval(function time() {
      display.innerText = timer;
      if (timer == 0) {
        clearInterval(intervalId);
        congrates();
        text1array = []
        textOfBox.innerText = ""
        return;
      }
      if (!isPaused) { // only decrement the timer if the timer is not paused
        timer--;
      }
    }, 1000);
}

function pauseTimer() {
    clearInterval(intervalId);
    isPaused = true;
}
  
  function resumeTimer() {
    isPaused = false;
    startTimer(parseInt(display.innerText), display);
}

function congrates() {
    setTimeout(function() {
      alert(`Congratulations!\nYour type speed is: ${cnt} word per minute!`);
    }, 0);
    return;
}

function startOrReset(){

    if(isStarted === true && isPaused === true){
        resumeTimer()
        return
    }
    else if(isStarted === true&& isPaused === false){
        pauseTimer()
        return
    }

    isStarted = true

    inputBox.value = ""

    let randomNumber = Math.floor(Math.random() * bigText.length)
    textOfBox.innerText = bigText[randomNumber]
    text1array = bigText[randomNumber].split(" ")
    startTimer(60, display)
    inputBox.value = ""
}

function stopTimer() {
    clearInterval(intervalId);
    // display.innerText = "";
    // cnt = 0;
    // isStarted = false;
}

function checkForWord(event) {
  if (event.keyCode === 32 && isStarted === true) {
    let word = inputBox.value.trim(); 
    if (word.length > 0) { 
      let currentWordIndex = wordsTyped.length;
      let currentWord = text1array[currentWordIndex];
      console.log(currentWord,word)

      if (word === currentWord) { 
        cnt++;
        wordsTyped.push(word);
        wrongWord.innerText = ""
        // element.style.background = "none"
        textWindow.style.background = "none"
        textOfBox.style.color = "black"

      }else{
        // textWindow.style.backgroundImage = "url('https://abrakadabra.fun/uploads/posts/2022-03/1646409381_2-abrakadabra-fun-p-strashnie-oboi-3.jpg')";
        textWindow.style.backgroundImage = "url('https://icdn.cda.pl/vid/thumbs/e603b5c048fd8fb519f032d225e2a837.jpg_ooooxooxox_1280x720.jpg')";


        textWindow.style.backgroundSize = "cover";
        textWindow.style.zIndex = "100"
        wrongWord.innerText = currentWord
        textOfBox.style.color = "transparent"
      }
      inputBox.value = "";
    }
  }
}