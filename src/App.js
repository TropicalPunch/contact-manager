import React, { Component } from 'react';
//import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import {HashRouter as Router, Route, Switch}  from 'react-router-dom';
import Contact from './components/contacts/Contact.js';

import Contacts from './components/contacts/Contacts.js';
import AddContact from './components/contacts/AddContact.js';

import EditContact from './components/contacts/EditContact';

import Header from './components/layout/Header.js';
import About from './components/pages/About.js';
import NotFound from './components/pages/NotFound.js';
import Test from './components/TEST/Test.js';

import {Provider} from './Context.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {
  render() {
     
    return (
      <Provider>
        <Router>
          <div className="App">
           <Header branding="My Contact Manager" />
             <div className="container" /*we added a div container so all the contacts will align nicely */>
               <Switch>
                 <Route exact path="/" component={Contacts} />
                 <Route exact path="/contact/add" component={AddContact} />
                 <Route exact path="/contact/edit/:id" component={EditContact} />
                 <Route exact path="/about" component={About} />


                 <Route exact path="/test" component={Test} />

                <Route component={NotFound} />
               </Switch>
              </div>
           </div>
         </Router>
       </Provider>
    );
  }
}

export default App;
