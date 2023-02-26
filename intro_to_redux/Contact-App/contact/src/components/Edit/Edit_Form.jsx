import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contactSlice';
function EditForm(contact) {
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!userName || !password || !email || !phone) return false ;
        // update'de bir nesne olustur bu nesne entiti'nin id alacak ve guncelledegımız degerlerı bır nesne ıcınde verecegız.
        dispatch(updateContact({ 
            id:contact.contact.id,
            changes:{
                userName,
                phone,
                email,
                password
            }
        }))

    }
    console.log(contact.contact)
    const [userName, setUserName] = useState(contact.contact.userName); // bu stateleri redux ta neden vermedik ? 
    const [password, setPassword] = useState(contact.contact.password);
    const [email, setEmail] = useState(contact.contact.email);
    const [phone,setPhone] = useState(contact.contact.phone);
    
  return (
    <div className="form_div container col-lg-8 col-md-12 col-sm-12">
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
        Update
      </button>
    </form>
  </div>
  )
}

export default EditForm