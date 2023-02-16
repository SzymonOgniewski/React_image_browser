import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './imagegalleryitem.module.css';
export class ImageGalleryItem extends Component {
  handleModalOpen = () => {
    const { largeImg, tags } = this.props;
    this.props.onClick(largeImg, tags);
  };
  render() {
    const { id, smallImg, tags } = this.props;

    return (
      <li key={id} className={css.galleryItem}>
        <img
          src={smallImg}
          alt={tags}
          className={css.galleryItemImg}
          onClick={this.handleModalOpen}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImg: PropTypes.string,
};
