import React from 'react';
// import styles from '../Images/css/style.css'

import mepco from '../Images/Mepco_Schlenk_Engineering_College_logo.png';
import { Link } from 'react-router-dom';

const signup = () => {
  return (
    <section
      className="ftco-section"
      style={{
        background: 'linear-gradient(to left bottom, #d60fc6, #137e30)',
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center mb-5 ">
            <h2 className="heading-section " style={{ fontFamily: 'poppins', color: 'white' }}>
              Gyan Mitra'24<br />
              An Inter-College Technical Symposium
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div
              className="wrap"
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(7.5px)',
                WebkitBackdropFilter: 'blur(7.5px)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.18)',
              }}
            >
              <div>
            <img src={mepco} width="30%" className="d-block mx-auto mt-5" />

              </div>
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4" style={{ fontFamily: 'poppins', color: 'white' }}>
                      Sign Up
                    </h3>
                  </div>
                </div>
                <form action="#" className="signin-form">
                  <div className="form-group mt-3">
                  <label className="form-control-placeholder" htmlFor="name">
                      Full Name (with initials)
                    </label>
                    <input type="text" className="form-control" name="name" required />
                    
                  </div>
                  <div className="form-group mt-3">
                  <label className="form-control-placeholder" htmlFor="mail">
                      Email id
                    </label>
                    <input type="email" className="form-control" name="mail" required />
                    
                  </div>
                  <div className="form-group mt-3">
                  <label className="form-control-placeholder" htmlFor="gender">
                      Gender
                    </label>
                    <input type="text" className="form-control" name="gender" required />
                    
                  </div>
                  <div className="form-group mt-3">
                  <label className="form-control-placeholder" htmlFor="phone">
                      Phone number
                    </label>
                    <input type="number" className="form-control" name="phone" required />
                    
                  </div>
                  <div className="form-group mt-3">
                    <label style={{ color: 'black' }}>
                      Choose your college (else type your college name):{' '}
                    </label>
                    <br />
                    <input
                      
                      name="cname"
                      style={{
                        height: '40px',
                        width: '100%',
                        border: 'solid 2px',
                        borderRadius: '4px',
                        borderColor: '#F2F2F2',
                      }}
                      required
                    >
                      <option value="MSEC" >MSEC</option>
                      <option value="NEC"></option>
                      <option value="IIT, Madras"></option>
                      <option value="SFR"></option>
                      <option value="NIT, Trichy"></option>


                    </input>
                    
                  </div>
                  <div className="form-group mt-3">
                  <label className="form-control-placeholder" htmlFor="ccity">
                      College City
                    </label>
                    <input type="text" className="form-control" name="ccity" required />
                    
                  </div>
                  <div className="form-group mt-3">
                  <label className="form-control-placeholder" htmlFor="password">
                      Password
                    </label>
                    <input type="password" className="form-control" name="password" required />
                    
                    <span
                      toggle="#password-field"
                      className="fa fa-fw fa-eye field-icon toggle-password"
                    ></span>
                  </div>
                  <div className="form-group mt-3">
                    <button
                      type="submit"
                      className="form-control btn btn-primary rounded submit px-3"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <p className="text-center" style={{ fontFamily: 'poppins', color: 'white' }}>
                  Already Signed Up? <Link to="/login">Log In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default signup;
