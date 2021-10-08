import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 95e05e11d8af75e7b91b4984222595c2f5b4d77e880ddcfc56cc4f04f6cc82b2'
  }
});