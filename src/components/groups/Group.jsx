import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addGroupMember, deleteGroupMember } from '../../slices/groupsSlice';
import { selectAuth } from '../../slices/authSlice';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Group = (props) => {
  const { group, members } = props;
  const mem = members.length;
  const groupId = group.id;

  const memberIds = members.map((mem) => {
    return mem.userId;
  });

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [color, setColor] = useState('');

  const { userAuth, token } = useSelector(selectAuth);

  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="white"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  const joinGroup = async (e) => {
    e.preventDefault();
    if (token) {
      await dispatch(addGroupMember(groupId));
      setSnackbarMessage('Welcome to the pack!');
      setColor('#64b5f6');
      setOpen(true);
    } else {
      setSnackbarMessage('Please log in to unleash this adventure!');
      setColor('#B22222');
      setOpen(true);
    }
  };

  const leaveGroup = async (e) => {
    e.preventDefault();
    if (userAuth && userAuth.id) {
      const memberId = userAuth.id;
      await dispatch(deleteGroupMember({ groupId, memberId }));
      setSnackbarMessage('Goodbye fur now!');
      setColor('#b388ff');
      setOpen(true);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setSnackbarMessage('Please log in to unleash this adventure!');
    setColor('#B22222');
    setOpen(true);
  };

  const buttonClass =
    'text-sm px-4 py-2 text-bright-white rounded-lg bg-bold-purple font-semibold ease-in-out duration-100 hover:bg-pale-purple';

  return (
    <div className="font-rubik">
      <div className="w-96 border bg-slate-50 rounded-lg">
        {userAuth && userAuth.id ? (
          <div>
            <Link to={`/groups/${group.id}`} state={{ groupId: group.id }}>
              <img
                className="rounded-t-lg object-cover h-72 w-144"
                src={group.imageSrc}
                alt={''}
              />
            </Link>
          </div>
        ) : (
          <img
            onClick={handleClick}
            className="rounded-t-lg object-cover h-72 w-144"
            src={group.imageSrc}
            alt={''}
          />
        )}

        <div className="flex flex-col gap-3">
          {group && group.id ? (
            <Link to={`/groups/${group.id}`} state={{ groupId: group.id }}>
              <div className="p-5 flex flex-col">
                <p className="text-lg font-semibold h-12">{`${group.name.toUpperCase()}`}</p>
              </div>
            </Link>
          ) : null}

          <div>
            <div>
              <div className="flex justify-between px-5">
                <div className="flex flex-col gap-2 pb-5">
                  <p className="text-sm">({`${group.topic}`})</p>
                  <p>{`${mem}`} MEMBERS</p>
                  {userAuth && userAuth.id ? (
                    <div>
                      {userAuth &&
                      userAuth.id &&
                      memberIds.includes(userAuth.id) ? (
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
                  ) : (
                    <div className="bg-gains-boro rounded-md py-2 px-1 text-center">
                      <Link to="/login">
                        Please{' '}
                        <strong className="text-bold-blue ">log in</strong> to
                        unleash this group adventure!
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <SnackbarContent
          message={snackbarMessage}
          action={action}
          autoHideDuration={3000}
          style={{
            backgroundColor: `${color}`,
          }}
        />
      </Snackbar>
    </div>
  );
};

export default Group;
