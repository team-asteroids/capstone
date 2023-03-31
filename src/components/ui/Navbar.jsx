import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
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
          <Dropdown.Item icon={EventIcon}>
            <Link to={`/events`}>Events</Link>
          </Dropdown.Item>
          <Dropdown.Item icon={GroupsIcon}>
            <Link to={`/groups`}>Groups</Link>
          </Dropdown.Item>
          <Dropdown.Item icon={PetsIcon}>
            <Link to={`/howls`}>Howls</Link>
          </Dropdown.Item>
        </Dropdown>
        <li>
          {' '}
          <Link to={`/sitters`}>Sitters</Link>
        </li>
        {userAuth && userAuth.firstName ? (
          <>
            <Link to={'/chat'}>
              <li>Chat</li>
            </Link>
            <Link to={'/account'}>
              <li>Hi, {userAuth.firstName}</li>
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
