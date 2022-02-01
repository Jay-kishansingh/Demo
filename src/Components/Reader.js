import './Reader.css'
import { useState } from 'react';
import reactDom from 'react-dom';

function Reader(){
    const [readerText, setReaderText] = useState("");
    const [letter, setLetter] = useState("");

    const handleOnChange = (event)=>{
         let  p =event.target.value;
        setReaderText(p);
    }

    const handleCapital = ()=> {
        let myData = readerText.toUpperCase();
        setLetter(myData);

    }
    const handleItalics = ()=> {
        let myData = readerText
        document.querySelector(".p1").style.color = 'red';
        setLetter(myData);

    }

    return(
        <div>
            <form>
            <center>
            <h1>READER</h1>
                <div className="mb-3 z2">
                    <textarea className="form-control myTextArea" rows="8" value={readerText} onChange={handleOnChange} ></textarea>
                </div>
             </center>
             <button type="button" className="btn btn-primary myButton" onClick={handleCapital}>CAPITAL</button>
             <button type="button" className="btn btn-primary myButton" onClick={handleItalics}>ITALICS</button>
            </form>
            <p className='myText'>Reading time: {readerText.split(" ").length * 0.005} Minutes |Character Count: {readerText.length} | Word Count: {readerText.split(" ").length}</p>
            <h4 className='myText'>Text Preview</h4>
            <p className='myText p1'>{letter}</p>
        </div>
    )
}

export default Reader;