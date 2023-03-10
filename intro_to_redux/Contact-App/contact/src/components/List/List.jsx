
import "./list.css";
import { useSelector } from "react-redux";
import { contactSelector } from "../../redux/contactSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "../Item/Item";
import { deleteAllContact } from "../../redux/contactSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
function List() {
  const contacts = useSelector(contactSelector.selectAll);
  const [searchValue,setSearchValue] = useState("")
  // contact entitimizdeki verileri ınputa gırecegımız karaktere gore fıltreledık. 
  const filteredContacts =  contacts.filter((contact)=>(contact.userName.toLowerCase()).includes(searchValue.toLowerCase()))
  console.log(filteredContacts)
  

  const dispatch = useDispatch();
  const handleAllDelete = () => {
    if (window.confirm("Are you sure you want to delete all contacts?")) {
      dispatch(deleteAllContact());
    }
  };
  return (
    <div className="List container col-12 col-sm-12 col-md-12 col-lg-8">
      <div className="row col-9 titles">
        <p className="col-4 title">User Name</p>
        <p className="col-4 title">Phone</p>
        <p className="col-4 title">Email</p>
      </div>
      <div className="contact_list">
        {filteredContacts.map((contact) => (
          <Item item={contact} key={contact.id} />
        ))}
      </div>
      <div className="mt-3 search_div col-lg-10 col-md10 col-sm-12">
        <input
          type="text"
          className="form-control col-sm-1"
          placeholder="Search Contact"
          value={searchValue}
          onChange={(e)=>{setSearchValue(e.target.value)}}
        />
        {contacts.length > 0 && (
          <div>
            <span className="align-items-center ms-3 fw-bold text-success">
              {filteredContacts.length}
            </span>
            <button
              onClick={handleAllDelete}
              className="btn text-white bg-danger ms-5"
            >
              <FontAwesomeIcon icon="trash-can-arrow-up" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
