import axios from 'axios';
const params = {
  url: 'https://pixabay.com/api/',
  key: '32051975-6abf71968f2bd4c1ae7afccaf',
  imageType: 'photo',
  orientation: 'horizontal',
};
export const fetchImages = async (searchQuery, page, perPage) => {
  const response = await axios.get(
    `${params.url}?key=${params.key}&q=${searchQuery}&image_type=${params.imageType}&orientation=${params.orientation}&page=${page}&per_page${perPage}`
  );
  const data = await response;
  return data.data.hits;
};
