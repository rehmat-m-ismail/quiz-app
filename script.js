
var quizData = [
    {
      question: "What is the capital of Pakistan?",
      options: ["Karachi", "Lahore", "Islamabad", "Quetta"],
      correct: 2
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: 1
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "HTML", "C++", "Java"],
      correct: 1
    },
    {
        question: "Who is the founder of Pakistan?",
        options: ["Allama Iqbal", "Quaid-e-Azam", "Liaquat Ali Khan", "Sir Syed Ahmad Khan"],
        correct: 1
      },
      {
        question: "Which year Pakistan got independence?",
        options: ["1945", "1946", "1947", "1948"],
        correct: 2
      },
      {
        question: "What is the square root of 16?",
        options: ["2", "3", "4", "5"],
        correct: 2
      },
      {
        question: "What is the national animal of Pakistan?",
        options: ["Lion", "Tiger", "Markhor", "Elephant"],
        correct: 2
      },
      {
        question: "Which of the following is a frontend framework?",
        options: ["Django", "Flask", "React", "Laravel"],
        correct: 2
      },
      {
        question: "What does CSS stand for?",
        options: ["Color Style Sheet", "Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet"],
        correct: 1
      },
      {
        question: "Which tag is used to define a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<hyper>"],
        correct: 0
      }
  ];
  
  var currentQuestion = 0;
  var score = 0;
  
  function loadQuestion() {
    var questionEl = document.getElementById("question");
    var optionsEl = document.getElementById("options");
    var questionData = quizData[currentQuestion];
  
    questionEl.innerText = questionData.question;
  
    optionsEl.innerHTML = "";
    for (var i = 0; i < questionData.options.length; i++) {
      var button = document.createElement("button");
      button.innerText = questionData.options[i];
      button.className = "option-btn";
      button.setAttribute("data-index", i);
      button.onclick = selectOption;
      optionsEl.appendChild(button);
    }
  }
  
  function selectOption() {
    var selectedOption = parseInt(this.getAttribute("data-index"));
    var correctOption = quizData[currentQuestion].correct;
  
    if (selectedOption === correctOption) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    var resultEl = document.getElementById("result");
    var questionEl = document.getElementById("question");
    var optionsEl = document.getElementById("options");
    var submitBtn = document.getElementById("submit-btn");
  
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    submitBtn.style.display = "none";
  
    resultEl.innerText = "Your score is: " + score + " / " + quizData.length;
  }
  
  loadQuestion();
  