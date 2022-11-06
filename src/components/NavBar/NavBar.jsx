import { NavLink } from 'components';

const NavBar = () => {
  return (
    <ul>
      <NavLink to="/" name="Home" />
      <NavLink to="/movies" name="Movies" />
    </ul>
  );
};

export default NavBar;
