import React from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';

import { AppStyled } from './App.styled';

export class App extends React.Component {
  state = {
    imageName: '',
    page: 1,
  };

  handleSubmit = ({ input }) => {
    // console.log(input);
    // input = input.trim()
    this.setState({ imageName: input, page: 1 });
    // console.log(this.state);
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    // console.log(this.state.page);
  };

  render() {
    // console.log(this.state);
    const { imageName, page } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery imageSearch={imageName} page={page}></ImageGallery>
        {imageName && <Button onClick={this.loadMore} />}
        <ToastContainer autoClose={3000} />
      </AppStyled>
    );
  }
}
export default App;
