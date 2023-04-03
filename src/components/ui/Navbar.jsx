import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Avatar } from 'flowbite-react';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import PetsIcon from '@mui/icons-material/Pets';

function Navbar(props) {
  const { userAuth } = props;

  return (
    <nav className="flex justify-between font-rubikmono h-20 items-center tracking-tighter text-bold-blue px-5">
      <div>
        <Link to={'/'}>
          <h1 className="text-bold-blue text-5xl">Howlr</h1>
        </Link>
      </div>

      <ul className="flex text-2xl gap-10">
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
        <li>
          <Link to={`/sitters`}>Sitters</Link>
        </li>
        {userAuth && userAuth.firstName ? (
          <>
            <Link to={'/chat'}>
              <li>Chat</li>
            </Link>
            <Link to={'/account/editprofile'}>
              <div className="flex flex-row gap-5 justify-center items-center">
                <div></div>
                <Avatar
                  className="w-2 h-2 align-middle pr-5"
                  img={userAuth.imgSrc}
                  rounded={true}
                />
                <li>Hi, {userAuth.firstName}</li>
              </div>
            </Link>
          </>
        ) : (
          <Link to={'/login'}>
            <li>Login</li>
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
