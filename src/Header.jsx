import GlobalNav from './GlobalNav';

import ThemeSwitcher from './ThemeSwitcher';
import Register from './Register';
import './Header.css'

function Header({onNav, onTheme, theme}) {
    return (
        <header className="header">
        <a className="header__skiplink" href="#main">
            Skip To Content
        </a>
        <a className="header__logo" href="/">
            <img src="images/logo.png" data-target="Home" onClick={onNav} alt="logo"/> 
        </a>
        <h1 className="header__title">Our Family</h1>  
        <ThemeSwitcher className="header__theme-switcher" onTheme={onTheme} theme={theme}/>
        <GlobalNav onNav={onNav} onTheme={onTheme} className="header__nav"/>
        <Register className="header__register" />
        </header>
    );
}

export default Header;