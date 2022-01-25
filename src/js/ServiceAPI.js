import axios from 'axios';

const options = {
  URL: 'https://api.themoviedb.org/3',
  timeout: 1000,
  KEY: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGM4ZGRjNzRiZThmOTUzMTM2YmMyZWVkZjY4NzhkYiIsInN1YiI6IjYxZWZhZWUwNzEzZWE2MGIzOTUwMzk4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0M9P6PNBCs6-9NcpKzJQ2AJrpUdulBL070cZr8jUz_o',
};

const connection = axios.create({
  baseURL: options.URL,
  timeout: options.timeout,
});
connection.defaults.headers.common.Authorization = options.KEY;

class ServiceAPI {
  constructor() {
    this.page = 1;
  }

  async getMovie(option) {
    try {
      const response = await connection.get(`/movie/${option}`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default ServiceAPI;
