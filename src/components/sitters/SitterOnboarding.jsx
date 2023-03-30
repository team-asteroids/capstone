import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SitterOnboarding() {
  const [formData, setFormData] = useState({
    hostAtHome: false,
    atOwnerHouse: false,
    reactive: false,
    puppies: false,
    small: false,
    medium: false,
    large: false,
    extraLarge: false,
    multiplePets: false,
    cats: false,
    disabled: false,
    medication: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleSubmit = (event) => {
    // thunk
  };

  return (
    <div
      className=" bg-gradient-to-r from-blue-400 to-white-600
    flex flex-col items-center justify-center h-screen font-rubikmono"
    >
      <h1 className="text-4xl font-bold">Hello and welcome!</h1>
      <p className="text-xl">Please select all that apply</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Host at home:
            <input
              type="checkbox"
              name="hostAtHome"
              checked={formData.hostAtHome}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            At owner's house:
            <input
              type="checkbox"
              name="atOwnerHouse"
              checked={formData.atOwnerHouse}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Reactive:
            <input
              type="checkbox"
              name="reactive"
              checked={formData.reactive}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Puppies:
            <input
              type="checkbox"
              name="puppies"
              checked={formData.puppies}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Small:
            <input
              type="checkbox"
              name="small"
              checked={formData.small}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Medium:
            <input
              type="checkbox"
              name="medium"
              checked={formData.medium}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Large:
            <input
              type="checkbox"
              name="large"
              checked={formData.large}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Extra large:
            <input
              type="checkbox"
              name="extraLarge"
              checked={formData.extraLarge}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Multiple pets:
            <input
              type="checkbox"
              name="multiplePets"
              checked={formData.multiplePets}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Cats:
            <input
              type="checkbox"
              name="cats"
              checked={formData.cats}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Disabled:
            <input
              type="checkbox"
              name="disabled"
              checked={formData.disabled}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Medication:
            <input
              type="checkbox"
              name="medication"
              checked={formData.medication}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Short bio:
            <input
              type="text"
              name="shortBio"
              checked={formData.shortBio}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <Link to="/onboardsuccess">
          <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
}

export default SitterOnboarding;
