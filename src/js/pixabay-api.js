import axios from 'axios';
export default async function getImagesByQuery(query, page) {
  const keyAPI = '55636858-c5012cce39e9f46aea8eda2c3';
  const params = {
    key: keyAPI,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };

  axios.defaults.baseURL = `https://pixabay.com/api/`;

  return (await axios.get(``, { params })).data;
   
}
