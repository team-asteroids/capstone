import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuth } from '../../slices/authSlice';
import backgroundImg from '../../img/treats-bg.jpg';
import { Diversity2Sharp } from '@mui/icons-material';

const Homepage = () => {
  const token = window.localStorage.getItem('token');
  const { userAuth } = useSelector(selectAuth);

  return (
    <div className="font-rubikmono">
      <img
        className="w-full h-screen object-cover object-left"
        src={backgroundImg}
        alt=""
      ></img>
      <div className="w-full h-screen absolute top-0 left-0">
        <div className="max-w-[800px] m-auto h-full w-full flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center">
            <div className="mb-10 ml-4 bg-[#FF5BA2] rounded-lg">
              <div className="pt-10 px-8 pb-8 flex flex-wrap gap-4 justify-center items-center sm:text-5xl text-4xl text-center">
                <p>Welcome to the</p>
                <p>Howlr Pack!</p>
              </div>
              <div className="pt-8 px-8 pb-6 justify-center items-center flex flex-wrap text-center">
                <p>Digital dog park for Sitters, Friends, Packmates</p>
              </div>
              {/* </div> */}
            </div>
          </div>

          {/* <div>
        <p className="leading-none pb-2">Welcome to the</p>
        <p className="leading-none">Howlr Pack!</p>

        <div>
          <p>Digital dog park for Sitters, Friends, Packmates</p>
        </div> */}

          {/* {token ? (
          <div className="flex flex-col absolute top-[40rem] text-xl left-48">
            <Link
              to={`/profile/${userAuth.id}`}
              className="bg-bold-pink px-6 py-3.5 rounded-xl text-white ease-in duration-200 hover:bg-pale-pink"
            >
              My Profile
            </Link>
          </div>
        ) : (
          <div className="flex flex-col absolute top-[42rem] text-xl left-48 md:pl-20 p-4 py-16">
            <Link
              to="/signup"
              className="bg-bold-pink px-6 py-3.5 rounded-xl text-white ease-in duration-200 hover:bg-pale-pink"
            >
              Sign Up
            </Link>
          </div>
        )} */}
        </div>
      </div>
      //{' '}
    </div>
  );
};

export default Homepage;
