import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './modal.module.css';
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    const { largeImg, tags, onCloseModal } = this.props;

    return (
      <div className={css.overlay} onClick={onCloseModal}>
        <div className={css.modal}>
          <img src={largeImg} alt={tags} className={css.modalImg} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  src: PropTypes.string,
  tags: PropTypes.string,
  onCloseModal: PropTypes.func,
};
