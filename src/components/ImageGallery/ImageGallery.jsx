import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends React.Component {
  render() {
    const { images } = this.props;
    return (
      <>
        <Gallery>
          <ImageGalleryItem items={images} onClick={this.props.onClick} />
        </Gallery>
      </>
    );
  }
}

export default ImageGallery;
