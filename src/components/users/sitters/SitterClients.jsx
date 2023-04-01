import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuth } from '../../../slices/authSlice';
import {
  selectSitterAuth,
  fetchSitterAuthClients,
  resetSitterAuthClients,
} from '../../../slices/sitterAuthSlice';

const SitterClients = (props) => {
  const dispatch = useDispatch();

  const { sitter } = props;
  const { token } = useSelector(selectAuth);
  const { sitterAuthClients } = useSelector(selectSitterAuth);

  useEffect(() => {
    if (sitter && sitter.id) {
      const { id } = sitter;
      dispatch(fetchSitterAuthClients({ id, token }));
    }

    return () => {
      dispatch(resetSitterAuthClients());
    };
  }, [sitter]);

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'cursor-pointer appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const disabledClass =
    'cursor-pointer appearance-none block border-slate-400 w-full bg-bright-white/30 border rounded py-3 px-4 leading-tight mt-3 font-rubik';

  const inactiveStatusClass =
    'cursor-pointer text-red-600 appearance-none block border-slate-400 w-full bg-bright-white/30 border rounded py-3 px-4 leading-tight mt-3 font-rubik';

  return (
    <div>
      <p className="pb-5">Clients</p>
      <div>
        {sitterAuthClients
          ? sitterAuthClients.map((client) => (
              <Link to={`/profile/${client.id}`}>
                <div key={client.id} className="font-rubik mb-10">
                  <div className="flex flex-wrap mb-3">
                    <div className="w-1/5 flex flex-col pr-6">
                      <label className={labelClass}>Name</label>
                      <input
                        className={disabledClass}
                        disabled
                        type="text"
                        defaultValue={`${client.firstName} ${client.lastName}`}
                      />
                    </div>
                    <div className="w-1/5 flex flex-col pr-6">
                      <label className={labelClass}>Status</label>
                      <input
                        className={
                          client.status === true
                            ? disabledClass
                            : inactiveStatusClass
                        }
                        type="text"
                        disabled
                        defaultValue={client.status ? 'active' : 'inactive'}
                      />
                    </div>
                    <div className="w-1/5 flex flex-col pr-6">
                      <label className={labelClass}>Username</label>
                      <input
                        className={disabledClass}
                        disabled
                        type="text"
                        defaultValue={client.userName}
                      />
                    </div>
                    <div className="w-2/5 flex flex-col pr-6">
                      <label className={labelClass}>Email</label>
                      <input
                        className={disabledClass}
                        disabled
                        type="text"
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
