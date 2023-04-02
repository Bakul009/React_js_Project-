import React, { useState } from 'react'
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";


export default function TextBox(props) {
  let barStyle={
    color:"#311b92"
  }

  const handleUpclick =() =>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);}

        const handleLoclick =() =>{
          console.log("Uppercase was clicked" + text);
          let newText=text.toLowerCase();
          setText(newText);}      

    const handleCapclick =() =>{
      let text2=text.toLowerCase();
        let arr=text2.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);}
            let newText= arr.join(" ");
            setText(newText);
    }


  const handleCopy=()=>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>  
        <div className="mb-3">
        <GrammarlyEditorPlugin clientId="client_JWFq8pdwJeEqiNtTXy72DZ" config={{ documentDialect: "british" }}>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </GrammarlyEditorPlugin>
        </div>
     <button type="button" className="btn btn-dark mx-2" onClick={handleCapclick}>1st Letter Capital</button> 
     <button type="button" className="btn btn-success mx-2" onClick={handleUpclick}>Convert Uppercase</button>  
     <button type="button" className="btn btn-info mx-2" onClick={handleLoclick}>Convert Lowercase</button>  
     <button type="button" className="btn btn-info mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>   
     <button type="button" className="btn btn-info mx-2" onClick={handleCopy}>Copy Text</button>    
    </div>

    <div className="container my-3">
      <h2> Your Text Summary</h2>
      <p> <b>Word :</b>{text.split(" ").length -1}  </p>
      <p> <b>Character :</b>{text.length} </p>
      <p> <b>Reading Time :</b>{0.08 * text.split(" ").length} Minutes</p>

      
      <div className="container my-3"> 
      <h3> Preview</h3>
         <div class="card">
            <div class="card-body">
               <p style={barStyle}> <b>{text}</b> </p>
            </div>
         </div>
     </div>
     
    
    </div>

    </>

  )
}