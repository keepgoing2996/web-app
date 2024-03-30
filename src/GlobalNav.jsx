import menu from './menu';
import './GlobalNav.css';
import './gg-menu.css';
import './gg-close.css';
import { useState } from 'react';
import MenuItem from './MenuItem';

function GlobalNav({className, onNav, onTheme}) {
    const list = menu.map(item => {
        return (
          <MenuItem item={item} onNav={onNav} onTheme={onTheme} key={item.name}/>
        );
    });
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className={`global-nav ${className}`}>
          <button className="global-nav__button" aria-label={showMenu? "close menu": "show menu"} onClick={() => {setShowMenu(!showMenu)}}><span className={showMenu? 'gg-close': 'gg-menu'}/></button>
        {showMenu &&
          (<ul className="global-nav__list">
            {list}
          </ul> )
        }
        </nav>
      );
}

export default GlobalNav;