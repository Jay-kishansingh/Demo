import './Test.css'
import { useState } from 'react';

function Test(){

    let myEmail = "No Email";
    const [readerText, setReaderText] = useState("");

    const handleOnChange = (event)=>{
        let p = event.target.value;
        setReaderText(p);
    }

    const handleCapital = ()=> {
        let myData = readerText.toUpperCase();
        setReaderText(myData)
        document.querySelector('.ac').style.backgroundColor = "red";
    }
    
    const handleLower = ()=> {
        let myData = readerText.toLowerCase();
        setReaderText(myData)
    }

    return(
        <div>
            <form>
            <center>
            <h1>READER</h1>
                <div className="mb-3">
                    <textarea className="form-control myTextArea" rows="8" value={readerText} onChange={handleOnChange}></textarea>
                </div>
             </center>
             <button type="button" className="btn btn-primary myButton" onClick={handleCapital}>UPPERCASE</button>
             <button type="button" className="btn btn-primary myButton" onClick={handleLower}>LOWERCASE</button>
            </form>
            <p className='myText'></p>
            <h5 className='myText'>Approximate Reading Time: {(readerText.split(' ').length * 0.192).toFixed(2)} | Total Words: {readerText==''? 0:readerText.split(' ').length} | Characters: {readerText.length}</h5>
            <h4 className='myText'>Preview</h4>
            <p className='myText ac'>{readerText}</p>
        </div>
    )
}

export default Test;