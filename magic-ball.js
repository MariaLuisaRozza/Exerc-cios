//The user will be able to input a question, then our program will output a random fortune.

//assign your name at the variable if you want
let userName = ""; 
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
//do your question
let userQuestion = "";
console.log(userName + ' asks: ' + userQuestion);

let randomNumber = Math.floor(Math.random()* 8);

let eightBall = '';

switch (randomNumber){
  case 0 : eightBall = 'It is certain';
  break
  case 1 : eightBall = 'It is decidedly so';
  break
  case 2 : eightBall = 'Reply hazy try again';
  break
  case 3 : eightBall = 'Cannot predict now';
  break
  case 4 : eightBall = 'Do not count on it';
  break
  case 5 : eightBall = 'My sources say no';
  break
  case 6 : eightBall = 'Outlook not so good';
  break
  case 7 : eightBall = 'Signs point to yes';
  break
}

 console.log('The answer is: ' + eightBall)
