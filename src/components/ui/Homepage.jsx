import React from 'react';

function Homepage() {
  return (
    <div className="bg-cover bg-no-repeat bg-[url('img/treats-bg.jpg')] h-[calc(100vh_-_5rem)] font-rubikmono">
      <div className="flex absolute flex-col text-[3.5rem] top-96 left-48 tracking-wide">
        <p className="leading-none pb-2">Welcome to the</p>
        <p className="leading-none">Howlr Pack!</p>
      </div>
      <div className="flex flex-col absolute top-[35rem] text-2xl left-48">
        <p>Digital dog park for Sitters, Friends, Packmates</p>
      </div>
    </div>
  );
}

export default Homepage;
