import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Button.styles';


const Button = ({onClick}) =>{

 return( 

 <button className="Button" type="button" onClick={
  onClick}>Load more</button>
 
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};


export default Button;
