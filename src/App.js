import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';

function App() {
 
    const [addItem,setAddItem]= useState([]);
const addNote=(note)=>{
  setAddItem((prevData)=>{
    return([...prevData,note]);
  });
  }
  const onDelete=(id)=>{setAddItem((oldData)=> oldData.filter((curdata,indx) => {
    return(indx!==id);
  }))};

  return (
    <> 
    <Header/>
    <CreateNote passNote={addNote}/>
  
   <div className=" gridnote ">
   {addItem.map((curval,index) =>{
      return <Note key={index} id={index} title={curval.title} content={curval.content} deleteItem={onDelete} />
    })}</div>
    <Footer/>

     </>
  );
}

export default App;
