import React from 'react';
// import axios from 'axios'

import { Item, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends React.Component {
  //   state = {
  //     image: null,
  //     // imageName: null,
  //   };

  //   searchImage = ({imageSearch}) => {
  //     // console.log(imageSearch);
  //     this.setState({ imageName: imageSearch });
  //     //   console.log(this.state);
  //     //   console.log(this.props);
  //   };

  //     async componentDidUpdate(prevProps, prevState) {

  //         // console.log(prevProps.imageSearch);
  //         // console.log(this.props.imageSearch);
  //         // console.log(prevProps);
  //         const prevImageName = prevProps.imageSearch;
  //         const nextImageName = this.props.imageSearch;
  //         if (prevImageName !== nextImageName) {
  //             try {
  //                 const response = await axios.get('https://pixabay.com/api/', {
  //                     params: {
  //                     responseType: 'stream',
  //                     key: '27604632-8d8d559eecaed720301290fe4',
  //                     q: nextImageName,
  //                     image_type: 'photo',
  //                     orientation: 'horizontal',
  //                     safesearch: true,
  //                     per_page: 12,
  //                     page: 1,
  //                     },
  //             });
  //                 const images = response.data.hits;
  //                 console.log(response.data.hits);
  //                 this.setState(this.state.image = images)
  //                 console.log(this.state);
  //             // const photos = response.data;
  //             // if (photos.hits.length === 0) {
  //             // removeLoadBtn();
  //             // Notiflix.Notify.failure(
  //             //     'Sorry, there are no images matching your search query. Please try again.',
  //             // );
  //             } catch (error) {
  //                 console.log(error);
  //             }
  //         }

  //   }

  render() {
    // this.props.items && console.log(this.props.items[0].id)
    const { items } = this.props;
    return (
      <>
        {items && items.map(item => <Item key={item.id}>
            <Image src={item.webformatURL} alt="" />
        </Item>)}
        
        
      </>
    );
  }
}

export default ImageGalleryItem;
