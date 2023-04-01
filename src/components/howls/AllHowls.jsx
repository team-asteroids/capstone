import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import {
  fetchAllPosts,
  fetchAllPostLikes,
  fetchPostsThroughSearch,
} from '../../slices/postsSlice';

import HowlsView from './HowlsView';

const AllHowls = () => {
  const dispatch = useDispatch();
  const { userAuth } = useSelector(selectAuth);

  const postsData = useSelector((state) => state.posts.allPosts);
  const likes = useSelector((state) => state.posts.postLikes);
  const allComments = useSelector((state) => state.posts.allComments);

  const [search, setSearch] = useState('');
  const [searchAlert, setSearchAlert] = useState('');
  const [sorted, setSorted] = useState('recent');

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

  console.log('sorted -->', sorted);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchPostsThroughSearch(search));
    setSearchAlert(search);
    setSearch('');
  };

  const viewAll = (e) => {
    e.preventDefault();
    dispatch(fetchAllPosts());
    setSearchAlert('');
  };

  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchAllPosts());
      await dispatch(fetchAllPostLikes());
    };
    getData();
  }, [dispatch, allComments]);

  return (
    <>
      <div>
        <div className="bg-white-smoke border rounded-lg shadow-lg p-3">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search howls"
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
        <div>
          <div className="bg-white-smoke border rounded-lg shadow-lg font-rubik">
            <div className="p-2">
              <h2 className="font-rubikmono">Sort</h2>
              <select onChange={(e) => setSorted(e.target.value)}>
                <option value="recent">Sort By:</option>
                <option value="recent">Most Recent</option>
                <option value="older">Oldest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        {postsData.length === 0 ? (
          <div className="bg-gradient-to-r from-yellow-400 to-blue-300">
            <div className="container mx-auto">
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
    </>
  );
};

export default AllHowls;
