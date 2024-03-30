import './ThemeSwitcher.css';

function ThemeSwitcher({className, onTheme, theme}) {
    const icon = theme === "light"? "☀️": "🌙";
    return (
        <span className={`${className} "theme-switcher"`}>
            <button 
                type="button"
                className="theme-swicher__toggeler"
                onClick={onTheme}
            >
            <span className="theme-swicher__switch"></span>
                {icon}
            </button>
        </span>
    );
}
export default ThemeSwitcher;
