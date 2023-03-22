import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  selectAuth,
  logIn,
  attemptTokenLogin,
  // resetAuthStatus,
} from '../../slices/authSlice';

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // local state from form (user-entered data)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // state to confirm login success
  // const [logInFail, setLogInFail] = useState(false);
  // const [logInAttempt, setLogInAttempt] = useState(false);
  // const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  // const [isInvalidPassword, setIsInvalidPassword] = useState(false);

  const { userAuth } = useSelector(selectAuth);

  console.log('userAuth:', userAuth);

  // const validateEmail = (email) => {
  //   let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   return res.test(email);
  // };

  // const checkFormValidation = () => {
  //   if (email === '') {
  //     setIsInvalidEmail(true);
  //   }
  //   if (!validateEmail(email)) {
  //     setIsInvalidEmail(true);
  //   }
  //   if (password === '' || password.length < 8) {
  //     setIsInvalidPassword(true);
  //   }
  // };

  const attemptLogIn = async (evt) => {
    evt.preventDefault();
    // checkFormValidation();
    // setLogInAttempt(true);

    await dispatch(
      logIn({
        email,
        password,
      })
    );

    await dispatch(attemptTokenLogin());
  };

  useEffect(() => {
    if (userAuth.firstName) navigate('/');
    // else if (logInAttempt) {
    //   setLogInFail(true);
    // }

    // return () => {
    //   dispatch(resetAuthStatus());
    // };
  }, [userAuth]);

  return (
    <div className="bg-[url('img/dog-head.jpg')] bg-bottom bg-no-repeat bg-cover h-[calc(100vh_-_5rem)]">
      <div className="w-full flex flex-col max-w-sm m-auto pt-16">
        <h2 className="text-center text-3xl">Log in!</h2>
        <section className="flex gap-10 justify-center mt-16">
          <form onSubmit={attemptLogIn}>
            <div className="flex flex-col gap-10">
              <div className="w-full">
                <label>Email</label>
                <input
                  className="appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(evt) => {
                    // setIsInvalidEmail(false);
                    // setLogInFail(false);
                    setEmail(evt.target.value);
                  }}
                />
              </div>
              <div className="w-full">
                <label>Password</label>
                <input
                  className="appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="************"
                  value={password}
                  onChange={(evt) => {
                    // setIsInvalidPassword(false);
                    // setLogInFail(false);
                    setPassword(evt.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <button
                className="ease-in duration-500  hover:bg-primary-button-hover w-full bg-primary-deep-green text-white py-2 rounded-xl mx-auto block text-xl hover:transition-all mt-10"
                type="submit"
              >
                Log in
              </button>
            </div>
          </form>
        </section>
        <div className="text-xs mt-5">
          <p className="text-center">
            <Link to={'/signup'}>Don't have an account? Sign Up!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
