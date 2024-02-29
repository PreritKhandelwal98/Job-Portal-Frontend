import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  const [name, SetName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

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
          <div className="mb-1">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={name} onChange={(e) => {
              SetName(e.target.value)
            }} />
          </div>
          <div className="mb-1">
            <label htmlFor="name" className="form-label">Last Name</label>
            <input type="text" className="form-control" name="lastName" value={lastName} onChange={(e) => {
              SetLastName(e.target.value)
            }} />
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" value={email} onChange={(e) => {
              SetEmail(e.target.value)
            }} />
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={password} onChange={(e) => {
              SetPassword(e.target.value)
            }} />
          </div>
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