import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SitterOnboarding() {
  const navigate = useNavigate();

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

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'appearance-none rounded block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-cover bg-no-repeat bg-[url('img/profile-bg.jpg')] h-[calc(100vh_-_5rem)]">
      <div>
        <h1 className="text-4xl font-bold font-rubikmono">Become a sitter!</h1>
        <p className="text-lg">Please select all that apply</p>
        <div className="flex flex-wrap">
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
      </div>
    </div>
  );
}

export default SitterOnboarding;
