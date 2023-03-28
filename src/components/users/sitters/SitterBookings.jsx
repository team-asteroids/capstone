import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSitters,
  fetchSitterBookings,
  resetSitterStatus,
} from '../../../slices/sittersSlice';
import { selectAuth } from '../../../slices/authSlice';

const SitterBookings = (props) => {
  const { sitter } = props;

  const dispatch = useDispatch();
  const { token } = useSelector(selectAuth);
  const { sitterBookings } = useSelector(selectSitters);

  const [pending, setPending] = useState([]);
  const [approved, setApproved] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [cancelled, setCancelled] = useState([]);

  useEffect(() => {
    if (sitter && sitter.id) {
      const id = sitter.id;
      dispatch(fetchSitterBookings({ id, token }));
    }
    return () => {
      dispatch(resetSitterStatus());
    };
  }, [sitter]);

  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">Manage Sitter Bookings</h2>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <div>
          <p>New Booking Requests</p>
        </div>
        <div>
          <p>Upcoming Bookings</p>
        </div>
        <div>
          <p>Past Bookings</p>
        </div>
      </div>
    </div>
  );
};

export default SitterBookings;
