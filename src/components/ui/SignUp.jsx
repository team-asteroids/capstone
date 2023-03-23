import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  signUp,
  attemptTokenLogin,
  createAccessData,
  selectAuth,
} from '../../slices/authSlice';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { accessData, userAuth } = useSelector(selectAuth);

  // local state from form (user-entered data)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    zip: '',
    totalPets: 0,
    canFoster: true,
  });

  // state for validations to confirm sign up success
  const [isInvalid, setIsInvalid] = useState(false);
  const [isInvalidFirstName, setIsInvalidFirstName] = useState(false);
  const [isInvalidLastName, setIsInvalidLastName] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isInvalidZip, setIsInvalidZip] = useState(false);
  const [signUpFail, setSignUpFail] = useState(false);

  const token = localStorage.getItem('token');

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const invalidClass =
    'appearance-none block border border-red-500 w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const validateEmail = (email) => {
    let res = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
  };

  const validateZip = (zip) => {
    const res = /^\d{5}?$/.test(zip);
    return res;
  };

  const checkFormValidation = () => {
    if (formData.firstName === '') {
      setIsInvalidFirstName(true);
      setIsInvalid(true);
    }
    if (formData.lastName === '') {
      setIsInvalidLastName(true);
      setIsInvalid(true);
    }

    if (formData.email === '') {
      setIsInvalidEmail(true);
      setIsInvalid(true);
    }

    if (!validateEmail(formData.email)) {
      setIsInvalidEmail(true);
      setIsInvalid(true);
    }

    if (formData.password === '' || formData.password.length < 8) {
      setIsInvalidPassword(true);
      setIsInvalid(true);
    }

    if (!validateZip(formData.zip)) {
      setIsInvalidZip(true);
      setIsInvalid(true);
    }
  };

  const attemptSignUp = async (evt) => {
    evt.preventDefault();
    await checkFormValidation();

    // if all the form elements are valid (aka false)
    if (!isInvalid) {
      const res = await dispatch(signUp(formData));
      if (res.type === 'signup/rejected') setSignUpFail(true);
    }
  };

  useEffect(() => {
    if (token) dispatch(attemptTokenLogin());
  }, [token]);

  useEffect(() => {
    const zip = formData.zip;
    if (userAuth && userAuth.id) {
      const id = userAuth.id;
      dispatch(createAccessData({ id, zip, token }));
    }
  }, [userAuth]);

  useEffect(() => {
    if (accessData.zip) {
      navigate('/account');
    }
  }, [accessData]);

  return (
    <div className="bg-[url('img/signup-blue.jpg')] bg-no-repeat bg-cover bg-right h-[calc(100vh_-_5rem)] font-rubikmono">
      <div className="max-w-1/3 flex flex-row m-auto">
        <div className="w-1/2 mx-10 m-auto">
          <h2 className="text-center text-3xl">Welcome, New Pup!</h2>
          <p
            className={
              signUpFail && isInvalid
                ? 'text-red-500 font-rubik text-center font-bold text-sm mt-6'
                : 'collapse font-rubik text-xs'
            }
          >
            Sign Up Failed!
          </p>
          <section className="flex justify-center mt-8">
            <form onSubmit={attemptSignUp}>
              <div className="flex flex-wrap mx-3">
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
                      setIsInvalid(false);
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
                      setIsInvalid(false);
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

              <div className="flex flex-wrap px-3 mx-3 mb-6">
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
                      setIsInvalid(false);
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
              <div className="flex flex-wrap px-3 mx-3 mb-6">
                <div className="w-full flex flex-col">
                  <label>Password</label>
                  <input
                    className={isInvalidPassword ? invalidClass : validClass}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="************"
                    value={formData.password}
                    onChange={(evt) => {
                      setIsInvalidPassword(false);
                      setIsInvalid(false);
                      setFormData({ ...formData, password: evt.target.value });
                    }}
                  />
                  <p
                    className={
                      isInvalidPassword
                        ? 'text-xs mt-2 text-red-500'
                        : 'collapse -mt-2'
                    }
                  >
                    Invalid!
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 md:mb-0">
                  <label>Zip Code</label>
                  <input
                    className={isInvalidZip ? invalidClass : validClass}
                    type="text"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={(evt) => {
                      setIsInvalidZip(false);
                      setIsInvalid(false);
                      setFormData({ ...formData, zip: evt.target.value });
                    }}
                  />
                  <p
                    className={
                      isInvalidZip
                        ? 'text-xs mt-2 text-red-500'
                        : 'collapse -mt-2'
                    }
                  >
                    Invalid!
                  </p>
                </div>

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
              <div>
                <button
                  className="ease-in duration-200  hover:text-bold-pink w-full text-white rounded-xl mx-auto block text-xl hover:transition-all"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </section>
          <div className="text-xs mt-5 text-center">
            <p>
              <Link to={'/login'}>Already have an account? Log in!</Link>
            </p>
          </div>
        </div>
        <div className="w-1/2 h-[calc(100vh_-_5rem)]"></div>
      </div>
    </div>
  );
}

export default SignUp;
