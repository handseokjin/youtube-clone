import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';

import './index.css';
import SideBar from '../../components/SideBar/SideBar';

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchValue = query.get('q');

  const getSearchMovie = async () => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchValue}`)
      console.log(request.data.results);
      setSearchResults(request.data.results);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getSearchMovie();
  }, [])

  return (
    <section >
      <SideBar />
      <div className="searchContainer">
        {searchResults.map((searchMovie) => {
          if(searchMovie.backdrop_path != null) {
            return (
              <div className="searchMovie"
                onClick={() => navigate(`/${searchMovie.id}`)}>
                <div className="searchPosterContainer">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${searchMovie.backdrop_path}`}
                    alt="detailPoster"
                    className="searchPoster"
                  />
                </div>
                <div className="searchMovieInfo">
                  <h2 className="searchMovieTitle">{searchMovie.title ? searchMovie.title : "제공된 정보 없음"}</h2>
                  <p className="searchMovieReleaseDate">개봉일자 : {searchMovie.release_date ? searchMovie.release_date : "제공된 정보 없음"}</p>
                  <p className="searchMovieVoteAverage">평점 : {searchMovie.vote_average ? searchMovie.vote_average : "제공된 정보 없음"}</p>
                  <div className="searchMovieUploaderInfo">
                    <img
                      className="searchMovieUploader"
                      channelPicture
                      src={require("../../assets/images/avatars/avatar-1.png")}
                      alt="channel"
                    />
                    <span className='movieAlarmer'>영화 정보 알리미</span>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
