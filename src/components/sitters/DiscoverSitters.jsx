import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllSitters,
  selectSitters,
  fetchSitterNames,
} from '../../slices/sittersSlice';
import SittersView from './SittersView.jsx';

const DiscoverSitters = () => {
  const dispatch = useDispatch();
  const { sitters } = useSelector(selectSitters);

  const [search, setSearch] = useState('');

  const [searchAlert, setSearchAlert] = useState('');

  const [rating, setRating] = useState('');
  const [price, setPrice] = useState('');
  const [zip, setZip] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSitterNames(search));
    setSearchAlert(search);
    setSearch('');
  };

  const viewAll = (e) => {
    e.preventDefault();
    dispatch(fetchAllSitters());
    setSearchAlert('');
  };

  const sitterSelection = sitters
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
    });

  useEffect(() => {
    dispatch(fetchAllSitters());
  }, [dispatch]);

  if (sitters.status === 'loading') {
    return <div>Hang tight...</div>;
  }

  if (sitters.status === 'failed') {
    return <div>Something went wrong...</div>;
  }

  return (
    <div>
      <div className="bg-white-smoke border rounded-lg shadow-lg">
        <div className="p-4 flex flex-row justify-between">
          <div className="basis-1/3 ">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search groups"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="p-1 rounded-lg bg-[#cbd5e1] font-mono"
              >
                Search
              </button>
            </form>
            <button
              onClick={viewAll}
              className="p-1 rounded-lg bg-[#cbd5e1] font-mono"
            >
              View All
            </button>
          </div>
          {searchAlert && (
            <div className="basis-2/3 ">
              <div className="font-mono">
                Viewing search results for: {searchAlert}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h2 className="font-rubikmono">Filter by Rating</h2>
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
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
        {sitters.length === 0 ? (
          <div className="bg-gradient-to-r from-yellow-400 to-blue-300">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold text-center text-white">
                No results found
              </h1>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <SittersView sitters={sitterSelection} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoverSitters;
