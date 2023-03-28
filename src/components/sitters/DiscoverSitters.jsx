import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SitterCard from './SitterCard.jsx';
import defaultImg from '../../img/default-dog.jpg';
import { fetchAllSitters, selectSitters } from '../../slices/sittersSlice';
import Pagination from '../ui/Pagination';

const DiscoverSitters = () => {
  const dispatch = useDispatch();
  const { sitters } = useSelector(selectSitters);

  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Calculate what to map each time page changes
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sitters.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(sitters.length / itemsPerPage);

  useEffect(() => {
    dispatch(fetchAllSitters());
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-blue-300">
      <div className="container mx-auto">
        {currentItems.map((sitter) => (
          <SitterCard
            key={sitter.id}
            img={defaultImg}
            firstName={sitter.firstName}
            rate={sitter.rate}
            rating={sitter.sitterRating}
            reviews={sitter.sitterReviewCount}
            bio={sitter.bio}
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
  );
};

export default DiscoverSitters;
