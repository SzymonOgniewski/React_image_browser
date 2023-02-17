import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './loadmorebtn.module.css';
export class LoadMoreBtn extends Component {
  render() {
    const { onLoadMore } = this.props;
    return (
      <>
        <button type="button" className={css.button} onClick={onLoadMore}>
          Load more...
        </button>
      </>
    );
  }
}
LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func,
};
