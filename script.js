"use strict";

// Questions array/object * 10
const allQuestions = [
  {
    question:
      "In Get Out, what method is used to hypnotize trapped and traumatized Chris (Daniel Kaluuya) and plunge him into the sunken place?",
    // four answers
    answers: [
      `Playing The Notorious B.I.G. song “Hypnotize”`,
      "Waving a pendulum in front of his eyes",
      "Stirring a spoon in a cup of tea",
      "Talking about politics",
    ],
    correctAnswer: 2,
  },
  {
    question: `In the original 90s horror cult classic Candyman, the fabled, hook-handed character lived in the crime-riddled Cabrini-Green housing projects in Chicago. What is the film’s urban legend of how this brother boogeyman shows up?`,
    answers: [
      "Shout out the window really loud, “Hey Candyman, I dare you come and get me!”",
      "Say his name five times in the mirror and the Candyman will appear.",
      "Pick up the phone and dial *666",
      "He haunts your dreams.",
    ],
    correctAnswer: 1,
  },
  {
    question: `It’s a sad but true horror film trope that Black folks are often the first (or last) to literally get the ax. Think of poor Scatman Crothers in The Shining. But sometimes we defy the odds. Name the Black actor who actually lives to see the final credits roll.`,
    answers: [
      "Duane Martin in Scream 2",
      "Taye Diggs in House on Haunted Hill",
      "Ice Cube in Anaconda",
      "All of these actors",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Several contemporary R&B divas have traded their soulful whispers for the chance to play a scream queen. Which of the following films did not feature the actress mentioned?",
    answers: [
      "Solange, Antebellum",
      "Ashanti, Resident Evil: Extinction",
      "Brandy, I Still Know What You Did Last Summer",
      "Kelly Rowland, Freddy vs. Jason",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Talk about Black girl magic! In The Craft, curly-haired cutie Rochelle (Rachel True) is the only African American member of her clique of witchy women.  What revenge spell does Rochelle put on her racist bully, Laura?",
    answers: [
      "Her face breaks out with huge zits.",
      "She slowly goes crazy and is institutionalized.",
      "Her long, blond hair falls out.",
      "She loses her ability to speak.",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Which spooky movie spoof gave funny lady Regina Hall one of her first breakout roles as Brenda, a sassy sister with box braids?",
    answers: [
      "Meet the Blacks",
      "Scary Movie",
      "A Haunted House",
      "Tyler Perry’s Boo! A Madea Halloween",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Watch out, boy, she’ll chew you up! Which of these alluring ladies sank her teeth into a tale from the dark side and portrayed an irresistible vampire?",
    answers: ["Grace Jones", "Aaliyah", "Angela Bassett", "All of the above"],
    correctAnswer: 3,
  },
  {
    question:
      "In his song “Deepest Bluest (Shark’s Fin),” LL Cool J proclaims, “My hat is like a shark’s fin.” And throughout his early career, the rap legend rocked his trademark Kangol. In what horror film reboot did we finally get a glimpse of his bald and beautiful dome?",
    answers: [
      "Halloween H20: 20 Years Later",
      "Texas Chainsaw Massacre: The Next Generation",
      "Exorcist: The Beginning",
      "Deep Blue Sea",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "The 1972 blaxploitation cult classic Blacula mixed its lust for blood and vengeance with social justice. Before classically trained star William Marshall morphed into the debonair vampire, his character was an African prince who met with Count Dracula to discuss...",
    answers: [
      "Giving Black people the right to vote",
      "Ending the slave trade",
      "Desegregation",
      "Giving Black people the right to an education",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Academy Award winner Lupita Nyong’o tackled the dual role of Adelaide and her creepy doppelgänger Red in Jordan Peele’s unsettling Us. Red dresses in red and has a spooky way of speaking. What is Red’s weapon of choice?",
    answers: [
      "A hacksaw",
      "A bow and arrow",
      "A butcher knife",
      "A sharp pair of scissors",
    ],
    correctAnswer: 3,
  },
];

// Opening page selectors
// h1 display title
let title = document.getElementById("title");
// button display begin(mortal combat style?)
let beginBtn = document.getElementById("begin-btn");
let nextBtn = document.getElementById("next-btn");
let retakeBtn = document.getElementById("retake-btn");
let questionElm = document.getElementById("question");
let allAnswersElm = document.getElementById("answers");
let currentIndex = 0;
let score = 0;
let selectedIndex = null;
let correctIndex = null;

beginBtn.addEventListener("click", () => {
  beginBtn.style.display = "none";
  displayQuestion(allQuestions[currentIndex]);
  questionElm.style.display = "block";
});

// next question - eventlistener
nextBtn.addEventListener("click", () => {
  if (correctIndex === selectedIndex) {
    score++;
    console.log("score:", score);
  }
  currentIndex++;
  clearQuestion();
  nextBtn.style.display = "none";
  if (currentIndex === allQuestions.length) {
    //end of quiz
    endQuiz();
  } else {
    displayQuestion(allQuestions[currentIndex]);
  }
});

retakeBtn.addEventListener("click", function () {
  retakeBtn.style.display = "none";
  beginBtn.style.display = "block";
  title.innerText = "Black Horror History Quiz!";
  questionElm.style.display = "none";
  currentIndex = 0;

  score = 0;
});

function displayQuestion(question) {
  console.log("question:", question.question);
  console.log("correct answer:", question.correctAnswer);
  correctIndex = question.correctAnswer;
  questionElm.innerText = question.question;
  for (let answer of question.answers) {
    let answerElm = document.createElement("div");
    answerElm.innerText = answer;

    answerElm.addEventListener("click", () => {
      console.log("I've been clicked!");
      clearHighlight();
      answerElm.classList.add("highlight");
      selectedIndex = question.answers.indexOf(answerElm.innerText);
      console.log("selected index:", selectedIndex);
      nextBtn.style.display = "block";
    });
    allAnswersElm.appendChild(answerElm);
  }
}

function clearQuestion() {
  questionElm.innerText = "";
  while (allAnswersElm.firstChild) {
    allAnswersElm.removeChild(allAnswersElm.lastChild);
  }
}

function clearHighlight() {
  for (let answer of allAnswersElm.children) {
    answer.classList.remove("highlight");
  }
}

function endQuiz() {
  title.innerText = "You've finished!";
  if (score <= 7) {
    questionElm.innerText = `You FAILED!\nYou scored ${score}/10`;
  } else {
    `You SURVIVED!\nYou scored ${score}/10`;
  }
  retakeBtn.style.display = "block";
}
