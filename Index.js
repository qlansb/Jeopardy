const placeholderQuestions = [
  {
    category: "Nature",
    question: "The human heart has how many chambers?",
    answer: "4",
  },
  {
    category: "Nature",
    question: "What is the largest animal currently on Earth?",
    answer: "Blue Whale",
  },
  {
    category: "Nature",
    question: "What is the hottest planet in the Solar System?",
    answer: "Venus",
  },
  {
    category: "Nature",
    question: "What is the first element on the periodic table?",
    answer: "Hydrogen",
  },
  {
    category: "Nature",
    question: "Which gas forms about 78% of the Earth's atmosphere?",
    answer: "Nitrogen",
  },
  {
    category: "Nature",
    question:
      "Alzheimer's disease primarily affects which part of the human body?",
    answer: "Brain",
  },
  {
    category: "Nature",
    question:
      "What was the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
    answer: "Sputnik 1",
  },
  {
    category: "Nature",
    question: "The asteroid belt is located between which two planets?",
    answer: "Mars and Jupiter",
  },
  {
    category: "Nature",
    question: "What does LASER stand for?",
    answer: "Light amplification by stimulated emission of radiation",
  },
  {
    category: "Nature",
    question: "Dry ice is the solid form of what substance?",
    answer: "Carbon dioxide",
  },
  {
    category: "Animals",
    question: "What is the fastest  land animal?",
    answer: "Cheetah",
  },
  {
    category: "Animals",
    question: "What is the scientific name for modern day humans?",
    answer: "Homo Sapiens",
  },
  {
    category: "Animals",
    question:
      "The Kakapo is a large, flightless, nocturnal parrot native to which country?",
    answer: "New Zealand",
  },
  {
    category: "Animals",
    question: "Hippocampus is the Latin name for which marine creature?",
    answer: "Seahorse",
  },
  {
    category: "Animals",
    question: "What is Grumpy Cat's real name?",
    answer: "Tartar Sauce",
  },
  {
    category: "Animals",
    question: "Which class of animals are newts members of?",
    answer: "Amphibian",
  },
  {
    category: "Animals",
    question: "What is the collective noun for a group of crows?",
    answer: "Murder",
  },
  {
    category: "Animals",
    question: "By definition, where does an abyssopelagic animal live?",
    answer: "Bottom of the ocean",
  },
  {
    category: "Animals",
    question: "What color is the female blackbird?",
    answer: "Brown",
  },
  {
    category: "Animals",
    question: "What is the name of a rabbit's house?",
    answer: "Burrow",
  },
  {
    category: "Computers",
    question: "What does GHz stand for?",
    answer: "Gigahertz",
  },
  {
    category: "Computers",
    question: "HTML is what type of language?",
    answer: "Markup Language",
  },
  {
    category: "Computers",
    question: "What amount of bits commonly equals one byte?",
    answer: "8",
  },
  {
    category: "Computers",
    question: "In computing, what does MIDI stand for?",
    answer: "Musical Instrument Digital Interface",
  },
  {
    category: "Computers",
    question: "In web design, what does CSS stand for?",
    answer: "Cascading Style Sheet",
  },
  {
    category: "Computers",
    question:
      "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
    answer: "HD Graphics 500",
  },
  {
    category: "Computers",
    question: "On Twitter, what was the original character limit for a Tweet?",
    answer: "140",
  },
  {
    category: "Computers",
    question: "In JavaScript, what is the = operator?",
    answer: "Assignment",
  },
  {
    category: "Computers",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    answer: "Java",
  },
  {
    category: "Computers",
    question: "In computing, what does LAN stand for?",
    answer: "Local Area Network",
  },
  {
    category: "Mythology",
    question:
      "Who was the only god from Greece who did not get a name change in Rome?",
    answer: "Apollo",
  },
  {
    category: "Mythology",
    question:
      "Who in Greek mythology, who led the Argonauts in search of the Golden Fleece?",
    answer: "Jason",
  },
  {
    category: "Mythology",
    question:
      "This Greek goddess's name was chosen for the dwarf planet responsible for discord on Pluto's classification amongst astronomers.",
    answer: "Eris",
  },
  {
    category: "Mythology",
    question:
      "Which Greek and Roman god was known as the god of music, truth and prophecy, healing, the sun and light, plague, poetry, and more?",
    answer: "Apollo",
  },
  {
    category: "Mythology",
    question:
      "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
    answer: "Orpheus",
  },
  {
    category: "Mythology",
    question: "In most traditions, who was the wife of Zeus?",
    answer: "Hera",
  },
  {
    category: "Mythology",
    question:
      "Which of these mythological creatures is said to be half-man and half-horse?",
    answer: "Centaur",
  },
  {
    category: "Mythology",
    question: "What mythology did the god Apollo come from?",
    answer: "Greek and Roman",
  },
  {
    category: "Mythology",
    question:
      "What mythological creatures have women's faces and vultures' bodies?",
    answer: "Harpies",
  },
  {
    category: "Mythology",
    question:
      "The Nike apparel and footwear brand takes it's name from the Greek goddess of what?",
    answer: "Victory",
  },
  {
    category: "History",
    question: "How many manned moon landings have there been?",
    answer: "6",
  },
  {
    category: "History",
    question:
      "The original Roman alphabet lacked the following letters EXCEPT:",
    answer: "X",
  },
  {
    category: "History",
    question: "The collapse of the Soviet Union took place in which year?",
    answer: "1991",
  },
  {
    category: "History",
    question: "What was Manfred von Richthofen's nickname?",
    answer: "The Red Baron",
  },
  {
    category: "History",
    question:
      "Which modern day country is the region that was known as Phrygia in ancient times?",
    answer: "Turkey",
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    answer: "George Washington",
  },
  {
    category: "History",
    question: "What was the first sport to have been played on the moon?",
    answer: "Golf",
  },
  {
    category: "History",
    question: "What year did World War I begin?",
    answer: "1914",
  },
  {
    category: "History",
    question: "How old was Adolf Hitler when he died?",
    answer: "56",
  },
  {
    category: "History",
    question:
      "Abolitionist John Brown raided the arsenal in which Virginia Town?",
    answer: "Harper's Ferry",
  },
  {
    category: "General",
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    answer: "HTC",
  },
  {
    category: "General",
    question: "What alcoholic drink is made from molasses?",
    answer: "Rum",
  },
  {
    category: "General",
    question: "What is the French word for &quot;hat&quot;?",
    answer: "Chapeau",
  },
  {
    category: "General",
    question: "Who is depicted on the US hundred dollar bill?",
    answer: "Benjamin Franklin",
  },
  {
    category: "General",
    question: "What do the letters in the GMT time zone stand for?",
    answer: "Greenwich Mean Time",
  },
  {
    category: "General",
    question: "How tall is the Burj Khalifa?",
    answer: "2,722 ft",
  },
  {
    category: "General",
    question:
      "When someone is cowardly, they are said to have what color belly?",
    answer: "Yellow",
  },
  {
    category: "General",
    question: "What is the name of NASA's most famous space telescope?",
    answer: "Hubble Space Telescope",
  },
  {
    category: "General",
    question: "Who is the youngest person to recieve a Nobel Prize?",
    answer: "Malala Yousafzai",
  },
  {
    category: "General",
    question: "What is the famous Papa John's last name?",
    answer: "Schnatter",
  },
  {
    category: "Final",
    question: "What name was the bootcamp formerly known as?",
    answer: "Burlington Code Academy",
  },
];

