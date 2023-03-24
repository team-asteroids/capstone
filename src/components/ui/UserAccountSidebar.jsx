import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';

function UserAccountSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useParams();

  const [selectedSidebar, setSelectedSidebar] = useState('');

  // const { userAuth } = useSelector(selectAuth);

  useEffect(() => {
    if (!location) {
      setSelectedSidebar('overview');
    } else setSelectedSidebar(location['*']);
  }, [location]);

  const sidebarFontClass =
    'font-regular duration-200 hover:tracking-wide hover:font-bold hover:text-bold-purple';

  const selectedSidebarFontClass = 'tracking-wide font-bold text-bold-purple';

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Link
          to="/accxount"
          value="overview"
          className={
            selectedSidebar === 'overview' || selectedSidebar === ''
              ? selectedSidebarFontClass
              : sidebarFontClass
          }
          onClick={() => {
            setSelectedSidebar('overview');
          }}
        >
          Overview
        </Link>
      </div>
      <div>
        <Link
          to="/account/editprofile"
          className={
            selectedSidebar === 'editprofile'
              ? selectedSidebarFontClass
              : sidebarFontClass
          }
          onClick={() => {
            setSelectedSidebar('editprofile');
          }}
        >
          Edit Profile
        </Link>
      </div>
      <div>
        <Link
          to="/account/pets"
          className={
            selectedSidebar === 'pets'
              ? selectedSidebarFontClass
              : sidebarFontClass
          }
          onClick={() => {
            setSelectedSidebar('pets');
          }}
        >
          Pets
        </Link>
      </div>
      <div>
        <Link
          to="/account/bookings"
          className={
            selectedSidebar === 'bookings'
              ? selectedSidebarFontClass
              : sidebarFontClass
          }
          onClick={() => {
            setSelectedSidebar('bookings');
          }}
        >
          Bookings
        </Link>
      </div>
      <div>
        <Link
          to="/account/access"
          className={
            selectedSidebar === 'access'
              ? selectedSidebarFontClass
              : sidebarFontClass
          }
          onClick={() => {
            setSelectedSidebar('access');
          }}
        >
          Access
        </Link>
      </div>
    </div>
  );
}

export default UserAccountSidebar;
