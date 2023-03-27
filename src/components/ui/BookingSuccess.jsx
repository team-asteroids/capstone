import React from 'react';

const BookingSuccess = () => {
  return (
    <div
      className="bg-[url('img/page-not-found-bg.jpg')] h-[calc(100vh_-_5rem)] bg-center
   w-screen bg-no-repeat bg-cover"
    >
      <div className="absolute flex flex-col w-screen pt-48 items-center content-center justify-center font-extrabold text-[3.5rem]  tracking-wide">
        <p className="leading-none pb-10 font-rubikmono">Success!</p>
        <p className="text-2xl">
          Give yourself a treat and a nice scratch behind the ear!
        </p>
      </div>
    </div>
  );
};

export default BookingSuccess;
