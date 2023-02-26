import { createSlice ,createEntityAdapter } from "@reduxjs/toolkit"

export const contactAdapter = createEntityAdapter();
export const contactSelector = contactAdapter.getSelectors((state)=>state.contacts)
export const contactSlice = createSlice({
    name:"contacts",
    initialState: contactAdapter.getInitialState(),
    reducers:{
        addContact:contactAdapter.addOne,
        deleteContact:contactAdapter.removeOne,
        deleteAllContact:contactAdapter.removeAll,
        updateContact:contactAdapter.updateOne,

    }
})
export const {addContact,deleteContact,deleteAllContact,updateContact} = contactSlice.actions
export default contactSlice.reducer