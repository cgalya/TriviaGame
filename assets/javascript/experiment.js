window.onload = function() {
//html element selector variables
		var ask = $("#question");
    var first = $("#answer1");
    var second = $("#answer2");
    var third = $("#answer3");
    var fourth = $("#answer4");
    var correction = $("#correction");
    var win = $("#win");
    var loss = $("#loss");
    var unAns = $("#unAns");
    var pic = $("#pic");
    var answers = $(".answer");
    var ansGroup = $(".ansGroup");
    var start = $("#start");
    var button = $("button");
    var countdown = $("#countdown");

//Counter variables
    var winCounter = 0;
    var lossCounter = 0;
    var unansweredCounter = 0;
    var triviaCount = 0;

//tv show object array
    var trivia = [
    {
        question: "What is the name of the boat that marooned the castaways on 'Gilligan's Island'?",
        answer1: "The Love Boat",
        answer2: "S.S. Minnow",
        answer3: "S.S. Fantasia",
        answer4: "The Stingray",
        background: "background-image",
        backgroundUrl: "url('assets/images/bewitched.jpg')",
        correctAnswer: "answer2",
        correct: "The boat was the S.S. Minnow.",
        image: "assets/images/gilligan.gif"
      }, {
        question: "What is the name of the advertising agency at which Darrin worked on 'Bewitched'?",
        answer1: "McMann and Tate",
        answer2: "Johnson and Johnson",
        answer3: "Pearson Hardman",
        answer4: "Lockhart Gardner",
        background: "background-image",
        backgroundUrl: "url('assets/images/getsmart.jpg')",
        correctAnswer: "answer1",
        correct: "Darrin's law firm was McMann and Tate.",
        image: "assets/images/bewitched.gif"
      }, {
        question: "On 'Get Smart', which of the following items did Max Smart use as a secret spy phone?",
        answer1: "Shoe",
        answer2: "Cheese Sandwich",
        answer3: "Hair Dryer",
        answer4: "All of the above",
        background: "background-image",
        backgroundUrl: "url('assets/images/jeannie.jpg')",
        correctAnswer: "answer4",
        correct: "Max used all of those items as spy phones.",
        image: "assets/images/getsmart.gif"
      }, {
        question: "On 'I Dream of Jeannie', how old is Jeannie?",
        answer1: "27 years old",
        answer2: "100 years old",
        answer3: "400 years old",
        answer4: "2,000 years old",
        background: "background-image",
        backgroundUrl: "url('assets/images/munsters.jpg')",
        correctAnswer: "answer4",
        correct: "Jeannie was 2,000 years old.",
        image: "assets/images/jeannie.gif"
      }, {
        question: "What is the Munsters' street address?",
        answer1: "900 Vulture Street",
        answer2: "123 Raven Place",
        answer3: "777 Nightingale Avenue",
        answer4: "1313 Mockingbird Lane",
        background: "background-image",
        backgroundUrl: "url('assets/images/hillbillies.jpg')",
        correctAnswer: "answer4",
        correct: "The Munsters lived at 1313 Mockingbird Lane.",
        image: "assets/images/munsters.gif"
      }, {
        question: "How did the Clampetts make their fortune?",
        answer1: "Oil",
        answer2: "Diamonds",
        answer3: "Coal",
        answer4: "Gold",
        background: "background-image",
        backgroundUrl: "url('assets/images/mistered.jpg')",
        correctAnswer: "answer1",
        correct: "The Clampetts cashed in when oil was found on their land.",
        image: "assets/images/hillbillies.gif"
      }, {
        question: "What was the name of the horse who played Mister Ed?",
        answer1: "Abracadabra",
        answer2: "Patchwork Quilt",
        answer3: "Bamboo Harvester",
        answer4: "Golden Explorer",
        background: "background-image",
        backgroundUrl: "url('assets/images/addams.jpg')",
        correctAnswer: "answer3",
        correct: "The horse's name was Bamboo Harvester.",
        image: "assets/images/mistered.gif"
      }, {
        question: "What is Mr. Adams's first name?",
        answer1: "Stephen",
        answer2: "Gomez",
        answer3: "Albert",
        answer4: "Simon",
        background: "background-image",
        backgroundUrl: "url('assets/images/andy.jpg')",
        correctAnswer: "answer2",
        correct: "Mr. Adams's first name is Gomez.",
        image: "assets/images/addams.gif"
      }, {
        question: "Fictional Mayberry was located in which state on 'The Andy Griffith Show'?",
        answer1: "South Carolina",
        answer2: "Georgia",
        answer3: "West Virginia",
        answer4: "North Carolina",
        background: "background-image",
        backgroundUrl: "url('assets/images/andy.jpg')",
        correctAnswer: "answer4",
        correct: "Andy Taylor and friends lived in Mayberry, North Carolina.",
        image: "assets/images/andy.gif"
      }]


//upon loading the page, hide the countdown and reset buttons
  countdown.hide();
  button.hide();
 

  function startGame(thisShow) { 
  //show the timer 
    countdown.show();
  //set up the timer to count down from 31 every second
    var count = 31;
		var counter = setInterval(timer, 1000);
  //write the question and answers for the current show  
    ask.html(thisShow.question);
    first.html(thisShow.answer1);
    second.html(thisShow.answer2);
    third.html(thisShow.answer3);
    fourth.html(thisShow.answer4);
  //start the countdown and write it on the page
		function timer() {
		  count--;
      $("#timer").html(count);
  //if the timer runs out
		  if (count === 0) {
        //increase unanswered count by one
     		unansweredCounter++;
        //stop the countdown
        clearInterval(counter);	
        //write time's up on the page         
        ask.html("Time wasn't on your side...");
        //display the correct answer
        correction.html(thisShow.correct);
        //display the show's gif
        pic.append('<img src="' + thisShow.image + '" alt="">');
        //erase the answers and remove their styling by removing their class
        ansGroup.html("").removeClass("answer");
        //stay on this page for six seconds, then change the background for the next show and call the function for the next question
     		setTimeout(function() {
          $(document.body).css(thisShow.background, thisShow.backgroundUrl);
          nextQuestion();
        	},6000);    
  		  }
		  }
    //set a click event on the answers  
      $("p").click(function() {
     //if the player clicks the correct answer, much the same as if count === 0, except increments win counter and shows 'groovy'   
        if (this.id == thisShow.correctAnswer) {
          winCounter++;        
          clearInterval(counter);
          ask.html("Groovy!");
          pic.append('<img src="' + thisShow.image + '" alt="">');
          ansGroup.html("").removeClass("answer");
          setTimeout(function() {
            $(document.body).css(thisShow.background, thisShow.backgroundUrl);
            nextQuestion();
            },6000);    
      //if the player clicks the wrong answer, much the same as above, except increments loss counter and shows 'sorry about that, chief' along with the correct answer 
        } else if (this.id !== thisShow.correctAnswer) {
          lossCounter++;      
          clearInterval(counter);
          ask.html("Sorry about that, Chief!");
          correction.html(thisShow.correct);
          pic.append('<img src="' + thisShow.image + '" alt="">');
          ansGroup.html("").removeClass("answer");
          setTimeout(function() {
              $(document.body).css(thisShow.background, thisShow.backgroundUrl);
              nextQuestion();
              },6000);    
          }
      })
    }

//the last page of the game removes the gif, and shows the reset button, the correct, incorrect, and unanswered counts
  function lastPage() {
    button.show();
    pic.empty();
    ask.html("Here's the final score:");
    win.html("Correct Answers: " + winCounter);
    loss.html("Incorrect Answers: " + lossCounter);
    unAns.html("Unanswered: " + unansweredCounter);
    ansGroup.html("").removeClass("answer");
  }

//sets up the next trivia question or decides that it's time for the last page
  function nextQuestion() {
    //increments trivia count to move to next item in trivia array 
    triviaCount++;
    //unbind click event so that the clicks don't exponentially increase
    $("p").unbind("click");
    //erase gif
    pic.empty();
    //erase correct answer
    correction.html("");
    //add class to the answer elements for styling
    ansGroup.addClass("answer");
    //if all items in array have been run, go to the last page, otherwise continue to next item
    if (triviaCount <= 8) {
      startGame(trivia[triviaCount]);
    } else {
      lastPage();
    }     
  }

//start button hides itself, calls startGame function and adds a class to the answers
  start.click(function() {
    start.hide();
    startGame(trivia[triviaCount]);
    ansGroup.addClass("answer");
  });

//reset button shows start button, hides countdown and reset button, erases final screen, sets counters to 0, returns background to gilligan
  button.click(function() {
    start.show();
    countdown.hide();
    button.hide();
    ask.add(win).add(loss).add(unAns).html("");
    winCounter = 0;
    lossCounter = 0;
    unansweredCounter = 0;
    triviaCount = 0;
    $(document.body).css("background-image", "url('assets/images/gilligan.jpg')");
  })
}