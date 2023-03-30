import React from 'react';

function SitterSubmitted() {
  return (
    <div
      className="
      bg-cover bg-no-repeat bg-[url('img/red-border-collie.jpg')]
      h-[calc(100vh_-_5rem)] bg-top
   w-screen bg-no-repeat bg-cover"
    >
      <div className="absolute flex flex-col w-screen pt-24 items-center content-center justify-center font-extrabold text-[3.5rem]  tracking-wide">
        <p className="leading-none pb-10 font-rubikmono">Success!</p>
        <p className="text-2xl">
          We'll be in touch with you shortly to get you set up.
        </p>
      </div>
    </div>
  );
}

export default SitterSubmitted;
