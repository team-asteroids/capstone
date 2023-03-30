import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';

function SitterAccountSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useParams();

  const [selectedSidebar, setSelectedSidebar] = useState('sitter');

  // const { userAuth } = useSelector(selectAuth);

  useEffect(() => {
    if (!location) {
      setSelectedSidebar('sitter');
    } else setSelectedSidebar(location['*']);
  }, [location]);

  const sidebarFontClass =
    'font-regular duration-200 hover:tracking-wide hover:font-bold hover:text-bold-purple';

  const selectedSidebarFontClass = 'tracking-wide font-bold text-bold-purple';

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Link
          to="/account/sitter"
          value="overview"
          className={
            selectedSidebar === 'sitter/overview' ||
            selectedSidebar === 'sitter'
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
          to="/account/sitter/editprofile"
          className={
            selectedSidebar === 'sitter/editprofile'
              ? selectedSidebarFontClass
              : sidebarFontClass
          }
          onClick={() => {
            setSelectedSidebar('editprofile');
          }}
        >
          Edit Sitter Profile
        </Link>
      </div>
      <div>
        <Link
          to="/account/sitter/bookings"
          className={
            selectedSidebar === 'sitter/bookings'
              ? selectedSidebarFontClass
              : sidebarFontClass
          }
          onClick={() => {
            setSelectedSidebar('bookings');
          }}
        >
          Manage Bookings
        </Link>
      </div>
      <div>
        <Link
          to="/account/sitter/calendar"
          className={
            selectedSidebar === 'sitter/calendar'
              ? selectedSidebarFontClass
              : sidebarFontClass
          }
          onClick={() => {
            setSelectedSidebar('calendar');
          }}
        >
          Manage Calendar
        </Link>
      </div>
      <div>
        <Link
          to="/account/sitter/clients"
          className={
            selectedSidebar === 'sitter/clients'
              ? selectedSidebarFontClass
              : sidebarFontClass
          }
          onClick={() => {
            setSelectedSidebar('clients');
          }}
        >
          Clients
        </Link>
      </div>
    </div>
  );
}

export default SitterAccountSidebar;
