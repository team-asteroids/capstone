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
      <div className="flex flex-row">
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
                      userAuth.imageSrc || require('../../img/default-dog.jpg')
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
  );
}

export default Navbar;
