import React, { useState, useEffect } from "react";
import axios from '../../api/axios';
import requests from '../../api/request';
import './Main.css';
import { Navigate, useNavigate } from "react-router-dom";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieData(requests[0].url);
  }, []);

  const fetchMovieData = async (fetchUrl) => {
    const request = await axios.get(fetchUrl);
    console.log(request.data.results);
    setMovies(request.data.results);
  }

  return (
    <div className="grid">
      <div className="genreGrid">
        {requests.map((request, index) => (
          <div className="genre" onClick={() => fetchMovieData(request.url)}>
            {request.name}
          </div>
        ))}
      </div>
      <section className="videoGrid">
        {movies.map((movie) => (
          <div className="video">
            <div className="thumbnail" onClick={() => navigate(`/${movie.id}`)}>
              <img
                className="thumbnailImage"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="Thumbnail"
              />
            </div>
            <div className="videoInfo">
              <div className="channel">
                <img
                  className="channelPicture"
                  src={require("../../assets/images/avatars/avatar-1.png")}
                  alt="channel"
                />
              </div>
              <div className="info" onClick={() => navigate(`/${movie.id}`)}>
                <p className="title">
                  {movie.title ? movie.title : "정보 없음"}
                </p>
                <p className="releaseDate">
                  {movie.release_date ? movie.release_date : "정보 없음"}
                </p>
                <div>
                  <span className="rating">★ {movie.vote_average}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}