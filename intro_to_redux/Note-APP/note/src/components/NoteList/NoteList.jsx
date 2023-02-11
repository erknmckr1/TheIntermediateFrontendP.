import React, { useEffect, useState } from "react";
import "./notelist.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote, editNote } from "../../redux/notes/notesSlice";
import EditModal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function NoteList() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const [filteredNote, setFilteredNote] = useState(notes);
  const searchText = useSelector((state) => state.notes.searchText);

  // modal componentıne prop olarak yollanacak.
  const [modalTitle,setModalTitle] = useState("")
  const [modalNote,setModalNote] = useState("")
  const [selectedNote,setSelectedNote] = useState(null)

  const handleEdit = (note)=>{
    setSelectedNote(note)
    setModalTitle(note.title)
    setModalNote(note.note)
  }
  const handleModalClose = () => {
    setSelectedNote(null);
  };
  const handleModalSave = () => {
    dispatch(editNote({ ...selectedNote, title: modalTitle, note: modalNote }));
    handleModalClose();
  };
  //////
  
  

  useEffect(() => {
    if (searchText) {
      setFilteredNote(notes.filter(note=>note.title.toLowerCase().includes(searchText.toLowerCase())))
    } else {
      setFilteredNote(notes);
    }
  }, [notes, searchText]);

  return (
    <section className="container">
      <div className=" row note_row">
        {filteredNote.map((note, index) => (
          <div
            key={index}
            className={`col-sm-4 ${
              index % 3 === 0 ? "offset-sm-0" : ""
            } note_div bg-${note.color} `}
          >
            <div className="note_header">
              <span className="note_title">{note.title}</span>
            </div>
            <div className="note_body">{note.note}</div>
            <div className="note_footer">
              <div className="buttons">
                <button
                  className="btn"
                  onClick={() => dispatch(deleteNote(note.id))}
                >
                  <FontAwesomeIcon icon=" fa-solid fa-trash-can" />
                </button>

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onClick={()=>{handleEdit(note)}} className="btn" >
                  <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedNote && <EditModal setModalNote setModalTitle selectedNote={selectedNote} modalTitle={modalTitle} modalNote={modalNote} handleModalClose={handleModalClose} handleModalSave={handleModalSave} />}
    </section>
  );
}

export default NoteList;
