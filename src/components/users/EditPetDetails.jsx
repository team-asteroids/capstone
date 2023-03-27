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

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const invalidClass =
    'appearance-none block w-full border border-red-500 bg-white-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';
  const breedList = ['a', 'b', 'c'];

  return (
    <div className="font-rubik flex flex-col gap-5">
      <button className="text-left text-xs font-semibold" onClick={goBack}>
        BACK
      </button>
      <h2 className="font-rubikmono">{singlePet.name}</h2>
      <div className="flex flex-col gap-5 overflow-auto h-[calc(100vh_-_20rem)]">
        <section>
          <form>
            <p className="font-rubikmono pb-2">ABOUT</p>
            <div className="w-full flex flex-col mb-3">
              <label className={labelClass}>Name</label>
              <input type="text" className={validClass}></input>
            </div>

            <div className="flex flex-wrap mb-3">
              <div className="w-1/3 flex flex-col pr-6">
                <label className={labelClass}>Age</label>
                <input
                  type="number"
                  min={0}
                  max={30}
                  step={1}
                  className={validClass}
                ></input>
              </div>
              <div className="w-1/3 flex flex-col pr-6">
                <label className={labelClass}>Breed</label>
                <select type="text" className={validClass}>
                  {breedList.map((breed) => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/3 flex flex-col">
                <label className={labelClass}>Size</label>
                <select id="bred" name="breed" className={validClass}>
                  <option>small</option>
                  <option>medium</option>
                  <option>large</option>
                  <option>extralarge</option>
                </select>
              </div>
            </div>

            <div className="w-full flex flex-col mb-3">
              <label className={labelClass}>Bio</label>
              <textarea rows={3} type="text" className={validClass}></textarea>
            </div>

            <div className="flex flex-wrap mb-3">
              <div className="w-1/4 flex flex-col pr-6">
                <label className={labelClass}>Microchipped</label>
                <select name="housetrained" className={validClass}>
                  <option>true</option>
                  <option>false</option>
                </select>
              </div>
              <div className="w-1/4 flex flex-col pr-6">
                <label className={labelClass}>Housetrained</label>
                <select name="houstrained" className={validClass}>
                  <option>true</option>
                  <option>false</option>
                </select>
              </div>
              <div className="w-1/4 flex flex-col pr-6">
                <label className={labelClass}>Cratetrained</label>
                <select name="cratetrained" className={validClass}>
                  <option>yes</option>
                  <option>no</option>
                  <option>n/a</option>
                </select>
              </div>
              <div className="w-1/4 flex flex-col">
                <label className={labelClass}>Spayed / Neutered</label>
                <select name="fixed" className={validClass}>
                  <option>true</option>
                  <option>false</option>
                </select>
              </div>
            </div>

            <p className="font-rubikmono pb-2">BEHAVIOR</p>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/3 flex flex-col pr-6">
                <label className={labelClass}>Friendly with Dogs</label>
                <select name="otherDogs" className={validClass}>
                  <option>yes</option>
                  <option>no</option>
                  <option>depends</option>
                  <option>unsure</option>
                </select>
              </div>
              <div className="w-1/3 flex flex-col pr-6">
                <label className={labelClass}>Friendly with Cats</label>
                <select name="cats" className={validClass}>
                  <option>yes</option>
                  <option>no</option>
                  <option>depends</option>
                  <option>unsure</option>
                </select>
              </div>
              <div className="w-1/3 flex flex-col">
                <label className={labelClass}>Friendly with Kids</label>
                <select name="kids" className={validClass}>
                  <option>yes</option>
                  <option>no</option>
                  <option>depends</option>
                  <option>unsure</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/2 flex flex-col pr-6">
                <label className={labelClass}>Engery Level</label>
                <select name="energy" className={validClass}>
                  <option>low</option>
                  <option>moderate</option>
                  <option>high</option>
                </select>
              </div>
              <div className="w-1/2 flex flex-col">
                <label className={labelClass}>Max Time Left Alone</label>
                <select name="alone" className={validClass}>
                  <option>{'<1 hour'}</option>
                  <option>1-4 hours</option>
                  <option>custom</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/2 flex flex-col mb-3 pr-6">
                <label className={labelClass}>Reactivity</label>
                <textarea
                  rows={2}
                  type="text"
                  className={validClass}
                ></textarea>
              </div>
              <div className="w-1/2 flex flex-col mb-3">
                <label className={labelClass}>Left Alone Details</label>
                <textarea
                  rows={2}
                  type="text"
                  className={validClass}
                ></textarea>
              </div>
            </div>
            <p className="font-rubikmono pb-2">FOOD / EXERCISE</p>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/3 flex flex-col pr-6">
                <label className={labelClass}>Feedings per Day</label>
                <select name="feeding" className={validClass}>
                  <option>morning</option>
                  <option>twice a day</option>
                  <option>custom</option>
                </select>
              </div>
              <div className="w-1/3 flex flex-col pr-6">
                <label className={labelClass}>Walks per Day</label>
                <select name="walks" className={validClass}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>
              <div className="w-1/3 flex flex-col">
                <label className={labelClass}>Length of Walk</label>
                <select name="walkLength" className={validClass}>
                  <option>15</option>
                  <option>30</option>
                  <option>60</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/2 flex flex-col mb-3 pr-6">
                <label className={labelClass}>Walk Details</label>
                <textarea
                  rows={2}
                  type="text"
                  className={validClass}
                ></textarea>
              </div>
              <div className="w-1/2 flex flex-col mb-3">
                <label className={labelClass}>Food Details</label>
                <textarea
                  rows={2}
                  type="text"
                  className={validClass}
                ></textarea>
              </div>
            </div>
            <p className="font-rubikmono pb-2">MEDICATIONS & VET INFO</p>
            <div className="w-full flex flex-col mb-3">
              <label className={labelClass}>Type of Medications</label>
              <select name="meds" className={validClass}>
                <option>pill</option>
                <option>topical</option>
                <option>injection</option>
                <option>n/a</option>
              </select>
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/2 flex flex-col mb-3 pr-6">
                <label className={labelClass}>Medication Details</label>
                <textarea
                  rows={2}
                  type="text"
                  className={validClass}
                ></textarea>
              </div>
              <div className="w-1/2 flex flex-col mb-3">
                <label className={labelClass}>Vet Info</label>
                <textarea
                  rows={2}
                  type="text"
                  className={validClass}
                ></textarea>
              </div>
            </div>
            <p> className="font-rubikmono pb-2"ADDITIONAL INFO</p>
            <div className="w-full flex flex-col mb-3">
              <label className={labelClass}>Anything Else</label>
              <textarea row={3} type="text" className={validClass}></textarea>
            </div>
            <button>SAVE</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditPetDetails;
