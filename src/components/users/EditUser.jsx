import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuth,
  editSingleUser,
  updateAccessData,
} from '../../slices/authSlice';

const EditUser = (props) => {
  const dispatch = useDispatch();

  const { user, access } = props;

  const token = window.localStorage.getItem('token');

  const [formData, setFormData] = useState({});
  const [formAccessData, setFormAccessData] = useState({});

  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveAccessSuccess, setSaveAccessSuccess] = useState(false);

  useEffect(() => {
    if (user && user.id) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userName: user.userName,
        totalPets: user.totalPets,
        canFoster: user.canFoster,
      });

      if (access && access.id) {
        setFormAccessData({
          phone: access.phone,
          address1: access.address1,
          address2: access.address2,
          city: access.city,
          state: access.state,
          zip: access.zip,
          emergencyContactName: access.emergencyContactName,
          emergencyContactPhone: access.emergencyContactPhone,
          additionalNotes: access.additionalNotes,
        });
      }
    }
  }, [user, access]);

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const disabledClass =
    'appearance-none block border-slate-400 w-full bg-slate-200/40 border rounded py-3 px-4 leading-tight mt-3 font-rubik';

  const buttonClass =
    'text-sm font-semibold ease-in-out duration-100 hover:text-bold-orange pb-2';

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

  const submitUserEdits = async (evt) => {
    evt.preventDefault();

    const id = user.id;
    const res = await dispatch(editSingleUser({ id, token, formData }));

    if (res.type === 'editSingleUser/fulfilled') {
      setSaveSuccess(true);
    } else setSaveSuccess(false);
  };

  const submitAccessEdits = async (evt) => {
    evt.preventDefault();

    const id = user.id;
    const res = await dispatch(updateAccessData({ id, token, formAccessData }));

    if (res.type === 'updateAccessData/fulfilled') {
      setSaveAccessSuccess(true);
    } else setSaveAccessSuccess(false);
  };

  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono mb-2">Edit Profile</h2>
        <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
          <div>
            {user && user.id ? (
              <section>
                <p
                  className={
                    saveSuccess
                      ? 'text-center font-rubik font-semibold text-bold-purple text-xs'
                      : 'font-rubik text-xs collapse'
                  }
                >
                  SAVE SUCCESSFUL!
                </p>
                <form onSubmit={submitUserEdits}>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-1/2 flex flex-col pr-6">
                      <label className={labelClass}>First Name</label>
                      <input
                        className={validClass}
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(evt) => {
                          setFormData({
                            ...formData,
                            firstName: evt.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="w-1/2 flex flex-col">
                      <label className={labelClass}>Last Name</label>
                      <input
                        className={validClass}
                        id="lasttName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(evt) => {
                          setFormData({
                            ...formData,
                            lastName: evt.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-full">
                      <label className={labelClass}>Email</label>
                      <input
                        className={validClass}
                        id="email"
                        name="email"
                        type="text"
                        value={formData.email}
                        onChange={(evt) => {
                          setFormData({
                            ...formData,
                            email: evt.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-1/3 flex flex-col pr-6">
                      <label className={labelClass}>Username</label>
                      <input
                        className={validClass}
                        id="userName"
                        name="userName"
                        type="text"
                        value={formData.userName}
                        onChange={(evt) => {
                          setFormData({
                            ...formData,
                            userName: evt.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="w-1/3 flex flex-col pr-6">
                      <label className={labelClass}>Pets</label>
                      <input
                        className={validClass}
                        id="totalPets"
                        name="totalPets"
                        type="number"
                        min={0}
                        max={20}
                        step={1}
                        value={formData.totalPets}
                        onChange={(evt) => {
                          setFormData({
                            ...formData,
                            totalPets: evt.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="w-1/3 flex flex-col">
                      <label className={labelClass}>Can Foster</label>
                      <select
                        className={validClass}
                        id="canFoster"
                        name="canFoster"
                        type="text"
                        value={formData.canFoster}
                        onChange={(evt) => {
                          setFormData({
                            ...formData,
                            canFoster: evt.target.value,
                          });
                        }}
                      >
                        <option value={true}>yes!</option>
                        <option value={false}>not right now</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className={buttonClass}>
                    SAVE EDITS
                  </button>
                </form>
              </section>
            ) : (
              'user profile loading'
            )}
          </div>
          <div>
            <h2 className="font-rubikmono mb-2">Edit Personal Details</h2>
            {access && access.id ? (
              <section>
                <p
                  className={
                    saveAccessSuccess
                      ? 'text-center font-rubik font-semibold text-bold-purple text-xs'
                      : 'font-rubik text-xs collapse'
                  }
                >
                  SAVE SUCCESSFUL!
                </p>
                <form onSubmit={submitAccessEdits}>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-full flex flex-col">
                      <label className={labelClass}>Phone</label>
                      <input
                        className={validClass}
                        id="phone"
                        name="phone"
                        type="number"
                        step="none"
                        value={formAccessData.phone}
                        onChange={(evt) => {
                          setFormAccessData({
                            ...formAccessData,
                            phone: evt.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-1/2 flex flex-col pr-6">
                      <label className={labelClass}>Address Line 1</label>
                      <input
                        className={validClass}
                        id="address1"
                        name="address1"
                        type="text"
                        value={formAccessData.address1}
                        onChange={(evt) => {
                          setFormAccessData({
                            ...formAccessData,
                            address1: evt.target.value,
                          });
                        }}
                      />
                    </div>

                    <div className="w-1/2 flex flex-col">
                      <label className={labelClass}>Address Line 2</label>
                      <input
                        className={validClass}
                        id="address2"
                        name="address2"
                        type="text"
                        value={formAccessData.address2}
                        onChange={(evt) => {
                          setFormAccessData({
                            ...formAccessData,
                            address2: evt.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-1/3 pr-3">
                      <label className={labelClass}>City</label>
                      <input
                        className={validClass}
                        id="city"
                        type="text"
                        name="city"
                        value={formAccessData.city}
                        onChange={(evt) => {
                          setFormAccessData({
                            ...formAccessData,
                            city: evt.target.value,
                          });
                        }}
                      />
                    </div>

                    <div className="w-1/3 pr-3">
                      <label className={labelClass}>State</label>
                      <select
                        className={validClass}
                        id="state"
                        name="state"
                        value={formAccessData.state}
                        onChange={(evt) => {
                          setFormAccessData({
                            ...formAccessData,
                            state: evt.target.value,
                          });
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

                    <div className="w-1/3 pr-3">
                      <label className={labelClass}>Zip Code</label>
                      <input
                        className={validClass}
                        type="number"
                        step="none"
                        id="zip"
                        name="zip"
                        value={formAccessData.zip}
                        onChange={(evt) => {
                          setFormAccessData({
                            ...formAccessData,
                            zip: evt.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-1/2 pr-3">
                      <label className={labelClass}>
                        Emergency Contact Name
                      </label>
                      <input
                        className={validClass}
                        id="emergencyContactName"
                        name="emergencyContactName"
                        type="text"
                        value={formAccessData.emergencyContactName}
                        onChange={(evt) => {
                          setFormAccessData({
                            ...formAccessData,
                            emergencyContactName: evt.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="w-1/2 pr-3">
                      <label className={labelClass}>
                        Emergency Contact Phone
                      </label>
                      <input
                        className={validClass}
                        id="emergencyContactPhone"
                        name="emergencyContactPhone"
                        type="tel"
                        value={formAccessData.emergencyContactPhone}
                        onChange={(evt) => {
                          setFormAccessData({
                            ...formAccessData,
                            emergencyContactPhone: evt.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-full">
                      <label className={labelClass}>Additional Notes</label>
                      <textarea
                        className={validClass}
                        id="additionalNotes"
                        name="additionalNotes"
                        type="text"
                        rows={6}
                        value={formAccessData.additionalNotes}
                        onChange={(evt) => {
                          setFormAccessData({
                            ...formAccessData,
                            additionalNotes: evt.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <button type="submit" className={buttonClass}>
                    SAVE EDITS
                  </button>
                </form>
              </section>
            ) : (
              'access data loading'
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
