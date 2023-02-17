import axios from 'axios';
const params = {
  url: 'https://pixabay.com/api/',
  key: '32051975-6abf71968f2bd4c1ae7afccaf',
  imageType: 'photo',
  orientation: 'horizontal',
  perPage: '12',
};
export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get(
    `${params.url}?key=${params.key}&q=${searchQuery}&image_type=${params.imageType}&orientation=${params.orientation}&page=${page}&per_page=${params.perPage}`
  );
  const data = await response;
  return data.data;
};
