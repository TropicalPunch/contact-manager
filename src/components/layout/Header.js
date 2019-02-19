import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//function Header() { or the arrow function way: 
const Header = (props) => {
    const {branding} = props ;
  return (
   <nav className= "navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0" >
        <div className="container">
             <a href="/" className="navbar-brand">{branding}</a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                        <i className="fas fa-list"/></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link">
                        <i className="fas fa-plus"/> </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                        <i className="fas fa-question"/></Link>
                    </li>
                    
                 </ul>  
            </div>
        </div>
   </nav>
  );
};
//defaultProps- built in function- if <Header/>  in app.js (no branding  statement)bthe default branding will be set  
Header.defaultProps = {
    branding: 'Contact Manager'
}
// validating the data that is in branding property: 
//here we set that is should be a string (default or what we set in app.js) by using ==  branding: PropTypes.string.isRequired
Header.propTypes = {
    branding: PropTypes.string.isRequired
};



export default  Header;