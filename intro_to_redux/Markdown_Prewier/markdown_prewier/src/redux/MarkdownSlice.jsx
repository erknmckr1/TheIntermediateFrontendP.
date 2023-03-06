import { createSlice } from "@reduxjs/toolkit";

const help = `Heading
=======
Sub-heading
-----------
### Another deeper heading
Paragraphs are separated
by a blank line.
Leave 2 spaces at the end of a line to do a
line break
Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .
Shopping list:
  * apples
  * oranges
  * pears
Numbered list:
  1. apples
  2. oranges
  3. pears
The rain---not the reign---in
Spain.
 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;


export const MarkdownSlice = createSlice({
    name:"markdown",
    initialState:{
        isHelpOkey:false,
        textUser:"this is user input",
        textCurrent:"this is user input",
        textHelp:help,
    },
    reducers:{
        // dönen payloadı 2 parametreme de yazdırdım. isHelpOkey'in durumuna gore textCurrent i sekıllendırecegım. 
        writeText:(state,action)=>{
            state.textUser=action.payload;
            state.textCurrent=action.payload;
        },
        helpUser:(state)=>{
            if(state.isHelpOkey){
                state.textCurrent=state.textUser;
                state.isHelpOkey=false;
            }else{
                state.textCurrent=state.textHelp;
                state.isHelpOkey=true;
            }
        }
    }
    
})

export default MarkdownSlice.reducer
export const {writeText,helpUser} = MarkdownSlice.actions