import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNote]=useState([{}]);
  function clicked(event,title,content) {
    console.log(notes);
    setNote((prevValue)=>{
      return(
        [...prevValue,{
          title:title,
          content:content
        }]
      )
    })
    event.preventDefault();
  }

  function deleteNote(id){
    setNote(notes.filter((note,index)=>{
      if(index!=id)
      return note
    }))
  }

  return (
    <div>
      <Header />
      <CreateArea onClicked={clicked}/>
      {notes.map((note,index)=>{
        if(index!=0)
          return <Note key={index} id={index} title={note.title} content={note.content} delete={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
