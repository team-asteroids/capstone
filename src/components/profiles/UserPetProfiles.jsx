import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPets,
  fetchAllPets,
  resetPetStatus,
} from '../../slices/petsSlice';

const UserPetProfiles = (props) => {
  const dispatch = useDispatch();
  const { user } = props;
  const id = user.id;

  const { allPets } = useSelector(selectPets);
  console.log(allPets);

  useEffect(() => {
    if (id) {
      dispatch(fetchAllPets(id));
    }
  }, [id]);

  return (
    <div>
      <h2 className="font-rubikmono pb-5">PET PROFILES</h2>
      <div className="flex flex-row gap-8">
        {allPets && allPets.length
          ? allPets.map((pet) => (
              <div className="flex flex-row gap-5">
                <div className="">
                  <img
                    className="h-24 w-24 object-cover rounded-full drop-shadow-md"
                    alt={'pet-pic'}
                    src={pet.imageSrc}
                  />
                </div>
                <div>
                  <p>{pet.name}</p>
                  <p>{pet.breed}</p>
                  <p>
                    {'age: '}
                    {pet.age}
                  </p>
                  <p>
                    {'size: '}
                    {pet.size}
                  </p>
                </div>
              </div>
            ))
          : 'no pets!'}
      </div>
    </div>
  );
};

export default UserPetProfiles;
