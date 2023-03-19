import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./style.css";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!age) {
      errors.age = "Age is required";
    } else if (age < 0) {
      errors.age = "Age must be greater than 0(age > 0)";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!occupation) {
      errors.occupation = "Occupation is required";
    }
    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!city) {
      errors.city = "City is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleOccupationChange = (event) => {
    setOccupation(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      const user = {
        name: name,
        age: age,
        email: email,
        occupation: occupation,
        phone: phone,
        city: city,
      };
      console.log(user);
      props.onAddUser(user);
      setName("");
      setAge("");
      setEmail("");
      setOccupation("");
      setPhone("");
      setCity("");
      setErrors({});
    }
  };

  return (
    <form>
      <div className="card-form-container">
        <div className="form-container">
          <div className="form__inner__first">
            <TextField
              id="name"
              label="Name"
              value={name}
              required
              variant="standard"
              onChange={handleNameChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            <br />
            <TextField
              id="email"
              label="Email"
              value={email}
              required
              variant="standard"
              onChange={handleEmailChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <br />
            <TextField
              id="occupation"
              label="Occupation"
              value={occupation}
              required
              variant="standard"
              onChange={handleOccupationChange}
              error={!!errors.occupation}
              helperText={errors.occupation}
            />
            <br />
          </div>
          <div className="form__inner__second">
            <TextField
              id="age"
              label="Age"
              value={age}
              required
              variant="standard"
              onChange={handleAgeChange}
              error={!!errors.age}
              helperText={errors.age}
            />
            <br />
            <TextField
              id="phone"
              label="Phone Number"
              value={phone}
              required
              variant="standard"
              onChange={handlePhoneChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
            <br />
            <TextField
              id="city"
              label="City"
              value={city}
              required
              variant="standard"
              onChange={handleCityChange}
              error={!!errors.city}
              helperText={errors.city}
            />
          </div>
        </div>
        <div className="submit-section">
          <button className="button" onClick={handleSubmit}>
            Add User
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
