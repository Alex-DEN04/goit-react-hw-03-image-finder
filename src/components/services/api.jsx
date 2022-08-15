// import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';
// async componentDidUpdate(prevProps, prevState) {
//     // console.log(prevProps.imageSearch);
//     // console.log(this.props.imageSearch);
//     // console.log(prevProps);
//     const prevImageName = prevProps.imageSearch;
//     const nextImageName = this.props.imageSearch;
//     // console.log(prevImageName);
//     // console.log(nextImageName);
//     // console.log(this.state);
//     if (prevImageName !== nextImageName) {
//         try {
//             const response = await axios.get(BASE_URL, {
//                 params: {
//                     responseType: 'stream',
//                     key: '27604632-8d8d559eecaed720301290fe4',
//                     q: nextImageName,
//                     image_type: 'photo',
//                     orientation: 'horizontal',
//                     safesearch: true,
//                     per_page: 12,
//                     page: 1,
//                 },
//             });
//             const data = response.data.hits;
//             // console.log(response);
//             // this.setState({images: data});
//             // console.log(this.state);
//             // const photos = response.data;
//             // console.log(data);
//             if (data.length !== 0) {
//                 // removeLoadBtn();
//                 this.setState({ images: data });
//                 // Notiflix.Notify.failure(
//                 //   'Sorry, there are no images matching your search query. Please try again.',
//                 // )
//             }

//         } catch (error) {
//             console.log(error);
//         }
//     }
// }
