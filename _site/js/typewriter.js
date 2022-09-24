import Typewriter from 'https://unpkg.com/typewriter-effect@latest/dist/core.js';
// const Typewriter = require('typewriter-effect/dist/core');
window.Typewriter = Typewriter;
var textArray = [
"Andrea speaks 2(?) languages",
"Andrea likes to hate on tomatoes",
"Andrea enjoys sunsets",
"Andrea loves candy corn",
"Andrea lives in oversized hoodies",
"Andrea uses her Notes app a little too frequently",
"Andrea can walk on her hands",
"Andrea jams to K-rap music",
"Andrea loves swingsets",
"Andrea is an introvert with *LOUD*  volume",
"Andrea loves taking personality tests",
"Andrea thinks you should contact her",
"Andrea loves eating spicy food, especially Shin ramen",
"Andrea dances for fun",
"Andrea is a Red Velvet (flavor and band) enjoyer",
"Andrea enjoys dressing up",
"Andrea loves her Sony headphones so much",
"Andrea thinks you should give her a job",
"Andrea says: hello! ˙ᵕ˙",
"Andrea uses emoticons so so so much",
"Andrea enjoys mid-day naps",
"৻(  •̀ ᗜ •́  ৻)",
"Andrea is a loud INFP",
"Andrea likes tomato soup, ketchup, and marinara",
"Andrea wants the Starry Night Lego set",
"Andrea loves Studio Ghibli",
"Andrea wants to visit Colmar, France",
"Andrea changes styles often",
"Andrea forgot which way her knee was supposed to go, twice",
"Andrea doodles a lot on her notes",
"Andrea is always learning something new",
"Andrea develops silly apps",
"Andrea loves teddy bears"
];


window.addEventListener('DOMContentLoaded', () => {document.getElementById('typewriter')});

var typewriter = new window.Typewriter(document.getElementById('typewriter'), {
    wrapperClassName: 'typespeed',
    delay: 60,
    loop: true
});



var numArray = [];
numberOfElems = 0;

while (numArray.length < 10) {
	var generatedNum = Math.floor(Math.random() * (textArray.length-1));
  if (!numArray.includes(generatedNum)) {
  	numArray.push(generatedNum);
  }
}

var generatedNum = Math.floor(Math.random() * (textArray.length-1)) + 1;



typewriter.typeString(textArray[numArray[0]])
  .pauseFor(1500)
  .deleteAll(15)
  .typeString(textArray[numArray[1]])
  .pauseFor(1500)
  .deleteAll(15)
  .typeString("Andrea hates tomatoes")
  .pauseFor(1500)
  .typeString('<span style="font-size:13px;"> (and celery, peas, carrots, bittermelon, bokchoy, etc. but nevermind that)</span>')
  .deleteAll(15)
  .typeString(textArray[numArray[2]])
  .pauseFor(1500)
  .deleteAll(15)
  .typeString(textArray[numArray[3]])
  .pauseFor(1500)
  .deleteAll(15)
  .typeString(textArray[numArray[4]])
  .pauseFor(1500)
  .deleteAll(15)
  .typeString(textArray[numArray[5]])
  .pauseFor(1500)
  .deleteAll(15)
  .typeString(textArray[numArray[6]])
  .pauseFor(1500)
  .deleteAll(15)
  .typeString(textArray[numArray[7]])
  .pauseFor(1500)
  .deleteAll(15)
  .typeString(textArray[numArray[8]])
  .pauseFor(1500)
  .deleteAll(15)
  .typeString(textArray[numArray[9]])
  .pauseFor(1500)
  .deleteAll(15)
  .start();
  

