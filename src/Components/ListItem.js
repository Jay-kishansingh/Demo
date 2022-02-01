import react from "react";
import './ListItem.css'

function ListItem(props){
    return(
        <div className="list-container">
            
            <li><i className="far fa-times-circle" onClick={()=>{props.onSelect()}}></i>&ensp;{props.item}</li>
        </div>
    )
}

export default ListItem;