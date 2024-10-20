import React, { useState } from "react";

function CreateArea({onAdd}) {

  const [notes,setNotes]=useState({
    title:"",
    content:""
  });

  function handleChange(e){
    const {name,value}=e.target;
    

    setNotes((prevValue)=>{
      return {
        ...prevValue,
        [name]:[value],
      }
    })
  
  }
 function handleClick(event){
  event.preventDefault();
  if(notes.title!=="" && notes.content!==""){
  onAdd(notes);
  setNotes({
    title:"",
    content:""
  
  });
}else{
  alert("Input cannot be empty");
} } 


  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={notes.title} onChange={handleChange} required></input>
        <textarea name="content" placeholder="Take a note..." rows="3" value={notes.content} onChange={handleChange} required/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
