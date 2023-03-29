import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../../slices/authSlice';
import { useNavigate, useParams, Link } from 'react-router-dom';
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

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'cursor-pointer appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const inactiveStatusClass =
    'cursor-pointer appearance-none block text-red-600 w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  return (
    <div>
      <p className="pb-5">Clients</p>
      <div>
        {clients
          ? clients.map((client) => (
              <Link to={`/profile/${client.id}`}>
                <div key={client.id} className="font-rubik mb-10">
                  <div className="flex flex-wrap mb-3">
                    <div className="w-1/5 flex flex-col pr-6">
                      <label className={labelClass}>Name</label>
                      <input
                        className={validClass}
                        disabled
                        defaultValue={`${client.firstName}, ${client.lastName}`}
                      />
                    </div>
                    <div className="w-1/5 flex flex-col pr-6">
                      <label className={labelClass}>Status</label>
                      <input
                        className={
                          client.status === true
                            ? validClass
                            : inactiveStatusClass
                        }
                        disabled
                        defaultValue={
                          client.status === true ? 'active' : 'inactive'
                        }
                      />
                    </div>
                    <div className="w-1/5 flex flex-col pr-6">
                      <label className={labelClass}>Username</label>
                      <input
                        className={validClass}
                        disabled
                        defaultValue={client.userName}
                      />
                    </div>
                    <div className="w-2/5 flex flex-col pr-6">
                      <label className={labelClass}>Email</label>
                      <input
                        className={validClass}
                        disabled
                        defaultValue={client.email}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          : 'no clients!'}
      </div>
    </div>
  );
};

export default SitterClients;
