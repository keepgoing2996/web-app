import gallerymenu from "./gallerymenu";
import './GalleryImage.css';
import "./gg-arrow-left.css";
import "./gg-arrow-right.css";
import {  useState } from "react";
function GalleryImage() {
    const [imageIdx, setImageIdx] = useState(0);
    const length = gallerymenu.length;
    console.log(imageIdx);
    const onPrev = () => {
        const imageIdxNew = imageIdx === 0? length - 1: imageIdx - 1;
        setImageIdx(imageIdxNew);
    }
    const onNext = () => {
        const imageIdxNew = imageIdx === length - 1? 0: imageIdx + 1;
        setImageIdx(imageIdxNew);
    };
    const list = gallerymenu.map((item, index) => {
        return (
            (index === imageIdx) ?
                <li className="gallery-item__pic" key={index}>
                    <img className="gallery__pic" src={item.path} alt={item.alt} />
                </li> :
            <li key={index}>
            </li>
        );
    });

    const listButton =  gallerymenu.map((item, index) => {
        return (
            <li className="gallery__item" key={index}>
                <button className={`gallery__button ${index === imageIdx? "gallery-select__button": ""}`} onClick={() => {
                    setImageIdx(index);
                }} aria-label="gallery select button"></button>
            </li>
        );
    });
   
    return (
        <div className="gallery">
            <h2 className="gallery__title">Memories</h2>
            <div className="gallery__image">
                <button className="gallery-prev__button" onClick={onPrev} aria-label="gallery prev button"><span className="gg-arrow-left"></span></button>
                <ul className="gallery__list">
                    {list}
                </ul> 
                <button className="gallery-next__button" onClick={onNext} aria-label="gallery next button"><span className="gg-arrow-right"></span></button>
            </div>
            
            <ul className="gallery-button__list">
                {listButton}
            </ul> 
            <p>My nice traveling photos capture the beauty and excitement of the places I have visited. From stunning landscapes to bustling city streets, my photos showcase the unique charm of each destination.</p>
            <p>One of my favorite photos is of a sunset over the ocean. The colors in the sky are truly breathtaking, with hues of pink, orange, and purple blending together to create a beautiful gradient. The water is calm and clear, reflecting the colors of the sky above. In the distance, a lone sailboat can be seen, adding a touch of peacefulness to the scene.</p>
            <p>Another photo that I love is of a busy street in a foreign city. The photo is vibrant and lively, with people, cars, and motorcycles all moving about. The architecture in the background is impressive, with tall buildings and intricate details that add to the energy of the scene. I can almost hear the hustle and bustle of the city just by looking at this photo.</p>
            <p>Overall, my nice traveling photos are a reminder of the amazing experiences and memories I have made on my travels. They serve as a source of inspiration for future trips and a way to share my adventures with others.</p>
        </div>
    );
}
export default GalleryImage;