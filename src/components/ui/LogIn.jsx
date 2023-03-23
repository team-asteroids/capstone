import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAuth, logIn, attemptTokenLogin } from '../../slices/authSlice';

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // local state from form (user-entered data)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // state to confirm login success
  const [logInFail, setLogInFail] = useState(false);
  const [logInAttempt, setLogInAttempt] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);

  const { userAuth, status } = useSelector(selectAuth);

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const invalidClass =
    'appearance-none block border border-red-500 w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const validateEmail = (email) => {
    let res = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
  };

  const checkFormValidation = () => {
    if (email === '') {
      setIsInvalidEmail(true);
    }
    if (!validateEmail(email)) {
      setIsInvalidEmail(true);
    }
    if (password === '' || password.length < 8) {
      setIsInvalidPassword(true);
    }
  };

  const attemptLogIn = async (evt) => {
    evt.preventDefault();
    checkFormValidation();
    setLogInAttempt(true);
    if (!isInvalidEmail && !isInvalidPassword) {
      const res = await dispatch(
        logIn({
          email,
          password,
        })
      );

      if (res.type === 'login/fulfilled') {
        await dispatch(attemptTokenLogin());
      }
    }
  };

  useEffect(() => {
    if (userAuth && userAuth.firstName) navigate('/');
    else if (logInAttempt) {
      setLogInFail(true);
    }
  }, [userAuth]);

  return (
    <div className="bg-[url('img/dog-head.jpg')] bg-bottom bg-no-repeat bg-cover h-[calc(100vh_-_5rem)] font-rubikmono">
      <div className="w-full flex flex-col max-w-sm m-auto pt-16">
        <h2 className="text-center text-3xl">Sit, Stay!</h2>
        <section className="flex gap-10 justify-center pt-5">
          <form onSubmit={attemptLogIn} className="w-full">
            <div className="flex flex-col gap-5">
              <div className="w-full">
                <p
                  className={
                    status === 'failed' || logInFail
                      ? 'text-red-500 font-rubik text-center font-bold text-sm'
                      : 'collapse font-rubik text-xs'
                  }
                >
                  Invalid login credentials!
                </p>
                <label>Email</label>
                <input
                  className={
                    isInvalidEmail || logInFail ? invalidClass : validClass
                  }
                  id="email"
                  name="email"
                  value={email}
                  onChange={(evt) => {
                    setIsInvalidEmail(false);
                    setLogInFail(false);
                    setEmail(evt.target.value);
                  }}
                />
                <p
                  className={
                    isInvalidEmail
                      ? 'text-red-500 font-rubik text-sm font-bold'
                      : 'collapse font-rubik text-xs'
                  }
                >
                  Invalid email!
                </p>
              </div>
              <div className="w-full">
                <label>Password</label>
                <input
                  className={
                    isInvalidPassword || logInFail ? invalidClass : validClass
                  }
                  type="password"
                  id="password"
                  name="password"
                  placeholder="************"
                  value={password}
                  onChange={(evt) => {
                    setIsInvalidPassword(false);
                    setLogInFail(false);
                    setPassword(evt.target.value);
                  }}
                />
                <p
                  className={
                    isInvalidPassword
                      ? 'text-red-500 font-rubik text-sm font-bold'
                      : 'collapse font-rubik text-xs'
                  }
                >
                  Invalid password!
                </p>
              </div>
            </div>
            <div>
              <button
                className="ease-in duration-500 hover:bg-bold-purple w-full bg-bold-blue text-white py-3 rounded-xl mx-auto block text-xl hover:transition-all mt-8 mb-5"
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
