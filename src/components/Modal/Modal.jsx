import React, { Component } from "react"
import PropTypes from "prop-types"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
//import { Test } from './Modal.styles';

class Modal extends Component {

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown)
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose()
    }
  }

  render() {
   
    return (
      <div className="Overlay" onClick={this.props.onClose}>
        <div className="Modal">
          <img src={this.props.largeImageUrl} alt="image was lost on the way" />
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  largeImageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

Modal.defaultProps = {
  // bla: 'test',
}

export default Modal
