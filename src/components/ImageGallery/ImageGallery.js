import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './imagegallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from './Modal/Modal';
import { LoadMoreBtn } from './Button/Button';
export class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    selectedImage: '',
    selectedTags: '',
  };

  handleModalOpen = (largeImageURL, tags) => {
    this.setState({
      isModalOpen: true,
      selectedImage: largeImageURL,
      selectedTags: tags,
    });
  };
  handleModalClose = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { images, page, totalPages, onLoadMore } = this.props;
    const { isModalOpen, selectedImage, selectedTags } = this.state;
    const list = images.map(img => (
      <ImageGalleryItem
        key={img.id}
        id={img.id}
        smallImg={img.webformatURL}
        largeImg={img.largeImageURL}
        tags={img.tags}
        onClick={this.handleModalOpen}
      />
    ));

    return (
      <>
        <ul className={css.gallery}>{list}</ul>
        {isModalOpen && (
          <Modal
            largeImg={selectedImage}
            tags={selectedTags}
            onCloseModal={this.handleModalClose}
          />
        )}
        {page < totalPages && <LoadMoreBtn onLoadMore={onLoadMore} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
};
