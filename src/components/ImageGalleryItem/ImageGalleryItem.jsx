import React from 'react';

import { Item, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <>
        {items.map(item => (
          <Item key={item.id}>
            <Image src={item.webformatURL} alt="" />
          </Item>
        ))}
      </>
    );
  }
}

export default ImageGalleryItem;
