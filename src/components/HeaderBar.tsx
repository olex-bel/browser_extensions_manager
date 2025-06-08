
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import IconMoon from '../assets/images/icon-moon.svg';
import IconSun from '../assets/images/icon-sun.svg';
import Logo from '../assets/images/logo.svg';
import './HeaderBar.css'

export default function HeaderBar() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="header-bar">
            <img src={Logo} className={theme === 'dark'? 'header-bar__icon-dark': undefined} alt="Logo" />

            <button className="header-bar__mode-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
                {
                    theme === 'dark' 
                        ? <img src={IconSun} alt="Light Mode" />
                        : <img src={IconMoon} alt="Dark Mode" />
                }
                
            </button>
        </div>
    )
}