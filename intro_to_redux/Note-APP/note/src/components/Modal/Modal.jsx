import React from "react";

const EditModal = ({
  setModalNote,
  setModalTitle,
  selectedNote,
  modalTitle,
  modalNote,
  handleModalClose,
  handleModalSave,
}) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Note
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  value={modalTitle}
                  onChange={(e) => setModalTitle(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <textarea
                  value={modalNote}
                  className="form-control"
                 onChange={(e)=>{setModalNote(e.target.value)}}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
              <button type="button" class="btn"  data-bs-dismiss="modal" data-toggle="modal">S</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
