import React, { Component } from 'react';

import axios from 'axios';

const Context = React.createContext();
//this is part of context reducer
const reducer = (state, action) => {
 switch (action.type){
     case 'DELETE_CONTACT':
     return{
         ...state, 
         contacts: state.contacts.filter(
             contact => contact.id !== action.payload
         )
     };
     //in order to add contacts by pressing submit
     case 'ADD_CONTACT':
     return{
         ...state, 
         contacts: [action.payload,
        ...state.contacts]
         
        };
         //in order to update contacts data  :
         //if the contact id the is being update equal to the one's payload sent than the new contact will be update else it wont
         //id passes directly from the res.data === for there we take action.payload.id
     case 'UPDATE_CONTACT':
     return{
         ...state, 
         contacts: state.contacts.map(contact => 
            contact.id === action.payload.id ? 
            (contact = action.payload): contact)
           
        };
     default:
     return state;
 }

};
export class Provider extends Component {

    state={
        contacts: [

         /*   {
                id:1,
                name:" ori souch ", 
                email:"ori@gmail.com",
                 phone:"124223544"
            },
            {
                id:2,
                name:" avi souch ", 
                email:"avi@gmail.com",
                 phone:"124223544"
            },
            {
                id:3,
                name:" ami souch ", 
                email:"ami@gmail.com",
                 phone:"124223544"
            }
            */
        ],
        //this is part of context reducer:
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
        
    };

     //HTTP CALL FOR ADDING 10 BASE CONTACTS USING AXIOS:
     /*
    componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then(res => this.setState({contacts: res.data}) )    

    }
    */

    //OR~~!!!!!!!!

      //HTTP CALL FOR ADDING 10 BASE CONTACTS USING ASYNC/AWAIT
    async componentDidMount(){
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
       
      this.setState({contacts: res.data})  
 
     }

    render(){
        return(
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

