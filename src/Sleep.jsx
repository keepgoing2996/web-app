import './Sleep.css'
import sleepdata from './sleepdata';
function Sleep() {
    const list = sleepdata.map(item => {
        return (
            <li className="sleep__item" kye={item.alt} >
                <img className="sleep__pic" src={item.path} alt={item.alt} />
            </li>
        );
    })
    return (
        <div className="sleep">
            <h2 className="sleep__title">植物们</h2>
            <ul className="sleep__list">
                {list}
            </ul>
            <p>As a couple, we have a silly tradition of taking photos of each other while we're sleeping. It's always so amusing to see how different we look when we're not conscious, and it's a fun way to document our relationship and the silly moments that happen in our lives. </p>
            <p> Whenever one of us falls asleep first, the other will sneak a photo and post it on social media with a funny caption. It's a lighthearted and playful way for us to show our love and affection for each other, and we always have a good laugh when we look back at the photos. It's just one of the many ways that we have fun together and keep our relationship strong.</p>
        </div>


    );
}
export default Sleep;