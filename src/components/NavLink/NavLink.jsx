import { Link } from 'react-router-dom';

const NavLink = ({ to, name }) => {
  return (
    <li>
      <Link to={to}>{name}</Link>
    </li>
  );
};

export default NavLink;
