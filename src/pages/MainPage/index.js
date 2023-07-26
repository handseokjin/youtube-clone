import './index.css';

import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar';
import Main from '../../components/Main/Main';
import requests from '../../api/request';
import axios from '../../api/axios';

export default function MainPage() {
  return (
    <div>
      <SideBar />

      <Main/>
      {/* <Footer /> */}
      {/* <div className="mainContainer">
        
        <Footer />
      </div> */}
    </div>
  );
}