import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuth } from '../../slices/authSlice';
import {
  fetchAllPosts,
  fetchAllPostLikes,
  fetchPostsThroughSearch,
} from '../../slices/postsSlice';
import Pagination from '../ui/Pagination';
import Howl from './Howl';
import AddHowl from './AddHowl';

const AllHowls = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.allPosts);
  const likes = useSelector((state) => state.posts.postLikes);
  const allComments = useSelector((state) => state.posts.allComments);
  const [search, setSearch] = useState('');
  // const likes = useSelector((state) => state.posts.postLikes);
  //   console.log('posts --> ', posts[0]);
  // console.log('likes --> ', likes);

  const { userAuth } = useSelector(selectAuth);

  // console.log('userAuth -->', userAuth);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(posts.length / itemsPerPage);

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
        <div className="bg-white-smoke border rounded-lg shadow-lg">
          {userAuth && (
            <div>
              <AddHowl />
            </div>
          )}
          <div className="p-4">
            <div>
              {currentItems.map((post) => (
                <div key={post.id}>
                  <Howl
                    key={post.id}
                    post={post}
                    userAuth={userAuth}
                    likes={likes.filter((like) => like.postId === post.id)}
                  />
                </div>
              ))}
            </div>{' '}
            <br></br>
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
        <div className="p-4"></div>
      </div>
    </>
  );
};

export default AllHowls;
