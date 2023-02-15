import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './searchbar.module.css';
export class Searchbar extends Component {
  render() {
    const { query, handleQueryChange, handleFormSubmit } = this.props;

    return (
      <header className={css.searchbar} onSubmit={handleFormSubmit}>
        <form className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            onChange={handleQueryChange}
            className={css.input}
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  query: PropTypes.string,
  handleQueryChange: PropTypes.func,
  handleFormSubmit: PropTypes.func,
};
