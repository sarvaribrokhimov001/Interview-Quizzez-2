import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/Answers.css";
import answers from "../data/answers";

const Answers = ({ darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");
  const filtered = answers.filter(item => item.id.toString().includes(search) || item.category.toLowerCase().includes(search.toLowerCase()));

    return(
      <div>
        <h1 className="answers__title"> Interview Answers </h1>
          <div className="search__wrapper">
            <input className="app__input" placeholder="Search Id or Category..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <div className="answers__container">
            {filtered.length > 0 ?
                filtered.map(item => (
                  <div className="answer__card" key={item.id}>
                    <h2> Javob *{item.id} </h2>
                    <span className="answer__category"> {item.category} </span>
                    <p> {item.answer} </p>
                  </div>
                )) :
                <h2 className="not__found"> Answer is not found ❌ </h2>
            }
          </div>
      </div>
    )
}
export default Answers;