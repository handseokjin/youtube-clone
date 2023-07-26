import React from 'react';
import './SideBar.css';

export default function SideBar() {
  return (
    <nav className="sidebar">
      <div className="sidebarIconContainer">
        <img
          src={require("../../assets/icons/home.svg").default}
          alt="홈 아이콘"
        />
        <div>홈</div>
      </div>

      <div className="sidebarIconContainer">
        <img
          src={require("../../assets/icons/subscriptions.svg").default}
          alt="구독 아이콘"
        />
        <div>구독</div>
      </div>

      <div className="sidebarIconContainer">
        <img
          src={require("../../assets/icons/library.svg").default}
          alt="보관함 아이콘"
        />
        <div>보관함</div>
      </div>
    </nav>
  );
}
