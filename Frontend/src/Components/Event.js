import React, { Fragment, useEffect, useState } from 'react';
import styles from '../event.module.css';
import '../Images/bootstrap.min.css';
import { getEvents } from '../actions/eventsAction';
import { useDispatch,useSelector } from 'react-redux';
import Loader from './loader';
import MetaData from './MetaData';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';

function Event() {
  const dispatch=useDispatch();
  const {events,loading,error}=useSelector((state)=>state.eventsState)
  useEffect(()=>
  {
    if(error)
    {

    
    return toast.error(error,{
      position:toast.POSITION.BOTTOM_CENTER
    })
  }
    dispatch(getEvents)
  },[error])
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tabId) => {
    console.log('Clicked tab:', tabId);
    setActiveTab(tabId);  };

  

  // const filteredEvents = activeTab === 'all' ? events : events.filter(event => event.department.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <Fragment>
      <MetaData title={'Events'}/>
      {loading ? <Loader/>:
    
    <Fragment>
    <body className={`${styles.workshopbody} `}>
      <section id="Home">
        <div className="container">
          <h1 className={`${styles.title} py-4`} >Events</h1>
          <hr style={{ color: 'white' }} />

          {/* <ul className={`${styles.nav_tabs1} nav nav-tabs`}>
            <div className={`${styles.container_tab}`}>
              <ul className={`${styles.nav_tabs1} nav nav-tabs`}>
                <li className="nav-item">
                  <a
                    className={`${styles.nav_link1} nav-link `}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleTabClick('all')}
                  >
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`${styles.nav_link1} nav-link `}
                    onClick={() => handleTabClick('Civil/Arch')}
                    style={{ cursor: 'pointer' }}
                  >
                    Civil/Arch
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`${styles.nav_link1} nav-link `}
                    onClick={() => handleTabClick('EEE')}
                    style={{ cursor: 'pointer' }}
                  >
                    EEE
                  </a>
                </li>
                <li className="nav-item">
          <a
            className={`${styles.nav_link1} nav-link `}
            onClick={() => handleTabClick('ece/bme')} style={{
              cursor:'pointer'
            }}>ECE/BME</a>          </li><li className="nav-item">
<a
            className={`${styles.nav_link1} nav-link `}
            onClick={() => handleTabClick('cse/it/aids')} style={{
              cursor:'pointer'
            }}>CSE/IT/AIDS</a>          </li>
            <li className="nav-item">
            <a
            className={`${styles.nav_link1} nav-link `}
            onClick={() => handleTabClick('mech')} style={{
              cursor:'pointer'
            }}>MECH</a>          </li><li className="nav-item">
<a
            className={`${styles.nav_link1} nav-link `}
            onClick={() => handleTabClick('biotech')} style={{
              cursor:'pointer'
            }}>BIOTECH</a>          </li><li className="nav-item">
<a
            className={`${styles.nav_link1} nav-link `}
            onClick={() => handleTabClick('mca')} style={{
              cursor:'pointer'
            }}>MCA</a>          </li>
          <li className="nav-item">
          <a
            className={`${styles.nav_link1} nav-link `}
            onClick={() => handleTabClick('mathematics')} style={{
              cursor:'pointer'
            }}>MATHEMATICS</a>          </li>              </ul>
            </div>
          </ul> */}

          <div className="container">
            <div className="tab-content">
              <div className="tab-pane active">
              <div className="container">
                  
                    <div className="row row-cols-1 row-cols-md-3 gy-3 py-5">

                    { events && events.map(event => (
                                            <div className="col-md-4 mt-5">

                    <div  className="card h-100" style={{ backgroundColor:'black'}}>
                      
                                    <img className="card-img-top" src={event.images} alt="Card image cap"/>

                        <div className="card-body">
                <h5 className="card-title" style={{ color:'pink'}} >{event.name}</h5>
                <p className="card-text" style={{ color:'white'}} >{event.description}</p>
                <div className="mb-5" >
                <h6 style={{ color:'white'}}>{event.organizing_department}</h6>
                <Link to={`/event/${event.eventid}`} className={`${styles.btn1} btn btn-outline-light mt-5`}>
                              Explore</Link>
              </div>
              </div>
			  
                      </div>
                      </div>
                      ))}
                                            

                   </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
    </Fragment>
}
    </Fragment>
  );
}

export default Event;
