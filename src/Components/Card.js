import './Card.css';
import amazon1 from '../Images/amazon1.jpg';

function Card(props){
    return(
        <div className="card-container">
            <div className="card-title">
                <h2>{props.title}</h2>
            </div>
            <div className="card-image">
                <img src={props.myImage} className='image-item'></img>
            </div>
            <div className="card-link">
                <a href="" className='card-item-link'>See your collected offers</a>
            </div>
        </div>
    )
}

export default Card;