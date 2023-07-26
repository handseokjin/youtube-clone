// const requests = {
//     fetchNowPlaying: '/movie/now_playing',
//     fetchNetflixOriginals: '/discover/tv?with_networks=213',
//     fetchTrending: '/trending/all/week',
//     fetchTopRated: '/movie/top_rated',
//     fetchActionMovies: '/discover/movie?with_genres=28',
//     fetchComedyMovies: '/discover/movie?with_genres=35',
//     fetchHorrorMovies: '/discover/movie?with_genres=27',
//     fetchRomanceMovies: '/discover/movie?with_genres=10749',
//     fetchDocumentaries: '/discover/movie?with_genres=99',
// }

const requests = [
    {
        name: '요즘 트렌드',
        url: '/trending/all/week'
    },
    {
        name: '최고 평점',
        url: '/movie/top_rated'
    },
    {
        name: '액션',
        url: '/discover/movie?with_genres=28'
    },
    {
        name: '코미디',
        url: '/discover/movie?with_genres=35'
    },
    {
        name: '호러',
        url: '/discover/movie?with_genres=27'
    },
    {
        name: '로맨스',
        url: '/discover/movie?with_genres=10749'
    },
    {
        name: '다큐멘터리',
        url: '/discover/movie?with_genres=99'
    },
]

export default requests;