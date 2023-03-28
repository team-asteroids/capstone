import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SitterCard from './SitterCard.jsx';
import defaultImg from '../../img/default-dog.jpg';
import {
  fetchAllSitters,
  selectSitters,
  fetchSitterNames,
} from '../../slices/sittersSlice';

const DiscoverSitters = () => {
  const dispatch = useDispatch();
  const sitters = useSelector(selectSitters);
  const [search, setSearch] = useState('');
  const [searchResultValid, setSearchResultValid] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSitterNames(search));
    setSearch('');
  };


  useEffect(() => {
    dispatch(fetchAllSitters());
  }, [dispatch]);

  if (sitters.status === 'loading') {
    return <div>Hang tight...</div>;
  }

  if (sitters.status === 'failed') {
    return <div>Something went wrong...</div>;
  }

  if (sitters.sitters.length === 0) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a sitter"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>
        <div className="bg-gradient-to-r from-yellow-400 to-blue-300">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center text-white">
              No results found
            </h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a sitter"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>
        <div className="bg-gradient-to-r from-yellow-400 to-blue-300">
          <div className="container mx-auto">
            {sitters.sitters.map((sitter) => (
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
        </div>
      </div>
    );
  }
};

export default DiscoverSitters;
