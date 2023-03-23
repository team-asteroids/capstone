import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { userAuth } = props;

  return (
    <nav className="flex justify-between font-rubikmono h-20 items-center tracking-tighter text-bold-blue px-5">
      <div>
        <Link to={'/'}>
          <h1 className="text-bold-blue text-5xl">Howlr</h1>
        </Link>
      </div>
      <ul className="flex text-2xl gap-10">
        <Link to={`/social`}>
          <li>Social</li>
        </Link>
        <Link to={`/sitters`}>
          <li>Sitters</li>
        </Link>
        {userAuth && userAuth.firstName ? (
          <Link to={'/account'}>
            <li>Hi, {userAuth.firstName}</li>
          </Link>
        ) : (
          <Link to={'/login'}>
            <li>Login</li>
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
