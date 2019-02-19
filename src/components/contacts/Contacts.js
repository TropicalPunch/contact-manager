import React, { Component } from 'react';
import Contact from './Contact.js';
import { Consumer } from '../../Context.js';

class Contacts extends Component {
    
/* was deleted a part of the context api and context reducer
    deleteContact = (id) => {
        //console.log(id); => when clicked it will log out the id of the contact clicked the trash icon
        const {contacts} = this.state;
        //newContacts will contain all contact except the one with the id that was clicked to be deleted
        const newContacts = contacts.filter(contact => contact.id !== id);
        //now we will update the state object:
        this.setState({
             contacts: newContacts
         })

    };
*/
  render() {
      return(
          <Consumer>
              
              {value => { //value = this.state (see context.js)
                  //destructure: pull contacts objects from value
                  // if we didnt do destructure we could have access using value.contact
                  const {contacts} = value;
                  return(
                    <React.Fragment>
                    <h1 className="display-4 mb-2">
                    Contact List
                    </h1>
                    <div>
                    {contacts.map(contact => (
                        <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone} id={contact.id}
                        /* this property was deleted a part of the context api and context reducer : deleteClickHandler={this.deleteContact.bind(this,contact.id)} */ 
                        />
                    ))}
                  </div>
                  </React.Fragment>
                  )
                  }
                 }
             </Consumer>
      )}

     


/*    
what we had before the use of context
const {contacts} = this.state;
    return (
      <div>
        {contacts.map(contact => (
            <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone} deleteClickHandler={this.deleteContact.bind(this,contact.id)}/>
        ))}
      </div>
    )
  }

*/
}
export default Contacts;
