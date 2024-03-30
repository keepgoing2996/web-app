import { useState } from "react";
import DropDown from "./DropDown";

function MenuItem({item, onNav, onTheme}) {
    const [dropDown, setDropDown] = useState(false);
    return (
        <li className="global-nav__item" key={item.name}>
            {item.submenu? 
                <>
                <a onClick={(event) => {
                    setDropDown(!dropDown);
                    event.preventDefault();
                }} className="global-nav__link" href={item.path} aria-label={dropDown? "close dropdown": "show dropdown"}>
                    {item.name} {dropDown? <span>-</span>:  <span>+</span>}
                </a>
                <DropDown onNav={onNav} onTheme={onTheme} submenu={item.submenu} dropDown={dropDown}/>
                </>
                : 
                <a onClick={onNav} className="global-nav__link" href={item.path} data-target={item.name}>
                    {item.name}
                </a>
            }
        </li>
    );
}

export default MenuItem;