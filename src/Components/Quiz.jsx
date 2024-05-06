import { useState } from "react";
import "../CSS/Quiz.css";
import PropTypes from "prop-types";
import DarkModeImage from "./Icons/DarkMode.png";
import Cold from "./Icons/SickComputer.jpg";
import CoffeeMachine from "./Icons/CoffeeMachine.jpg";
import Snack from "./Icons/Snack.jpg";
import Marry from "./Icons/Marry.jpg";

const qt = [
  {
    id: 1,

    question: "Why do programmers prefer dark mode?",
    image: DarkModeImage,
    options: [
      { id: 1, text: "It's more enlightening" },
      { id: 2, text: "They hate the spotlight" },
      { id: 3, text: "Because light attracts bugs" },
      { id: 4, text: "They find it brighter" },
    ],
    correctOption: 3,
  },
  {
    id: 2,

    question: "Why was the computer cold?",
    image: Cold,
    options: [
      { id: 1, text: "It left its Windows open" },
      { id: 2, text: "It forgot to wear its Java jacket" },
      { id: 3, text: "Its motherboard was too far" },
      { id: 4, text: "It caught a terminal chill" },
    ],
    correctOption: 4,
  },
  {
    id: 3,

    question: "How does a programmer fix a broken coffee machine?",
    image: CoffeeMachine,
    options: [
      { id: 1, text: "Turning it off and on again" },
      { id: 2, text: "Rewriting the coffee-making algorithm" },
      { id: 3, text: "Declaring a new instance of CoffeeMaker" },
      { id: 4, text: "Blaming it on the hardware team" },
    ],
    correctOption: 4,
  },
  {
    id: 4,

    question: "What's a programmer's favorite snack?",
    image: Snack,
    options: [
      { id: 1, text: "Cookies and cache" },
      { id: 2, text: "Chips and Java" },
      { id: 3, text: "Bytes of a sandwich" },
      { id: 4, text: "RAMen noodles" },
    ],
    correctOption: 2,
  },
  {
    id: 5,

    question: "Why marry a programmer?",
    image: Marry,
    options: [
      { id: 1, text: "They are not affraid to commit" },
      { id: 2, text: "You'll get Ruby and Perl" },
      { id: 3, text: "They'll debug your heart" },
      { id: 4, text: "They'll code your happily ever after" },
    ],
    correctOption: 1,
  },
];

const Mp = ({ questions, setScore, setShowres, setMessage }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log("ok scroll");
  };

  const handleChange = (questionId, optionId) => {
    setAnswers({ ...answers, [questionId]: optionId });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowres(true);

    // Calculate result
    let score = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctOption) {
        score++;
      }
    });

    if (score === 5) setMessage("Excellent Score! :)");
    else if (score >= 3) setMessage("Good Job!");
    else setMessage("Better Luck Next Time :(");

    setScore(score);

    // Change background color based on correctness for all options
    questions.forEach((question) => {
      const correctOptionId = question.correctOption;
      const options = document.getElementsByName(question.id);
      options.forEach((option) => {
        const label = option.nextElementSibling;
        label.style.backgroundColor =
          parseInt(option.value) === correctOptionId ? "#b1ffb1" : "#ff9797";
      });
    });

    setTimeout(scrollToTop, 100);
  };

  return (
    <div id="QuizCt">
      <div id="cont">
        {questions.map((question) => (
          <div className="questionCt" key={question.id}>
            <h3>{question.question}</h3>
            <img src={question.image} alt={question.question} />

            <div className="optionCt">
              {question.options.map((option) => (
                <div className="option" key={option.id}>
                  <input
                    type="radio"
                    name={question.id}
                    value={option.id}
                    checked={answers[question.id] === option.id}
                    onChange={() => handleChange(question.id, option.id)}
                    disabled={submitted} // Disable options after submission
                  />
                  <label key={option.id}>{option.text}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button id="submit" onClick={handleSubmit} disabled={submitted}>
        Submit
      </button>
    </div>
  );
};

Mp.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
        })
      ).isRequired,
      correctOption: PropTypes.number.isRequired,
    })
  ).isRequired,
  setScore: PropTypes.func.isRequired,
  setShowres: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
};

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [showres, setShowres] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <section id="quiz">
      {!showres && <h1>Try This Fun Quiz!!</h1>}
      {showres && (
        <div id="message">
          <h2>Thank You For Completing This Quiz !</h2>
          <h3>{message}</h3>
          <h2>Your Score is: {score}/5 </h2>
        </div>
      )}

      <Mp
        questions={qt}
        setScore={setScore}
        setShowres={setShowres}
        setMessage={setMessage}
      />
    </section>
  );
};

export default Quiz;
