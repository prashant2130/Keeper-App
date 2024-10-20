import React from "react";

function Note({title,content,id,onDelete}) {



  function handleClick(){
    onDelete(id);
  }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
