import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Searchbar.styles';


//onSubmit - функцию для передачи значения инпута при сабмите формы
const Searchbar =({onSubmit})=>{
return(
<header className="Searchbar">
  <form className="SearchForm">
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
)
  
}


Searchbar.propTypes = {
  // bla: PropTypes.string,
};

Searchbar.defaultProps = {
  // bla: 'test',
};

export default Searchbar;
