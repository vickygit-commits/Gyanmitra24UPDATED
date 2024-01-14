import '../../Images/bootstrap.min.css';
import MetaData from '../MetaData';
import {Fragment} from 'react'
import {useSelector} from 'react-redux'
import styles1 from './Profile.module.css'
import {Link} from 'react-router-dom';
import { getPaidEvent } from '../../actions/PaidEvents';
import Loader from '../loader';
import { useEffect } from 'react';
import {toast} from "react-toastify";
import { useDispatch } from 'react-redux';
export default function Profile()
{
    const {user} =useSelector(state=>state.authState);
    const{paidevent}=useSelector(state=>state.PaidEventState)
    const{paidworkshop}=useSelector(state=>state.PaidWorkshopState);
    const dispatch=useDispatch();

    let notpaidE;
    let notpaidW;
    if (Object.keys(paidevent).length === 0) {
        notpaidE = true;
    }
    if(Object.keys(paidworkshop).length===0)
    {
        notpaidW=true;
    }
    return (
        <Fragment>
                  <MetaData title={'My Profile'}/>
                  
            <body className={`${styles1.section_body_myProfile}`} > 
            <div className="container">
            <div className="row d-flex justify-content-center" >
                <div className="col-md-10 mt-5 pt-5" >
                    <div className="row z-depth-3" >
                        <div className="col-sm-4 bg-info rounded-left">
                            <div className="card-block text-center text-white">
                                <i className="fas fa-user-tie fa-7x mt-5"></i>
                                <h2 className="font-weight-bold mt-4">{user.name}</h2> 
                                <p>Student</p>
                                <Link to="/password/change" className="btn btn-primary btn-block mt-3">Change Password</Link>
                            </div>
                        </div>
                        <div className="col-sm-8 bg-white rounded-right" >
                            <h3 className="mt-3 text-center" >My Profile</h3>
                            <hr className="bg-primary"/>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="font-weight-bold">Email:</p>
                                    <h6 className="text-muted">{user.email}</h6>
                                </div>
                                <div className="col-sm-6">
                                    <p className="font-weight-bold">User ID:</p>
                                    <h6 className="text-muted">{user.user_id}</h6>
                                </div>
                                <div className="col-sm-6">
                                    <p className="font-weight-bold">Phone Number:</p>
                                    <h6 className="text-muted">{user.phone}</h6>
                                </div>
                                <div className="col-sm-6">
                                    <p className="font-weight-bold">Gender:</p>
                                    <h6 className="text-muted">{user.gender}</h6>
                                </div>
                                <div className="col-sm-6">
                                    <p className="font-weight-bold">College:</p>
                                    <h6 className="text-muted">{user.cname}</h6>
                                </div>
                            </div>
                            <h4 className="mt-3">Registered Events</h4>
                            <hr className="bg-primary"/>
                            {notpaidE?<p>
                                Not Registered in Events
                            </p>:<Fragment>
                            <div class="row">
                              {paidevent&&paidevent.map(paidevent1=>
                              <div className="col-sm-6">
                              <p className="font-weight-bold">{paidevent1.eventname}</p>
                              <h6 className="text-muted"></h6>
                          </div>
                                )}
                              
                   
                          
                              
                          </div>
                                </Fragment>}





                                <h4 className="mt-3">Registered Workshops</h4>
                            <hr className="bg-primary"/>
                            {notpaidW?<p>
                                Not Registered in Workshops
                            </p>:<Fragment>
                            <div class="row">
                              {paidworkshop&&paidworkshop.map(paidworkshop1=>
                              <div className="col-sm-6">
                              <p className="font-weight-bold">{paidworkshop1.workshopname}</p>
                              <h6 className="text-muted"></h6>
                          </div>
                                )}
                              
                   
                          
                              
                          </div>
                                </Fragment>}
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </body>

        </Fragment>

      );
}