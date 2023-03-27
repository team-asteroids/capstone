import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuth } from '../../slices/authSlice';

const Homepage = () => {
  const token = window.localStorage.getItem('token');
  const { userAuth } = useSelector(selectAuth);

  return (
    <div className="bg-cover bg-no-repeat bg-[url('img/treats-bg.jpg')] h-[calc(100vh_-_5rem)] font-rubikmono">
      <div className="flex absolute flex-col text-[3.5rem] top-96 left-48 tracking-wide">
        <p className="leading-none pb-2">Welcome to the</p>
        <p className="leading-none">Howlr Pack!</p>
      </div>
      <div className="flex flex-col absolute top-[35rem] text-2xl left-48">
        <p>Digital dog park for Sitters, Friends, Packmates</p>
      </div>
      {token ? (
        <div className="flex flex-col absolute top-[42rem] text-xl left-48">
          <Link
            to={`/profile/${userAuth.id}`}
            className="bg-bold-pink px-6 py-3.5 rounded-xl text-white ease-in duration-200 hover:bg-pale-pink"
          >
            My Profile
          </Link>
        </div>
      ) : (
        <div className="flex flex-col absolute top-[42rem] text-xl left-48">
          <Link
            to="/signup"
            className="bg-bold-pink px-6 py-3.5 rounded-xl text-white ease-in duration-200 hover:bg-pale-pink"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Homepage;
