import React from 'react';
import { ToastContainer } from 'react-toastify';
import { RotatingLines } from  'react-loader-spinner'

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { getImages } from '../services/api';
import { Button } from '../Button/Button';
import { AppStyled, Spiner } from './App.styled';

export class App extends React.Component {
  state = {
    imageName: '',
    page: 1,
    images: [],
    loading: false,
  };

  handleSubmit = ({ input }) => {
    this.setState({ imageName: input, page: 1, images: []});
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const prevImageName = prevState.imageName;
    const nextImageName = this.state.imageName.trim();
    if (prevImageName !== nextImageName || prevState.page !== this.state.page) {
      try {
        const { page } = this.state
        this.setState({loading: true})
        const data = await getImages(nextImageName, page);
        this.setState({ images: [...this.state.images, ...data], loading: false});
        // console.log(this.props);
        // Notiflix.Notify.failure(
        //   'Sorry, there are no images matching your search query. Please try again.',
        // )
        // }
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { images, loading } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
          {loading && <Spiner><RotatingLines/></Spiner>}
          {images.length !== 0 && <Button onClick={this.loadMore} />}
          <ToastContainer autoClose={3000} />
      </AppStyled>
    );
  }
}
export default App;
