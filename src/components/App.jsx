import { Component } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { GlobalStyle } from "./GlobalStyle";

import { fetchImages } from "../services/api";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadButton } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";

export class App extends Component {
  state = {
    query: '',
    images: [],
    selectedImage: '',
    page: 1,
    loading: false,
    modal: false,
    showButton: true
  }

  async componentDidUpdate(prevProps, prevState) {
    const {query, page, images} = this.state
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const { hits, totalHits } = await fetchImages(query, page);
        if (totalHits === 0) {
          this.setState({showButton: false})
          return toast.error('Cannot find any image!');
        }
        if (page === Math.ceil(totalHits / 12)) {
          this.setState({showButton: false})
          toast.success('You reached the end of searched list');
        }
        this.setState({ images: [...images, ...hits] })
      }
      catch (err) {
        console.log(err)
        toast.error("Cannot find your request!")
      }
      finally {
        this.setState({ loading: false });
      }
    }
  }

  handleBackdropClick = () => {
  this.setState({modal: false})
  }

  submitSearch = query => {
      this.setState({ query, images: [], page: 1 })
    }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  toggleModal = () => {
    this.setState(({ modal }) => ({ modal: !modal }))
  }

  chooseSelected = evt => {
    this.setState({ selectedImage: evt })
  }


  render() {
    const {images, loading, modal, selectedImage, showButton} = this.state
    return (
      <div>
        <Searchbar onSubmit={this.submitSearch} />
        <ImageGallery images={images} onChoose={this.chooseSelected} onOpen={this.toggleModal}/>
        {images.length > 0 && showButton && !loading && <LoadButton onLoad={this.loadMore} />}
        {loading && <Loader />}
        {modal && <Modal imageValue={selectedImage} backdropClick={this.handleBackdropClick} />}
        <GlobalStyle />
        <Toaster position="top-right" />
      </div>
    )
  };
};
