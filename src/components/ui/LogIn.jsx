import React from 'react';
import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <div>
      <p>Don't have an account?</p>
      <p>
        <Link to="/signup">Sign Up!</Link>
      </p>
    </div>
  );
}

export default LogIn;
