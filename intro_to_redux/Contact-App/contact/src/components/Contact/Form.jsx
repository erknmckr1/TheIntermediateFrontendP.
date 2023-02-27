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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-12 col-sm-12">
          <form onSubmit={handleSubmit} className="card p-3">
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                User Name
              </label>
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
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
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
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Form;
