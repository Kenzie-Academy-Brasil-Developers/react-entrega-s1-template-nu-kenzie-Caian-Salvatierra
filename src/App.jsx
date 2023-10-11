import { useState } from "react";

import "./styles/index.scss";
import { HomePage } from "./pages/HomePage/Homepage";


function App() {
  const [listNotes, setListNotes] = useState([]);

  const addNote = (object) => {
    const id = crypto.randomUUID();
    const newNote = {...object, id};

      setListNotes([...listNotes, newNote]);
      
  }

  const removeNote = (id) => {
    const listFiltered = listNotes.filter((note)=> {
      if (note.id !== id){
        return note 
      }
    });

    setListNotes(listFiltered);
  }

  return (
    <>
    
      <HomePage listNotes= {listNotes} addNote= {addNote} 
      removeNote= {removeNote}/>
       
    </>
  );
}

export default App
