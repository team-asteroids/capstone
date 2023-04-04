import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
  attemptTokenLogin,
  getAccessData,
  selectAuth,
  updateAccessData,
} from '../../slices/authSlice';
import {
  addPetsToBooking,
  resetBookingStatus,
  updateBooking,
} from '../../slices/bookingsSlice';
import { fetchAllPets, selectPets } from '../../slices/petsSlice';

const BookingRequestConfirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookingId } = useParams();

  const { userAuth, token, accessData } = useSelector(selectAuth);
  // const { newBooking, status } = useSelector(selectBookings);
  const { allPets } = useSelector(selectPets);

  const [petIds, setPetIds] = useState([]);

  const [isInvalid, setIsInvalid] = useState(false);
  const [isInvalidPetIds, setIsInvalidPetIds] = useState(false);
  const [isInvalidPhone, setIsInvalidPhone] = useState(false);
  const [isInvalidAddress1, setIsInvalidAddress1] = useState(false);
  const [isInvalidCity, setIsInvalidCity] = useState(false);
  const [isInvalidZip, setIsInvalidZip] = useState(false);
  const [isInvalidEmergencyContactName, setIsInvalidEmergencyContactName] =
    useState(false);
  const [isInvalidEmergencyContactPhone, setIsInvalidEmergencyContactPhone] =
    useState(false);

  const [formData, setFormData] = useState({
    phone: accessData.phone,
    address1: accessData.address1,
    address2: accessData.address2,
    city: accessData.city,
    state: accessData.state,
    zip: accessData.zip,
    emergencyContactName: accessData.emergencyContactName,
    emergencyContactPhone: accessData.emergencyContactPhone,
    additionalNotes: accessData.additionalNotes,
  });

  // const bookingId = newBooking.id;

  const states = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Minor Outlying Islands',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'U.S. Virgin Islands',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  const toggleClass =
    "checked w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pale-blue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-bold-blue";

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const invalidClass =
    'appearance-none block w-full border border-red-500 bg-white-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const labelClass = 'text-xs font-rubikmono';

  const buttonClass =
    'ease-in duration-300 font-rubikmono hover:bg-bold-purple w-full bg-bold-blue text-white py-3 rounded-xl mx-auto block text-xl hover:transition-all mt-3';

  const disabledButtonClass =
    'font-rubikmono bg-bold-blue disabled:opacity-25 w-full text-white py-3 rounded-xl mx-auto block text-xl mt-3';

  useEffect(() => {
    if (userAuth && userAuth.id) {
      const id = userAuth.id;
      dispatch(fetchAllPets(id));
      dispatch(getAccessData(id));
    }
  }, [userAuth]);

  useEffect(() => {
    dispatch(attemptTokenLogin());
    if (accessData && accessData.id) {
      setFormData({
        phone: accessData.phone,
        address1: accessData.address1,
        address2: accessData.address2,
        city: accessData.city,
        state: accessData.state,
        zip: accessData.zip,
        emergencyContactName: accessData.emergencyContactName,
        emergencyContactPhone: accessData.emergencyContactPhone,
        additionalNotes: accessData.additionalNotes,
      });
    }
  }, [userAuth, accessData]);

  const togglePet = (evt) => {
    if (petIds.includes(+evt.target.value)) {
      const idx = petIds.indexOf(+evt.target.value);
      setPetIds([...petIds.slice(0, idx), ...petIds.slice(idx + 1)]);
      if (setPetIds.length < 1) setIsInvalidPetIds(true);
    } else {
      setPetIds([...petIds, +evt.target.value]);
      setIsInvalidPetIds(false);
    }
  };

  const validateZip = (zip) => {
    const res = /^\d{5}?$/.test(zip);
    return res;
  };

  const validatePhone = (phone) => {
    const res = /^\d{10}?$/.test(phone);
    return res;
  };

  const checkFormValidation = () => {
    if (petIds.length < 1) {
      setIsInvalidPetIds(true);
    }

    if (formData.phone === '') {
      setIsInvalidPhone(true);
      // setIsInvalid(true);
    }

    if (!validatePhone(formData.phone)) {
      setIsInvalidPhone(true);
      // setIsInvalid(true);
    }

    if (formData.address1 === '') {
      setIsInvalidAddress1(true);
      // setIsInvalid(true);
    }

    if (formData.city === '') {
      setIsInvalidCity(true);
      // setIsInvalid(true);
    }

    if (formData.zip === '') {
      setIsInvalidZip(true);
      // setIsInvalid(true);
    }

    if (!validateZip(formData.zip)) {
      setIsInvalidZip(true);
      // setIsInvalid(true);
    }

    if (formData.emergencyContactName === '') {
      setIsInvalidEmergencyContactName(true);
      // setIsInvalid(true);
    }

    if (formData.emergencyContactPhone === '') {
      setIsInvalidEmergencyContactPhone(true);
      // setIsInvalid(true);
    }

    if (!validatePhone(formData.emergencyContactPhone)) {
      setIsInvalidEmergencyContactPhone(true);
    }

    if (
      !isInvalidPetIds &&
      !isInvalidPhone &&
      !isInvalidAddress1 &&
      !isInvalidAddress1 &&
      !isInvalidCity &&
      !isInvalidZip &&
      !isInvalidEmergencyContactName &&
      !isInvalidEmergencyContactPhone
    )
      setIsInvalid(false);
  };

  const confirmBooking = async (evt) => {
    evt.preventDefault();
    await checkFormValidation();
    const id = userAuth.id;
    if (!isInvalid && !isInvalidPetIds) {
      const res = await dispatch(updateAccessData({ id, token, formData }));
      const res2 = await dispatch(
        addPetsToBooking({ id, token, bookingId, petIds })
      );
      if (
        res.type === 'updateAccessData/fulfilled' &&
        res2.type === 'addPets/fulfilled'
      ) {
        dispatch(resetBookingStatus());
        navigate(`/bookings/${bookingId}/success`);
      }
    }
  };

  const cancelBooking = async () => {
    const status = 'withdrawn';
    const id = userAuth.id;
    const res = await dispatch(updateBooking({ id, status, token, bookingId }));
    if (res.type === 'updateBooking/fulfilled') {
      navigate('/account/bookings');
    }
  };

  return (
    <div className="bg-[url('img/bulldog-bg.jpg')] h-[calc(100vh_-_5rem)] bg-center w-screen bg-no-repeat bg-cover">
      <div className="flex flex-row ml-20">
        <div className="w-1/2"></div>
        <div className="w-1/2 flex flex-col px-10 mt-24 h-[calc(100vh_-_12rem)] overflow-auto">
          <div className="text-center mb-5">
            <h2 className="font-rubikmono text-2xl">One more step!</h2>
            <p className="">
              Please provide additional information about your booking
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="px-5">
              <div className="flex flex-row gap-5">
                <p className="pb-3 font-rubikmono">Add Pets:</p>
                <p
                  className={
                    isInvalidPetIds ? 'font-semibold text-red-600' : 'collapse'
                  }
                >
                  Add pets!
                </p>
              </div>

              <div className="flex flex-row flex-wrap gap-5">
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
            </div>

            <div>
              <p className="pb-3 px-5 font-rubikmono">
                Confirm Access Details:
              </p>
              <section className="">
                <form className="text-left" onSubmit={confirmBooking}>
                  <div className="flex flex-wrap px-3 mx-3 mb-3">
                    <div className="w-full flex flex-col">
                      <label className={labelClass}>Phone</label>
                      <input
                        className={isInvalidPhone ? invalidClass : validClass}
                        id="phone"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={(evt) => {
                          setIsInvalidPhone(false);
                          setFormData({ ...formData, phone: evt.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-3 mb-3">
                    <div className="w-full text-left md:w-1/2 px-3 md:mb-0">
                      <label className={labelClass}>Address Line 1</label>
                      <input
                        className={
                          isInvalidAddress1 ? invalidClass : validClass
                        }
                        id="address1"
                        name="address1"
                        type="text"
                        value={formData.address1}
                        onChange={(evt) => {
                          setIsInvalidAddress1(true);
                          setFormData({
                            ...formData,
                            address1: evt.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="w-full text-left md:w-1/2 px-3 md:mb-0">
                      <label className={labelClass}>Address Line 2</label>
                      <input
                        className={validClass}
                        id="address2"
                        name="address2"
                        type="text"
                        value={formData.address2}
                        onChange={(evt) => {
                          setFormData({
                            ...formData,
                            address2: evt.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-3 mb-3">
                    <div className="w-full md:w-1/3 px-3  md:mb-0">
                      <label className={labelClass}>City</label>
                      <input
                        className={isInvalidCity ? invalidClass : validClass}
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={(evt) => {
                          setIsInvalidCity(false);
                          setFormData({ ...formData, city: evt.target.value });
                        }}
                      />
                    </div>

                    <div className="w-full md:w-1/3 px-3 md:mb-0">
                      <label className={labelClass}>State</label>
                      <select
                        className={validClass}
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={(evt) => {
                          setFormData({ ...formData, state: evt.target.value });
                        }}
                      >
                        <option disabled></option>
                        {states.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="w-full md:w-1/3 px-3 md:mb-0">
                      <label className={labelClass}>Zip Code</label>
                      <input
                        className={isInvalidZip ? invalidClass : validClass}
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={(evt) => {
                          setIsInvalidZip(false);
                          setFormData({ ...formData, zip: evt.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-3 mb-3">
                    <div className="w-full text-left md:w-1/2 px-3 md:mb-0">
                      <label className={labelClass}>
                        Emergency Contact Name
                      </label>
                      <input
                        className={
                          isInvalidEmergencyContactName
                            ? invalidClass
                            : validClass
                        }
                        id="emergencyContactName"
                        name="emergencyContactName"
                        type="text"
                        value={formData.emergencyContactName}
                        onChange={(evt) => {
                          setIsInvalidEmergencyContactName(false);
                          setFormData({
                            ...formData,
                            emergencyContactName: evt.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="w-full text-left md:w-1/2 px-3 md:mb-0">
                      <label className={labelClass}>
                        Emergency Contact Phone
                      </label>
                      <input
                        className={
                          isInvalidEmergencyContactPhone
                            ? invalidClass
                            : validClass
                        }
                        id="emergencyContactPhone"
                        name="emergencyContactPhone"
                        type="tel"
                        value={formData.emergencyContactPhone}
                        onChange={(evt) => {
                          setIsInvalidEmergencyContactPhone(false);
                          setFormData({
                            ...formData,
                            emergencyContactPhone: evt.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-3 mb-3">
                    <div className="w-full text-left px-3 md:mb-0">
                      <label className={labelClass}>Additional Notes</label>
                      <textarea
                        className={validClass}
                        id="additionalNotes"
                        name="additionalNotes"
                        type="text"
                        rows={6}
                        value={formData.additionalNotes}
                        onChange={(evt) => {
                          setFormData({
                            ...formData,
                            additionalNotes: evt.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap px-3 mx-3 mb-6">
                    <button
                      type="submit"
                      className={
                        isInvalid || petIds.length < 1
                          ? disabledButtonClass
                          : buttonClass
                      }
                      disabled={isInvalid || petIds.length < 1 ? true : false}
                    >
                      confirm
                    </button>
                  </div>
                </form>
              </section>
              <div className="text-sm mt-3 text-center">
                <button
                  className="hover:text-red-900 text-red-600 font-semibold"
                  onClick={cancelBooking}
                >
                  CANCEL REQUEST
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingRequestConfirmation;
