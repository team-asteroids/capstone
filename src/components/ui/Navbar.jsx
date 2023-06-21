import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Avatar } from 'flowbite-react';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import PetsIcon from '@mui/icons-material/Pets';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar(props) {
  const { userAuth } = props;

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    // console.log("nav state changed");
  };
  return (
    <div>
      <nav className="flex justify-between font-rubikmono h-20 items-center tracking-tighter text-bold-blue px-5 bg-white">
        <div>
          <Link to={'/'}>
            <h1 className="text-bold-blue text-5xl cursor-pointer">Howlr</h1>
          </Link>
        </div>
        <div>
          <AiOutlineMenu
            size={38}
            onClick={handleNav}
            className="absolute top-5 right-4 z-[99] md:hidden cursor-pointer"
          />
        </div>
        <div className="md:block hidden flex-row">
          <div className="flex flex-row items-center text-2xl gap-10">
            <div>
              <Dropdown label="Social" inline={true}>
                <Link to={`/events`}>
                  <Dropdown.Item icon={EventIcon}>Events</Dropdown.Item>
                </Link>
                <Link to={`/groups`}>
                  <Dropdown.Item icon={GroupsIcon}>Groups</Dropdown.Item>
                </Link>
                <Link to={`/howls`}>
                  <Dropdown.Item icon={PetsIcon}>Howls</Dropdown.Item>
                </Link>
              </Dropdown>
            </div>
            <div>
              <Link to={`/sitters`}>Sitters</Link>
            </div>
            {userAuth && userAuth.firstName ? (
              <div>
                <Link to={'/chat'} state={{ userName: '' }}>
                  <div>Chat</div>
                </Link>
              </div>
            ) : null}
            {userAuth && userAuth.firstName ? (
              <div>
                <Link to={'/account/editprofile'}>
                  <div className="flex flex-row gap-5 justify-center align-middle items-center">
                    <img
                      className="w-12 h-12 object-cover rounded-full"
                      src={
                        userAuth.imageSrc ||
                        require('../../img/default-dog.jpg')
                      }
                      alt="alt"
                    />
                    <div>Hi, {userAuth.firstName}</div>
                  </div>
                </Link>
              </div>
            ) : (
              <div>
                <Link to={'/login'}>
                  <div>Login</div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      {nav && (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <Link
            to={`/events`}
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <EventIcon size={20} />
            <span className="pl-4">Events</span>
          </Link>
          <Link
            to={`/groups`}
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GroupsIcon size={20} />
            <span className="pl-4">Groups</span>
          </Link>
          <Link
            to={`/howls`}
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <PetsIcon size={20} />
            <span className="pl-4">Howls</span>
          </Link>
          <Link
            to={`/sitters`}
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AccessibilityNewIcon size={20} />
            <span className="pl-4">Sitters</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
