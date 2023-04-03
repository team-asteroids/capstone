import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addGroupMember, deleteGroupMember } from '../../slices/groupsSlice';
import { selectAuth } from '../../slices/authSlice';
import { Snackbar, IconButton, CloseIcon } from '@mui/material';

const Group = (props) => {
  const { group, members } = props;
  //   console.log('group --> ', group);
  //   console.log('members --> ', members);
  const mem = members.length;
  const groupId = group.id;

  const memberIds = members.map((mem) => {
    return mem.userId;
  });

  const dispatch = useDispatch();
  const [logInPrompt, setLogInPrompt] = useState(false);

  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const { userAuth, token } = useSelector(selectAuth);

  const joinGroup = async (e) => {
    e.preventDefault();
    if (token) {
      await dispatch(addGroupMember(groupId));
      setSnackbarMessage('Welcome to the pack!');
      setOpen(true);
    } else {
      setLogInPrompt(true);
    }
  };

  const leaveGroup = async (e) => {
    e.preventDefault();
    const memberId = userAuth.id;
    await dispatch(deleteGroupMember({ groupId, memberId }));
    setSnackbarMessage('Goodbye fur now!');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buttonClass =
    'text-sm px-4 py-2 text-bright-white rounded-lg bg-bold-purple font-semibold ease-in-out duration-100 hover:bg-pale-purple';

  return (
    <div className="font-rubik">
      <div className="w-96 border bg-slate-50 rounded-lg">
        <Link to={`/groups/${group.id}`} state={{ groupId: group.id }}>
          <img
            className="rounded-t-lg object-cover h-72 w-144"
            src={group.imageSrc}
            alt={''}
          />
        </Link>
        <div className="flex flex-col gap-3">
          <Link to={`/groups/${group.id}`} state={{ groupId: group.id }}>
            <div className="p-5 flex flex-col">
              <p className="text-lg font-semibold h-12">{`${group.name.toUpperCase()}`}</p>
            </div>
          </Link>
          <div>
            <div>
              {!logInPrompt ? (
                <div className="flex justify-between px-5">
                  <div className="flex flex-col gap-2 pb-5">
                    <p className="text-sm">({`${group.topic}`})</p>
                    <p>{`${mem}`} MEMBERS</p>
                    {memberIds.includes(userAuth.id) ? (
                      <div>
                        <div>Part of the pack!</div>
                        <div>
                          <button
                            onClick={leaveGroup}
                            className="text-red-600 font-semibold text-sm"
                          >
                            LEAVE GROUP
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="">
                        <button onClick={joinGroup} className={buttonClass}>
                          JOIN GROUP
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <button className="">
                    Please log in to unleash this group adventure!
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={snackbarMessage}
      />
    </div>
  );
};

export default Group;
