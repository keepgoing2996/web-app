import './Living.css';
import livingdata from './livingdata';
function Rabbits({onNav}) {
  console.log(livingdata);
    const list = livingdata.map(item => {
        return (
          <div className="card" key={item.id}>
            <h2 className="card__title">{item.id}</h2>
            <img className="card__pic" src={item.pic} alt={item.id}/>
            <div>
              <p >{item.blurb}</p>
            </div>
          </div>
          );
    });
    return (
        <div id="root_living">
          {list}
        </div>
    );
}

export default Rabbits;
