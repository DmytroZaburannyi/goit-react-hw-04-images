import axios from 'axios';

const picturesService = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    key: '32427093-57bf8db47ea6d605386f36730',
  },
});

export const getPictures = async (q, page) => {
  const { data } = await picturesService.get('', {
    params: { q, page },
  });
  return data;
};
