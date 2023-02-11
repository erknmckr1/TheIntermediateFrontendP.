
import { useSelector, useDispatch } from "react-redux";
import { findTheNote, addNote,noteTitle,note,color } from "../../redux/notes/notesSlice";
import { nanoid } from "@reduxjs/toolkit";
import "./header.css";
const Header = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.notes.searchText);
  const title = useSelector((state)=>state.notes.title)
  const noteContent = useSelector((state)=>state.notes.note)
  const colorNote = useSelector((state)=>state.notes.color)

  const handleSubmit = (e) =>{
    e.preventDefault();
     dispatch(addNote({
        id: nanoid(),
        note: noteContent, 
        color: colorNote,
        title: title
      }));

    dispatch(noteTitle(""));
    dispatch(note(""));
    dispatch(color(""));
   
    
}
  return (
    <div className="header container">
      <div className="search_Div">
        <h1 className="title">Note App</h1>
        <input
          onChange={(e) => dispatch(findTheNote(e.target.value))}
          value={searchText}
          type="search"
          placeholder="Search Note"
          className="search_input"
        />
      </div>
      <form className="notes_Div">
        <div className="form-floating">
          <div className="input-group flex-nowrap">
            <input
              onChange={(e) => {
                dispatch(noteTitle(e.target.value))
              }}
              value={title}
              type="text"
              className="form-control "
              placeholder="Note Title"
            />
          </div>
          <div>
            <textarea
              className="form-control "
              placeholder="Leave a note here"
              style={{ height: 100, width: 600 }}
              value={noteContent}
              onChange={(e) => {
                dispatch(note(e.target.value))
              }}
            ></textarea>
          </div>
        </div>

        <div className="color_addnote">
          <button
            onClick={handleSubmit}
            type="button"
            className="addBtn  btn-light"
          >
            Add Note
          </button>
          <div className="color_div">
            <button
              id="primary"
              type="button"
              className="btn btn-primary"
              onClick={(e) => {
                dispatch(color(e.target.id))
              }}
            />
            <button
              id="secondary"
              type="button"
              className="btn btn-secondary"
              onClick={(e) => {
                dispatch(color(e.target.id))
              }}
            />
            <button
              id="success"
              type="button"
              className="btn btn-success"
              onClick={(e) => {
                dispatch(color(e.target.id))
              }}
            />
            <button
              id="danger"
              type="button"
              className="btn btn-danger"
              onClick={(e) => {
                dispatch(color(e.target.id))
              }}
            />
            <button
              id="info"
              type="button"
              className="btn btn-info"
              onClick={(e) => {
                dispatch(color(e.target.id))
              }}
            />
            <button
              id="warning"
              type="button"
              className="btn btn-warning"
              onClick={(e) => {
                dispatch(color(e.target.id))
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
