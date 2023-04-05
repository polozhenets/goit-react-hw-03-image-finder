import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';



class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
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
      <div className="Modal" onClick={this.handleBackdropClick}>
       <div className="Overlay">
        {this.props.children}
       </div>
      </div>
    );
  }
}


export default Modal;