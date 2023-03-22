import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAuth, signUp, attemptTokenLogin } from '../../slices/authSlice';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const token = window.localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(attemptTokenLogin());
      navigate('/account');
    }
  }, [token, isInvalid]);

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const invalidClass =
    'appearance-none block border border-red-500 w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const validateEmail = (email) => {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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

  const attemptSignUp = (evt) => {
    evt.preventDefault();
    checkFormValidation();
    if (!isInvalid) console.log('success', formData);
    else console.log('fail', formData);
    // if (!isInvalid) dispatch(signUp(formData));
  };

  return (
    <div className="bg-[url('img/signup-blue.jpg')] bg-no-repeat bg-cover bg-right h-[calc(100vh_-_5rem)]">
      <div className="max-w-1/3 flex flex-row m-auto">
        <div className="w-1/2 mx-10 m-auto">
          <h2 className="text-center text-3xl">Welcome, New Pup!</h2>
          <section className="flex gap-10 justify-center mt-16">
            <form onSubmit={attemptSignUp}>
              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label>First Name</label>
                  <input
                    className={validClass}
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(evt) => {
                      setFormData({ ...formData, firstName: evt.target.value });
                    }}
                  />
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label>Last Name</label>
                  <input
                    className={validClass}
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(evt) => {
                      setFormData({ ...formData, lastName: evt.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap px-3 mx-3 mb-6">
                <div className="w-full flex flex-col">
                  <label>Email</label>
                  <input
                    className={validClass}
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={(evt) => {
                      setFormData({ ...formData, email: evt.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap px-3 mx-3 mb-6">
                <div className="w-full flex flex-col">
                  <label>Password</label>
                  <input
                    className={validClass}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="************"
                    value={formData.password}
                    onChange={(evt) => {
                      setFormData({ ...formData, password: evt.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label>Zip Code</label>
                  <input
                    className={validClass}
                    type="text"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={(evt) => {
                      setFormData({ ...formData, zip: evt.target.value });
                    }}
                  />
                </div>

                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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

                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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
                  className="ease-in duration-200  hover:text-bold-pink w-full text-white py-2 rounded-xl mx-auto block text-xl hover:transition-all mt-10"
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
