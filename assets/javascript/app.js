	window.onload = function() {
		var ask = $("#question");
    var first = $("#answer1");
    var second = $("#answer2");
    var third = $("#answer3");
    var fourth = $("#answer4");

    var winCounter = 0;
    var lossCounter = 0;
    var triviaCount = 0;

    var trivia = [
    {
        question: "Which of the following is NOT a character on Gilligan's Island?",
        answer1: "Ginger",
        answer2: "Fred",
        answer3: "The Skipper",
        answer4: "Thurston Howell III",
        background: "background-image",
        backgroundUrl: "url('assets/images/bewitched.jpg')",
        correctAnswer: "answer2"
      }, {
        question: "What is the name of Samantha's mother?",
        answer1: "Endora",
        answer2: "Stacy",
        answer3: "Jasmine",
        answer4: "Mildred",
        background: "background-image",
        backgroundUrl: "url('assets/images/getsmart.jpg')",
        correctAnswer: "answer1"
      }]



  $("#countdown").hide();

  $("#start").click(function() {
    $("#start").detach();

    
    $("#countdown").show();
    var count = 30;
		var counter = setInterval(timer, 1000);
    ask.html(trivia.question);
    first.html(trivia.answer1);
    second.html(trivia.answer2);
    third.html(trivia.answer3);
    fourth.html(trivia.answer4);
    
		function timer() {
		  count--;
		  if (count === 0) {
     		clearInterval(counter);	
        lossCounter++;
        ask.html("Time, time, time, see what's become of me...");
        first.html("picture here");
        second.html("");
        third.html("");
        fourth.html("");
     		setTimeout(function() {
          $(document.body).css(trivia.background, trivia.backgroundUrl)
        	},2000);    
  		}
  		$("#timer").html(count);

		}
    $("p").click(function() {
    if (this.id == trivia.correctAnswer) {
      winCounter++;
      clearInterval(counter);
      ask.html("Groovy!");
      first.html("picture here");
      second.html("");
      third.html("");
      fourth.html("");

    } else {
      lossCounter++;
      clearInterval(counter);
      ask.html("Sorry about that, Chief");
      first.html("picture here");
      second.html("");
      third.html("");
      fourth.html("");
    }
  });
	});

  
}