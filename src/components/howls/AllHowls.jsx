import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchAllPosts,
  fetchAllPostLikes,
  fetchPostsThroughSearch,
} from '../../slices/postsSlice';
import Pagination from '../ui/Pagination';
import Howl from './Howl';

const AllHowls = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.allPosts);
  const [search, setSearch] = useState('');
  // const likes = useSelector((state) => state.posts.postLikes);
  //   console.log('posts --> ', posts[0]);

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
      // await dispatch(fetchAllPostLikes());
    };
    getData();
  }, [dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a sitter"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>
      <div>
        <div className="bg-white-smoke border rounded-lg shadow-lg">
          <div className="p-4">
            <div>
              {currentItems.map((post) => (
                <div key={post.id}>
                  <Howl
                    key={post.id}
                    post={post}
                    // likes={likes.filter((like) => like.postId === post.id)}
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
        {/* <div>
          <AddGroupPost groupId={groupId} />
        </div> */}
        <div className="p-4">
          {/* <Link to="/groups">
            <button className="p-1 rounded-lg bg-[#cbd5e1] font-mono">
              Back to Browse Groups
            </button>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default AllHowls;
