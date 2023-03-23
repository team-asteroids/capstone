import React from 'react';
import { Link } from 'react-router-dom';

function GroupNav(props) {
  const { singleGroup, members, posts } = props;

  return (
    <nav className="flex justify-between font-mono h-8 items-center tracking-tighter px-5">
      <ul className="flex text-2xl gap-10">
        <Link to={`/groups/${singleGroup.id}/posts`}>
          <li>Discussion</li>
        </Link>
        <Link to={`/groups/${singleGroup.id}/members`}>
          <li>Members</li>
        </Link>
      </ul>
    </nav>
  );
}

export default GroupNav;
