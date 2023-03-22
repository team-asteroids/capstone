import React from 'react';

function Homepage() {
  return (
    <div className="bg-cover bg-no-repeat bg-[url('img/treats-bg.jpg')] h-[calc(100vh_-_5rem)]">
      <div className="absolute flex-col text-[3.5rem] top-96 left-48 tracking-wide">
        <p className="leading-none">Welcome to the Howlr Pack</p>
        <p className="leading-none">Aaawwoooo!</p>
      </div>
      <div className="flex absolute top-[35rem] text-2xl left-48">
        <p>Digital dog park for Sitters, Friends, Packmates</p>
      </div>
    </div>
  );
}

export default Homepage;
