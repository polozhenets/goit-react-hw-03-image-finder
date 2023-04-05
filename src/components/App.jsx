import { Component } from 'react';
import getImages from 'utils/axios';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import './style.css';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Button from './Button/Button';

export class App extends Component {
  state = {
    pictures: [],
    page: 1,
    queryValue: '',
    isLoading: false,
    showModal: false,
    largeImage: '',
    error: null,
  };

  fetchImages = async () => {
    const { queryValue, page } = this.state;
    this.setState({
      isLoading: true,
    });
    if (queryValue === '') {
      return;
    }
    console.log(queryValue, page);
    try {
      const newImages = await getImages(queryValue, page);

      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...newImages.pictures],
        page: prevState.page + 1,
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.queryValue !== this.state.queryValue) {
      this.fetchImages();
    }
  }

  onSubmitHandler = queryInput => {
    this.setState({
      pictures: [],
      page: 1,
      queryValue: queryInput,
      isLoading: true,
    });
  };

  getLargePicture = largePicture => {
    console.log('onPictureClick');
    this.setState({
      largeImage: largePicture,
      showModal: true,
    });
  };

  togleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImage: '',
    }));
  };

  render() {
    const isShowMore = this.state.pictures.length > 0;
    return (
      <div className="App">
        <Searchbar onSearch={this.onSubmitHandler} />

        <ImageGallery
          images={this.state.pictures}
          onPictureClick={this.getLargePicture}
        />
        {isShowMore && <Button onClick={this.fetchImages} />}
        {this.state.isLoading && <Loader />}
        {this.state.showModal && (
          <Modal onClose={this.togleModal}>
            <img className="modal-picture" src={this.state.largeImage} />
          </Modal>
        )}
      </div>
    );
  }
}
