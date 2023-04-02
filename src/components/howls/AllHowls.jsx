import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import {
  fetchAllPosts,
  fetchAllPostLikes,
  fetchPostsThroughSearch,
} from '../../slices/postsSlice';

import HowlsView from './HowlsView';
import AddHowl from './AddHowl';

const AllHowls = () => {
  const dispatch = useDispatch();
  const { userAuth } = useSelector(selectAuth);

  const postsData = useSelector((state) => state.posts.allPosts);
  const likes = useSelector((state) => state.posts.postLikes);
  const allComments = useSelector((state) => state.posts.allComments);

  const [search, setSearch] = useState('');
  const [searchAlert, setSearchAlert] = useState('');
  const [sorted, setSorted] = useState('recent');
  const [attemptSearch, setAttemptSearch] = useState(false);

  const recentPosts = postsData.slice(0).sort((a, b) => {
    const timeA = a.createdAt;
    const timeB = b.createdAt;
    if (timeA < timeB) {
      return 1;
    }
    if (timeA > timeB) {
      return -1;
    }
    return 0;
  });

  const olderPosts = postsData.slice(0).sort((a, b) => {
    const timeA = a.createdAt;
    const timeB = b.createdAt;
    if (timeA < timeB) {
      return -1;
    }
    if (timeA > timeB) {
      return 1;
    }
    return 0;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setAttemptSearch(true);
    dispatch(fetchPostsThroughSearch(search));
    setSearchAlert(search);
  };

  const viewAll = (e) => {
    e.preventDefault();
    setAttemptSearch(false);
    dispatch(fetchAllPosts());
    setSearch('');
    setSearchAlert('');
  };

  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchAllPosts());
      await dispatch(fetchAllPostLikes());
    };
    getData();
  }, [dispatch, allComments]);

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue font-rubik';

  const buttonClass =
    'text-sm px-4 py-2 text-bright-white rounded-lg bg-bold-purple font-semibold ease-in-out duration-100 hover:bg-pale-purple';

  return (
    <div className="bg-cover bg-right-top bg-no-repeat bg-[url('img/dalmation-bg1.jpg')] h-full">
      <h2 className="font-rubikmono text-5xl pt-16 text-center m-auto">
        HOWLS
      </h2>
      <div className="flex flex-row justify-center pt-16 px-20">
        <div className="flex flex-row justify-center gap-24">
          <div className="flex flex-col gap-5 min-h-screen">
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

            <div
              id="sort"
              className="min-w-max flex flex-row items-center gap-3"
            >
              <h2 className="font-rubikmono text-xl text-left">SORT</h2>
              <div>
                <select
                  className={validClass}
                  onChange={(e) => setSorted(e.target.value)}
                  placeholder="sort"
                >
                  <option value="recent">Most Recent</option>
                  <option value="older">Oldest</option>
                </select>
              </div>
            </div>
            <div id="addPost" className="min-w-max flex flex-col gap-5">
              <div>
                <AddHowl />
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
              {postsData.length === 0 ? (
                <div className="">
                  <div className="p-5 mx-auto">
                    <h1 className="text-4xl font-bold text-center text-white">
                      No results found
                    </h1>
                  </div>
                </div>
              ) : (
                <div>
                  {sorted === 'recent' && (
                    <div>
                      <HowlsView
                        posts={recentPosts}
                        likes={likes}
                        userAuth={userAuth}
                      />
                    </div>
                  )}
                  {sorted === 'older' && (
                    <div>
                      <HowlsView
                        posts={olderPosts}
                        likes={likes}
                        userAuth={userAuth}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllHowls;
