import axios from 'axios';

export const googleApi = axios.create({
  params: {
    key: 'AIzaSyBVJOttEAUF-PLuXMlZR7sSnJo10CUoD0c',
  },
});
