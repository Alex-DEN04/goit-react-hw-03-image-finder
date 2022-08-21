import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends React.Component {

  render() {
    const { images } = this.props;
    // console.log(images);
    return (
      <>
        <Gallery>
          <ImageGalleryItem items={images} />
        </Gallery>
      </>
    );
  }
}

export default ImageGallery;
