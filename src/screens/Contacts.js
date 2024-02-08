import { Button, Text, View } from 'react-native'
import React, {useState} from 'react'
import { globalStyles } from '../styles/global'
import AddContact from '../components/AddContact'
import ContactList from '../components/ContactList'

const Contacts = () => {
  const [contacts, setContacts] = useState(initialContacts)

  const handleAddContact = (name) => {
    setContacts([
      ...contacts,
      {
        id: nextId++,
        name
      }
    ])
  }

  const handleDeleteContact = (id) => {
    setContacts( contacts.filter( contact => contact.id !== id ))
  }

  const handleUpdateContact = (contact) => {
    setContacts(contacts.map( c => (c.id === contact.id ? contact : c) )
    )
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