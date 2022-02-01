import { useState } from 'react/cjs/react.development';
import './Test2.css'
import ListItem from './ListItem';

function Test2(){

    const [task, setTask] = useState("");
    const [items, setItems] = useState([]);

    function taskHandler(event){
        setTask(event.target.value)
    }
    
    function listOfItems(){
        setItems((data)=> {return [...data, task]});
        setTask("");
    }

    return(
        <div className='todo-container w-50'>
            <div className='todo-header'>
                <center>
                <h2>Task Scheduler - Version 0.4</h2>
                </center>
            </div>
            <div className='todo-body'>
            <center>
            <div class="input-group mb-3">
                <input value={task} type="text" className="form-control task-input-field" placeholder="Enter Task Here ..." onChange={taskHandler} />
                <button className='input-button-field btn' onClick={task==''?1:listOfItems}>+</button>
            </div>
            </center>
            <div>
                <h5>
                    {items.map((item)=>{return <ListItem item={item} />})}
                </h5>
            </div>
            </div>
        </div>
    )
}

export default Test2;