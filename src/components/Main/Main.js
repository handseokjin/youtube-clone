import React, { useState, useEffect, useRef } from "react";
import axios from '../../api/axios';
import requests from '../../api/request';
import './Main.css';
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const selectedId = useRef(requests[0].id);

  useEffect(() => {
    fetchMovieData(requests[0].url, requests[0].id);
  }, []);

  const fetchMovieData = async (fetchUrl, id) => {
    const result = await axios.get(fetchUrl);
    selectedId.current = id;
    console.log(result.data.results);
    setMovies(result.data.results);
  }

  console.log(selectedId.current);

  return (
    <div className="grid">
      <div className="genreGrid">
        {requests.map((request) => (
          <div 
            className={`genre ${request.id === selectedId.current ? 'active' : ''}` }
            onClick={() => fetchMovieData(request.url, request.id)}>
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
                  {movie.title ? movie.title : "제공된 정보 없음"}
                </p>
                <p className="releaseDate">
                  {movie.release_date ? movie.release_date : "제공된 정보 없음"}
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