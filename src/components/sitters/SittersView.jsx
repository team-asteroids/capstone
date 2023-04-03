import React, { useState } from 'react';
import Pagination from '../ui/Pagination';

import SitterCard from './SitterCard.jsx';
import defaultImg from '../../img/default-dog.jpg';

const SittersView = (props) => {
  const { sitters } = props;

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Pagination -- get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sitters.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(sitters.length / itemsPerPage);

  return (
    <div>
      <div className="flex flex-col gap-5">
        {currentItems.map((sitter) => (
          <SitterCard
            key={sitter.id}
            img={defaultImg}
            sitter={sitter}
            firstName={sitter.firstName}
            rate={sitter.rate}
            rating={sitter.sitterRating}
            reviews={sitter.sitterReviewCount}
            bio={sitter.bio}
            userId={sitter.userId}
          />
        ))}
      </div>
      <br></br>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <div className="p-4"></div>
    </div>
  );
};

export default SittersView;
