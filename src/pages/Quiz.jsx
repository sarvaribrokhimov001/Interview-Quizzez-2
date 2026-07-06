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

  // ---------------- INIT ----------------
  useEffect(() => {
    const random = [...quizData]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    setQuestions(random);
  }, []);

  const question = questions[currentQuestion];

  // ---------------- NEXT QUESTION (SAFE) ----------------
  const nextQuestion = useCallback(
    (auto = false) => {
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
            yourAnswer: "Vaqt tugadi",
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
      setTimeLeft(20); // Taymerni yangilaymiz
    },
    [question, selectedAnswer, currentQuestion, questions.length]
  );

  // ---------------- TIMER (TO'G'RILANDI) ----------------
  useEffect(() => {
    if (finished || !question) return;

    // Agar vaqt tugasa, keyingi savolga o'tamiz
    if (timeLeft === 0) {
      nextQuestion(true);
      return; 
    }

    // Taymerni har 1 soniyada kamaytirish
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [timeLeft, finished, question, nextQuestion]);

  // ---------------- SAVE HISTORY ----------------
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

  // ---------------- LOADING ----------------
  if (!questions.length || !question) {
    return <h2 className="quiz__loading">Loading...</h2>;
  }

  // ---------------- FINISHED ----------------
  if (finished) {
    const percent = Math.round((score / questions.length) * 100);

    let result = "📚 Practice More";
    if (percent >= 90) result = "🏆 Excellent";
    else if (percent >= 70) result = "👏 Good";
    else if (percent >= 50) result = "🙂 Average";

    const restartQuiz = () => {
      const random = [...quizData]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

      setQuestions(random);
      setCurrentQuestion(0);
      setSelectedAnswer("");
      setScore(0);
      setFinished(false);
      setTimeLeft(20);
      setWrongAnswers([]);
    };

    return (
      <div className="quiz">
        <h1 className="quiz__title">Quiz Finished 🎉</h1>
        <div className="search__wrapper">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <h2>{result}</h2>
        <p>Score: {score}</p>
        <p>Wrong: {wrongAnswers.length}</p>
        <p>Percent: {percent}%</p>
        <button className="quiz__restart" onClick={restartQuiz}>
          Restart
        </button>
      </div>
    );
  }

  // ---------------- MAIN UI ----------------
  return (
    <div className="quiz">
      <h1 className="quiz__title">Quiz Mode</h1>
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
        <p>{question.category}</p>
        <h2>
          {question.id}. {question.question}
        </h2>

        <div className="quiz__options">
          {question.options.map((opt) => (
            <button
              key={opt}
              className={
                selectedAnswer === opt ? "quiz__option active" : "quiz__option"
              }
              onClick={() => setSelectedAnswer(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        {selectedAnswer && (
          <button className="quiz__next" onClick={() => nextQuestion(false)}>
            Next
          </button>
        )}
      </div>

      <div className="quiz__score">Score: {score}</div>
    </div>
  );
};

export default Quiz;






























// import { useEffect, useState } from "react";
// import "../styles/Quiz.css";
// import quizData from "../data/quizData";
// import ThemeToggle from "../components/ThemeToggle";

// const Quiz = ({ darkMode, setDarkMode }) => {

//   const [questions, setQuestions] = useState([]);

//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const [selectedAnswer, setSelectedAnswer] = useState("");

//   const [score, setScore] = useState(0);
//   const [finished, setFinished] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(20);
//   const [wrongAnswers, setWrongAnswers] = useState([]);

//   useEffect(() => {

//     const randomQuestions = [...quizData]
//       .sort(() => Math.random() - 0.5)
//       .slice(0, 10);

//     setQuestions(randomQuestions);

//   }, []);
// useEffect(() => {
//   if (finished || !questions.length) return;

//   const timer = setInterval(() => {
//     setTimeLeft((prev) => {
//       if (prev <= 1) {
//         nextQuestion(true);
//         return 20;
//       }
//       return prev - 1;
//     });
//   }, 1000);

//   return () => clearInterval(timer);
// }, [currentQuestion, finished, questions.length]);


//     useEffect(() => {

//   if (!finished) return;

//   const wrong = questions.length - score;

//   const percent = Math.round(
//     (score / questions.length) * 100
//   );



//   let result = "";

//   const history =
//     JSON.parse(localStorage.getItem("quizHistory")) || [];

//   history.unshift({
//     date: new Date().toLocaleString(),
//     score,
//     wrong,
//     percent,
//   });

//   localStorage.setItem(
//     "quizHistory",
//     JSON.stringify(history.slice(0, 5))
//   );

//   const best = Math.max(
//     score,
//     Number(localStorage.getItem("bestScore")) || 0
//   );

//   localStorage.setItem("bestScore", best);

// }, [finished]);

//   if (questions.length === 0) {
//     return <h2 className="quiz__loading">Loading...</h2>;
//   }
//   if (finished) {

//   const wrong = questions.length - score;

//   const percent = Math.round((score / questions.length) * 100);


//   const bestScore =
//     Number(localStorage.getItem("bestScore")) || 0;


//   let result = "";

//   if (percent >= 90) {

//     result = "🏆 Excellent";

//   } else if (percent >= 70) {

//     result = "👏 Good";

//   } else if (percent >= 50) {

//     result = "🙂 Average";

//   } else {

//     result = "📚 Practice More";

//   }

//   function restartQuiz() {

//     const randomQuestions = [...quizData]
//       .sort(() => Math.random() - 0.5)
//       .slice(0, 10);

//     setQuestions(randomQuestions);

//     setCurrentQuestion(0);

//     setSelectedAnswer("");

//     setScore(0);

//     setFinished(false);
//     setTimeLeft(20);
//     setWrongAnswers([]);
//   }

//   return (

//     <div className="quiz">

//       <h1 className="quiz__title">

//         Quiz Finished 🎉

//       </h1>


//           <div className="search__wrapper">
//       <ThemeToggle
//         darkMode={darkMode}
//         setDarkMode={setDarkMode}
//       />
//     </div>

//       <div className="quiz__result">
//         {

// wrongAnswers.length>0 && (

// <>

// <h2>

// Wrong Answers

// </h2>

// {

// wrongAnswers.map((item)=>(

// <div

// className="wrong__card"

// key={item.id}

// >

// <h4>

// {item.id}. {item.question}

// </h4>

// <p>

// Category :

// <strong>

// {item.category}

// </strong>

// </p>

// <p>

// Your Answer :

// <span className="wrong">

// {item.yourAnswer}

// </span>

// </p>

// <p>

// Correct Answer :

// <span className="correct">

// {item.correctAnswer}

// </span>

// </p>

// </div>

// ))

// }

// </>

// )

// }
//         <h2>{result}</h2>

//         <p>

//           ✅ To'g'ri javoblar :
//           <strong> {score}</strong>

//         </p>

//         <p>

//           ❌ Noto'g'ri javoblar :
//           <strong> {wrong}</strong>

//         </p>

//         <p>

//           📊 Foiz :
//           <strong> {percent}%</strong>

//         </p>

//         <p>
//   🏆 Best Score :
//   <strong>{bestScore}</strong>
// </p>

//         <h2>

// History

// </h2>

// {

// (JSON.parse(localStorage.getItem("quizHistory"))||[])

// .map((item,index)=>(

// <div

// key={index}

// className="history"

// >

// <p>

// 📅 {item.date}

// </p>

// <p>

// Score :

// {item.score}

// </p>

// <p>

// {item.percent}%

// </p>

// </div>

// ))

// }

//         <button

//           className="quiz__restart"

//           onClick={restartQuiz}

//         >

//           Restart Quiz

//         </button>

//       </div>

//     </div>

//   );

// }

// const question = questions[currentQuestion] || null;

// if (!questions.length) {
//   return <h2 className="quiz__loading">Loading...</h2>;
// }

// function nextQuestion(auto = false) {

//   let newScore = score;

//   if (!auto) {

//     if (selectedAnswer === question.correctAnswer) {

//       newScore++;

//       setScore(newScore);

//     } else {

//       setWrongAnswers((prev) => [

//         ...prev,

//         {

//           id: question.id,

//           category: question.category,

//           question: question.question,

//           yourAnswer: selectedAnswer,

//           correctAnswer: question.correctAnswer

//         }

//       ]);

//     }

//   }

//   if (auto) {

//     setWrongAnswers((prev) => [

//       ...prev,

//       {

//         id: question.id,

//         category: question.category,

//         question: question.question,

//         yourAnswer: "Vaqt tugadi",

//         correctAnswer: question.correctAnswer

//       }

//     ]);

//   }

//   if (currentQuestion + 1 === questions.length) {

//     setFinished(true);

//     return;

//   }

//   setCurrentQuestion(currentQuestion + 1);

//   setSelectedAnswer("");

//   setTimeLeft(20);

// }

//   return (

//     <div className="quiz">

//       <h1 className="quiz__title">
//         Quiz Mode
//       </h1>

//       <div className="search__wrapper">
//   <ThemeToggle
//     darkMode={darkMode}
//     setDarkMode={setDarkMode}
//   />
// </div>

//       <div className="quiz__progress">

//         {currentQuestion + 1} / {questions.length}

//       </div>

//       <div
//   className={
//     timeLeft <= 5
//       ? "quiz__timer danger"
//       : "quiz__timer"
//   }
// >

// ⏱️ {timeLeft}s

// </div>

//       <div className="quiz__card">

//         <p className="quiz__category">

//           {question.category}

//         </p>

//         <h2>

//           {question.id}. {question.question}

//         </h2>

//         <div className="quiz__options">

//           {

//             question.options.map((option) => (

//               <button

//                 key={option}

//                 className={
//                   selectedAnswer === option
//                     ? "quiz__option active"
//                     : "quiz__option"
//                 }

//                 onClick={() => setSelectedAnswer(option)}

//               >

//                 {option}

//               </button>

//             ))

//           }

//         </div>

//         {

//           selectedAnswer && (

//             <button

//               className="quiz__next"

//               onClick={nextQuestion}

//             >

//               Next

//             </button>

//           )

//         }

//       </div>

//       <div className="quiz__score">

//         Score : {score}

//       </div>

//     </div>

//   );

// };

// export default Quiz;