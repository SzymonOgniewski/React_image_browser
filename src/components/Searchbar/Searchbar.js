import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './searchbar.module.css';
export class Searchbar extends Component {
  state = {
    value: '',
  };
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value: value });
  };
  handleFormSubmit = e => {
    const { onSubmit } = this.props;
    onSubmit(e, this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className={css.input}
            type="text"
            name="query"
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
