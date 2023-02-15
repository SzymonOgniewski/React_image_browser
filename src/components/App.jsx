import React from 'react';
import { fetchImages } from './api/fetchImages';
import './app.css';
import { Searchbar } from './Searchbar/Searchbar';
export class App extends React.PureComponent {
  state = {
    query: '',
  };
  componentDidMount() {
    this.handleFetchImages();
  }
  handleFetchImages = async (searchQuery, page, perPage) => {
    searchQuery = this.state.query;
    page = 1;
    perPage = 12;
    const response = await fetchImages(searchQuery);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ query: this.state.query });
    this.handleFetchImages();
    this.setState({ query: '' });
  };
  render() {
    return (
      <div>
        <Searchbar
          query={this.state.query}
          handleQueryChange={this.handleChange}
          handleFormSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
