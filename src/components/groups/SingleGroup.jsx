import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleGroup } from '../../slices/groupsSlice';
import { fetchGroupPosts } from '../../slices/groupDetailsSlice';
import GroupPost from './GroupPost';

const SingleGroup = () => {
  const dispatch = useDispatch();
  const { groupId } = useParams();

  const group = useSelector((state) => state.groups.singleGroup);
  const singleGroup = group.singleGroup;
  const members = group.members;

  const posts = useSelector((state) => state.groupDetails.posts);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSingleGroup(groupId));
      await dispatch(fetchGroupPosts(groupId));
      setLoading(false);
    };
    fetchData();
  }, [dispatch, groupId]);

  console.log('posts--> ', posts);

  return (
    <>
      {loading ? (
        <div className="bg-white-smoke border rounded-lg shadow-lg text-lg">
          Loading
        </div>
      ) : (
        <div>
          <div className="bg-white-smoke border rounded-lg shadow-lg font-mono">
            <div className="p-4 flex flex-row justify-between">
              <div className="basis-1/2 ">
                <img
                  src={require('../../img/groups/party-pups.jpg')}
                  alt="Group"
                  className="border rounded-lg"
                />
              </div>
              <div className="basis-1/2 p-6 flex flex-col border rounded-lg text-lg justify-evenly">
                <div>{`${singleGroup.name}`}</div>
                <div>Topic: {`${singleGroup.topic}`}</div>
                <div>{`${members.length}`} members</div>
              </div>
            </div>
          </div>
          <div className="bg-white-smoke border rounded-lg shadow-lg">
            <div className="p-4">
              <h3 className="font-rubikmono text-bold-purple">Posts</h3>
              <div>
                {posts.map((post) => (
                  <div key={post.post.id}>
                    <GroupPost
                      key={post.post.id}
                      post={post.post}
                      likes={post.likes}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4">
            <Link to="/groups">
              <button className="p-1 rounded-lg bg-[#cbd5e1] font-mono">
                Back to Browse Groups
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleGroup;
