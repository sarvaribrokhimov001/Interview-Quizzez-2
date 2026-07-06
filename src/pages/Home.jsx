  import { useState } from 'react';
  import '../styles/Home.css';
  import { Link } from "react-router-dom";
  import ThemeToggle from '../components/ThemeToggle';

  const Home = ({ darkMode, setDarkMode }) => {
    const [search, setSearch] = useState("");

    const sections = [
      { name: "LOGIN", path: "/" },
      { name: "HOME", path: "/home" },
      { name: "QUESTIONS", path: "/questions" },
  { name: "ANSWERS", path: "/answers" },
  { name: "QUIZ", path: "/quiz" },
    ];

    const filteredSections = sections.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div>
        <header>
          <h1 className='home__title'> Welcome to our Website </h1>
          <div className="search__wrapper">
            <input 
            className='app__input' 
            type="search" 
            placeholder="Search section..."
            value={search}
            onChange={(e) => setSearch(e.target.value)} />

            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <div className='home__description__container'>
            <h3 className='home__description__title'> Assalomu alaykum hurmatli foydalanuvchilar 😇 </h3>
            <p className='home__description'> Ushbu loyiha FrontEnd dasturchilar uchun tayyorlangan
Interview Questions, Answers va Quiz platformasidir.
 </p>
 <p className="home__description">

Questions bo'limida interview savollari,

Answers bo'limida ularning javoblari,

Quiz bo'limida esa o'zingizni sinab ko'rishingiz mumkin.

</p>
            {search !== "" && (
              <div className="home__sections">
                <h4 className="home__sections__title"> Sections </h4>
                {filteredSections.length > 0 ? (
                  <div className="home__section">
                    {filteredSections.map((item) => (
                      <li key={item.name}> <Link className="home__section__link" to={item.path}> {item.name} </Link> </li>
                ))}
              </div>
                ) : (
                <h3 className="not__found"> Section is not found ❌ </h3>
                )}
              </div>
            )}
          </div>
        </header>
      </div>
    )
  }
  export default Home;