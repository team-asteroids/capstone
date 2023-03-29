import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroupMembers } from '../../slices/groupsSlice';

const MemberView = () => {
  const dispatch = useDispatch();
  const { groupId } = useParams();

  const members = useSelector((state) => state.groups.members);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchGroupMembers(groupId));
      setLoading(false);
    };
    fetchData();
  }, [dispatch, groupId]);

  // console.log('members-->', members);

  return (
    <>
      {loading ? (
        <div className="font-rubikmono">Fetching good things...</div>
      ) : (
        <div>
          <div className="bg-white-smoke border rounded-lg shadow-lg">
            <h3>Members - {members.length}</h3>
            <p>Find a member</p>
            <p>Link to your own profile</p>
            <div className="p-4">
              <div className="w-96">
                {members.map((mem) => (
                  <div
                    key={mem.id}
                    className="bg-white-smoke border rounded-lg shadow-lg font-rubik"
                  >
                    <div className="p-2 flex flex-row">
                      <div className="basis-1/4">
                        <img
                          className="w-12 rounded-full"
                          src={require('../../img/default-dog.jpg')}
                          alt="alt"
                        />
                      </div>
                      <div className="basis-1/3  text-bold-blue">
                        {mem.userName}
                      </div>
                      <div className="basis-1/3">
                        <Link to={`/profile/${mem.id}`}>
                          <button className="p-1 rounded-lg bg-[#cbd5e1] ">
                            View Profile
                          </button>
                        </Link>
                      </div>
                    </div>
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

export default MemberView;
