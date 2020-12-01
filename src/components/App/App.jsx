import React, { Component } from "react"

import FetchImagesWithQuery from '../../services/FetchImagesWithQuery'

import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Searchbar from "../Searchbar"
import ImageGallery from "../ImageGallery"
import Modal from "../Modal"
import Button from "../Button"



class App extends Component {
  state = {
    hits: [],
    loading: false,
    error: null,
    showModal: false,
    page:1,
    query:'',
    originalImageURL:'',
  }


  componentDidUpdate =(prevProps, prevState)=>{
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !==nextQuery){
      console.log("calling fetch hits");
      this.fetchHits();
    } 
  }


fetchHits = () =>{
  const {query, page } = this.state;
  this.setState({loading:true});
  FetchImagesWithQuery(query, page)
  .then(hits => this.setState(
    prevState => ({
      hits: [...prevState.hits, ...hits],
      page: prevState.page + 1,
    })
  )

  )
  .catch (error => this.setState({error}))
  .finally(()=>{
    this.setState ({loading: false});
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  })
}

  //?как сделать картинку на модалке и использовать тоггл, а не отдельные ф.
  // toggleModal = () => {
  //   this.setState((state) => ({ showModal: !state.showModal }))
  //   console.log("ToggleModal")

  // }

handeSubmitForm = (searchQuery) =>{

  this.setState({
    hits:[],
    query: searchQuery,
    page:1,
  
  })
}

  handleClickImage = largeImageURL => {
    this.openModal(largeImageURL);
  };

  openModal = largeImageURL =>
    this.setState({ showModal: true, originalImageURL: largeImageURL });

  closeModal = () => this.setState({ showModal: false, originalImageURL: '' });

  render() {
    const { showModal, loading, hits } = this.state


    return (
      <div className="AppWrapper">
        <Searchbar onSubmit = {this.handeSubmitForm}/>
        {showModal && (
          <Modal
            largeImageUrl={this.state.originalImageURL}
            onClose={this.closeModal}
          />
        )}
        <ImageGallery hits={this.state.hits} onImageClick={this.handleClickImage} />
        <div className ="LoaderWrapper">
        {loading && (<Loader
          type="ThreeDots"
          color="#CD5C5C"
          height={50}
          width={50}
          timeout={3000} //3 secs
        />)}
        {hits.length > 0 && !loading && (
            <Button onClick = {this.fetchHits}/>
        )}
      </div>
      </div>
    )
  }
}


export default App
