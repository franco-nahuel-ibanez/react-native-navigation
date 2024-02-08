

export const contactReducer = (contacts, action) => {

  switch (action.type) {
    case "ADD":
      return [ ...contacts, { id: action.id, name: action.name } ]
      
    case "DELETE":
      return contacts.filter( contact => contact.id !== action.id )

    case "CHANGE":
      return contacts.map( c => (c.id === action.contact.id ? action.contact : c) )
  
    default:
      break;
  }
}