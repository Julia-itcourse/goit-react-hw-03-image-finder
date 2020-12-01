import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Searchbar extends Component {

  state = {
    query: '',
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({query:''});
  };

  handleChange = ({target: {value, name}}) => {
    this.setState({[name]: value});
  };

render(){
return(
<header className="Searchbar">
  <form className="SearchForm" onSubmit = {this.handleSubmit}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images"
      name="query"
      value={this.state.query}
      onChange={this.handleChange}
    />
  </form>
</header>
)
}
}


Searchbar.propTypes = {
  // bla: PropTypes.string,
};

Searchbar.defaultProps = {
  // bla: 'test',
};

export default Searchbar;
