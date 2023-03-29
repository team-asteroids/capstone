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
  const [rating, setRating] = useState('');
  const [price, setPrice] = useState('');

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
        <div className="flex flex-row">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <h2 className="font-rubikmono">Filter by Rating</h2>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">All</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-rubikmono">Filter by Price</h2>
              <select value={price} onChange={(e) => setPrice(e.target.value)}>
                <option value="">All</option>
                <option value="10">$10+</option>
                <option value="20">$20+</option>
                <option value="30">$30+</option>
                <option value="40">$40+</option>
                <option value="50">$50+</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {sitters.sitters
              .filter((sitter) => {
                if (search === '') {
                  return sitter;
                } else if (
                  sitter.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return sitter;
                }
              })
              .filter((sitter) => {
                if (rating === '') {
                  return sitter;
                } else if (sitter.sitterRating >= rating) {
                  return sitter;
                }
              })
              .filter((sitter) => {
                if (price === '') {
                  return sitter;
                } else if (sitter.rate >= price) {
                  return sitter;
                }
              })
              .map((sitter) => (
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
