import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import CreateArea from "./CreateArea"
import Note from "./Note"
import { useState } from "react"

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map( (noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          )
      })}
      <Footer />
    </div>
  )
}

export default App
