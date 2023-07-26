import React from 'react';
import './Nav.css';

export default function Nav() {
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
        />
      </div>
      <div className="middleSection">
        <input className="searchBar" type="text" placeholder="검색" />

        <button className="searchButton">
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

        <image
          className="userProfile"
          src={require("../../assets/images/avatars/avatar-1.png")}
          alt="계정"
        />
      </div>
    </header>
  );
}
