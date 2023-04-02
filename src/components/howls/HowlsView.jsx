import React, { useState } from 'react';
import Pagination from '../ui/Pagination';
import Howl from './Howl';
import AddHowl from './AddHowl';

const HowlView = (props) => {
  const { posts, userAuth, likes } = props;

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Pagination -get current posts
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(posts.length / itemsPerPage);

  return (
    <div>
      <div className="bg-white-smoke border rounded-lg shadow-lg">
        <div className="p-4">
          <div>
            {currentItems.map((post) => (
              <div key={post.id}>
                <Howl
                  key={post.id}
                  post={post}
                  userAuth={userAuth}
                  likes={likes.filter((like) => like.postId === post.id)}
                />
              </div>
            ))}
          </div>
          <br></br>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <div className="p-4"></div>
    </div>
  );
};

export default HowlView;
