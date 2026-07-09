import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/Questions.css";
import questions from "../data/questions";

const Questions = ({ darkMode, setDarkMode }) => {
    const [search, setSearch] = useState("");
    const filtered = questions.filter(item => item.id.toString().includes(search) || item.category.toLowerCase().includes(search.toLowerCase()));

    return (
      <div>
        <h1 className="questions__title"> Interview Questions </h1>
          <div className="search__wrapper">
            <input className="app__input" placeholder="Search id or category..." value={search} onChange={(e)=>setSearch(e.target.value)} />
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

            <div className="questions__container">
                {filtered.length > 0 ?
                    filtered.map(item => (
                      <div className="question__card" key={item.id}>
                        <h2> Savol *{item.id} </h2>
                        <span className="question__category"> {item.category} </span>
                        <p> {item.question} </p>
                      </div>
                    )):
                    <h2 className="not__found"> Question is not found ❌ </h2>
                }
            </div>
      </div>
    )
}
export default Questions;