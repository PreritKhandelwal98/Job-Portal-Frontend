import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputForm from '../components/shared/InputForm';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
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
          <InputForm htmlFor="email" labelText={'Email'} type={'email'} value={email} handleChange={(e) => setEmail(e.target.value)} name="email" />
          <InputForm htmlFor="password" labelText={'Password'} type={'password'} value={password} handleChange={(e) => setPassword(e.target.value)} name="password" />
          <div className="d-flex">
            <p>Do not have Account? <Link to="/register"><i>Cleck Here</i></Link></p>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login