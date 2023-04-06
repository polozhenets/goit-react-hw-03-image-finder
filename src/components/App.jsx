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
    showMore:false,
  };
  

  fetchImages = async () => {
    const { queryValue, page } = this.state;
    this.setState({
      isLoading: true,
    });
  
    try {
      const newImages = await getImages(queryValue, page);
      console.log(this.state.page<Math.ceil(newImages.total/12))
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...newImages.pictures],
        showMore:this.state.page<Math.ceil(newImages.total/12),
      }));
    } catch (error) {
      console.log(error);
    }finally{
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.queryValue !== this.state.queryValue || this.state.page!==prevState.page) {
      this.fetchImages();
    }
  }

  onSubmitHandler = queryInput => {
    if (queryInput === '') {
      return;
    }
    this.setState({
      pictures: [],
      page: 1,
      queryValue: queryInput,
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

  loadMoreHandler = () => {
    this.setState(prev=>({
      page:prev.page+1,
    }))
  }

  render() {
    
    return (
      <div className="App">
        <Searchbar onSearch={this.onSubmitHandler} />

        <ImageGallery
          images={this.state.pictures}
          onPictureClick={this.getLargePicture}
        />
        
        {this.state.isLoading && <Loader />}
        {this.state.showModal && (
          <Modal onClose={this.togleModal}>
            <img className="modal-picture" alt='bgp' src={this.state.largeImage} />
          </Modal>
        )}
        {this.state.showMore && <Button onClick={this.loadMoreHandler} />}
      </div>
    );
  }
}
