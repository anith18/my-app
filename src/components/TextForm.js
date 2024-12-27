import React,{useState} from 'react'

export default function TextForm(props) {
const handleUpClick=()=>{
    
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showalert("converted to uppercase","success");
}
const handleloClick=()=>{
  
  let newtext=text.toLowerCase();
  setText(newtext);
  props.showalert("converted to lowercase","success");

}
const handleclearClick=()=>{
  
  let newtext=' ';
  setText(newtext);
  props.showalert("text was cleared","success");

}
const handleCopyClick=()=>{
  var text=document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showalert("text was copied","success");

}

const handleOnChange=(event)=>{
    setText(event.target.value);
    
}

    const[text, setText]=useState(" ");

  return (
    <>
    <div className='container my-2' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text}id="mybox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1"onClick={handleUpClick}>upper case</button>
        <button className="btn btn-primary mx-2 my-1"onClick={handleloClick}>lower case</button>
        <button className="btn btn-primary mx-2 my-1"onClick={handleclearClick}>clear text</button>
        <button className="btn btn-primary mx-2 my-1"onClick={handleCopyClick}>copy text</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>your text summary</h1>
        <p> {text.split(" ").length} words and {text.length}</p>
        <p> {0.008 * text.split(" ").length}minutes to read </p>
        <h2>preview</h2>
        <p>{text.length>0?text:"enter something to preview it"}</p>
    </div>
    </>
  )
}
