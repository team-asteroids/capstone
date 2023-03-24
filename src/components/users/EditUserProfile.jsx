import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAuth } from '../../slices/authSlice';
import { editSingleUser } from '../../slices/usersSlice';

function EditUserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userAuth } = useSelector(selectAuth);

  const [edited, setEdited] = useState(false);

  // local state from form (user-entered data)
  const [formData, setFormData] = useState({
    firstName: userAuth.firstName,
    lastName: userAuth.lastName,
    email: userAuth.email,
    userName: userAuth.userName,
    totalPets: userAuth.totalPets,
    canFoster: userAuth.canFoster,
  });

  // state for validations to confirm sign up success
  const [isInvalid, setIsInvalid] = useState(false);
  const [isInvalidFirstName, setIsInvalidFirstName] = useState(false);
  const [isInvalidLastName, setIsInvalidLastName] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidUserName, setIsInvalidUserName] = useState(false);

  const [editFail, setEditFail] = useState(false);

  // const token = localStorage.getItem('token');

  console.log('userAuth --> ', userAuth);

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const invalidClass =
    'appearance-none block border border-red-500 w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const validateEmail = (email) => {
    let res = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
  };

  const checkFormValidation = () => {
    if (formData.firstName === '') {
      setIsInvalidFirstName(true);
      // setIsInvalid(true);
    }

    if (formData.lastName === '') {
      setIsInvalidLastName(true);
      // setIsInvalid(true);
    }

    if (formData.email === '') {
      setIsInvalidEmail(true);
      // setIsInvalid(true);
    }

    if (formData.userName === '') {
      setIsInvalidUserName(true);
      // setIsInvalid(true);
    }

    if (!validateEmail(formData.email)) {
      setIsInvalidEmail(true);
      // setIsInvalid(true);
    }

    if (
      !isInvalidFirstName &&
      !isInvalidLastName &&
      !isInvalidEmail &&
      !isInvalidUserName
    )
      setIsInvalid(false);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    await checkFormValidation();
    const id = userAuth.id;

    // if all the form elements are valid (aka false)
    if (!isInvalid && id) {
      await dispatch(editSingleUser({ id, formData }));
      setEdited(true);
    }
  };

  return (
    <div className="font-rubikmono">
      <div className=" flex flex-row m-auto">
        <div className=" m-auto">
          <h2 className="text-center text-3xl">Edit My Profile</h2>
          <p
            className={
              editFail && isInvalid
                ? 'text-red-500 font-rubik text-center font-bold text-sm mt-6'
                : 'collapse font-rubik text-xs'
            }
          >
            Oops! Could not update your profile!
          </p>
          <section className="flex justify-center mt-8">
            <form onSubmit={handleEdit}>
              <div className="flex flex-wrap mx-3 mb-3">
                <div className="w-full md:w-1/2 px-3 md:mb-0">
                  <label>First Name</label>
                  <input
                    className={isInvalidFirstName ? invalidClass : validClass}
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(evt) => {
                      setIsInvalidFirstName(false);
                      // setIsInvalid(false);
                      setFormData({ ...formData, firstName: evt.target.value });
                    }}
                  />
                  <p
                    className={
                      isInvalidFirstName
                        ? 'text-xs mt-2 text-red-500'
                        : 'collapse -mt-2'
                    }
                  >
                    Invalid!
                  </p>
                </div>

                <div className="w-full md:w-1/2 px-3 md:mb-0">
                  <label>Last Name</label>
                  <input
                    className={isInvalidLastName ? invalidClass : validClass}
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(evt) => {
                      setIsInvalidLastName(false);
                      // setIsInvalid(false);
                      setFormData({ ...formData, lastName: evt.target.value });
                    }}
                  />
                  <p
                    className={
                      isInvalidLastName
                        ? 'text-xs mt-2 text-red-500'
                        : 'collapse -mt-2'
                    }
                  >
                    Invalid!
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap px-3 mx-3 mb-3">
                <div className="w-full flex flex-col">
                  <label>Email</label>
                  <input
                    className={isInvalidEmail ? invalidClass : validClass}
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={(evt) => {
                      setIsInvalidEmail(false);
                      // setIsInvalid(false);
                      setFormData({ ...formData, email: evt.target.value });
                    }}
                  />
                  <p
                    className={
                      isInvalidEmail
                        ? 'text-xs mt-2 text-red-500'
                        : 'collapse -mt-2'
                    }
                  >
                    Invalid!
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap mx-3 mb-3">
                <div className="w-full px-3 md:mb-0">
                  <label>Username</label>
                  <input
                    className={isInvalidUserName ? invalidClass : validClass}
                    id="userName"
                    name="userName"
                    type="text"
                    value={formData.userName}
                    onChange={(evt) => {
                      setIsInvalidUserName(false);
                      // setIsInvalid(false);
                      setFormData({ ...formData, userName: evt.target.value });
                    }}
                  />
                  <p
                    className={
                      isInvalidUserName
                        ? 'text-xs mt-2 text-red-500'
                        : 'collapse -mt-2'
                    }
                  >
                    Invalid!
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap mx-3 mb-3">
                <div className="w-full md:w-1/3 px-3  md:mb-0">
                  <label>Pets</label>
                  <input
                    className={validClass}
                    type="number"
                    min={0}
                    id="pets"
                    name="pets"
                    value={formData.totalPets}
                    onChange={(evt) => {
                      setFormData({ ...formData, totalPets: evt.target.value });
                    }}
                  />
                </div>

                <div className="w-full md:w-1/3 px-3 md:mb-0">
                  <label>Foster</label>
                  <select
                    className={validClass}
                    id="foster"
                    name="foster"
                    value={formData.canFoster}
                    onChange={(evt) => {
                      setFormData({ ...formData, canFoster: evt.target.value });
                    }}
                  >
                    {/* <option value="" selected disabled hidden>
                        Can update later
                      </option> */}
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap px-3 mx-3 mb-6">
                <button
                  className="ease-in duration-300 hover:bg-bold-purple w-full bg-bold-blue text-white py-3 rounded-xl mx-auto block text-xl hover:transition-all mt-3"
                  type="submit"
                >
                  Submit edits
                </button>
              </div>
            </form>
          </section>
          <div className="text-xs mt-3 text-center"></div>
        </div>
        <div className="w-1/2 h-[calc(100vh_-_5rem)]"></div>
      </div>
    </div>
  );
}

export default EditUserProfile;
