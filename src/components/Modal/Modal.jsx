import React, {  Component } from 'react';
import PropTypes from 'prop-types';



class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('mousedown', this.mouseEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('mousedown', this.mouseEvent);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  mouseEvent = event =>{
    if(event.button===0){
      this.props.onClose();
    }
  }

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Modal" onClick={this.handleBackdropClick}>
       <div className="Overlay">
        {this.props.children}
        
       </div>
      </div>
    );
  }
}
Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

export default Modal;