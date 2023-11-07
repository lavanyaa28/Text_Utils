import React, {useState} from 'react'



export default function Textform(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    //console.log("Uppercase was clicked" +text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
    //console.log("Uppercase was clicked" +text);
    let newText = '';
    setText(newText)
  }
  const handleReverseClick = ()=>{
    //console.log("Uppercase was clicked" +text);
    let newText = text.split('').reverse().join('');
    setText(newText)
  }
  const handleOnChange = (event)=>{
    //console.log("On change");
    setText(event.target.value);
  }
  
  //text = "new text"; //wrong way to change state
  //setText = ("new text"); //correct way to change state
  const [text, setText] = useState('Enter Something');

  return (
    <>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="mybox" rows="7"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
<button className="btn btn-primary mx-2 my-3" onClick={handleLoClick}>CONVERT TO LOWERCASE</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>TAP TO CLEAR</button>
<button className="btn btn-primary mx-2" onClick={handleReverseClick}>TAP TO REVERSE</button>
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>
        YOUR TEXT SUMMARY
      </h1>
      <p>
        {text.split(" ").length} words and {text.length} character
      </p>
      <p>
        {0.008* text.split(" ").length} Minutes read
      </p>
      <h2>PREVIEW</h2>
      <p>{text.length>0?text:"ENTER SOMETHING TO PREVIEW"}</p>


    </div>
   </> 
  )
}
