import { useEffect, useState, useRef, useCallback } from "react";
import "../styles/Quiz.css";
import quizData from "../data/quizData";
import ThemeToggle from "../components/ThemeToggle";

const Quiz = ({ darkMode, setDarkMode }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    const random = [...quizData].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(random);
  }, []);

  const question = questions[currentQuestion];
  const nextQuestion = useCallback((auto = false) => {
    if (!question) return;
      if (!auto) {
        if (selectedAnswer === question.correctAnswer) {
          setScore((p) => p + 1);
        } else {
          setWrongAnswers((p) => [
            ...p,
            {
              id: question.id,
              category: question.category,
              question: question.question,
              yourAnswer: selectedAnswer,
              correctAnswer: question.correctAnswer,
            },
          ]);
        }
      } else {
        setWrongAnswers((p) => [
          ...p,
          {
            id: question.id,
            category: question.category,
            question: question.question,
            yourAnswer: "Vaqt tugadi !",
            correctAnswer: question.correctAnswer,
          },
        ]);
      }

      const isLast = currentQuestion + 1 >= questions.length;
        if (isLast) {
          setFinished(true);
          return;
        }

      setCurrentQuestion((p) => p + 1);
      setSelectedAnswer("");
      setTimeLeft(20); 
    },
    [question, selectedAnswer, currentQuestion, questions.length]
  );

  useEffect(() => {
    if (finished || !question) return;
      if (timeLeft === 0) {
        nextQuestion(true);
        return; 
      }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [timeLeft, finished, question, nextQuestion]);

  useEffect(() => {
    if (!finished || !questions.length) return;

    const percent = Math.round((score / questions.length) * 100);
    const history = JSON.parse(localStorage.getItem("quizHistory")) || [];

    history.unshift({
      date: new Date().toLocaleString(),
      score,
      wrong: wrongAnswers.length,
      percent,
    });

    localStorage.setItem("quizHistory", JSON.stringify(history.slice(0, 5)));
    const best = Number(localStorage.getItem("bestScore")) || 0;
    localStorage.setItem("bestScore", Math.max(best, score));
  }, [finished, score, questions.length, wrongAnswers.length]);

  if (!questions.length || !question) {
    return <h2 className="quiz__loading"> Loading.... </h2>
  }

  if (finished) {
    const percent = Math.round((score / questions.length) * 100);
    let result = "📚 Practice More";
    if (percent >= 90) result = "🏆 Excellent";
    else if (percent >= 70) result = "👏 Good";
    else if (percent >= 50) result = "🙂 Average";

    const restartQuiz = () => {
      const random = [...quizData].sort(() => Math.random() - 0.5).slice(0, 10);

      setQuestions(random);
      setCurrentQuestion(0);
      setSelectedAnswer("");
      setScore(0);
      setFinished(false);
      setTimeLeft(20);
      setWrongAnswers([]);
    };

    return (
      <div className="quiz quiz__result">
        <h1 className="quiz__title"> Quiz Finished 🎉 </h1>
        <div className="search__wrapper quiz__btn">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <h2> {result} </h2>
        <p> Score: {score} </p>
        <p> Wrong: {wrongAnswers.length} </p>
        <p> Percent: {percent}% </p>
        <button className="quiz__restart" onClick={restartQuiz}> Restart </button>
      </div>
    );
  }

  return (
    <div className="quiz quiz__mode">
      <h1 className="quiz__title"> Quiz Mode </h1>
      <div className="search__wrapper">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="quiz__progress">
        {currentQuestion + 1} / {questions.length}
      </div>
      <div className={timeLeft <= 5 ? "quiz__timer danger" : "quiz__timer"}>
        ⏱️ {timeLeft}s
      </div>

      <div className="quiz__card">
        <p className="quiz__category"> {question.category} </p>
        <h2> {question.id}. {question.question} </h2>

        <div className="quiz__options">
          {question.options.map((opt) => (
            <button key={opt} className={selectedAnswer === opt ? "quiz__option active" : "quiz__option"} onClick={() => setSelectedAnswer(opt)}>
              {opt}
            </button>
          ))}
        </div>

        {selectedAnswer && (
          <button className="quiz__next" onClick={() => nextQuestion(false)}> Next </button>
        )}
      </div>

      <div className="quiz__score"> Score: {score} </div>
    </div>
  );
};
export default Quiz;