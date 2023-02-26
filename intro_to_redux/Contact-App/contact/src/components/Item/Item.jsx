import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

library.add(faTrash, faEdit);
function Item({ item }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(deleteContact(id));
    }
  };
  return (
    <div className="d-flex justify-content-around aling-items-center  mt-2 ">
      <div
        className="row col-9 flex-wrap "
        style={{
          textAlign: "center",
          marginBottom: "3px",
        }}
      >
        <p className="col-4">{item.userName}</p>
        <p className="col-4">{item.phone}</p>
        <p className="col-4 ">{item.email}</p>
      </div>
      <div className="row col-3">
        <div className="d-flex justify-content-around align-items-center  mt-xs-5 mt-sm-3 mt-md-0 ">
          <button className="btn bg-warning ">
            <Link to={`/edit/${item.id}`} className="text-white">
              <FontAwesomeIcon icon="edit" />
            </Link>
          </button>
          <button
            className="btn text-white bg-danger "
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            <FontAwesomeIcon icon="trash" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
