import React from 'react';

function Homepage() {
  return (
    <div className="bg-cover bg-center bg-[url('img/treats-bg.jpg')] h-screen">
      <div className="absolute flex-col text-[3.5rem] top-96 left-48 tracking-wide">
        <p className="leading-none">Join the Howlr Pack!</p>
        <p className="leading-none">Aaawhoooo!</p>
      </div>
      <div className="flex absolute top-[35rem] text-2xl left-48">
        <p>Find Sitters, Friends, Packmates</p>
      </div>
    </div>
  );
}

export default Homepage;
