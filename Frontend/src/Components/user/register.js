import { Fragment,useEffect,useState } from "react"
import MetaData from '../MetaData'
import { Link, useNavigate} from 'react-router-dom';
import mepco from '../../Images/Mepco_Schlenk_Engineering_College_logo.png';
import { useDispatch, useSelector } from "react-redux";
import { register,clearAuthError} from "../../actions/userActions";
import {toast} from 'react-toastify';

export default function Register()
{
    const [userData,setUserData]=useState({
        name:"",
        email:"",
        gender:"",
        password:"",
        phone_number:"",
        cname:"",
        ccity:"",
    });
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const{loading,error,isAuthenticated}=useSelector(state=>state.authState)
    const onChange=(e)=>{
        setUserData({...userData, [e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>
    {
        e.preventDefault();
        const userDataJSON = {
          name: userData.name,
          email: userData.mail,
          gender: userData.gender,
          password: userData.password,
          phone: userData.phone,
          cname: userData.cname,
          ccity: userData.ccity,
      };
  
      
          dispatch(register(userDataJSON));

    }
    useEffect(()=>
    {
      if(isAuthenticated)
      {
        navigate('/')
        return
      }
      if(error)
      {
        toast(error,
          {
              position:toast.POSITION.BOTTOM_CENTER,
              type:'error',
              onOpen:()=>{dispatch(clearAuthError)}
          })
          return
      }
    },[error,isAuthenticated,dispatch,navigate])
    return (
        <Fragment>
            <MetaData title={`Register`}/>
            <section className="ftco-section" style={{ background: 'linear-gradient(to left bottom, #d60fc6, #137e30)',}}>
            <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center mb-5 "><br/>
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
                    <form onSubmit={submitHandler} className="signin-form">
                      <div className="form-group mt-3">
                      <label className="form-control-placeholder" htmlFor="name">
                          Full Name (with initials)
                        </label>
                        <input type="text" className="form-control" name="name" onChange={onChange} required />
                        
                      </div>
                      <div className="form-group mt-3">
                      <label className="form-control-placeholder" htmlFor="mail">
                          Email id
                        </label>
                        <input type="email" className="form-control" name="mail" onChange={onChange} required />
                        
                      </div>
                      <div className="form-group mt-3">
                      <label className="form-control-placeholder" htmlFor="gender">
                          Gender
                        </label>
                        <select  name="gender" onInput={onChange}  style={{
                            height: '40px',
                            width: '100%',
                            border: 'solid 2px',
                            borderRadius: '4px',
                            borderColor: '#F2F2F2',
                          }} required>
                          <option name="gender"  value="">Select an option</option>
                          <option name="gender"  value="Male">Male</option>
                          <option name="gender"  value="Female">Female</option>
                          
                        </select>
                        
                        
                      </div>
                      <div className="form-group mt-3">
                      <label className="form-control-placeholder" htmlFor="phone">
                          Phone number
                        </label>
                        <input type="tel" pattern="[0-9]{10}" className="form-control" name="phone" onChange={onChange} required />
                        
                      </div>
                      <div className="form-group mt-3">
                        <label style={{ color: 'white' }}>
                          Choose your College from the dropdown (if not found, type your full College name and sign up)
                        </label>
                        
                        <input
                          list="colleges"                          
                          name="cname"
                          onChange={onChange}
                          style={{
                            height: '40px',
                            width: '100%',
                            border: 'solid 2px',
                            borderRadius: '4px',
                            borderColor: '#F2F2F2',
                            
                          }}
                          required
                        />
                        <datalist id="colleges">
                        <option>	MSEC Sivakasi - Mepco Schlenk Engineering College, Sivakasi	</option>
                        <option>	AcSIR Chennai - Academy of Scientific and Innovative Research, Chennai	</option>
                        <option>	BSAU Chennai - BS Abdur Rahman Crescent Institute of Science and Technology, Chennai	</option>
                        <option>	CIPET Chennai - Central Institute of Petrochemicals Engineering and Technology, Chennai	</option>
                        <option>	CIT Chennai - Chennai Institute of Technology, Chennai	</option>
                        <option>	DCE Chennai - Dhanalakshmi College of Engineering, Chennai	</option>
                        <option>	HIMT College Chennai - Hindustan Institute of Maritime Training, Kalpakkam	</option>
                        <option>	HITS Chennai - Hindustan Institute of Technology and Science, Chennai	</option>
                        <option>	IIITDM Kancheepuram - Indian Institute of Information Technology Design and Manufacturing Kancheepuram	</option>
                        <option>	IIT Madras - Indian Institute of Technology Madras	</option>
                        <option>	IMU Chennai - Indian Maritime University, Chennai	</option>
                        <option>	JBAS College Chennai - Justice Basheer Ahmed Sayeed College for Women, Chennai	</option>
                        <option>	JCE Chennai - Jerusalem College of Engineering, Chennai	</option>
                        <option>	KRMMC Chennai - Kumararani Meena Muthiah College of Arts and Science, Chennai	</option>
                        <option>	LICET Chennai - Loyola-ICAM College of Engineering and Technology, Chennai	</option>
                        <option>	MIT Chennai - Madras Institute of Technology, Chennai	</option>
                        <option>	Madras University - University of Madras, Chennai	</option>
                        <option>	NIFT Chennai - National Institute of Fashion Technology, Chennai	</option>
                        <option>	SDNBVC Chennai - Shrimathi Devkunvar Nanalal Bhatt Vaishnav College for Women, Chennai	</option>
                        <option>	Sathyabama University - Sathyabama Institute of Science and Technology, Chennai	</option>
                        <option>	VEC Chennai - Velammal Engineering College, Chennai	</option>
                        <option>	Vel Tech Chennai - Vel Tech Rangarajan Dr Sagunthala R and D Institute of Science and Technology, Chennai	</option>
                        <option>	Vels University Chennai - Vel's Institute of Science Technology and Advanced Studies, Chennai	</option>
                        <option>	ARM College of Engineering and Technology, Chennai	</option>
                        <option>	Aalim Muhammed Salegh Academy of Architecture, Chennai	</option>
                        <option>	Agurchand Manmull Jain College, Chennai	</option>
                        <option>	Alagappa College of Technology, Chennai	</option>
                        <option>	Alpha Arts and Science College, Chennai	</option>
                        <option>	Amrita Institute of Computer Technology, Chennai	</option>
                        <option>	Amrita School of Engineering, Chennai	</option>
                        <option>	Anand School of Architecture, Chennai	</option>
                        <option>	Anna University, Chennai	</option>
                        <option>	Annai Veilankanni's College of Engineering, Chennai	</option>
                        <option>	Annai Veilankanni's Group of Educational Institutions, Chennai	</option>
                        <option>	Bhaktavatsalam Memorial College for Women, Chennai	</option>
                        <option>	Bharath Institute of Higher Education and Research, Chennai	</option>
                        <option>	CSIR Central Leather Research Institute, Chennai	</option>
                        <option>	Chennai Institute of Technology and Applied Research, Chennai	</option>
                        <option>	CEG Guindy - College of Engineering, Guindy	</option>
                        <option>	DOT School of Design, Chennai	</option>
                        <option>	Davinci School of Design and Architecture, Chennai	</option>
                        <option>	Dr MGR Educational and Research Institute, Chennai	</option>
                        <option>	Easwari Engineering College, Chennai	</option>
                        <option>	Ethiraj College for Women, Chennai	</option>
                        <option>	GKM College of Engineering and Technology, Chennai	</option>
                        <option>	ICAT Design and Media College, Chennai	</option>
                        <option>	Jagannath Institute of Technology, Chennai	</option>
                        <option>	Jawahar Engineering College, Chennai	</option>
                        <option>	Jaya College of Engineering and Technology, Chennai	</option>
                        <option>	Jeppiaar Engineering College, Chennai	</option>
                        <option>	Jeppiaar University, Chennai	</option>
                        <option>	KCG College of Technology, Chennai	</option>
                        <option>	Loyola Institute of Technology, Chennai	</option>
                        <option>	MEASI Academy of Architecture, Chennai	</option>
                        <option>	Madha Engineering College, Chennai	</option>
                        <option>	Madha School of Architecture, Chennai	</option>
                        <option>	Mar Gregorios College of Arts and Science, Chennai	</option>
                        <option>	Meenakshi College of Engineering, Chennai	</option>
                        <option>	Meenakshi Sundararajan Engineering College, Chennai	</option>
                        <option>	Misrimal Navajee Munoth Jain Engineering College, Chennai	</option>
                        <option>	Misrimal Navajee Munoth Jain School of Architecture, Chennai	</option>
                        <option>	Mohamed Sathak AJ Academy of Architecture, Chennai	</option>
                        <option>	Mohamed Sathak AJ College of Engineering, Chennai	</option>
                        <option>	Mohamed Sathak College of Arts and Science, Chennai	</option>
                        <option>	National Institute of Technical Teachers Training and Research, Chennai	</option>
                        <option>	New Prince Shri Bhavani Arts and Science College, Chennai	</option>
                        <option>	New Prince Shri Bhavani College of Engineering and Technology, Chennai	</option>
                        <option>	PMR Engineering College, Chennai	</option>
                        <option>	PRIST School of Engineering and Technology, Chennai	</option>
                        <option>	Panimalar Engineering College, Chennai	</option>
                        <option>	Prince Dr K Vasudevan College of Engineering and Technology, Chennai	</option>
                        <option>	Prince Shri Venkateshwara Arts and Science College, Chennai	</option>
                        <option>	Rajalakshmi Engineering College, Chennai	</option>
                        <option>	Rajalakshmi School of Architecture, Chennai	</option>
                        <option>	SA Engineering College, Chennai	</option>
                        <option>	Sai University, Chennai	</option>
                        <option>	Saveetha College of Architecture and Design, Chennai	</option>
                        <option>	Saveetha Engineering College, Chennai	</option>
                        <option>	Shiv Nadar University, Chennai	</option>
                        <option>	Shree Motilal Kanhaiyalal Fomra Institute of Technology, Chennai	</option>
                        <option>	Southern Academy of Maritime Studies, Thiruvallur	</option>
                        <option>	Sree Sastha College of Engineering, Chennai	</option>
                        <option>	Sree Sastha Institute of Engineering and Technology, Chennai	</option>
                        <option>	Sri Annai Kamakshi Music and Fine Arts College, Chennai	</option>
                        <option>	Sri Krishna Engineering College, Chennai	</option>
                        <option>	Sri Muthukumaran Institute of Technology, Chennai	</option>
                        <option>	Sri Ramachandra Faculty of Engineering and Technology, Chennai	</option>
                        <option>	Sri Sai Ram Engineering College, Chennai	</option>
                        <option>	Sri Sai Ram Institute of Technology, Chennai	</option>
                        <option>	Srinivasa Institute of Engineering and Technology, Thiruvallur	</option>
                        <option>	St Anne's College of Engineering and Technology, Cuddalore	</option>
                        <option>	St Joseph's College of Engineering, Chennai	</option>
                        <option>	St Joseph's Institute of Technology, Chennai	</option>
                        <option>	St Peter's Institute of Higher Education and Research, Chennai	</option>
                        <option>	TJ Institute of Technology, Chennai	</option>
                        <option>	Thangavelu Engineering College, Chennai	</option>
                        <option>	Velammal Institute of Technology, Thiruvallur	</option>

                          
                        </datalist>
                        
                      </div>
                      <div className="form-group mt-3">
                      <label className="form-control-placeholder" htmlFor="ccity">
                           Department and year
                        </label>
                        <input type="text" className="form-control" name="ccity" onChange={onChange} required />
                        
                      </div>
                      <div className="form-group mt-3">
                      <label className="form-control-placeholder" htmlFor="password">
                          Password
                        </label>
                        <input type="password" className="form-control" name="password" onChange={onChange} required />
                        
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
                      </div><br/>
                    </form>
                    <p className="text-center" style={{ fontFamily: 'poppins', color: 'white' }}>
                      Already Signed Up? <Link to="/login" disabled={loading}>Log In</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </section>
        </Fragment>
    );
    
}