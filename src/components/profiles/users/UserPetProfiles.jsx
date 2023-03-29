import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPets,
  fetchAllPets,
  resetPetStatus,
} from '../../../slices/petsSlice';
import defaultImg from '../../../img/default-dog.jpg';
import { selectAuth } from '../../../slices/authSlice';
import { useParams, Link, useLocation } from 'react-router-dom';

const UserPetProfiles = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();

  const { userAuth } = useSelector(selectAuth);
  const { user } = props;
  const id = user.id;

  const { allPets } = useSelector(selectPets);

  useEffect(() => {
    if (id) {
      dispatch(fetchAllPets(id));
    }
    return () => {
      dispatch(resetPetStatus());
    };
  }, [id]);

  return (
    <div>
      <h2 className="font-rubikmono pb-5">PET PROFILES</h2>
      <div className="flex flex-row flex-wrap gap-8">
        {allPets && allPets.length
          ? allPets.map((pet) => (
              <div className="flex flex-col gap-5" key={pet.id}>
                <div className="flex flex-row flex-wrap gap-5">
                  <div className="min-w-max">
                    <Link
                      to={
                        params['*'] === 'pets'
                          ? `${location.pathname}/${pet.id}`
                          : `${location.pathname}/pets/${pet.id}`
                      }
                    >
                      <img
                        className="h-24 w-24 object-cover rounded-full drop-shadow-md"
                        alt={'pet-pic'}
                        src={defaultImg}
                      />
                    </Link>
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
              </div>
            ))
          : 'no pets!'}
      </div>
    </div>
  );
};

export default UserPetProfiles;
