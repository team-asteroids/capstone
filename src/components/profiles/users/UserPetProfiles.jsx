import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPets,
  fetchAllPets,
  resetPetStatus,
  deletePet,
} from '../../../slices/petsSlice';
import defaultImg from '../../../img/default-dog.jpg';
import { selectAuth } from '../../../slices/authSlice';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';

const UserPetProfiles = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { userAuth, token } = useSelector(selectAuth);
  const { user } = props;

  const { allPets } = useSelector(selectPets);

  useEffect(() => {
    if (user && user.id) {
      const id = user.id;
      dispatch(fetchAllPets(id));
    }
    return () => {
      dispatch(resetPetStatus());
    };
  }, [user, userAuth]);

  const submitDeletePet = async (petId) => {
    console.log('delete attempted');
    const id = user.id;
    const res = await dispatch(deletePet({ id, token, petId }));
    if (res.type === 'deletePet/fulfilled') navigate('/account/pets');
  };

  return (
    <div>
      <h2 className="font-rubikmono pb-5">PET PROFILES</h2>
      <div className="flex flex-row flex-wrap gap-8">
        {allPets && allPets.length
          ? allPets.map((pet) => (
              <div className="flex flex-col gap-5" key={pet.id}>
                <div className="flex flex-row flex-wrap items-center gap-5">
                  <div className="min-w-max">
                    <Link
                      to={
                        params['*'] === 'pets'
                          ? `${location.pathname}/${pet.id}`
                          : `${location.pathname}/pets/${pet.id}`
                      }
                    >
                      <img
                        className="h-28 w-28 object-cover rounded-full drop-shadow-md hover:opacity-50 ease-in-out duration-500"
                        alt={'pet-pic'}
                        src={pet.imageSrc || defaultImg}
                      />
                    </Link>
                  </div>
                  <div>
                    <p className="text-xs font-rubikmono">{pet.name}</p>
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
