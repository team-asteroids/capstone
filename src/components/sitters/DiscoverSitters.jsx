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
  const [attemptSearch, setAttemptSearch] = useState(false);

  const [rating, setRating] = useState('');
  const [price, setPrice] = useState('');
  const [zip, setZip] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setAttemptSearch(true);
    dispatch(fetchSitterNames(search));
    setSearchAlert(search);
  };

  const viewAll = (e) => {
    e.preventDefault();
    setAttemptSearch(false);
    dispatch(fetchAllSitters());
    setSearch('');
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

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue font-rubik';

  const buttonClass =
    'text-sm px-4 py-2 text-bright-white rounded-lg bg-bold-purple font-semibold ease-in-out duration-100 hover:bg-pale-purple';

  if (sitters.status === 'loading') {
    return <div>Hang tight...</div>;
  }

  if (sitters.status === 'failed') {
    return <div>Something went wrong...</div>;
  }

  return (
    <div className="bg-cover bg-right-top bg-no-repeat bg-[url('img/sitters-bg.jpg')] h-full">
      <h2 className="font-rubikmono text-5xl pt-16 text-center m-auto">
        Sitters
      </h2>
      <div className="flex flex-row justify-left pt-16 px-20">
        <div className="flex flex-row justify-center gap-16">
          <div className="w-1/3 flex flex-col gap-5 min-h-screen">
            <div
              id="search"
              className="min-w-max flex flex-row items-center gap-3"
            >
              <h2 className="font-rubikmono text-xl text-left">SEARCH</h2>
              <div>
                <form onSubmit={handleSearch}>
                  <div className="flex flex-row gap-3 items-center">
                    <input
                      type="text"
                      className={validClass}
                      placeholder="find it..."
                      value={search}
                      disabled={attemptSearch ? true : false}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div>
                      {!attemptSearch ? (
                        <div>
                          <button type="submit" className={buttonClass}>
                            FETCH
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            type="submit"
                            onClick={viewAll}
                            className="font-semibold ease-in-out duration-100 hover:text-bold-orange"
                          >
                            CLEAR
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div id="sort" className="min-w-max flex flex-row items-top gap-3">
              <h2 className="font-rubikmono text-xl text-left">FILTER</h2>
              <div className="flex flex-col gap-3">
                <div>
                  <h2 className="font-rubikmono text-xs w-72 mb-2">RATING</h2>
                  <select
                    value={rating}
                    className={validClass}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                <div>
                  <h2 className="font-rubikmono text-xs mb-2">PRICE</h2>
                  <select
                    value={price}
                    className={validClass}
                    onChange={(e) => setPrice(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="10">$10+</option>
                    <option value="20">$20+</option>
                    <option value="30">$30+</option>
                    <option value="40">$40+</option>
                    <option value="50">$50+</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/3 font-rubikmono overflow-auto gap-5">
            {searchAlert && (
              <div className="font-rubik text-center">
                Viewing search results for: {searchAlert}
              </div>
            )}
            <div>
              {sitters.length === 0 ? (
                <div className="">
                  <div className="p-5 mx-auto">
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
        </div>
      </div>
    </div>
  );
};

export default DiscoverSitters;
