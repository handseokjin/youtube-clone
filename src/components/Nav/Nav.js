import React, { useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  // 검색어 입력할 때마다 호출
  const handleSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }

  // 검색 이미지 버튼 클릭 시
  const navigateSearchPage = () => {
    if(searchValue.length > 0)
      navigate(`/search?q=${searchValue}`);
    else
      alert("검색어를 입력해 주세요.")
  }

  // 검색 바에서 엔터 클릭 시
  const handleEnter = (e) => {
    if(e.key === "Enter") {
      if(searchValue.length > 0)
        navigateSearchPage();
      else
        alert("검색어를 입력해 주세요.")
    }
  }

  return (
    <header className="header">
      <div className="leftSection">
        <img
          className="hamburgerMenu"
          src={require("../../assets/icons/hamburger-menu.svg").default}
          alt="Hamburger Menu"
        />

        <img
          className="youtubeLogo"
          src={require("../../assets/icons/youtube-logo.svg").default}
          alt="Youtube Logo"
          onClick={() => (window.location.href = "/")}
        />
      </div>
      <div className="middleSection">
        <input
          className="searchBar"
          type="text"
          placeholder="검색"
          onKeyDown={handleEnter}
          onChange={handleSearchValueChange}
        />

        <button className="searchButton" onClick={navigateSearchPage}>
          <img
            className="searchIcon"
            src={require("../../assets/icons/search.svg").default}
            alt="Search Icon"
          />

          <div className="tooltip">검색</div>
        </button>

        <button className="voiceSearchButton">
          <img
            className="voiceSearchIcon"
            src={require("../../assets/icons/voice-search-icon.svg").default}
            alt="Voice Search Icon"
          />

          <div className="tooltip">음성으로 검색</div>
        </button>
      </div>

      <div className="rightSection">
        <div className="uploadIconContainer">
          <img
            className="uploadIcon"
            src={require("../../assets/icons/upload.svg").default}
            alt="Upload Icon"
          />
          <div className="tooltip">만들기</div>
        </div>

        <div className="notificationIconContainer">
          <img
            className="notificationIcon"
            src={require("../../assets/icons/notifications.svg").default}
            alt="Notification Icon"
          />
          <div className="tooltip">알림</div>
        </div>

        <img
          className="userProfile"
          src={require("../../assets/images/avatars/avatar-1.png")}
          alt="계정"
        />
      </div>
    </header>
  );
}
