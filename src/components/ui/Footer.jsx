import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="flex justify-center items-center h-20 bg-gray-100">
      <div className="text-bold-blue text-sm">
        <Link to={'/about'}>
          <p className="text-bold-blue text-sm"> About us &copy; Howlr.</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
