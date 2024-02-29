import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputForm from '../components/shared/InputForm';
const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(name, lastName, email, password);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="form-container">
        <form className="card p-2" onSubmit={handleSubmit}>
          <img src="/assets/images/logo/logo.png" height={150}
            width={400}
            alt="logo" />
          <InputForm htmlFor="name" labelText={'Name'} type={'text'} value={name} handleChange={(e) => setName(e.target.value)} name="name" />
          <InputForm htmlFor="lastName" labelText={'Last Name'} type={'text'} value={lastName} handleChange={(e) => setLastName(e.target.value)} name="lastName" />
          <InputForm htmlFor="email" labelText={'Email'} type={'email'} value={email} handleChange={(e) => setEmail(e.target.value)} name="email" />
          <InputForm htmlFor="password" labelText={'Password'} type={'password'} value={password} handleChange={(e) => setPassword(e.target.value)} name="password" />


          <div className="d-flex">
            <p>Already Have Account? <Link to="/login"><i>Cleck Here</i></Link></p>
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </>
  )
}

export default Register