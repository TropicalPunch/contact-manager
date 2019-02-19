import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Consumer} from '../../Context.js';
import axios from 'axios';

 class Contact extends Component {
    state={
      showContactInfo: false,  
    };
    //must use e!!!
    onShowClick = e => {
        //enable toggle state.showContactInfo: true/false when using function
        //must use setState methot in order to make changes in the state
        this.setState(
            {showContactInfo: !this.state.showContactInfo}
        );
    };



    //DELETE CONTACTS HTTP CALL USING AXIUS:
    /*
    onDeleteClick = (id, dispatch) => {
        // was deleted a part of the context api and context reducer
        //enable us to delete a contact
        //must use setState methot in order to make changes in the state
        //this.props.deleteClickHandler();
        
       axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res =>  dispatch({ type:'DELETE_CONTACT', payload: id }));

     //  dispatch({ type:'DELETE_CONTACT', payload: id });
    
    };
    */
    
    //OR======!!!!!
    //DELETE CONTACTS HTTP CALL USING ASYNC/AWAIT:
 
    //WE WILL WRITE ASYNC BEFORE THE ARROW FUNC'S ARGUMENTS!!!
    onDeleteClick = async (id, dispatch) => {
       
      //no need to assign a variable because delete a contact gives a blank objest!!! ==>
      //no need for ==>  const res =
         await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
          dispatch({ type:'DELETE_CONTACT', payload: id });

     
    
    };





  render() {

      //destructure this.props.name/email/phone/id:
      const {name, email, phone, id} = this.props;
      const {showContactInfo} = this.state;


    return (
        <Consumer>
            {value =>{
                const {dispatch} = value;
               
                return (
                    <div className="crad card-body mb-3">
                    <h4>{name} 
                    <i onClick={this.onShowClick} className="fas fa-angle-down" style= {{cursor: 'pointer', float:'left',padding:'5px'}}  />
                    <i onClick={this.onDeleteClick.bind(this,id,dispatch)}  className="fas fa-trash " style= {{cursor: 'pointer', float: 'right', color:'grey', fontSize:'15px' }} />
                    
                    <Link to={`contact/edit/${id}`}>
                    <i className="fas fa-pencil-alt" style={{ cursor:'pointer',padding:'5px', fontSize:12}}></i>
                    </Link>
                    </h4> 
                    
                    {//show/ dont show content
                        showContactInfo ?
                         (<ul className="list-group">
                        <li className="list-group-item">Email:{email} </li>
                        <li className="list-group-item">phone:{phone}</li>
                        
                        </ul>) : null
                     }
                  </div>
                )
            } }
        </Consumer>

/* we took it into the consumer due to content reducer
  <div className="crad card-body mb-3">
        <h4>{name} 
        <i onClick={this.onShowClick} className="fas fa-angle-down" style= {{cursor: 'pointer', float:'left',padding:'5px'}}  />
        <i onClick={this.onDeleteClick}  className="fas fa-trash " style= {{cursor: 'pointer', float: 'right', color:'grey', fontSize:'15px' }} />
        </h4> 
        
        {//show/ dont show content
            showContactInfo ?
             (<ul className="list-group">
            <li className="list-group-item">Email:{email} </li>
            <li className="list-group-item">phone:{phone}</li>
            
            </ul>) : null
         }
      </div>
    
      */
    );
  }
}

Contact.propTypes = {
    name:PropTypes.string.isRequired,
    phone:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
/* was deleted a part of the context api and context reducer
    deleteClickHandler: PropTypes.func.isRequired */
}
export default Contact;
