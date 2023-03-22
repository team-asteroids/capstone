import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between font-rubik h-20 items-center tracking-tighter text-bold-blue bg-white-smoke px-5">
      <div>
        <Link to={'/'}>
          <h1 className="text-bold-blue text-5xl">Howlr</h1>
        </Link>
      </div>
      <ul className="flex text-2xl gap-10">
        <Link to={`/social`}>
          <li>Social</li>
        </Link>
        <Link to={'/login'}>
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
