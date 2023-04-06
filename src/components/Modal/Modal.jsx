import React, {  Component } from 'react';
import PropTypes from 'prop-types';



class Modal extends Component {
  componentDidMount() {
    window.addEventListener('mousedown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.currentTarget.button === 0) {
      this.props.onClose();
    }
  };



  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Modal">
       <div className="Overlay"  onClick={this.handleBackdropClick}>
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