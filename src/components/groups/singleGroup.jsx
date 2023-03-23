import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleGroup } from '../../slices/groupsSlice';
import { fetchGroupPosts } from '../../slices/groupDetailsSlice';

const SingleGroup = () => {
  //   const location = useLocation();
  //   const groupId = location.state.groupId;
  const dispatch = useDispatch();
  const { groupId } = useParams();
  const group = useSelector((state) => state.groups.singleGroup);
  const singleGroup = group.singleGroup;
  const members = group.members;
  console.log('group ID--> ', groupId);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSingleGroup(groupId));
      setLoading(false);
    };
    fetchData();
    // dispatch(fetchGroupPosts(groupId));
  }, [dispatch, groupId]);

  console.log('group--> ', group);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <div className="bg-white-smoke border rounded-lg shadow-lg">
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
            </div>
          </div>{' '}
        </div>
      )}
    </>
  );
};

export default SingleGroup;
