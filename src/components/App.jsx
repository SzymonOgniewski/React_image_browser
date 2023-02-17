import React from 'react';
import { fetchImages } from './api/fetchImages';
import './app.css';
import { Searchbar } from './Searchbar/Searchbar';
import Notiflix from 'notiflix';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
export class App extends React.PureComponent {
  state = {
    fetchedImages: [],
    currentSearch: '',
    page: '1',
    totalHits: '0',
    totalPages: '0',
    isLoading: false,
  };

  onSubmit = (e, query) => {
    e.preventDefault();
    this.setState(
      {
        currentSearch: query,
        fetchedImages: [],
        totalHits: 0,
        page: 1,
      },
      async () => {
        const data = await this.handleFetchImages(query);
        this.setState({ totalHits: data.totalHits }, () => {
          if (data.totalHits === 0) {
            Notiflix.Notify.failure(
              'Cannot find any images with this search query, try again.'
            );
            return;
          }
          Notiflix.Notify.success(`${data.totalHits} images found`);
          const perPage = 12;
          const totalPagesAmount = Math.ceil(data.totalHits / perPage);
          this.setState({ totalPages: totalPagesAmount });
        });
      }
    );
  };
  handleFetchImages = async searchQuery => {
    this.setState({ isLoading: true });
    searchQuery = this.state.currentSearch;
    const searchQueryTrimed = searchQuery.trim();
    try {
      const response = await fetchImages(searchQueryTrimed, this.state.page);
      this.setState({ isLoading: false });
      if (response.totalHits === 0) {
        Notiflix.Notify.failure('Something went wrong, try again.');
        return;
      }
      const images = response.hits.map(img => ({
        id: img.id,
        webformatURL: img.webformatURL,
        largeImageURL: img.largeImageURL,
        tags: img.tags,
      }));
      const imgsArr = [...this.state.fetchedImages, ...images];
      this.setState({ fetchedImages: imgsArr });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  handleLoadMoreFunc = () => {
    const { totalPages, page, currentSearch } = this.state;
    if (page < totalPages) {
      this.setState(
        prevState => ({ page: prevState.page + 1 }),
        () => this.handleFetchImages(currentSearch)
      );
    }
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.isLoading && <Loader />}
        {this.state.totalHits !== 0 && (
          <ImageGallery
            images={this.state.fetchedImages}
            page={this.state.page}
            totalPages={this.state.totalPages}
            onLoadMore={this.handleLoadMoreFunc}
          />
        )}
      </div>
    );
  }
}
