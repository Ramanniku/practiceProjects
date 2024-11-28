 let guess = document.getElementById('guess')
 let userInput = document.getElementById("guessField")
 let submit = document.querySelector('#subit')
 let guesses = document.querySelector('.guesses')
 let LastResult = document.querySelector('.LastResult')

 let lowerhigh = document.querySelector('.lowerHigh')

 const randomNumner = Math.floor( Math.random() *100  + 1)
  

 const p = document.createElement('p')

 let prevGuess = []
 let numGues = 1
 let playGame = true

 if(playGame){
    submit.addEventListener('clikc', function(e){
        e.preventDefault()
       const gues =  parseInt(userInput.value)
       console.log(gues);
       
       validateGuess(gues)
    })
 }

 function validateGuess(gues){

 }

 function checkGuess(gues){

 }

 function displayGuess(gues){

 }

 function displayMessage(message){


 }

 function newGame(){

 }

 function endGame(){

 }