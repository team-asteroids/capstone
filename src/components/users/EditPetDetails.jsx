import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import {
  fetchSinglePet,
  selectPets,
  fetchPetDetails,
} from '../../slices/petsSlice';

const EditPetDetails = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { user } = props;

  const { singlePet, petDetails } = useSelector(selectPets);

  let petId;

  if (params.petId) {
    petId = +params.petId;
  } else {
    petId = +params['*'].split('/')[1];
  }

  const [petInfo, setPetInfo] = useState({
    name: singlePet.name,
    age: singlePet.age,
    breed: singlePet.breed,
    size: singlePet.size,
  });

  const [petDetailsData, setPetDetailsData] = useState({
    about: petDetails.about,
    microchipped: petDetails.microchipped,
    housetrained: petDetails.housetrained,
    cratetrained: petDetails.cratetrained,
    spayedOrNeutered: petDetails.spayedOrNeutered,
    reactivity: petDetails.reactivity,
    friendlyWithDogs: petDetails.friendlyWithDogs,
    friendlyWithCats: petDetails.friendlyWithCats,
    friendlyWithChildren: petDetails.friendlyWithChildren,
    energyLevels: petDetails.energyLevels,
    feedingSchedule: petDetails.feedingSchedule,
    foodDetails: petDetails.foodDetails,
    walkSchedule: petDetails.walkSchedule,
    walkDuration: petDetails.walkDuration,
    walkDetails: petDetails.walkDetails,
    medications: petDetails.medications,
    medicationDetails: petDetails.medicationDetails,
    canBeLeftAlone: petDetails.canBeLeftAlone,
    canBeLeftAloneDetails: petDetails.canBeLeftAloneDetails,
    additionalDetails: petDetails.additionalDetails,
    vetInfo: petDetails.vetInfo,
  });

  useEffect(() => {
    if (petId) {
      dispatch(fetchSinglePet(petId));
      dispatch(fetchPetDetails(petId));
    }
  }, [petId]);

  useEffect(() => {
    if (singlePet && singlePet.id) {
      setPetInfo({
        name: singlePet.name,
        age: singlePet.age,
        breed: singlePet.breed,
        size: singlePet.size,
      });
    }
    if (petDetails && petDetails.id) {
      setPetDetailsData({
        about: petDetails.about,
        microchipped: petDetails.microchipped,
        housetrained: petDetails.housetrained,
        cratetrained: petDetails.cratetrained,
        spayedOrNeutered: petDetails.spayedOrNeutered,
        reactivity: petDetails.reactivity,
        friendlyWithDogs: petDetails.friendlyWithDogs,
        friendlyWithCats: petDetails.friendlyWithCats,
        friendlyWithChildren: petDetails.friendlyWithChildren,
        energyLevels: petDetails.energyLevels,
        feedingSchedule: petDetails.feedingSchedule,
        foodDetails: petDetails.foodDetails,
        walkSchedule: petDetails.walkSchedule,
        walkDuration: petDetails.walkDuration,
        walkDetails: petDetails.walkDetails,
        medications: petDetails.medications,
        medicationDetails: petDetails.medicationDetails,
        canBeLeftAlone: petDetails.canBeLeftAlone,
        canBeLeftAloneDetails: petDetails.canBeLeftAloneDetails,
        additionalDetails: petDetails.additionalDetails,
        vetInfo: petDetails.vetInfo,
      });
    }
  }, [petDetails.id, singlePet.id]);

  const goBack = () => {
    navigate(-1);
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
              <input
                type="text"
                className={validClass}
                id="name"
                name="name"
                value={petInfo.name}
                onChange={(evt) => {
                  // setIsInvalidPhone(false);
                  setPetInfo({ ...petInfo, name: evt.target.value });
                }}
              />
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
                  value={petInfo.age}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({ ...petInfo, age: evt.target.value });
                  }}
                />
              </div>
              <div className="w-1/3 flex flex-col pr-6">
                <label className={labelClass}>Breed</label>
                <select
                  className={validClass}
                  value={petInfo.breed}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({ ...petInfo, breed: evt.target.value });
                  }}
                >
                  {breedList.map((breed) => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/3 flex flex-col">
                <label className={labelClass}>Size</label>
                <select
                  id="size"
                  name="size"
                  className={validClass}
                  value={petInfo.size}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({ ...petInfo, size: evt.target.value });
                  }}
                >
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
                className={validClass}
                value={petDetails.about}
                onChange={(evt) => {
                  // setIsInvalidPhone(false);
                  setPetInfo({ ...petDetails, about: evt.target.value });
                }}
              ></textarea>
            </div>

            <div className="flex flex-wrap mb-3">
              <div className="w-1/4 flex flex-col pr-6">
                <label className={labelClass}>Microchipped</label>
                <select
                  name="housetrained"
                  className={validClass}
                  value={petDetails.microchipped}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      microchipped: evt.target.value,
                    });
                  }}
                >
                  <option>true</option>
                  <option>false</option>
                </select>
              </div>
              <div className="w-1/4 flex flex-col pr-6">
                <label className={labelClass}>Housetrained</label>
                <select
                  name="houstrained"
                  className={validClass}
                  value={petDetails.housetrained}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      housetrained: evt.target.value,
                    });
                  }}
                >
                  <option>true</option>
                  <option>false</option>
                </select>
              </div>
              <div className="w-1/4 flex flex-col pr-6">
                <label className={labelClass}>Cratetrained</label>
                <select
                  name="cratetrained"
                  className={validClass}
                  value={petDetails.cratetrained}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      cratetrained: evt.target.value,
                    });
                  }}
                >
                  <option>yes</option>
                  <option>no</option>
                  <option>n/a</option>
                </select>
              </div>
              <div className="w-1/4 flex flex-col">
                <label className={labelClass}>Spayed / Neutered</label>
                <select
                  name="fixed"
                  className={validClass}
                  value={petDetails.spayedOrNeutered}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      spayedOrNeutered: evt.target.value,
                    });
                  }}
                >
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
                  className={validClass}
                  value={petDetails.friendlyWithDogs}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      friendlyWithDogs: evt.target.value,
                    });
                  }}
                >
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
                  value={petDetails.friendlyWithCats}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      friendlyWithCats: evt.target.value,
                    });
                  }}
                >
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
                  value={petDetails.friendlyWithChildren}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      friendlyWithChildren: evt.target.value,
                    });
                  }}
                >
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
                <select
                  name="energy"
                  className={validClass}
                  value={petDetails.energyLevels}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      energyLevels: evt.target.value,
                    });
                  }}
                >
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
                  value={petDetails.canBeLeftAlone}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      canBeLeftAlone: evt.target.value,
                    });
                  }}
                >
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
                  value={petDetails.reactivity}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      reactivity: evt.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div className="w-1/2 flex flex-col mb-3">
                <label className={labelClass}>Left Alone Details</label>
                <textarea
                  rows={2}
                  type="text"
                  className={validClass}
                  value={petDetails.canBeLeftAloneDetails}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      canBeLeftAlone: evt.target.value,
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
                  value={petDetails.feedingSchedule}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      feedingSchedule: evt.target.value,
                    });
                  }}
                >
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
                  value={petDetails.walkSchedule}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      walkSchedule: evt.target.value,
                    });
                  }}
                >
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
                  value={petDetails.walkDuration}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      walkDuration: evt.target.value,
                    });
                  }}
                >
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
                  value={petDetails.walkDetails}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      walkDetails: evt.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div className="w-1/2 flex flex-col mb-3">
                <label className={labelClass}>Food Details</label>
                <textarea
                  rows={2}
                  type="text"
                  className={validClass}
                  value={petDetails.foodDetails}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      foodDetails: evt.target.value,
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
                value={petDetails.medications}
                onChange={(evt) => {
                  // setIsInvalidPhone(false);
                  setPetInfo({
                    ...petDetails,
                    medications: evt.target.value,
                  });
                }}
              >
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
                  value={petDetails.medicationDetails}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      medicationDetails: evt.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div className="w-1/2 flex flex-col mb-3">
                <label className={labelClass}>Vet Info</label>
                <textarea
                  rows={2}
                  type="text"
                  className={validClass}
                  value={petDetails.vetInfo}
                  onChange={(evt) => {
                    // setIsInvalidPhone(false);
                    setPetInfo({
                      ...petDetails,
                      vetInfo: evt.target.value,
                    });
                  }}
                ></textarea>
              </div>
            </div>
            <p> className="font-rubikmono pb-2"ADDITIONAL INFO</p>
            <div className="w-full flex flex-col mb-3">
              <label className={labelClass}>Anything Else</label>
              <textarea
                row={3}
                type="text"
                className={validClass}
                value={petDetails.additionalDetails}
                onChange={(evt) => {
                  // setIsInvalidPhone(false);
                  setPetInfo({
                    ...petDetails,
                    additionalDetails: evt.target.value,
                  });
                }}
              ></textarea>
            </div>
            <button>SAVE</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditPetDetails;
