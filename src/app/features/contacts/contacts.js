import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 0,
    name: 'Sara Lee'
  },
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jack Fell'
  },
]

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state = action.payload
    },

    addContact: (state, action) => {
      state.push(action.payload)
    },

    deleteContact: (state, action) => {
      const index = state.findIndex(i => i.id === action.payload)
      state.splice(index, 1)
    },

    updateContact: (state, action) => {
      state = state.map( c => (c.id === action.contact.id ? action.contact : c) )
    }



  }
})

export const { 
  setContacts,
  addContact,
  deleteContact,
  updateContact
 } = contactSlice.actions

export default contactSlice.reducer