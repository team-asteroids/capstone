import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../../slices/authSlice';
import {
  fetchSitterClients,
  selectSitters,
  resetSitterStatus,
  fetchSingleClient,
} from '../../../slices/sittersSlice';

const SitterClients = (props) => {
  const dispatch = useDispatch();

  const { sitter } = props;
  const { token } = useSelector(selectAuth);
  const { clients, client } = useSelector(selectSitters);

  useEffect(() => {
    if (sitter && sitter.id) {
      const { id } = sitter;
      const userId = 42;
      dispatch(fetchSitterClients({ id, token }));
      dispatch(fetchSingleClient({ id, token, userId }));
    }
    return () => {
      dispatch(resetSitterStatus());
    };
  }, [sitter]);

  return (
    <div>
      <p>Clients</p>
    </div>
  );
};

export default SitterClients;
