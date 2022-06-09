import React from 'react';
import { Link } from 'react-router-dom';
import HeroLogin from '../svg/image2.svg';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

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

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger mx-auto" role="alert">
          This is not a valid email.
        </div>
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger mx-auto" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      </div>
    );
  }
};

export default function Register() {
  return (
    <div>
      <div className="container-fluid row">
        <div className="col-lg-9 p-0">
          <img className="img-fluid effect" src={HeroLogin} alt="hero-login" />
        </div>
        <div className="col-lg-3 my-auto mx-auto">
          <div className="container">
            <div className="kotak-auth"></div>
            <h3 className="mb-5 font-weight-bold">Create new Account</h3>
            <Form>
              <div className="form-group">
                <label htmlFor="fullname">Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="fullname"
                  validations={[required]}
                  placeholder="Input your fullname..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  className="form-control"
                  name="email"
                  validations={[required, validEmail]}
                  placeholder="Input your email..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  validations={[required, vpassword]}
                  placeholder="Input your password..."
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary w-100 mt-3">Sign Up</button>
              </div>
              <Link className="btn w-100 mt-2" to={'/login'}>
                Already have an Account? Login
              </Link>
              <CheckButton style={{ display: 'none' }} />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
