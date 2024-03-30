import './Main.css';
import Home from './Home';
import About from './About';
import Rabbits from './Rabbits';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import Policy from './Policy';
import GalleryImage from './GalleryImage';
import Register from './Register';
import Plants from './Plants';
import House from './House';
import Cooking from './Cooking';
function Main({page, onNav}) {
    return (
        <main className='main' id="main">
            {page === 'Home' && <Home/>}
            {page === 'About' && <About/>}
            {page === 'Rabbits' && <Rabbits onNav={onNav}/>}
            {page === 'Gallery' && <GalleryImage/>}
            {page === 'FAQ' && <FAQ/>}
            {page === 'Plants' && <Plants/>}
            {page === 'House' && <House/>}
            {page === 'Cooking' && <Cooking/>}
            {page === 'Contact Us' && <ContactUs/>}
            {page === 'Privacy Policy' && <Policy/>}
            {page === 'Register' && <Register/>}
        </main>
    );
}

export default Main;