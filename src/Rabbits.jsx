import './Rabbits.css';
import rabbitsdata from './rabbitsdata';
function Rabbits({onNav}) {
  console.log(rabbitsdata);
    const list = rabbitsdata.map(item => {
        return (
          <div className="card" key={item.id}>
            <h2 className="card__title">{item.title}</h2>
            <img className="card__pic" src={item.pic} alt={item.alt}/>
            <div>
              <p >{item.blurb}</p>
            </div>
          </div>
          );
    });
    return (
        <div id="root_cats">
          {list}
        </div>
    );
}

export default Rabbits;
