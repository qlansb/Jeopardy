const placeholderQuestions = [
    {
      category: "Nature",
      question: "The human heart has how many chambers?",
      answer: "4",
      amount: 100,
    },
    {
      category: "Nature",
      question: "What is the largest animal currently on Earth?",
      answer: "Blue Whale",
      amount: 200,
    },
    {
      category: "Nature",
      question: "What is the hottest planet in the Solar System?",
      answer: "Venus",
      amount: 300,
    },
    {
      category: "Nature",
      question: "What is the first element on the periodic table?",
      answer: "Hydrogen",
      amount: 400,
    },
    {
      category: "Nature",
      question: "Which gas forms about 78% of the Earth's atmosphere?",
      answer: "Nitrogen",
      amount: 500,
    },
    {
      category: "Nature",
      question:
        "Alzheimer's disease primarily affects which part of the human body?",
      answer: "Brain",
      amount: 200,
    },
    {
      category: "Nature",
      question:
        "What was the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
      answer: "Sputnik 1",
      amount: 400,
    },
    {
      category: "Nature",
      question: "The asteroid belt is located between which two planets?",
      answer: "Mars and Jupiter",
      amount: 600,
    },
    {
      category: "Nature",
      question: "What does LASER stand for?",
      answer: "Light amplification by stimulated emission of radiation",
      amount: 800,
    },
    {
      category: "Nature",
      question: "Dry ice is the solid form of what substance?",
      answer: "Carbon dioxide",
      amount: 1000,
    },
    {
      category: "Animals",
      question: "What is the fastest  land animal?",
      answer: "Cheetah",
      amount: 100,
    },
    {
      category: "Animals",
      question: "What is the scientific name for modern day humans?",
      answer: "Homo Sapiens",
      amount: 200,
    },
    {
      category: "Animals",
      question:
        "The Kakapo is a large, flightless, nocturnal parrot native to which country?",
      answer: "New Zealand",
      amount: 300,
    },
    {
      category: "Animals",
      question: "Hippocampus is the Latin name for which marine creature?",
      answer: "Seahorse",
      amount: 400,
    },
    {
      category: "Animals",
      question: "What is Grumpy Cat's real name?",
      answer: "Tartar Sauce",
      amount: 500,
    },
    {
      category: "Animals",
      question: "Which class of animals are newts members of?",
      answer: "Amphibian",
      amount: 200,
    },
    {
      category: "Animals",
      question: "What is the collective noun for a group of crows?",
      answer: "Murder",
      amount: 400,
    },
    {
      category: "Animals",
      question: "By definition, where does an abyssopelagic animal live?",
      answer: "Bottom of the ocean",
      amount: 600,
    },
    {
      category: "Animals",
      question: "What color is the female blackbird?",
      answer: "Brown",
      amount: 800,
    },
    {
      category: "Animals",
      question: "What is the name of a rabbit's house?",
      answer: "Burrow",
      amount: 1000,
    },
    {
      category: "Computers",
      question: "What does GHz stand for?",
      answer: "Gigahertz",
      amount: 100,
    },
    {
      category: "Computers",
      question: "HTML is what type of language?",
      answer: "Markup Language",
      amount: 200,
    },
    {
      category: "Computers",
      question: "What amount of bits commonly equals one byte?",
      answer: "8",
      amount: 300,
    },
    {
      category: "Computers",
      question: "In computing, what does MIDI stand for?",
      answer: "Musical Instrument Digital Interface",
      amount: 400,
    },
    {
      category: "Computers",
      question: "In web design, what does CSS stand for?",
      answer: "Cascading Style Sheet",
      amount: 500,
    },
    {
      category: "Computers",
      question:
        "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
      answer: "HD Graphics 500",
      amount: 200,
    },
    {
      category: "Computers",
      question: "On Twitter, what was the original character limit for a Tweet?",
      answer: "140",
      amount: 400,
    },
    {
      category: "Computers",
      question: "In JavaScript, what is the = operator?",
      answer: "Assignment",
      amount: 600,
    },
    {
      category: "Computers",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      answer: "Java",
      amount: 800,
    },
    {
      category: "Computers",
      question: "In computing, what does LAN stand for?",
      answer: "Local Area Network",
      amount: 1000,
    },
    {
      category: "Mythology",
      question:
        "Who was the only god from Greece who did not get a name change in Rome?",
      answer: "Apollo",
      amount: 100,
    },
    {
      category: "Mythology",
      question:
        "Who in Greek mythology, who led the Argonauts in search of the Golden Fleece?",
      answer: "Jason",
      amount: 200,
    },
    {
      category: "Mythology",
      question:
        "This Greek goddess's name was chosen for the dwarf planet responsible for discord on Pluto's classification amongst astronomers.",
      answer: "Eris",
      amount: 300,
    },
    {
      category: "Mythology",
      question:
        "Which Greek and Roman god was known as the god of music, truth and prophecy, healing, the sun and light, plague, poetry, and more?",
      answer: "Apollo",
      amount: 400,
    },
    {
      category: "Mythology",
      question:
        "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
      answer: "Orpheus",
      amount: 500,
    },
    {
      category: "Mythology",
      question: "In most traditions, who was the wife of Zeus?",
      answer: "Hera",
      amount: 200,
    },
    {
      category: "Mythology",
      question:
        "Which of these mythological creatures is said to be half-man and half-horse?",
      answer: "Centaur",
      amount: 400,
    },
    {
      category: "Mythology",
      question: "What mythology did the god Apollo come from?",
      answer: "Greek and Roman",
      amount: 600,
    },
    {
      category: "Mythology",
      question:
        "What mythological creatures have women's faces and vultures' bodies?",
      answer: "Harpies",
      amount: 800,
    },
    {
      category: "Mythology",
      question:
        "The Nike apparel and footwear brand takes it's name from the Greek goddess of what?",
      answer: "Victory",
      amount: 1000,
    },
    {
      category: "History",
      question: "How many manned moon landings have there been?",
      answer: "6",
      amount: 100,
    },
    {
      category: "History",
      question:
        "The original Roman alphabet lacked the following letters EXCEPT:",
      answer: "X",
      amount: 200,
    },
    {
      category: "History",
      question: "The collapse of the Soviet Union took place in which year?",
      answer: "1991",
      amount: 300,
    },
    {
      category: "History",
      question: "What was Manfred von Richthofen's nickname?",
      answer: "The Red Baron",
      amount: 400,
    },
    {
      category: "History",
      question:
        "Which modern day country is the region that was known as Phrygia in ancient times?",
      answer: "Turkey",
      amount: 500,
    },
    {
      category: "History",
      question: "Who was the first president of the United States?",
      answer: "George Washington",
      amount: 200,
    },
    {
      category: "History",
      question: "What was the first sport to have been played on the moon?",
      answer: "Golf",
      amount: 400,
    },
    {
      category: "History",
      question: "What year did World War I begin?",
      answer: "1914",
      amount: 600,
    },
    {
      category: "History",
      question: "How old was Adolf Hitler when he died?",
      answer: "56",
      amount: 800,
    },
    {
      category: "History",
      question:
        "Abolitionist John Brown raided the arsenal in which Virginia Town?",
      answer: "Harper's Ferry",
      amount: 1000,
    },
    {
      category: "General",
      question:
        "Which company did Valve cooperate with in the creation of the Vive?",
      answer: "HTC",
      amount: 100,
    },
    {
      category: "General",
      question: "What alcoholic drink is made from molasses?",
      answer: "Rum",
      amount: 200,
    },
    {
      category: "General",
      question: "What is the French word for &quot;hat&quot;?",
      answer: "Chapeau",
      amount: 300,
    },
    {
      category: "General",
      question: "Who is depicted on the US hundred dollar bill?",
      answer: "Benjamin Franklin",
      amount: 400,
    },
    {
      category: "General",
      question: "What do the letters in the GMT time zone stand for?",
      answer: "Greenwich Mean Time",
      amount: 500,
    },
    {
      category: "General",
      question: "How tall is the Burj Khalifa?",
      answer: "2,722 ft",
      amount: 200,
    },
    {
      category: "General",
      question:
        "When someone is cowardly, they are said to have what color belly?",
      answer: "Yellow",
      amount: 400,
    },
    {
      category: "General",
      question: "What is the name of NASA's most famous space telescope?",
      answer: "Hubble Space Telescope",
      amount: 600,
    },
    {
      category: "General",
      question: "Who is the youngest person to recieve a Nobel Prize?",
      answer: "Malala Yousafzai",
      amount: 800,
    },
    {
      category: "General",
      question: "What is the famous Papa John's last name?",
      answer: "Schnatter",
      amount: 1000,
    },
    {
      category: "Final",
      question: "What name was the bootcamp formerly known as?",
      answer: "Burlington Code Academy",
      amount: "",//unsure?
    },
  ];
  
  export default placeholderQuestions;


  let player1Score = 0;
  let player2Score = 0;
  let currentQuestionIndex = -1;
  let currentQuestion = "";
  
  function displayNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= placeholderQuestions.length) {
        alert("Game Over!");
        return;
  }
}

    function handleGuess() {
        let userInput = document.getElementById("input").value.trim();

        if (userInput.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            player1Score += currentQuestion.amount;
        }
    }