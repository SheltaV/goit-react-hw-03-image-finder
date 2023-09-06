import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";

import { fetchImages } from "./api";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { LoadButton } from "./Button/Button";

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      try {
        const fetched = await fetchImages(this.state.query, this.state.page);
        this.setState({ images: fetched })
      }
      catch (err) {
        console.log(err)
      }
    }
  }

  // changeSearch = value => {
  //      this.setState({
  //       query: value
  //      })
  // }

  submitSearch = query => {
    this.setState({ query, images: [], page: 1 })
  }

  loadMore = () => {
    this.setState(prevState => ({
      images: [...prevState.images, ...this.state.images],
      page: prevState.page + 1
    }))
  }


  render() {
    return (
      <div>
        <Searchbar onSubmit={this.submitSearch} />
        <ImageGallery><ImageGalleryItem images={this.state.images} /></ImageGallery>
        {this.state.images.length >= 12 && <LoadButton onLoad={this.loadMore} />}
        <GlobalStyle />
      </div>
    )
  };
};
