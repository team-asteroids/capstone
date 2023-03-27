import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { fetchSinglePet, selectPets } from '../../slices/petsSlice';

const EditPetDetails = (props) => {
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
      <button className="text-left text-xs font-semibold" onClick={goBack}>
        BACK
      </button>
      <h2 className="font-rubikmono">{singlePet.name}</h2>
      <div className="flex flex-col gap-5 overflow-auto h-[calc(100vh_-_20rem)]">
        <section>
          <form>
            <p>ABOUT</p>
            <div className="w-full flex flex-col mb-3">
              <label>Name</label>
              <input type="text"></input>
            </div>

            <div className="flex flex-wrap mb-3">
              <div className="w-1/3 flex flex-col pr-6">
                <label>Age</label>
                <input type="text"></input>
              </div>
              <div className="w-1/3 flex flex-col pr-6">
                <label>Breed</label>
                <input type="text"></input>
              </div>
              <div className="w-1/3 flex flex-col">
                <label>Size</label>
                <input type="text"></input>
              </div>
            </div>

            <div className="w-full flex flex-col mb-3">
              <label>Bio</label>
              <textarea rows={3} type="text"></textarea>
            </div>

            <div className="flex flex-wrap mb-3">
              <div className="w-1/4 flex flex-col pr-6">
                <label>Microchipped</label>
                <input type="text"></input>
              </div>
              <div className="w-1/4 flex flex-col pr-6">
                <label>Housetrained</label>
                <input type="text"></input>
              </div>
              <div className="w-1/4 flex flex-col pr-6">
                <label>Cratetrained</label>
                <input type="text"></input>
              </div>
              <div className="w-1/4 flex flex-col">
                <label>Spayed / Neutered</label>
                <input type="text"></input>
              </div>
            </div>
            <p>BEHAVIOR</p>

            <div className="flex flex-wrap mb-3">
              <div className="w-1/3 flex flex-col pr-6">
                <label>Friendly with Dogs</label>
                <input type="text"></input>
              </div>
              <div className="w-1/3 flex flex-col pr-6">
                <label>Friendly with Cats</label>
                <input type="text"></input>
              </div>
              <div className="w-1/3 flex flex-col">
                <label>Friendly with Kids</label>
                <input type="text"></input>
              </div>
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/2 flex flex-col pr-6">
                <label>Engery Level</label>
                <input type="text"></input>
              </div>
              <div className="w-1/2 flex flex-col">
                <label>Max Time Left Alone</label>
                <input type="text"></input>
              </div>
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/2 flex flex-col mb-3 pr-6">
                <label>Reactivity</label>
                <textarea rows={2} type="text"></textarea>
              </div>
              <div className="w-1/2 flex flex-col mb-3">
                <label>Left Alone Details</label>
                <textarea rows={2} type="text"></textarea>
              </div>
            </div>
            <p>FOOD / EXERCISE</p>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/3 flex flex-col pr-6">
                <label>Feedings per Day</label>
                <input type="text"></input>
              </div>
              <div className="w-1/3 flex flex-col pr-6">
                <label>Walks per Day</label>
                <input type="text"></input>
              </div>
              <div className="w-1/3 flex flex-col">
                <label>Length of Walk</label>
                <input type="text"></input>
              </div>
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/2 flex flex-col mb-3 pr-6">
                <label>Walk Details</label>
                <textarea rows={2} type="text"></textarea>
              </div>
              <div className="w-1/2 flex flex-col mb-3">
                <label>Food Details</label>
                <textarea rows={2} type="text"></textarea>
              </div>
            </div>
            <p>MEDICATIONS & VET INFO</p>
            <div className="w-full flex flex-col mb-3">
              <label>Type of Medications</label>
              <input type="text"></input>
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/2 flex flex-col mb-3 pr-6">
                <label>Medication Details</label>
                <textarea rows={2} type="text"></textarea>
              </div>
              <div className="w-1/2 flex flex-col mb-3">
                <label>Vet Info</label>
                <textarea rows={2} type="text"></textarea>
              </div>
            </div>
            <p>ADDITIONAL INFO</p>
            <div className="w-full flex flex-col mb-3">
              <label>Anything Else</label>
              <textarea row={3} type="text"></textarea>
            </div>
            <button>SAVE</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditPetDetails;
