import React from 'react';
import { Link } from 'react-router-dom';

const MustLogIn = () => {
  return (
    <div className="bg-[url('img/page-not-found-bg.jpg')] h-[calc(100vh_-_5rem)] bg-center w-screen bg-no-repeat bg-cover">
      <div className="h-56 grid grid-cols-1 content-center">
        <div className="absolute flex flex-col pt-24 items-center content-center justify-center">
          <div className="basis-1/3">
            <p className="leading-none pb-10 font-rubikmono text-[3.5rem]">
              Woof Woof Woof!
            </p>
          </div>
          <div className="basis-1/3 pr-36 pl-36 ">
            <div className="flex justify-center text-center text-2xl">
              (Hey there, pup-tastic friend! It seems like we need to paws for a
              moment and log in before we can enjoy these tail-wagging
              adventures together. Please log in or sign up below to unleash
              some more fun!)
            </div>
          </div>
          <div className="basis-1/3 text-center font-rubikmono">
            <div className="hover:text-white text-2xl">
              <Link to={'/login'}>Log in here if you have an account!</Link>
            </div>
            <div className="hover:text-white text-2xl">
              <Link to={'/signup'}>Don't have an account? Sign Up!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MustLogIn;
