import './Cooking.css'
import cookingdata from './cookingdata';
function Cooking() {
    const list = cookingdata.map(item => {
        return (
            <li className="cooking__item" kye={item.alt} >
                <img className="cooking__pic" src={item.path} alt={item.alt} />
            </li>
        );
    })
    return (
        <div className="cooking">
            <h2 className="cooking__title">Our Cooking</h2>
            <ul className="cooking__list">
                {list}
            </ul>
            <p>Cooking delicious food at home is a great way to enjoy a meal that is both satisfying and healthy. When we cook our own food, we have complete control over the ingredients and cooking process, allowing us to create dishes that are tailored to our personal preferences and dietary needs. Whether we are preparing a simple meal for ourselves or a complex, multi-course dinner for friends and family, cooking our own food can be a fun and rewarding experience.</p>
            <p>One of the benefits of cooking our own food is that we can use high-quality, fresh ingredients that are free from additives and preservatives. This not only makes the food taste better, but it also ensures that it is healthier for us to eat. We can also experiment with different flavors and cooking techniques, allowing us to create unique and interesting dishes that we might not find at a restaurant.

</p>
            <p>Cooking our own food can also save us money. Rather than spending money on expensive restaurant meals or pre-made food from the store, we can use those funds to purchase high-quality ingredients that will make our home-cooked meals taste even better. Plus, the satisfaction of creating a delicious meal from scratch is priceless. Overall, cooking our own food is a delicious and rewarding experience that everyone should try.</p>
        </div>


    );
}
export default Cooking;