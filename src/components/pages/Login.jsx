import React from 'react';
import HeroLogin from '../svg/image2.svg';
import { Link } from 'react-router-dom';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import LoginButton from './GoogleButton/LoginButton';

const required = (value) => {
  if (!value) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger mx-auto" role="alert">
          This field is required!
        </div>
      </div>
    );
  }
};

export default function Login() {
  return (
    <div>
      <div className="container-fluid row">
        <div className="col-lg-9 p-0">
          <img className="img-fluid effect" src={HeroLogin} alt="hero-login" />
        </div>
        <div className="col-lg-3 my-auto">
          <div className="container">
            <div className="kotak-auth"></div>
            <h3 className="mb-5 font-weight-bold">Welcome, Admin BCR</h3>
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  className="form-control"
                  name="email"
                  validations={[required]}
                  placeholder="johndee@gmail.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  validations={[required]}
                  placeholder="6+ karakter"
                />
              </div>
              <button className="btn btn-primary w-100 mt-3">
                <span>Sign In</span>
              </button>
              <LoginButton />
              <Link className="btn w-100 mt-2" to={'/register'}>
                Don't have an account? Register!
              </Link>
              <CheckButton style={{ display: 'none' }} />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
