
import './DropDown.css';

function DropDown({submenu, onNav, dropDown, onTheme}) {
    const list = submenu.map(item => {
        return (
            <li className="dropdown-nav__item" key={item.name}>
                {item.name === "Change Theme" ?
                <a onClick={onTheme} className="dropdown-nav__link" href={item.path} data-target={item.name}>
                    {item.name}
                </a> :
                <a onClick={onNav} className="dropdown-nav__link" href={item.path} data-target={item.name}>
                    {item.name}
                </a>
                }
            </li>
        );
    });
    return (
        <nav className="dropdown-nav">
        {dropDown &&
          (<ul className="dropdown-nav__list">
            {list}
          </ul> )
        }
        </nav>
      );
}
export default DropDown;