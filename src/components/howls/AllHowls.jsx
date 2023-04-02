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
    <div className="bg-cover bg-no-repeat bg-[url('img/profile-bg.jpg')] h-[calc(100vh_-_5rem)]">
      <h2 className="font-rubikmono text-2xl text-center m-auto">HOWLS</h2>
      <div className="flex flex-row justify-center mb-16 mx-10">
        <div className="w-1/3 flex flex-col gap-5">
          <div id="search" className="min-w-max flex flex-col gap-5">
            SEARCH
          </div>
          <div id="sort" className="min-w-max flex flex-col gap-5">
            SORT
          </div>
          <div id="addPost" className="min-w-max flex flex-col gap-5">
            <div>
              <AddHowl />
            </div>
          </div>
        </div>

        {/* <div>
        <div className="flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4 max-w-lg"> */}
        {/* <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
      <div className="flex flex-wrap -mx-3 mb-6">
         <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
         <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
         </div>
         <div className="w-full md:w-full flex items-start md:w-full px-3">
            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
               <svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
               </svg>
               <p className="text-xs md:text-sm pt-px">Some HTML is okay.</p>
            </div>
            <div className="-mr-1">
               <input type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment'>
            </div>
         </div>
      </form> */}

        {/* <div>
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
      </div> */}
        <div className="h-[calc(100vh_-_10rem)] w-1/2 m-auto overflow-auto flex flex-col gap-5">
          <div>
            {postsData.length === 0 ? (
              <div>
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
        </div>
      </div>
    </div>
  );
};

export default AllHowls;
