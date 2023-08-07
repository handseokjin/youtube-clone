import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: 'https://api.themoviedb.org/3',
//     params: {
//         api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
//         language: "ko-KR"
//     }
// })

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/'
})

export default axiosInstance;