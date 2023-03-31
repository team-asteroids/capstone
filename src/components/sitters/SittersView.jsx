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
      <div className="bg-white-smoke border rounded-lg shadow-lg">
        <div className="p-4">
          <div>
            {currentItems.map((sitter) => (
              <SitterCard
                key={sitter.id}
                img={defaultImg}
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
        </div>
      </div>
      <div className="p-4"></div>
    </div>
  );
};

export default SittersView;