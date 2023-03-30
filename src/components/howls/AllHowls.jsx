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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPostsThroughSearch(search));
    setSearch('');
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
      <div className="bg-white-smoke border rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
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
      </div>
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
      {sorted === 'recent' && (
        <div>
          <HowlsView posts={recentPosts} likes={likes} userAuth={userAuth} />
        </div>
      )}
      {sorted === 'older' && (
        <div>
          <HowlsView posts={olderPosts} likes={likes} userAuth={userAuth} />
        </div>
      )}
    </>
  );
};

export default AllHowls;
