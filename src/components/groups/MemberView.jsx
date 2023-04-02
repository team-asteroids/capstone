import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroupMembers } from '../../slices/groupsSlice';
import { Divider } from '@mui/material';

const MemberView = () => {
  const dispatch = useDispatch();
  const { groupId } = useParams();

  const members = useSelector((state) => state.groups.members);

  const member = useSelector((state) => state.groups.member);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchGroupMembers(groupId));
      setLoading(false);
    };
    fetchData();
  }, [dispatch, groupId, member]);

  // console.log('members-->', members);

  return (
    <>
      {loading ? (
        <div className="font-rubikmono">Fetching good things...</div>
      ) : (
        <div>
          <div className="bg-slate-50 px-8 py-10 rounded-lg font-rubik">
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold">MEMEBERS ({members.length}):</h3>
              <Divider />
              {/* <p>Find a member</p> */}
              {/* <p>Link to your own profile</p> */}
              <div className="w-full flex flex-col gap-2 items-left">
                {members.map((mem) => (
                  <div key={mem.id} className="">
                    <div className="p-2 flex flex-row">
                      <div className="flex flex-row gap-3 items-center">
                        <Link to={`/profile/${mem.id}`}>
                          <img
                            className="w-10 h-10 rounded-full"
                            src={require('../../img/default-dog.jpg')}
                            alt="alt"
                          />
                        </Link>
                        <div>
                          <Link to={`/profile/${mem.id}`}>
                            <p className="hover:text-bold-purple">{`${mem.fullName} (${mem.userName})`}</p>
                          </Link>
                        </div>
                      </div>
                    </div>
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

export default MemberView;