function filterQuestionsByCategory(category) {
  return placeholderQuestions.filter(
    (question) => question.category === category
  );
}
// const test = filterQuestionsByCategory("General");
// console.log(test)

//getting all of the point categories
const naturePoints = document.getElementById("naturePoints");
const animalsPoints = document.getElementById("animalsPoints");
const computersPoints = document.getElementById("computersPoints");
const mythologyPoints = document.getElementById("mythologyPoints");
const historyPoints = document.getElementById("historyPoints");
const generalPoints = document.getElementById("generalPoints");
const questionAsked = document.getElementById("questionAsked");
const userInput = document.getElementById("userInput");
const guessButton = document.getElementById("guess");

function splitIdName(id) {
  return id.split("-");
}
// splitIdName(nature100.id);
// console.log(splitIdName(nature100.id));

let selectedQuestions = [];

let currentlyAnsweringQuestion = false;

function disableCategoryPoints(buttonId) {
  const categoryPointButton = document.getElementById(buttonId);
  categoryPointButton.disabled = true;
}

function displayQuestion(categoryPoints) {
  const categoryQuestions = filterQuestionsByCategory(categoryPoints);

  const availableQuestions = categoryQuestions.filter(
    (question) => !selectedQuestions.includes(question)
  );

  if (availableQuestions.length === 0) {
    alert("All questions from this category have been used!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const selectedQuestion = availableQuestions[randomIndex];

  selectedQuestions.push(selectedQuestion);

  const questionAsked = document.getElementById("questionAsked");

  questionAsked.innerHTML = selectedQuestion.question;

  currentlyAnsweringQuestion = true;
  answeringQuestion(userInput, selectedQuestion);
}

// Event listeners for each category points
const nature100 = document.getElementById("Nature-100");
nature100.addEventListener("click", function () {
  displayQuestion("Nature");
  disableCategoryPoints("nature100");
});

const nature200 = document.getElementById("Nature-200");
nature200.addEventListener("click", function () {
  displayQuestion("Nature");
  disableCategoryPoints("nature200");
});

const nature300 = document.getElementById("Nature-300");
nature300.addEventListener("click", function () {
  displayQuestion("Nature");
  disableCategoryPoints("nature300");
});

const nature400 = document.getElementById("Nature-400");
nature400.addEventListener("click", function () {
  displayQuestion("Nature");
  disableCategoryPoints("nature400");
});

const nature500 = document.getElementById("Nature-500");
nature500.addEventListener("click", function () {
  displayQuestion("Nature");
  disableCategoryPoints("nature500");
});

const animals100 = document.getElementById("Animals-100");
animals100.addEventListener("click", function () {
  displayQuestion("Animals");
  disableCategoryPoints("animals100");
});

const animals200 = document.getElementById("Animals-200");
animals200.addEventListener("click", function () {
  displayQuestion("Animals");
  disableCategoryPoints("animals200");
});

const animals300 = document.getElementById("Animals-300");
animals300.addEventListener("click", function () {
  displayQuestion("Animals");
  disableCategoryPoints("animals300");
});

const animals400 = document.getElementById("Animals-400");
animals400.addEventListener("click", function () {
  displayQuestion("Animals");
  disableCategoryPoints("animals400");
});

const animals500 = document.getElementById("Animals-500");
animals500.addEventListener("click", function () {
  displayQuestion("Animals");
  disableCategoryPoints("animals500");
});

const computers100 = document.getElementById("Computers-100");
computers100.addEventListener("click", function () {
  displayQuestion("Computers");
  disableCategoryPoints("computers100");
});

const computers200 = document.getElementById("Computers-200");
computers200.addEventListener("click", function () {
  displayQuestion("Computers");
  disableCategoryPoints("computers200");
});

const computers300 = document.getElementById("Computers-300");
computers300.addEventListener("click", function () {
  displayQuestion("Computers");
  disableCategoryPoints("computers300");
});

const computers400 = document.getElementById("Computers-400");
computers400.addEventListener("click", function () {
  displayQuestion("Computers");
  disableCategoryPoints("computers400");
});

const computers500 = document.getElementById("Computers-500");
computers500.addEventListener("click", function () {
  displayQuestion("Computers");
  disableCategoryPoints("computers500");
});

const mythology100 = document.getElementById("Mythology-100");
mythology100.addEventListener("click", function () {
  displayQuestion("Mythology");
  disableCategoryPoints("mythology100");
});

const mythology200 = document.getElementById("Mythology-200");
mythology200.addEventListener("click", function () {
  displayQuestion("Mythology");
  disableCategoryPoints("mythology200");
});

const mythology300 = document.getElementById("Mythology-300");
mythology300.addEventListener("click", function () {
  displayQuestion("Mythology");
  disableCategoryPoints("mythology300");
});

const mythology400 = document.getElementById("Mythology-400");
mythology400.addEventListener("click", function () {
  displayQuestion("Mythology");
  disableCategoryPoints("mythology400");
});

const mythology500 = document.getElementById("Mythology-500");
mythology500.addEventListener("click", function () {
  displayQuestion("Mythology");
  disableCategoryPoints("mythology500");
});

const history100 = document.getElementById("History-100");
history100.addEventListener("click", function () {
  displayQuestion("History");
  disableCategoryPoints("history100");
});

const history200 = document.getElementById("History-200");
history200.addEventListener("click", function () {
  displayQuestion("History");
  disableCategoryPoints("history200");
});

const history300 = document.getElementById("History-300");
history300.addEventListener("click", function () {
  displayQuestion("History");
  disableCategoryPoints("history300");
});

const history400 = document.getElementById("History-400");
history400.addEventListener("click", function () {
  displayQuestion("History");
  disableCategoryPoints("history400");
});

const history500 = document.getElementById("History-500");
history500.addEventListener("click", function () {
  displayQuestion("History");
  disableCategoryPoints("history500");
});

const general100 = document.getElementById("General-100");
general100.addEventListener("click", function () {
  displayQuestion("General");
  disableCategoryPoints("general100");
});

const general200 = document.getElementById("General-200");
general200.addEventListener("click", function () {
  displayQuestion("General");
  disableCategoryPoints("general200");
});

const general300 = document.getElementById("General-300");
general300.addEventListener("click", function () {
  displayQuestion("General");
  disableCategoryPoints("general300");
});

const general400 = document.getElementById("General-400");
general400.addEventListener("click", function () {
  displayQuestion("General");
  disableCategoryPoints("general400");
});

const general500 = document.getElementById("General-500");
general500.addEventListener("click", function () {
  displayQuestion("General");
  disableCategoryPoints("general500");
});

function answeringQuestion(userInput, selectedQuestion) {
  guessButton.addEventListener("click", function () {
    if (!currentlyAnsweringQuestion) {
      alert("Please answer the question first.");
      return;
    }
    const userAnswer = userInput.value.trim();
    const correctAnswer = selectedQuestion.answer.trim();
    if (userAnswer === undefined || userAnswer === "") {
      alert("Please enter an answer");
      return;
    }
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      questionAsked.innerHTML = `Correct! You earned (POINTS) points!`;
    } else {
      questionAsked.innerHTML = `Incorrect! The correct answer is ${selectedQuestion.answer}`;
    }

    currentlyAnsweringQuestion = false;
  });
}

const passButton = document.getElementById("passButton");
passButton.addEventListener("click", function () {
  if (currentlyAnsweringQuestion) {
    selectedQuestions.pop();

    const currentQuestionsCategory =
      selectedQuestions[selectedQuestions.length - 1].category;

    displayQuestion(currentQuestionsCategory);

    currentlyAnsweringQuestion = false;
  } else {
    alert("There isn't a question to pass right now.");
  }
});
