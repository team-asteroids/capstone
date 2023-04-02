import React from 'react';

const MustLogIn = () => {
  return (
    <div className="bg-[url('img/page-not-found-bg.jpg')] h-[calc(100vh_-_5rem)] bg-center w-screen bg-no-repeat bg-cover">
      <div className="absolute flex flex-col w-screen pt-48 items-center content-center justify-center font-extrabold text-[3.5rem]  tracking-wide">
        <p className="leading-none pb-10 font-rubikmono">Woof Woof Woof!</p>
        <p className="text-2xl">
          (Hey there, pup-tastic friend! It seems like we need to paws for a
          moment and log in before we can enjoy these tail-wagging adventures
          together. Please log in or sign up below to unleash some more fun!)
        </p>
      </div>
    </div>
  );
};

export default MustLogIn;
