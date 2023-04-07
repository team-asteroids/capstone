import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-[url('img/about-gradient.jpg')] bg-center h-screen font-bold ">
      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-bold-blue mb-4">Digs</h1>
          <p className="text-lg font-bold text-gray-700 mb-8 text-center">
            How it started...
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
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
            <div className="text-lg flex flex-col gap-5">
              <div className="flex items-center">
                <img
                  src="https://media.licdn.com/dms/image/C4D03AQHDO6K3t4XtxA/profile-displayphoto-shrink_400_400/0/1647479135334?e=1686182400&v=beta&t=M5lLsCorfhQ790Q3BaG8Uz-GYxp9sVZR2YhH3udU38o"
                  className="h-36 w-36 object-cover rounded-full"
                ></img>
                <div className="flex flex-col pl-3">
                  <div className="flex flex-row gap-3">
                    <div className="pl-2">
                      <p className="font-rubikmono text-xl">Nica</p>
                    </div>
                    <a
                      href="https://github.com/nicaemma"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nica-weisinger/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                  <div className="pl-2">
                    <p>(Nica Bio)</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://media.licdn.com/dms/image/D4E03AQES_HIeRjYfOw/profile-displayphoto-shrink_800_800/0/1677031262866?e=1686182400&v=beta&t=g3zBHjKMc3tllUC8mQakJ3tgJyjJgBR5gOR97GrMWno"
                  className="h-36 w-36 object-cover rounded-full"
                ></img>
                <div className="flex flex-col pl-3">
                  <div className="flex flex-row gap-3">
                    <div className="pl-2">
                      <p className="font-rubikmono text-xl">Allyssa</p>
                    </div>
                    <a
                      href="https://github.com/allyssad"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/allyssadeorocki/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                  <div className="pl-2">
                    <p>
                      Allyssa lives in Brooklyn with her dog, Saxen. They love
                      to play frisbee together and go for long sniff walks in
                      their neighborhood!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQGWfW9Bui6nTg/profile-displayphoto-shrink_400_400/0/1677027359477?e=1686182400&v=beta&t=eUndhW-yJTYsZeb3gBAGwWGKhhuvW3fcQ1glRCr52Dw"
                  className="h-36 w-36 object-cover rounded-full"
                ></img>
                <div className="flex flex-col pl-3">
                  <div className="flex flex-row gap-3">
                    <div className="pl-2">
                      <p className="font-rubikmono text-xl">Forhad</p>
                    </div>
                    <a
                      href="https://github.com/fzinnah"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/forhad-zinnah/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                  <div className="pl-2">
                    <p>(Forhad Bio)</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://media.licdn.com/dms/image/D4E03AQFSay1e5SIYcA/profile-displayphoto-shrink_400_400/0/1667243405851?e=1686182400&v=beta&t=62h89wtnfBKUXlF9lnBkglm3QRDN9FbTzI38YbyQ0fg"
                  className="h-36 w-36 object-cover rounded-full"
                ></img>
                <div className="flex flex-col pl-3">
                  <div className="flex flex-row gap-3">
                    <div className="pl-2">
                      <p className="font-rubikmono text-xl">Paul</p>
                    </div>
                    <a
                      href="https://github.com/makeitsough"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/paul-schofield-io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                  <div className="pl-2">
                    <p>(Paul Bio)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
