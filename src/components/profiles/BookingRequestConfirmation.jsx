import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { selectBookings } from '../../slices/bookingsSlice';
import { fetchAllPets, selectPets } from '../../slices/petsSlice';

const BookingRequestConfirmation = () => {
  const dispatch = useDispatch();

  const { userAuth, token } = useSelector(selectAuth);
  const { newBooking } = useSelector(selectBookings);
  const { allPets } = useSelector(selectPets);

  const [petIds, setPetIds] = useState([]);

  const id = userAuth.id;

  const toggleClass =
    "checked w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pale-blue  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-bold-blue";

  useEffect(() => {
    if (id) dispatch(fetchAllPets(id));
  }, [userAuth]);

  const togglePet = (evt) => {
    if (petIds.includes(evt.target.value)) {
      const idx = petIds.indexOf(evt.target.value);
      setPetIds([...petIds.slice(0, idx), ...petIds.slice(idx + 1)]);
    } else setPetIds([...petIds, +evt.target.value]);
  };

  return (
    <div className="bg-[url('img/bulldog-bg.jpg')] h-[calc(100vh_-_5rem)] bg-center w-screen bg-no-repeat bg-cover">
      <div className="flex flex-row">
        <div className="w-1/2"></div>
        <div className="w-1/2 flex flex-col text-center justify-center">
          <h2 className="font-rubikmono text-2xl">One more step!</h2>
          <div>
            <p>Please provide additional information about your booking</p>
          </div>

          <div>
            <p>Add Pets:</p>
          </div>
          <div className="flex flex-row flex-wrap gap-5 justify-center">
            {allPets && allPets.length
              ? allPets.map((pet) => (
                  <div className="flex items-center gap-2" key={pet.id}>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        value={pet.id}
                        onChange={togglePet}
                      />
                      <div className={toggleClass}></div>
                      <span className="ml-3 font-medium text-gray-900">
                        {pet.name}
                      </span>
                    </label>
                  </div>
                ))
              : 'no pets'}
          </div>

          <div>
            <p>Confirm Access Details:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingRequestConfirmation;
