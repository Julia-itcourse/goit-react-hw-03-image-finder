import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Button.styles';


const Button = ({onClick}) =>{

 return( <button className={styles.button} type="button" onClick={}>Load more</button>)
}

Button.propTypes = {
  // bla: PropTypes.string,
};

Button.defaultProps = {
  // bla: 'test',
};

export default Button;
