import { Link } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="list">
        <li className="item">
          <Link className="link" to="/">
            Strona główna
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/zapisane">
            Zapisane
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
