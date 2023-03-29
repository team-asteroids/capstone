import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../../slices/authSlice';
import {
  fetchSitterClients,
  selectSitters,
  resetSitterStatus,
} from '../../../slices/sittersSlice';

const SitterClients = (props) => {
  const dispatch = useDispatch();

  const { sitter } = props;
  const { token } = useSelector(selectAuth);
  const { clients } = useSelector(selectSitters);

  useEffect(() => {
    if (sitter && sitter.id) {
      const { id } = sitter;
      dispatch(fetchSitterClients({ id, token }));
    }

    return () => {
      dispatch(resetSitterStatus());
    };
  }, [sitter]);

  // let clientAndStatus = [];

  // if (clients && clients.clients && clients.clientsOfSitter) {
  //   const clientStatus = clients.clients;

  //   clients.clientsOfSitter.forEach((clientObj) => {
  //     for (let i = 0; i < clientStatus.length; i++) {
  //       if (clientObj.id === clientStatus[i].userId) {
  //         let status = clientStatus[i].status;
  //         console.log('found');
  //         clientAndStatus.push({ ...clientObj, status });
  //       }
  //     }
  //   });
  // }
  console.log(clients);

  return (
    <div>
      <p>Clients</p>
      <div>
        {clients
          ? clients.map((client) => (
              <div key={client.id} className="font-rubik">
                <p>
                  {client.firstName} {client.lastName}
                </p>
                <p>{client.username}</p>
                <p>{client.email}</p>
                <p>{client.status.toString()}</p>
              </div>
            ))
          : 'no clients!'}
      </div>
    </div>
  );
};

export default SitterClients;
