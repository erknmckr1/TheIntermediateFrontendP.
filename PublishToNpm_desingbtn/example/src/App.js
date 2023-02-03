import React from 'react'

import {Buttons } from 'desingbtn'
import 'desingbtn/dist/index.css'

const App = () => {
  return (
    <div>
    <Buttons text="Default Btn" />
    <Buttons type="primary" text="Primary Btn"/>
    <Buttons type="dashed" text="Dashed Btn"/>
    <br/><br/>
    <Buttons type="text" text="Text Btn"/>
    <Buttons type="link" text="Link Btn"/>
    </div>
  )
}

export default App
