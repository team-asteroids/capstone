import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { selectPets, addPet, addPetDetails } from '../../slices/petsSlice';
import { selectAuth } from '../../slices/authSlice';

const AddNewPet = (props) => {
  const { user } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const { userAuth, token } = useSelector(selectAuth);

  const { singlePet, petDetails } = useSelector(selectPets);

  const [petInfo, setPetInfo] = useState({
    name: '',
    age: '',
    sex: '',
    breed: '',
    size: '',
    imageSrc: '',
  });

  const [petDetailsData, setPetDetailsData] = useState({
    about: '',
    microchipped: '',
    housetrained: '',
    cratetrained: '',
    spayedOrNeutered: '',
    reactivity: '',
    friendlyWithDogs: '',
    friendlyWithCats: '',
    friendlyWithChildren: '',
    energyLevels: '',
    feedingSchedule: '',
    foodDetails: '',
    walkSchedule: '',
    walkDuration: '',
    walkDetails: '',
    medications: '',
    medicationDetails: '',
    canBeLeftAlone: '',
    canBeLeftAloneDetails: '',
    additionalDetails: '',
    vetInfo: '',
  });

  const goBack = () => {
    navigate(-1);
  };

  const submitAddPet = async (evt) => {
    evt.preventDefault();

    const id = user.id;

    if (userAuth && userAuth.id) {
      const res1 = await dispatch(addPet({ id, token, petInfo }));

      const petId = res1.payload.id;
      const detailsRes = await dispatch(
        addPetDetails({ id, token, petId, petDetailsData })
      );
      if (detailsRes.type === 'addPetDetails/fulfilled') {
        navigate(`/account/pets/${petId}`);
      }
    }
  };

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const invalidClass =
    'appearance-none block w-full border border-red-500 bg-white-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const breedList = [
    'Mixed',
    'French Bulldogs',
    'Labrador Retrievers',
    'Golden Retrievers',
    'German Shepherd Dogs',
    'Poodles',
    'Bulldogs',
    'Rottweilers',
    'Beagles',
    'Dachshunds',
    'German Shorthaired Pointers',
    'Pembroke Welsh Corgis',
    'Australian Shepherds',
    'Yorkshire Terriers',
    'Cavalier King Charles Spaniels',
    'Doberman Pinschers',
    'Boxers',
    'Miniature Schnauzers',
    'Cane Corsi',
    'Great Danes',
    'Shih Tzu',
    'Siberian Huskies',
    'Bernese Mountain Dogs',
    'Pomeranians',
    'Boston Terriers',
    'Havanese',
    'English Springer Spaniels',
    'Shetland Sheepdogs',
    'Brittanys',
    'Cocker Spaniels',
    'Border Collies',
    'Miniature American Shepherds',
    'Belgian Malinois',
    'Vizslas',
    'Chihuahuas',
    'Pugs',
    'Basset Hounds',
    'Mastiffs',
    'Maltese',
    'Collies',
    'English Cocker Spaniels',
    'Rhodesian Ridgebacks',
    'Newfoundlands',
    'Shiba Inu',
    'Weimaraners',
    'West Highland White Terriers',
    'Portuguese Water Dogs',
    'Bichons Frises',
    'Australian Cattle Dogs',
    'Dalmatians',
    'Bloodhounds',
    'Papillons',
    'Chesapeake Bay Retrievers',
    'Samoyeds',
    'Whippets',
    'Akitas',
    'St. Bernards',
    'Wirehaired Pointing Griffons',
    'Giant Schnauzers',
    'German Wirehaired Pointers',
    'Scottish Terriers',
    'Bullmastiffs',
    'Cardigan Welsh Corgis',
    'Italian Greyhounds',
    'Bull Terriers',
    'Airedale Terriers',
    'Soft Coated Wheaten Terriers',
    'Alaskan Malamutes',
    'Chinese Shar-Pei',
    'Great Pyrenees',
    'Cairn Terriers',
    'Irish Setters',
    'Miniature Pinschers',
    'Russell Terriers',
    'Old English Sheepdogs',
    'Staffordshire Bull Terriers',
    'Lagotti Romagnoli',
    'Biewer Terriers',
    'Dogues de Bordeaux',
    'Anatolian Shepherd Dogs',
    'Chinese Cresteds',
    'Nova Scotia Duck Tolling   Retrievers',
    'Boykin Spaniels',
    'Greater Swiss Mountain Dogs',
    'Cotons de Tulear',
    'Rat Terriers',
    'Lhasa Apsos',
    'American Staffordshire Terriers',
    'Dogo Argentinos',
    'Irish Wolfhounds',
    'Keeshonden',
    'Basenjis',
    'Chow Chows',
    'English Setters',
    'Standard Schnauzers',
    'Border Terriers',
    'Pekingese',
    'Brussels Griffons',
    'Bouviers des Flandres',
    'Gordon Setters',
    'Norwegian Elkhounds',
    'Borzois',
    'Wire Fox Terriers',
    'Flat-Coated Retrievers',
    'Belgian Tervuren',
    'Japanese Chin',
    'Tibetan Terriers',
    'Pointers',
    'Toy Fox Terriers',
    'Norwich Terriers',
    'Miniature Bull Terriers',
    'Beaucerons',
    'Spinoni Italiani',
    'Welsh Terriers',
    'Leonbergers',
    'Schipperke',
    'Xoloitzcuintlis',
    'Afghan Hounds',
    'Boerboels',
    'Neapolitan Mastiffs',
    'American Hairless Terriers',
    'Parson Russell Terriers',
    'Silky Terriers',
    'American Eskimo Dogs',
    'Bearded Collies',
    'Belgian Sheepdogs',
    'Welsh Springer Spaniels',
    'Tibetan Spaniels',
    'Black Russian Terriers',
    'Greyhounds',
    'Manchester Terriers',
    'Irish Terriers',
    'Icelandic Sheepdogs',
    'Bluetick Coonhounds',
    'English Toy Spaniels',
    'Salukis',
    'Australian Terriers',
    'Tibetan Mastiffs',
    'Norfolk Terriers',
    'Clumber Spaniels',
    'Pumik',
    'Smooth Fox Terriers',
    'Wirehaired Vizslas',
    'Lakeland Terriers',
    'Russian Toys',
    'German Pinschers',
    'Kerry Blue Terriers',
    'Barbets',
    'Affenpinschers',
    'Black and Tan Coonhounds',
    'Mudis',
    'Briards',
    'Bedlington Terriers',
    'Berger Picards',
    'Petits Bassets Griffons Vendéens',
    'Scottish Deerhounds',
    'Curly-Coated Retrievers',
    'Field Spaniels',
    'Redbone Coonhounds',
    'Treeing Walker Coonhounds',
    'Swedish Vallhunds',
    'Pulik',
    'Entlebucher Mountain Dogs',
    'Spanish Water Dogs',
    'Sealyham Terriers',
    'Löwchen',
    'American Water Spaniels',
    'Finnish Lapphunds',
    'Irish Red and White Setters',
    'Glen of Imaal Terriers',
    'Nederlandse Kooikerhondjes',
    'Portuguese Podengo Pequenos',
    'Ibizan Hounds',
    'Plott Hounds',
    'Pharaoh Hounds',
    'Komondorok',
    'Otterhounds',
    'Kuvaszok',
    'Norwegian Buhunds',
    'Bergamasco Sheepdogs',
    'Chinooks',
    'Polish Lowland Sheepdogs',
    'American English Coonhounds',
    'Irish Water Spaniels',
    'Cirnechi dell’Etna',
    'Grand Basset Griffon Vendéens',
    'Dandie Dinmont Terriers',
    'Canaan Dogs',
    'Finnish Spitz',
    'Skye Terriers',
    'Pyrenean Shepherds',
    'Cesky Terriers',
    'Sussex Spaniels',
    'Harriers',
    'Azawakhs',
    'Belgian Laekenois',
    'American Foxhounds',
    'Sloughis',
    'Norwegian Lundehunds',
    'English Foxhounds',
  ];

  return (
    <div className="font-rubik flex flex-col gap-5">
      <button
        className="text-left text-xs max-w-fit font-semibold hover:text-bold-purple ease-in-out duration-100"
        onClick={goBack}
      >
        BACK
      </button>
      <h2 className="font-rubikmono">Add New Pet</h2>
      <div className="flex flex-col gap-5 overflow-auto h-[calc(100vh_-_20rem)]">
        <section>
          <form onSubmit={submitAddPet}>
            <p className="font-rubikmono pb-2">ABOUT</p>

            <div className="flex flex-wrap mb-3">
              <div className="w-1/2 flex flex-col pr-6">
                <label className={labelClass}>Name</label>
                <input
                  type="text"
                  className={validClass}
                  id="name"
                  name="name"
                  value={petInfo.name}
                  required
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({ ...petInfo, name: evt.target.value });
                  }}
                />
              </div>
              <div className="w-1/2 flex flex-col">
                <label className={labelClass}>Breed</label>
                <select
                  className={validClass}
                  required
                  value={petInfo.breed}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({ ...petInfo, breed: evt.target.value });
                  }}
                >
                  <option disabled></option>
                  {breedList.map((breed) => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap mb-3">
              <div className="w-1/3 flex flex-col pr-6">
                <label className={labelClass}>Age</label>
                <input
                  type="number"
                  min={0}
                  max={30}
                  step={1}
                  required
                  className={validClass}
                  value={petInfo.age}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({ ...petInfo, age: evt.target.value });
                  }}
                />
              </div>
              <div className="w-1/3 flex flex-col pr-6">
                <label className={labelClass}>Gender</label>
                <select
                  className={validClass}
                  required
                  value={petInfo.sex}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({ ...petInfo, sex: evt.target.value });
                  }}
                >
                  <option disabled></option>
                  <option>male</option>
                  <option>female</option>
                </select>
              </div>
              <div className="w-1/3 flex flex-col">
                <label className={labelClass}>Size</label>
                <select
                  id="size"
                  required
                  name="size"
                  className={validClass}
                  value={petInfo.size}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({ ...petInfo, size: evt.target.value });
                  }}
                >
                  <option disabled></option>
                  <option>small</option>
                  <option>medium</option>
                  <option>large</option>
                  <option>extralarge</option>
                </select>
              </div>
            </div>

            <div className="w-full flex flex-col mb-3">
              <label className={labelClass}>Bio</label>
              <textarea
                rows={3}
                type="text"
                required
                className={validClass}
                value={petDetailsData.about}
                onChange={(evt) => {
                  // setIsInvalidPhone(false);
                  setPetDetailsData({
                    ...petDetailsData,
                    about: evt.target.value,
                  });
                }}
              ></textarea>
            </div>

            <div className="w-full flex flex-col mb-3">
              <label className={labelClass}>Image</label>
              <input
                type="url"
                required
                className={validClass}
                value={petInfo.imageSrc}
                onChange={(evt) => {
                  // setIsInvalidPhone(false);
                  setPetInfo({
                    ...petInfo,
                    imageSrc: evt.target.value,
                  });
                }}
              />
            </div>

            <div className="flex flex-wrap mb-3">
              <div className="w-1/4 flex flex-col pr-6">
                <label className={labelClass}>Microchipped</label>
                <select
                  name="microchipped"
                  required
                  className={validClass}
                  value={petDetailsData.microchipped}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      microchipped: evt.target.value,
                    });
                  }}
                >
                  <option disabled></option>
                  <option>true</option>
                  <option>false</option>
                </select>
              </div>
              <div className="w-1/4 flex flex-col pr-6">
                <label className={labelClass}>Housetrained</label>
                <select
                  name="houstrained"
                  required
                  className={validClass}
                  value={petDetailsData.housetrained}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      housetrained: evt.target.value,
                    });
                  }}
                >
                  <option disabled></option>
                  <option>true</option>
                  <option>false</option>
                </select>
              </div>
              <div className="w-1/4 flex flex-col pr-6">
                <label className={labelClass}>Cratetrained</label>
                <select
                  name="cratetrained"
                  className={validClass}
                  required
                  value={petDetailsData.cratetrained}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      cratetrained: evt.target.value,
                    });
                  }}
                >
                  <option disabled></option>
                  <option>yes</option>
                  <option>no</option>
                  <option>n/a</option>
                </select>
              </div>
              <div className="w-1/4 flex flex-col">
                <label className={labelClass}>Spayed / Neutered</label>
                <select
                  name="fixed"
                  required
                  className={validClass}
                  value={petDetailsData.spayedOrNeutered}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      spayedOrNeutered: evt.target.value,
                    });
                  }}
                >
                  <option disabled></option>
                  <option>true</option>
                  <option>false</option>
                </select>
              </div>
            </div>

            <p className="font-rubikmono pb-2">BEHAVIOR</p>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/3 flex flex-col pr-6">
                <label className={labelClass}>Friendly with Dogs</label>
                <select
                  name="otherDogs"
                  required
                  className={validClass}
                  value={petDetailsData.friendlyWithDogs}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      friendlyWithDogs: evt.target.value,
                    });
                  }}
                >
                  <option disabled></option>
                  <option>yes</option>
                  <option>no</option>
                  <option>depends</option>
                  <option>unsure</option>
                </select>
              </div>
              <div className="w-1/3 flex flex-col pr-6">
                <label className={labelClass}>Friendly with Cats</label>
                <select
                  name="cats"
                  className={validClass}
                  required
                  value={petDetailsData.friendlyWithCats}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      friendlyWithCats: evt.target.value,
                    });
                  }}
                >
                  <option disabled></option>
                  <option>yes</option>
                  <option>no</option>
                  <option>depends</option>
                  <option>unsure</option>
                </select>
              </div>
              <div className="w-1/3 flex flex-col">
                <label className={labelClass}>Friendly with Kids</label>
                <select
                  name="kids"
                  className={validClass}
                  value={petDetailsData.friendlyWithChildren}
                  required
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      friendlyWithChildren: evt.target.value,
                    });
                  }}
                >
                  <option disabled></option>
                  <option>yes</option>
                  <option>no</option>
                  <option>depends</option>
                  <option>unsure</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/2 flex flex-col pr-6">
                <label className={labelClass}>Energy Level</label>
                <select
                  name="energy"
                  className={validClass}
                  required
                  value={petDetailsData.energyLevels}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      energyLevels: evt.target.value,
                    });
                  }}
                >
                  <option disabled></option>
                  <option>low</option>
                  <option>moderate</option>
                  <option>high</option>
                </select>
              </div>
              <div className="w-1/2 flex flex-col">
                <label className={labelClass}>Max Time Left Alone</label>
                <select
                  name="alone"
                  className={validClass}
                  required
                  value={petDetailsData.canBeLeftAlone}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      canBeLeftAlone: evt.target.value,
                    });
                  }}
                >
                  <option disabled></option>
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
                  rows={3}
                  type="text"
                  className={validClass}
                  value={petDetailsData.reactivity}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      reactivity: evt.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div className="w-1/2 flex flex-col mb-3">
                <label className={labelClass}>Left Alone Details</label>
                <textarea
                  rows={3}
                  type="text"
                  className={validClass}
                  required
                  value={petDetailsData.canBeLeftAloneDetails}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      canBeLeftAloneDetails: evt.target.value,
                    });
                  }}
                ></textarea>
              </div>
            </div>
            <p className="font-rubikmono pb-2">FOOD / EXERCISE</p>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/3 flex flex-col pr-6">
                <label className={labelClass}>Feedings per Day</label>
                <select
                  name="feeding"
                  className={validClass}
                  value={petDetailsData.feedingSchedule}
                  required
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      feedingSchedule: evt.target.value,
                    });
                  }}
                >
                  <option disabled></option>
                  <option>morning</option>
                  <option>twice a day</option>
                  <option>custom</option>
                </select>
              </div>
              <div className="w-1/3 flex flex-col pr-6">
                <label className={labelClass}>Walks per Day</label>
                <select
                  name="walks"
                  className={validClass}
                  required
                  value={petDetailsData.walkSchedule}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      walkSchedule: evt.target.value,
                    });
                  }}
                >
                  <option disabled></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>
              <div className="w-1/3 flex flex-col">
                <label className={labelClass}>Walk Duration</label>
                <select
                  name="walkDuration"
                  className={validClass}
                  value={petDetailsData.walkDuration}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      walkDuration: evt.target.value,
                    });
                  }}
                >
                  <option disabled></option>
                  <option>15</option>
                  <option>30</option>
                  <option>60</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="w-1/2 flex flex-col mb-3 pr-6">
                <label className={labelClass}>Food Details</label>
                <textarea
                  rows={3}
                  type="text"
                  className={validClass}
                  value={petDetailsData.foodDetails}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      foodDetails: evt.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div className="w-1/2 flex flex-col mb-3">
                <label className={labelClass}>Walk Details</label>
                <textarea
                  rows={3}
                  type="text"
                  className={validClass}
                  value={petDetailsData.walkDetails}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      walkDetails: evt.target.value,
                    });
                  }}
                ></textarea>
              </div>
            </div>
            <p className="font-rubikmono pb-2">MEDICATIONS & VET INFO</p>
            <div className="w-full flex flex-col mb-3">
              <label className={labelClass}>Type of Medications</label>
              <select
                name="meds"
                className={validClass}
                required
                value={petDetailsData.medications}
                onChange={(evt) => {
                  // setIsInvalidPhone(false);
                  setPetDetailsData({
                    ...petDetailsData,
                    medications: evt.target.value,
                  });
                }}
              >
                <option disabled></option>
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
                  rows={3}
                  type="text"
                  className={validClass}
                  value={petDetailsData.medicationDetails}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      medicationDetails: evt.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div className="w-1/2 flex flex-col mb-3">
                <label className={labelClass}>Vet Info</label>
                <textarea
                  rows={3}
                  type="text"
                  className={validClass}
                  value={petDetailsData.vetInfo}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetDetailsData({
                      ...petDetailsData,
                      vetInfo: evt.target.value,
                    });
                  }}
                ></textarea>
              </div>
            </div>
            <p className="font-rubikmono pb-2">ADDITIONAL INFO</p>
            <div className="w-full flex flex-col mb-3">
              <label className={labelClass}>Anything Else</label>
              <textarea
                rows={4}
                type="text"
                className={validClass}
                value={petDetailsData.additionalDetails}
                onChange={(evt) => {
                  // setIsInvalidPhone(false);
                  setPetDetailsData({
                    ...petDetailsData,
                    additionalDetails: evt.target.value,
                  });
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="ease-in duration-300 font-rubikmono hover:bg-bold-purple w-full bg-bold-blue text-white py-3 rounded-xl mx-auto block text-xl hover:transition-all mt-6"
            >
              SUBMIT
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddNewPet;
