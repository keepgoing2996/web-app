import './House.css'
import housedata from './housedata';
function House() {
    const list = housedata.map(item => {
        return (
            <li className="house__item" kye={item.alt} >
                <img className="house__pic" src={item.path} alt={item.alt} />
            </li>
        );
    })
    return (
        <div className="house">
            <h2 className="house__title">Our House</h2>
            <ul className="house__list">
                {list}
            </ul>
            <p>Our nice decorated townhouse is a true reflection of our personal style and taste. The exterior of the townhouse is elegantly designed, with a combination of brick, stone, and siding that creates a charming and inviting appearance. The front porch is the perfect spot to enjoy a cup of coffee in the morning or a glass of wine in the evening.</p>
            <p>Inside, the townhouse is decorated with tasteful and stylish furnishings. The living room features comfortable, modern furniture and a fireplace, creating a warm and inviting space for entertaining guests. The kitchen is spacious and well-equipped, with high-end appliances and plenty of storage space.</p>
            <p>Upstairs, the bedrooms are spacious and inviting, with plush carpeting and large windows that let in plenty of natural light. The master bedroom features a luxurious en-suite bathroom, complete with a spa-like tub and separate shower. Overall, a new decorated townhouse is the perfect combination of style and comfort, making it a great place to call home.</p>
        </div>


    );
}
export default House;