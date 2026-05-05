import axios from 'axios';
export default function getImagesByQuery(query) {
  const keyAPI = '55636858-c5012cce39e9f46aea8eda2c3';
  const params = {
    key: keyAPI,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  axios.defaults.baseURL = `https://pixabay.com/api/`;

  return axios.get(``, { params })
  .then(response => {
    return  response.data.hits
  })
  .catch(error => console.log(error.message)
  );
}
