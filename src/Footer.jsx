import footermenu from './footermenu';
import './Footer.css';
function Footer({onNav}) {
    const list = footermenu.map(item => {
        // console.log(item.name);
        return (
            <li className="footer-nav__item" key={item.name}>
                <a className="footer-nav__link" onClick={onNav} href={item.path} data-target={item.name}>{item.name}
                </a>
            </li>
        );
    });
    return (
        <footer className="footer">
            <nav className="footer-nav">
                <ul className="footer-nav__list">
                    {list}
                </ul>
             </nav>
        </footer>
        
    );
}

export default Footer;