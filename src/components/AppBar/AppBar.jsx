import { Outlet } from 'react-router-dom';
import Layout from '../Layout/Layout';
import './App.css';

const AppBar = () => {
  return (
    <>
      <header>
        <Layout />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default AppBar;
