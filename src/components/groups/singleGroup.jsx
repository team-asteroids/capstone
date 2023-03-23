import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
        <div>Loading</div>
      ) : (
        <div>
          <div className="bg-white-smoke border rounded-lg shadow-lg font-mono">
            <div className="p-4">
              <img src={singleGroup.imageSrc} alt="Group" />
              <p>{`${singleGroup.name}`}</p>
              <p>Topic: {`${singleGroup.topic}`}</p>
              <p>{`${members.length}`} members</p>
              <div className="flex justify-between"></div>
            </div>
          </div>
          <div className="bg-white-smoke border rounded-lg shadow-lg">
            <div className="p-4">
              <h3>Posts</h3>
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
        </div>
      )}
    </>
  );
};

export default SingleGroup;
