import { Outlet, Route, Routes } from 'react-router-dom';

import './App.css';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import Nav from './components/Nav/Nav';

function App() {
  const Layout = () => {
    return (
      <div>
        <Nav/>

        <Outlet />
      </div>
    )
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" index element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
