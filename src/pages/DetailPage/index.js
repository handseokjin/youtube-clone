import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import './index.css';
import Footer from '../../components/Footer/Footer';

export default function DetailPage() {
  const {movieId} = useParams(); // 넘어온 movieId를 받음
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      console.log(request.data);
      setMovie(request.data);
    }

    fetchData();
  }, [movieId]);

  return (
    <section
      className="detail"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className='posterContainer'>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="poster"
        />
      </div>
      <div className="movieInfo">
        <h1 className="detailTitle">
          {movie.title}
          <br />({movie.original_title})
        </h1>
        <h3 className="tagline">{movie.tagline}</h3>
        <p className="movieDetailInfo">
          <span className="detailReleaseDate">
            개봉일자 : {movie.release_date}
          </span>
          <br />
          <span className="detailRuntime">상영시간 : {movie.runtime}분</span>
          <br />
          <span className="detailVoteAverage">평점 : {movie.vote_average}</span>
        </p>
        <h2>개요</h2>
        <p className="overview">{movie.overview}</p>
      </div>
      <div className='backgroundContainer'>

      </div>
    </section>
  );
}