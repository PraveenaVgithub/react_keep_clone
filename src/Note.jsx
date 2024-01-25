import React from "react";

const Note=(props)=>{
    const deleteNote=()=>{props.deleteItem(props.id)};
    return(
        <>
   
         <div className="note">
         
             <h3>{props.title}</h3>
              <p>{props.content}</p>
              <button type="button" class="btn btn-warning " onClick={deleteNote}>
              <span class="material-symbols-outlined">delete</span></button>

         </div>
        
        </>
    );
}
export default Note;