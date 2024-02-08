import { Button, Text, View } from 'react-native'
import React, {useReducer} from 'react'
import { globalStyles } from '../styles/global'
import AddContact from '../components/AddContact'
import ContactList from '../components/ContactList'
import { contactReducer } from '../reducers/contactReducer'

const Contacts = () => {
  const [contacts, dispatch] = useReducer(contactReducer, initialContacts)

  const handleAddContact = (name) => {
    dispatch({ type: 'ADD', id: nextId++,  name})
  }

  const handleDeleteContact = (id) => {
    dispatch({type: 'DELETE', id})
  }

  const handleUpdateContact = (contact) => {
    dispatch({type: 'CHANGE', contact})
  }

  return (
    <View style={globalStyles.simpleContainer}>
      <AddContact onAddContact={handleAddContact} />
      <ContactList
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
        onUpdateContact={handleUpdateContact}  
      />
    </View>
  )
}


let nextId = 3
const initialContacts = [
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

export default Contacts