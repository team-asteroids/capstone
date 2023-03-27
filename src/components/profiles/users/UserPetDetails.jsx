import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { fetchSinglePet, selectPets } from '../../../slices/petsSlice';

const UserPetDetails = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { user } = props;

  const { singlePet } = useSelector(selectPets);

  let petId;

  if (params.petId) {
    petId = +params.petId;
  } else {
    petId = +params['*'].split('/')[1];
  }

  useEffect(() => {
    if (petId) {
      dispatch(fetchSinglePet(petId));
    }
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="font-rubik flex flex-col gap-5">
      <h2 className="font-rubikmono">{singlePet.name}</h2>
      <button className="text-left text-xs font-semibold" onClick={goBack}>
        BACK
      </button>

      {singlePet.pet_detail ? (
        <div className="flex flex-col gap-5 overflow-auto h-[calc(100vh_-_20rem)]">
          <div>
            <h2 className="font-semibold">ABOUT ME:</h2>
            <p>{singlePet.pet_detail.about}</p>
            <p>{singlePet.breed}</p>
            <p>{singlePet.age}</p>
            <p>{singlePet.size}</p>
            <p>{singlePet.pet_detail.microchipped.toString()}</p>
            <p>{singlePet.pet_detail.housetrained.toString()}</p>
            <p>{singlePet.pet_detail.cratetrained}</p>
            <p>{singlePet.pet_detail.spayedOrNeutered.toString()}</p>
            <p>{singlePet.pet_detail.reactivity}</p>
          </div>
          <div>
            <h2 className="font-semibold">TEMPERMENT:</h2>
            <p>{singlePet.pet_detail.friendlyWithDogs}</p>
            <p>{singlePet.pet_detail.friendlyWithCats}</p>
            <p>{singlePet.pet_detail.friendlyWithChildren}</p>
          </div>
          <div>
            <h2 className="font-semibold">FOOD:</h2>
            <p>{singlePet.pet_detail.feedingSchedule}</p>
            <p>{singlePet.pet_detail.foodDetails}</p>
          </div>
          <div>
            <h2 className="font-semibold">EXERCISE:</h2>
            <p>{singlePet.pet_detail.energyLevels}</p>
            <p>{singlePet.pet_detail.walkSchedule}</p>
            <p>{singlePet.pet_detail.walkDuration}</p>
            <p>{singlePet.pet_detail.walkDetails}</p>
          </div>
          <div>
            <h2 className="font-semibold">MEDICATIONS:</h2>
            <p>{singlePet.pet_detail.medications}</p>
            <p>{singlePet.pet_detail.medicationDetails}</p>
          </div>
          <div>
            <h2 className="font-semibold">VET INFO:</h2>
            <p>{singlePet.pet_detail.vetInfo}</p>
          </div>
          <div>
            <h2 className="font-semibold">ADDITIONAL NOTES:</h2>
            <p>{singlePet.pet_detail.additionalDetails}</p>
          </div>
        </div>
      ) : (
        'loading'
      )}
    </div>
  );
};

export default UserPetDetails;
