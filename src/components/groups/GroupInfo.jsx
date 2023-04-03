import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSingleGroup,
  deleteSingleGroup,
  addGroupMember,
  deleteGroupMember,
  fetchGroupMembers,
} from '../../slices/groupsSlice';
// import GroupNav from './GroupNav';
import { selectAuth } from '../../slices/authSlice';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const GroupInfo = () => {
  const dispatch = useDispatch();
  const { groupId } = useParams();

  const { userAuth, token } = useSelector(selectAuth);
  const memberId = userAuth.id;
  const [memberIds, setMemberIds] = useState([]);

  const singleGroup = useSelector((state) => state.groups.singleGroup);

  const members = useSelector((state) => state.groups.members);

  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [color, setColor] = useState('');

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
      console.log('no token in component');
    }
  };

  const leaveGroup = async (e) => {
    e.preventDefault();
    await dispatch(deleteGroupMember({ groupId, memberId }));
    setSnackbarMessage('Goodbye fur now!');
    setColor('#b388ff');
    setOpen(true);
  };

  const deleteGroup = async (e) => {
    e.preventDefault();
    await dispatch(deleteSingleGroup(groupId));
  };

  useEffect(() => {
    dispatch(fetchGroupMembers(groupId));
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSingleGroup(groupId));
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (members && members.length) {
      const ids = members.map((member) => member.id);
      setMemberIds(ids);
    }
  }, [members]);

  const buttonClass =
    'text-sm px-4 py-2 text-bright-white rounded-lg bg-bold-purple font-semibold ease-in-out duration-100 hover:bg-pale-purple';

  return (
    <div>
      {singleGroup && singleGroup.name ? (
        <div className="pt-16 pl-16 flex flex-row">
          <div className="bg-slate-50 border rounded-lg font-rubik">
            <div className="flex flex-row">
              <div className="">
                <img
                  src={singleGroup.imageSrc}
                  alt="Group"
                  className="border rounded-l-lg max-w-sm"
                />
              </div>

              <div className="min-w-1/3 w-72 p-6 pr-8 flex flex-col rounded-lg text-lg justify-between">
                <div className="flex flex-wrap max-w-md">
                  <p className="h-20 font-semibold">{`${singleGroup.name.toUpperCase()}`}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm">({`${singleGroup.topic}`})</p>
                  <p className="text-sm pb-3">{`${members.length}`} MEMBERS</p>
                  <div className="">
                    {userAuth.role === 'admin' ||
                    userAuth.id === singleGroup.creatorId ? (
                      <div>
                        <p className="text-xs font-semibold">YOUR GROUP</p>
                        <button
                          onClick={deleteGroup}
                          className="text-red-600 font-semibold text-sm"
                        >
                          DELETE GROUP
                        </button>
                      </div>
                    ) : memberIds.includes(userAuth.id) ? (
                      <div>
                        <button
                          onClick={leaveGroup}
                          className="text-red-600 font-semibold text-sm"
                        >
                          LEAVE GROUP
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button onClick={joinGroup} className={buttonClass}>
                          JOIN
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
              >
                <SnackbarContent
                  message={snackbarMessage}
                  action={action}
                  style={{
                    backgroundColor: `${color}`,
                  }}
                />
              </Snackbar>
            </div>
          </div>
          {/* <div className="">
            <GroupNav
              singleGroup={singleGroup}
              members={members}
              userAuth={userAuth}
            />
          </div> */}
        </div>
      ) : (
        <div className="bg-white-smoke border rounded-lg shadow-lg text-lg">
          Loading
        </div>
      )}
    </div>
  );
};

export default GroupInfo;
