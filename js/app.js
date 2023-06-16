// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak


//Buttons:
const speakButton = document.querySelector('button#speak');
const button1 = document.querySelector('button#btn1');
const button2 = document.querySelector('button#btn2');
const button3 = document.querySelector('button#btn3');
const button4 = document.querySelector('button#btn4');
const button5 = document.querySelector('button#btn5');
const resetButton = document.querySelector('button#reset');
const randomStoryButton = document.querySelector('button#random-story');

//Headers:

const header1 = document.querySelector('h1#group1H');
const header2 = document.querySelector('h1#group2H');
const header3 = document.querySelector('h1#group3H');
const header4 = document.querySelector('h1#group4H');
const header5 = document.querySelector('h1#group5H');

//Arrays:
const group1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
const group2 = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
const group3 = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const group4 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'a bug', 'worm'];
const group5 = ['on the moon.', 'on the chair.', 'in my spaghetti.', 'in my soup.', 'on the grass.', 'in my shoes.'];

const bindingsArray = [ [group1, 0, header1], [group2, 1, header2], [group3, 2, header3], [group4, 3, header4], [group5, 4, header5]];

//Final String and words list:

var chosenWords = ['The turkey', 'sat on', 'a funny', 'goat', 'on the moon.'];
var textToSpeak = chosenWords.join(' ');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// Function to generate a random word from an array
function getRandomWord(array) {
	var randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

// Function to reset the concatenated string
function resetString() {
	chosenWords = ['The turkey', 'sat on', 'a funny', 'goat', 'on the moon.'];
	textToSpeak = chosenWords.join(' ');

}

// Function to generate a random story
function generateStory() {
	bindingsArray.forEach(binding => {
		choseWordFromArrayFast(binding)
	});
	
	textToSpeak = chosenWords.join(' ');
	speakNow(textToSpeak);
	
}

//Function to reset headers:
function initializeHeaders() {
	header1.innerHTML = group1.join(' - ');
	header2.innerHTML = group2.join(' - ');
	header3.innerHTML = group3.join(' - ');
	header4.innerHTML = group4.join(' - ');
	header5.innerHTML = group5.join(' - ');
}
//Function to highlight a element in a header
function highlightHeader(header, group, randomWord){
	header.innerHTML = group.join(' - ').replace(randomWord, '<strong>' + randomWord + '</strong>')
}

//Function to be attached to each button
function choseWordFromArray([group, index, header]){
	let randomWord = getRandomWord(group);
	chosenWords[index] = randomWord;
	highlightHeader(header, group, randomWord);
	speakNow(randomWord);
	textToSpeak = chosenWords.join(' ');
}
//Function to be used on the story generator
function choseWordFromArrayFast([group, index, header]){
	let randomWord = getRandomWord(group);
	chosenWords[index] = randomWord;
	highlightHeader(header, group, randomWord);
	textToSpeak = chosenWords.join(' ');
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handlers for the buttons
speakButton.onclick = function() {
	speakNow(textToSpeak);
}

// Event listeners for button clicks
button1.onclick = function() {
	choseWordFromArray(bindingsArray[0]);
};
  
button2.onclick = function() {
	choseWordFromArray(bindingsArray[1]);
};
  
button3.onclick = function() {
	choseWordFromArray(bindingsArray[2]);
};

button4.onclick = function() {
	choseWordFromArray(bindingsArray[3]);
};

button5.onclick = function() {
	choseWordFromArray(bindingsArray[4]);
};


// Event listener for reseting the concatString
resetButton.onclick = function() {
	resetString();
	initializeHeaders();
};

// Event listener for the random story button
randomStoryButton.onclick = function() {
	generateStory();
};