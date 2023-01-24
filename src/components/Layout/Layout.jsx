import { NavLink } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <nav className="nav">
      <NavLink className={'nav__link'} activeclsssname={'active'} to={'/'}>
        Home
      </NavLink>
      <NavLink className={'nav__link'} activeclsssname={'active'} to={'movies'}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Layout;
