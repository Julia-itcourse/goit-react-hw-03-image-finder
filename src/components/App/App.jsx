import React, { Component } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';


const apiKey = '18426896-fe41a223570e8075df6a95c49';
class App extends Component { 


  state = {
    hits: [],
    loading: false,
    error: null,
    showModal: false
    };
  


  componentDidMount = () => {
   this.setState({
     loading:true,
   })

   axios
   .get(`https://pixabay.com/api/?q=dog&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
   .then(response => this.setState({hits: response.data.hits}))


  }

  componentWillUnmount = () => {
    console.log('App will unmount');
  }

  toggleModal = ()=>{
    this.setState(state =>({showModal: !state.showModal}));
    console.log("ToggleModal");
  }

  render () {

    const {showModal} = this.state;
    const {largeImageURL } = this.state.hits;

    return (
      <div className="AppWrapper">
        <Searchbar/>
       { showModal && <Modal largeImageURL = {largeImageURL} onClose={this.toggleModal}/>}
        <ImageGallery hits={this.state.hits} onImageClick = {this.toggleModal}/>
        <Loader
        type="BallTriangle"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      </div>
    );
  }
}

App.propTypes = {
  // bla: PropTypes.string,
};

App.defaultProps = {
  // bla: 'test',
};

export default App;
