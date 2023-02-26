import React from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import EditForm from './Edit_Form'
import {useSelector} from 'react-redux'
import {contactSelector} from '../../redux/contactSlice'
import './edit.css'
function Edit() {
  const navigate = useNavigate()
  const {id} = useParams()
  const contact = useSelector(state => contactSelector.selectById(state,id)) // entityAdaptor kullanarak entıty nesnesının ıcındeki elemanlara erısecegız. 
  const handleClick = () =>{
    navigate("/")
  }

  return (
    <div className='editForm_page container col-lg-10 col-md-10 col-sm-12'>
      <h1 className='title'>Edit Form</h1>
      <EditForm contact={contact}/>
      <button onClick={handleClick} className='btn mt-5 bg-primary text-white ' >Return</button>
    </div>
  )
}

export default Edit