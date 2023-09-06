import { Component } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { GlobalStyle } from "./GlobalStyle";

import { fetchImages } from "./api";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
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
    modal: false
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown)
  }

  async componentDidUpdate(prevProps, prevState) {
    const {query, page, images} = this.state
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const fetched = await fetchImages(query, page);
        if (fetched.length === 0) {
          return toast.error('Cannot find any image!');
        }
        this.setState({ images: [...images, ...fetched] })
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

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown = e => {
  if (e.code === 'Escape') {
        this.setState({modal: false})
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

  chooseSelected = (evt) => {
    this.setState({ selectedImage: evt })
  }


  render() {
    const {images, loading, modal, selectedImage} = this.state
    return (
      <div>
        <Searchbar onSubmit={this.submitSearch} />
        <ImageGallery><ImageGalleryItem images={images} onChoose={this.chooseSelected} onOpen={this.toggleModal} /></ImageGallery>
        {images.length >= 12 && <LoadButton onLoad={this.loadMore} />}
        {loading && <Loader />}
        {modal && <Modal image={selectedImage} backdropClick={this.handleBackdropClick} />}
        <GlobalStyle />
        <Toaster position="top-right" />
      </div>
    )
  };
};
