import React from 'react';
import { fetchImages } from './api/fetchImages';

export class App extends React.PureComponent {
  componentDidMount() {
    this.handleFetchImages();
  }
  handleFetchImages = async (searchQuery, page, perPage) => {
    searchQuery = 'cat';
    page = 1;
    perPage = 12;
    const response = await fetchImages(searchQuery);
    console.log(response);
  };

  render() {
    return (
      <div>
        <h2>react homework</h2>
      </div>
    );
  }
}
