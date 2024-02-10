import {createContext, useReducer, useEffect} from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'

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

const contactsStore = createContext([]);

const ContactsProvider = ({children}) => {
  const [contacts, dispatch] = useReducer(contactReducer, [])

  useEffect(() => {
    getContacts()
  }, [])

  const getContacts = async () => {
    const contacts = await AsyncStorage.getItem('@contacts')
    if(contacts === null) {
      await AsyncStorage.setItem('@contacts', JSON.stringify(initialContacts))
      dispatch({type: 'SET_CONTACTS', contacts: initialContacts})
    } else {
      dispatch({type: 'SET_CONTACTS', contacts: JSON.parse(contacts)})
    }
  }

  const handleAddContact = (name) => {
    dispatch({ type: 'ADD', id: Math.random(),  name})
  }

  const handleDeleteContact = (id) => {
    dispatch({type: 'DELETE', id})
  }

  const handleUpdateContact = (contact) => {
    dispatch({type: 'CHANGE', contact})
  }
  
  return (
    <contactsStore.Provider
      value={{
        contacts,
        handleAddContact,
        handleDeleteContact,
        handleUpdateContact
      }}
    >
      {children}
    </contactsStore.Provider>
  )
}

export {
  ContactsProvider,
  contactsStore
}

export const contactReducer = (contacts, action) => {

  switch (action.type) {
    case "SET_CONTACTS":
      return action.contacts

    case "ADD":
      const newContacts = [ ...contacts, { id: action.id, name: action.name } ]
      const jsonValue = JSON.stringify(newContacts)
      AsyncStorage.setItem('@contacts', jsonValue)
      return newContacts
      
    case "DELETE":
      const filterContacts = contacts.filter( contact => contact.id !== action.id )
      AsyncStorage.setItem('@contacts', JSON.stringify(filterContacts))
      return filterContacts

    case "CHANGE":
      const updatedContacts = contacts.map( c => (c.id === action.contact.id ? action.contact : c) )
      AsyncStorage.setItem('@contacts', JSON.stringify(updatedContacts))
      return updatedContacts
  
    default:
      return
  }
}