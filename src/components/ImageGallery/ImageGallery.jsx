import React from 'react';
import axios from 'axios';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends React.Component {
  state = {
    images: [],
    // imageName: null,
    // page: 1,
  };

  BASE_URL = 'https://pixabay.com/api/';

  // searchImage = () => {

  // this.setState(prevState => prevState.imageName = this.props.imageSearch);
  //   console.log(this.props);
  //   // console.log(imageSearch);
  //     // console.log(this.props);
  // };
  // this.setState(prevState => ({page: this.props.page,}));

  async componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.page);
    // console.log(this.props.page);

    // console.log(prevProps.page);
    // console.log(prevState);
    const prevImageName = prevProps.imageSearch;
    const nextImageName = this.props.imageSearch.trim();
    // console.log(prevImageName);
    // console.log(nextImageName);
    // console.log(this.state);
    if (
      prevImageName !== nextImageName || prevProps.page !== this.props.page
    ) {
      try {
        const response = await axios.get(this.BASE_URL, {
          params: {
            responseType: 'stream',
            key: '27604632-8d8d559eecaed720301290fe4',
            q: nextImageName,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 12,
            page: this.props.page,
          },
        });
        const data = response.data.hits;
        // console.log(response);
        // this.setState({images: data});
        // console.log(this.state);
        // const photos = response.data;
        // console.log(data);
        if (data.length !== 0) {
          // removeLoadBtn();
          this.setState({ images: data });
          // Notiflix.Notify.failure(
          //   'Sorry, there are no images matching your search query. Please try again.',
          // )
        }
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
