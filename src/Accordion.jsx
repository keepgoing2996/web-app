import { useState } from "react";
import './Accordion.css';

function Accordion({title, content}) {
    const [isActive, setIsActive] = useState(false);
    return (
        <li className="accordion__item">
            <button className="accordion__title" onClick={() => {setIsActive(!isActive)}}>
                <h2>{title}</h2> <h2>{isActive? '-': '+'}</h2>
            </button>
            {isActive && 
            <div className="accordion__content">
                <h3>{content}</h3>
            </div>}
        </li>
    );
}

export default Accordion;