import React, { useState } from "react";
const CreateNote=(props)=>{
    const [note,setNote]= useState({title:"",content:""});
    const renderInputEvent=(event)=>{
        // const value=event.target.value;
        // const name=event.target.name;
        const{name,value}=event.target; //obj destructuring the abv lines can be written like this

        setNote((prevdata)=>{
            return{
                ...prevdata,[name]:value,
            };
        });

    };
    const addevent=()=>{
          props.passNote( note);
          setNote({title:"",content:""});
    };
     

    return(
        <>
          <div className="main_note">
             <input type="text" name="title" value={note.title } onChange={renderInputEvent} placeholder="Title" autoComplete="off"/>
              <textarea rows="" column=""name="content" value={note.content}  onChange={renderInputEvent }  placeholder="Write a note..."></textarea>
              <button type="button" class="btn btn-warning " onClick={addevent}>+</button>
          </div>
        </>
    );
}
export default CreateNote;