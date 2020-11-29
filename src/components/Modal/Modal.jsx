import React, { Component } from "react"
import PropTypes from "prop-types"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
//import { Test } from './Modal.styles';


class Modal extends Component {

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDown)
  }

handleKeyDown = event =>{
  if (event.code === 'Escape'){
    this.props.onClose();}
  }


  //как сделать, чтобы закрывалось также по клику по фону как онклик с this.props.toggleModal, что-то
  // типа отклик || onEsc ?
  render(){
    return(
     <div className="Overlay" onClick = {this.handleKeyDown}>
      <div className="Modal">
       <img src={this.props.largeImageURL} alt="image was lost on the way" /> 
      </div>
    </div> 
    )
  }
}


 

Modal.propTypes = {
  // bla: PropTypes.string,
}

Modal.defaultProps = {
  // bla: 'test',
}

export default Modal
