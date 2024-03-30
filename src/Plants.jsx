import './Plants.css'
import plantsdata from './plantsdata';
function Plants() {
    const list = plantsdata.map(item => {
        return (
            <li className="plants__item" kye={item.alt} >
                <img className="plants__pic" src={item.path} alt={item.alt} />
            </li>
        );
    })
    return (
        <div className="plants">
            <h2 className="plants__title">Plants Lover</h2>
            <ul className="plants__list">
                {list}
            </ul>
            <p>Having nice indoor plants in our home is a great way to add a touch of nature and greenery to any space. Indoor plants come in a wide variety of shapes, sizes, and colors, making it easy to find one that fits our personal style and the layout of our home. Not only do they look beautiful, but indoor plants can also improve the air quality in our home by removing pollutants and increasing oxygen levels.</p>
            <p>One popular type of indoor plant is the snake plant, also known as the mother-in-law's tongue. These plants are known for their tall, upright leaves that have a unique, striped pattern. They are easy to care for and can tolerate low light conditions, making them a great option for darker corners of your home.
            </p>
            <p>Another popular choice is the peace lily, which is known for its beautiful white flowers and glossy, dark green leaves. These plants are known for their air-purifying abilities and can remove common pollutants from the air. They prefer medium to low light and should be watered regularly, but not overwatered to prevent root rot. Overall, adding indoor plants to your home can bring life and beauty to any space.</p>
        </div>


    );
}
export default Plants;