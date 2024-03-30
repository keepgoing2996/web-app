import './App.css';
import { useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useRef } from 'react';

function App() {
  const [page, setPage] = useState('Home');

  const [theme, setTheme] = useState('light');

  function onNav(event) {   
    const target = event.target.dataset.target;
    event.preventDefault();
    console.log(target);
    if (target) {
        event.preventDefault();
        setPage(target);
    }
  }
  function onTheme(event) {
    const newTheme = theme === 'light'? 'dark': 'light';
    setTheme(newTheme);
    event.preventDefault();
  }
  return (
    
    <div className={theme === "dark" ? "app dark": "app"}>
      <Header onNav={onNav} onTheme={onTheme} theme={theme}/>
      <Main onNav={onNav} page={page}/>
      <Footer onNav={onNav}/>
    </div>
    
  );
}

export default App;
