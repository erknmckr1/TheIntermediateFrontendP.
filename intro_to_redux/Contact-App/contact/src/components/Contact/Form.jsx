import React, { useState } from "react";
import "./contact.css";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/contactSlice";
import { useDispatch } from "react-redux";
function Form() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !phone || !password) return false;
    dispatch(addContact({ id: nanoid(), userName, email, password,phone }));
    setUserName("");
    setPassword("");
    setEmail("");
    setPhone("")
  };
  return (
    <div className="form_div">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
