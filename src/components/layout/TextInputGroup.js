import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({error,lable,name,value,placeholder,type,onChange}) => {
  return (
    <div className="form-group">
         <label htmlFor={name}>{lable}</label>
         <input onChange={onChange} value={value} className={classnames('form-control form-control-lg', {'is-invalid': error})} type={type} name={name} placeholder={placeholder}/>
        {error && <div className="invalid-feedback" >{error}</div>}
    </div>



  )
}

TextInputGroup.propTypes = {
    lable: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error:PropTypes.string
}

TextInputGroup.defaultProps = {
    type: 'text'
}

export default  TextInputGroup;