import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './loadmorebtn.module.css';
export class LoadMoreBtn extends Component {
  render() {
    const { handleLoadMore } = this.props;
    return (
      <>
        <button type="button" className={css.button} onClick={handleLoadMore}>
          Load more...
        </button>
      </>
    );
  }
}
LoadMoreBtn.propTypes = {
  handleLoadMore: PropTypes.func,
};
