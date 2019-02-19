import React, { Component } from 'react';
import { Consumer } from '../../Context.js';
import TextInputGrop from '../layout/TextInputGroup.js'
//import uuid from 'uuid';

import axios from 'axios';

class AddContact extends Component {

    state={
        name:'',
        email:'',
        phone:'',
        errors:{}
    };


//enable us to submit form when button clicked
    onSubmit = async (dispatch ,e) => {
        e.preventDefault();
       // console.log(this.state);
       const {name, email, phone} = this.state;

        
       //check for errors: balnk submission of fields 
       if(name === '') {
        this.setState({errors: { name: 'name is required'}});
        return;
       }

       if(email === '') {
        this.setState({errors: { email: 'email is required'}});
        return;
       }

       if(phone === '') {
        this.setState({errors: { phone: 'phone is required'}});
        return;
       }

       const newContact = {
          // id: uuid(), //will generate random id for user
           name,
           email,
           phone
       };
       //HTTP CALL FOR ADDING A CONTACT USING AXIOS only!!
     //  axios.post('https://jsonplaceholder.typicode.com/users', newContact)
     //  .then(res => //lets call the dispatch function 
      //  dispatch({ type:'ADD_CONTACT', payload: res.data }) )


        // //HTTP CALL FOR ADDING A CONTACT USING ASYNC/AWAIT
       const res = await axios
       .post('https://jsonplaceholder.typicode.com/users', newContact)
       //lets call the dispatch function 
        dispatch({ type:'ADD_CONTACT', payload: res.data }) 


      /*
      //lets call the dispatch function 
      dispatch({ type:'ADD_CONTACT', payload: newContact }) ;
      */

       //clear  form's fields after addition
       this.setState({
        name:'',
        email:'',
        phone:'',
        errors:{}
       })

       this.props.history.push('/');


    };
//enable us to fill form
     onChange = e => {this.setState({ [e.target.name]:
        e.target.value });
      /* we also could have done for each input:
       onNameChange = (e) => {this.setState({name: e.target.value})
        onPhoneChange = (e) => {this.setState({phone: e.target.value})
        onmaileChange = (e) => {this.setState({email: e.target.value})
       console.log(e.target.value) => the value the user enter
     console.log(e.target.name)=> the speciic form line name=(phone, name,email) the user typed in
     */
     }

  render() {

      const {name, phone, email,errors}= this.state;


      return(
          <Consumer>
              {value => {
                  const {dispatch} = value;
                  return(
                    <div className="card mb-3">
                    <div className="card-header">Add Contact</div> {/*this is the header*/}
                    <div className="card-body">{/*this is the body*/}
                        <form onSubmit={this.onSubmit.bind(this,dispatch)} >
                        <TextInputGrop 
                       error={errors.name} lable="Name" name="name" placeholder="enter contact's name..." value={name} onChange={this.onChange}/>
                         {/* we took it to TextInputGrop.js
                           <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input onChange={this.onChange} value={name} className="form-control form-control-lg" type="text" name="name" placeholder="Enter Contact's Name"/>
                            </div>  */}
                         
                         <TextInputGrop 
                        error={errors.email} lable="Email" name="email" placeholder="enter contact's email..." value={email} onChange={this.onChange}/>
                            {/*<div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input onChange={this.onChange} value={email} className="form-control form-control-lg" type="email" name="email" placeholder="Enter Contact's Email"/>
                        </div>*/} 

                        <TextInputGrop 
                         error={errors.phone} lable="phone" name="phone" placeholder="enter contact's phone..." value={phone} onChange={this.onChange}/>
                            {/*
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input onChange={this.onChange}  value={phone} className="form-control form-control-lg" type="text" name="phone" placeholder="Enter Contact's Phone"  />
                            </div>*/}
            
                            <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>{/*this is the submit button*/}
                       
                        </form>
                    </div>
                  </div>

                  )

              }}
   
          </Consumer>
      
      )

    
  }
}
export default AddContact;