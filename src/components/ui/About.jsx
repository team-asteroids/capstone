import React from 'react';

function About() {
  return (
    <div className="bg-cover bg-no-repeat bg-[url('img/about-gradient.jpg')] bg-center h-screen font-bold font-mono">
      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-bold-blue mb-4">Digs</h1>
          <p className="text-lg font-bold text-gray-700 mb-8 text-center">
            How it started...
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-bold-blue mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We are a group of passionate dog lovers who came together with a
              common goal of creating a dedicated platform for dog owners and
              pet professionals.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              As a fully remote team across NYC and San Diego, we recognized the
              need for a better way to connect dog owners with trusted pet
              professionals, find local dog-friendly events, and share photos
              and stories with friends.
            </p>
            <p className="text-lg text-gray-700 mb-8">~ the Howlr team~</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-bold-blue mb-4">
              Meet Our Team
            </h2>
            <ul className="list-disc text-lg text-gray-700 mb-8">
              <li>Nica: ~photo and or quick blurb~</li>
              <li>Allyssa: ~photo and or quick blurb~</li>
              <li>Forhad: ~photo and or quick blurb~</li>
              <li>Paul: ~photo and or quick blurb~</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
