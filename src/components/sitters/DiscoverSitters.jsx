import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SitterCard from './SitterCard.jsx';
import defaultImage from '/Users/paulschofield-personal/Documents/projects/fullstack_academy/capstone/src/img/default-dog.jpg';
import { fetchAllSitters, selectSitters } from '../../slices/sittersSlice';

const DiscoverSitters = () => {
  const dispatch = useDispatch();
  const sitters = useSelector(selectSitters);

  useEffect(() => {
    dispatch(fetchAllSitters());
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-blue-300">
      <div className="container mx-auto">
        {sitters.sitters.map((sitter) => (
          <SitterCard
            key={sitter.id}
            img={defaultImage}
            firstName={sitter.firstName}
            rate={sitter.rate}
            rating={sitter.sitterRating}
            reviews={sitter.sitterReviewCount}
            bio={sitter.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverSitters;
