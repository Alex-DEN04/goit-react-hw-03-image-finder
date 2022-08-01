import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

import { AppStyled } from './App.styled';

export class App extends React.Component {
  state = {
    imageName: null,
  };

  handleSubmit = ({ input }) => {
    // console.log(input);
    this.setState({ imageName: input });
    // console.log(this.state);
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery imageSearch={this.state.imageName} />
      </AppStyled>
    );
  }
}
export default App;
