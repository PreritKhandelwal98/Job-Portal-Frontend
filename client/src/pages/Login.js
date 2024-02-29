import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className="form-container">
        <form className="card p-2">
          <img src="/assets/images/logo/logo.png" height={150}
            width={400}
            alt="logo" />
          <div className="mb-1">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" />
          </div>
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