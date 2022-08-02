import React from 'react';
import axios from 'axios';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends React.Component {
  state = {
    images: null,
    // imageName: null,
  };

  searchImage = ({ imageSearch }) => {
    // console.log(imageSearch);
    this.setState({ imageName: imageSearch });
      // console.log(this.state);
      // console.log(this.props);
  };

  async componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps.imageSearch);
    // console.log(this.props.imageSearch);
    // console.log(prevProps);
    const prevImageName = prevProps.imageSearch;
    const nextImageName = this.props.imageSearch;
    // console.log(prevImageName);
    // console.log(nextImageName);
    if (prevImageName !== nextImageName) {
      try {
        const response = await axios.get('https://pixabay.com/api/', {
          params: {
            responseType: 'stream',
            key: '27604632-8d8d559eecaed720301290fe4',
            q: nextImageName,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 12,
            page: 1,
          },
        });
        const data = response.data.hits;
        // console.log(response);
        this.setState({images: data});
        // console.log(this.state);
        // const photos = response.data;
        // if (photos.hits.length === 0) {
        // removeLoadBtn();
        // Notiflix.Notify.failure(
        //     'Sorry, there are no images matching your search query. Please try again.',
        // );
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    // console.log(this.state.images);
    // const { images } = this.state;
    // console.log(images);
    // images.map(image => console.log(image))
    return (
      <Gallery>
        <ImageGalleryItem items={this.state.images} />
      </Gallery>
    );
  }
}

export default ImageGallery;
