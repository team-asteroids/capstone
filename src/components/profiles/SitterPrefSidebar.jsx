import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleSitter, selectSitters } from '../../slices/sittersSlice';
import { selectUser } from '../../slices/usersSlice';

const SitterPrefSidebar = () => {
  const dispatch = useDispatch();
  const [sitterPrefs, setSitterPrefs] = useState({});

  const { singleUser } = useSelector(selectUser);
  const { singleSitter } = useSelector(selectSitters);

  const id = singleUser.sitter.id;

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleSitter(id));
    }
  }, [id]);

  useEffect(() => {
    if (singleSitter.sitterPrefs) {
      setSitterPrefs(singleSitter.sitterPrefs[0]);
    }
  }, [singleSitter]);

  return (
    <div className="min-w-max">
      <div className="pb-5">
        <h2 className="font-rubikmono pb-2">Rate</h2>
        <p>${singleSitter.rate}</p>
      </div>
      <div className="font-rubikmono pb-2">
        <h2>Preferences</h2>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <p className="font-semibold text-sm">LOCATION:</p>
          <ul>
            {sitterPrefs.hostAtHome ? <li>- sitter home</li> : null}
            {sitterPrefs.atOwnerHouse ? <li>- owner home</li> : null}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-sm">SIZE:</p>
          <ul>
            {sitterPrefs.small ? <li>- small</li> : null}
            {sitterPrefs.medium ? <li>- medium</li> : null}
            {sitterPrefs.large ? <li>- large</li> : null}
            {sitterPrefs.extraLarge ? <li>- extra large</li> : null}
            {sitterPrefs.puppies ? <li>- puppies</li> : null}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-sm">OTHER PETS:</p>
          <ul>
            {sitterPrefs.cats ? <li>- cats</li> : null}
            {sitterPrefs.multiplePets ? <li>- multiple pets</li> : null}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-sm">SPECIAL NEEDS:</p>
          <ul>
            {sitterPrefs.disabled ? <li>- disabled</li> : null}
            {sitterPrefs.medication ? <li>- medication</li> : null}
            {sitterPrefs.reactive ? <li>- reactive</li> : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SitterPrefSidebar;
