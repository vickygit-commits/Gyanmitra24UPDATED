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
                        <option value="Rani Anna Government College for Women, Tirunelveli.">Rani Anna Government College for Women, Tirunelveli.</option>
<option value="Solamalai College of Engineering Madurai">Solamalai College of Engineering Madurai</option>
<option value="Ariyalur Engineering College, Karuppur">Ariyalur Engineering College, Karuppur</option>
<option value="ASL Pauls College of Engineering and Technology, Solavampalayam">ASL Pauls College of Engineering and Technology, Solavampalayam</option>
<option value="Coimbatore Institute of Technology, Avinashi Road">Coimbatore Institute of Technology, Avinashi Road</option>
<option value="Meenakshi Ramaswamy Engineering College, Thathanur">Meenakshi Ramaswamy Engineering College, Thathanur</option>
<option value="Adithya Institute of Technology, Kurumbapalayam">Adithya Institute of Technology, Kurumbapalayam</option>
<option value="Dhaanish Ahmed Institute of Technology, Pichanur">Dhaanish Ahmed Institute of Technology, Pichanur</option>
<option value="Nelliandavar Institute of Technology, Pudhupalayam">Nelliandavar Institute of Technology, Pudhupalayam</option>
<option value="Akshaya College of Engineering and Technology, Kinathukadavu">Akshaya College of Engineering and Technology, Kinathukadavu</option>
<option value="Dhanalakshmi Srinivasan College of Engineering, Navakkarai">Dhanalakshmi Srinivasan College of Engineering, Navakkarai</option>
<option value="Dhanalakshmi Srinivasan College of Engineering, Navakkarai">Dhanalakshmi Srinivasan College of Engineering, Navakkarai</option>
<option value="Dr. Mahalingam College of Engineering Technology, Mackkinaickenpatti">Dr. Mahalingam College of Engineering &amp; Technology, Mackkinaickenpatti</option>
<option value="Arjun College of Technology, Kinathukadavu">Arjun College of Technology, Kinathukadavu</option>
<option value="University College of Engineering, Ariyalur">University College of Engineering, Ariyalur</option>
<option value="Jawahar Engineering College, Saligramam">Jawahar Engineering College, Saligramam</option>
<option value="Asian College of Engineering and Technology, Kondayampalayam">Asian College of Engineering and Technology, Kondayampalayam</option>
<option value=" Dr. N.G.P. Institute of Technology, Kalapatti Road"> Dr. N.G.P. Institute of Technology, Kalapatti Road</option>
<option value=" Loyola-ICAM College of Engineering and Technology, Nungambakkam"> Loyola-ICAM College of Engineering and Technology, Nungambakkam</option>
<option value="CMS College of Engineering and Technology, Kumittipathy"> CMS College of Engineering and Technology, Kumittipathy </option>
<option value="EASA College of Engineering and Technology, Navakkarai"> EASA College of Engineering and Technology, Navakkarai</option>
<option value="Meenakshi College of Engineering, Near Vembuliamman Koil"> Meenakshi College of Engineering, Near Vembuliamman Koil </option>
<option value="Christ The King Engineering College, Karamadai"> Christ The King Engineering College, Karamadai </option>
<option value="Government College of Technology, Thadagam Road"> Government College of Technology, Thadagam Road </option>
<option value=" Meenakshi Sundararajan Engineering College, Kodambakkam"> Meenakshi Sundararajan Engineering College, Kodambakkam</option>
<option value="Coimbatore Institute of Engineering and Technology, Narasipuram">Coimbatore Institute of Engineering and Technology, Narasipuram </option>
<option value=" Hindusthan College of Engineering and Technology, Othakkalmandapam"> Hindusthan College of Engineering and Technology, Othakkalmandapam</option>
<option value=" Hindusthan College of Engineering and Technology, Othakkalmandapam"> Hindusthan College of Engineering and Technology, Othakkalmandapam</option>
<option value=" Indus College of Engineering, Alandurai"> Indus College of Engineering, Alandurai</option>
<option value=" Info Institute of Engineering, Kovilpalayam"> Info Institute of Engineering, Kovilpalayam </option>
<option value=" JCT College of Engineering and Technology, Pichanur"> JCT College of Engineering and Technology, Pichanur</option>
<option value=" Jansons Institute of Technology, Karumathampatti"> Jansons Institute of Technology, Karumathampatti</option>
<option value=" Kalaignar Karunanidhi Institute of Technology, Kannampalayam"> Kalaignar Karunanidhi Institute of Technology, Kannampalayam</option>
<option value=" Kalaivani College of Technology, Palathurai"> Kalaivani College of Technology, Palathurai</option>
<option value=" Karpagam College of Engineering, Othakkal Mandapam"> Karpagam College of Engineering, Othakkal Mandapam</option>
<option value=" Karpagam Institute of Technology, Bodipalyam"> Karpagam Institute of Technology, Bodipalyam</option>
<option value=" Kathir College of Engineering, Neelambur"> Kathir College of Engineering, Neelambur</option>
<option value=" KGiSL Institute of Technology, Saravanampatti"> KGiSL Institute of Technology, Saravanampatti</option>
<option value=" KPR Institute of Engineering and Technology, Kollupalayam"> KPR Institute of Engineering and Technology, Kollupalayam</option>
<option value=" KTVR Knowledge Park for Engineering & Technology, Billichi"> KTVR Knowledge Park for Engineering & Technology, Billichi</option>
<option value=" Kumaraguru College of Technology, Chinnavedampatti"> Kumaraguru College of Technology, Chinnavedampatti</option>
<option value=" Maharaja Institute of Technology, Arasur"> Maharaja Institute of Technology, Arasur</option>
<option value=" Nehru Institute of Engineering and Technology, Thirumalayampalayam "> Nehru Institute of Engineering and Technology, Thirumalayampalayam </option>
<option value=" Nehru Institute of Information Technology and Management, Thirumalayampalayam"> Nehru Institute of Information Technology and Management, Thirumalayampalayam</option>
<option value=" Nehru Institute of Technology, Thirumalayampalayam"> Nehru Institute of Technology, Thirumalayampalayam</option>
<option value=" Nightingale Institute of Technology, Madukkarai"> Nightingale Institute of Technology, Madukkarai</option>
<option value=" P. A. College of Engineering and Technology, Pollachi"> P. A. College of Engineering and Technology, Pollachi</option>
<option value=" PSG College of Technology, Peelamedu"> PSG College of Technology, Peelamedu</option>
<option value=" Park College of Engineering and Technology, Kaniyur"> Park College of Engineering and Technology, Kaniyur</option>
<option value=" Park College of Technology, Karumathampatti"> Park College of Technology, Karumathampatti</option>
<option value=" Pollachi Institute of Engineering and Technology, Poosaripatti"> Pollachi Institute of Engineering and Technology, Poosaripatti</option>
<option value=" Angel College of Engineering and Technology , Ugayanur"> Angel College of Engineering and Technology , Ugayanur</option>
<option value=" Universal College of Engineering & Technology , Vallior"> Universal College of Engineering & Technology , Vallior
</option>
<option value=" The Rajaas Engineering College , Vadakkangulam"> The Rajaas Engineering College , Vadakkangulam
</option>
<option value=" Thamirabharani Engineering College , Chidambara Nagar"> Thamirabharani Engineering College , Chidambara Nagar
</option>
<option value=" Engineering College ,SCAD SCAD Nagar"> Engineering College ,SCAD SCAD Nagar
</option>
<option value=" Raja College of Sardar Engineering , Alangulam"> Raja College of Sardar Engineering , Alangulam
</option>
<option value=" Raja College of Sardar Engineering , Alangulam"> Raja College of Sardar Engineering , Alangulam
</option>
<option value=" S. Veerasamy Chettiar College of Engineeringand Technology, Sivagiri Taluk"> S. Veerasamy Chettiar College of Engineeringand Technology, Sivagiri Taluk
</option>
<option value=" PSN Institute of Technology and Science , Palayamkottai Taluk,"> PSN Institute of Technology and Science , Palayamkottai Taluk,
</option>
<option value=" PSN Engineering College , Melathediyoor"> PSN Engineering College , Melathediyoor
</option>
	
<option value=" PET Engineering College, Vallioor"> PET Engineering College, Vallioor
</option>
<option value=" National College of Engineering , Moondradaippu"> National College of Engineering , Moondradaippu
</option>
<option value=" Mahakavi Bharathiyar College of Engineering and Technology, Naranapuram"> Mahakavi Bharathiyar College of Engineering and Technology, Naranapuram
</option>
<option value=" JOE Suresh Engineering College , Mundradaippu"> JOE Suresh Engineering College , Mundradaippu
</option>
<option value=" J P College of Engineering, Ayikudi"> J P College of Engineering, Ayikudi
</option>
<option value=" Government College of Engineering, Perumalpuram"> Government College of Engineering, Perumalpuram
</option>
<option value=" Francis Xavier Engineering College , Vannarpettai"> Francis Xavier Engineering College , Vannarpettai
</option>
<option value=" Einstein College of Engineering , Sethaparpanallur"> Einstein College of Engineering , Sethaparpanallur
</option>
<option value=" Cape Institute of Technology , Rajakrishnapuram"> Cape Institute of Technology , Rajakrishnapuram
</option>
<option value=" Arul College of Technology ,Radhapuram"> Arul College of Technology ,Radhapuram </option>
<option value=" A.R. College of Engineering and Technology ,Therkkumadathur"> A.R. College of Engineering and Technology ,Therkkumadathur
</option>
<option value=" Vetri Vinayaha College of Engineering and Technology , Tholurpatti"> Vetri Vinayaha College of Engineering and Technology , Tholurpatti
</option>
<option value=" TRP Engineering College , Mannachanallur"> TRP Engineering College , Mannachanallur
</option>
<option value=" Trichy Engineering College , Konalai"> Trichy Engineering College , Konalai
</option>
<option value=" The Selvam Women Excellence Engg. Technology, Nagamangalam"> The Selvam Women Excellence Engg. Technology, Nagamangalam
</option>
<option value=" Sureya College of Engineering , Konalai"> Sureya College of Engineering , Konalai
</option>
<option value=" Shri Angalamman College of Engineering & Technology, Ramanan Nagar"> Shri Angalamman College of Engineering & Technology, Ramanan Nagar
</option>
<option value=" Shivani College of Engineering and Technology , Navallurkuttapattu"> Shivani College of Engineering and Technology , Navallurkuttapattu
</option>
<option value=" Shivani Engineering College , Poolangulathupatti"> Shivani Engineering College , Poolangulathupatti
</option>
<option value=" Saranathan College of Engineering , Venkateswara Nagar"> Saranathan College of Engineering , Venkateswara Nagar
</option>
<option value=" Paventhar Bharathidasan College of Engg &Technology, Thanjai Natarajan Nagar"> Paventhar Bharathidasan College of Engg &Technology, Thanjai Natarajan Nagar
</option>
<option value=" Pavendar Bharathidasan Institute of Information Tech, Mathur"> Pavendar Bharathidasan Institute of Information Tech, Mathur
</option>
<option value=" Oxford Engineering College , Karumandapam"> Oxford Engineering College , Karumandapam
</option>
<option value=" OAS Institute of Technology and Management, Musiri"> OAS Institute of Technology and Management, Musiri
</option>
<option value=" Mahalakshmi Engineering College , Melpathu Village"> Mahalakshmi Engineering College , Melpathu Village
</option>
<option value=" M.I.E.T. Engineering College , Gundur"> M.I.E.T. Engineering College , Gundur
</option>
<option value=" M.A.M. School of Engineering , Siruganur"> M.A.M. School of Engineering , Siruganur
</option>
<option value=" M.A.M. College of Engineering and Technology , Siruganur"> M.A.M. College of Engineering and Technology , Siruganur
</option>
<option value=" M.A.M. College of Engineering , Siruganur"> M.A.M. College of Engineering , Siruganur
</option>
<option value=" Kurinji College of Engineering and Technology , Malaiyadipatty"> Kurinji College of Engineering and Technology , Malaiyadipatty
</option>
<option value=" Kongunadu College of Engineering and Technology , Thottiyam Taluk"> Kongunadu College of Engineering and Technology , Thottiyam Taluk
</option>
<option value=" K. Ramakrishnan College of Technology , Samayapuram"> K. Ramakrishnan College of Technology , Samayapuram
</option>
<option value=" K. Ramakrishnan College of Engineering , Samayapuram"> K. Ramakrishnan College of Engineering , Samayapuram
</option>
<option value=" J.J. College of Engineering and Technology , , Poolangulathupatti"> J.J. College of Engineering and Technology , , Poolangulathupatti
</option>
<option value=" Jayaram College of Engineering and Technology , Pagalavadi"> Jayaram College of Engineering and Technology , Pagalavadi
</option>
<option value=" Indra Ganesan College of Engineering , Manikandam"> Indra Ganesan College of Engineering , Manikandam
</option>
<option value=" PPG Institute of Technology, Saravanampatti"> PPG Institute of Technology, Saravanampatti</option>
<option value=" RVS College of Engineering and Technology , Kannampalayam"> RVS College of Engineering and Technology , Kannampalayam</option>
<option value=" Ranganathan Engineering College , Viraliyur"> Ranganathan Engineering College , Viraliyur
</option>
<option value=" Rathinam Technical Campus , Rathinam Techzone Campus, Eachanari"> Rathinam Technical Campus , Rathinam Techzone Campus, Eachanari </option>
<option value=" Kumaran Kottam Campus, Sulur"> Kumaran Kottam Campus, Sulur, </option>
<option value=" RVS Technical Campus,Coimbatore"> RVS Technical Campus,Coimbatore
</option>
<option value=" Sakthi Institute of Information and Management Studies ,Pollachi"> Sakthi Institute of Information and Management Studies ,Pollachi
</option>
<option value=" Sasurie Academy of Engineering ,kariyampalayam"> Sasurie Academy of Engineering ,kariyampalayam
</option>
<option value=" SNS College of Engineering , Kurumbapalayam"> SNS College of Engineering , Kurumbapalayam
</option>
<option value=" SNS Colege of Technology , Saravanampatti"> SNS Colege of Technology , Saravanampatti
</option>
<option value=" SNT Global Academy of Management Studies andTechnology,Madukkarai"> SNT Global Academy of Management Studies andTechnology,Madukkarai
</option>
<option value=" Sree Sakthi Engineering College , Karamadai"> Sree Sakthi Engineering College , Karamadai
</option>
<option value=" Sri Eshwar College of Engineering ,Kondampatti"> Sri Eshwar College of Engineering ,Kondampatti
</option>
<option value=" Sri Krishna College of Engineering and Technology , Kuniamuthur"> Sri Krishna College of Engineering and Technology , Kuniamuthur
</option>
<option value=" Sri Krishna College of Technology ,Kovaipudur"> Sri Krishna College of Technology ,Kovaipudur
</option>
<option value=" Sri Ramakrishna Engineering College , N.G.G.O Colony"> Sri Ramakrishna Engineering College , N.G.G.O Colony </option>
<option value=" Sri Ramakrishna Institute of Technology , Perur Chettipalayam"> Sri Ramakrishna Institute of Technology , Perur Chettipalayam
</option>
<option value=" Sri Ranganathar Institute of Engineering & Technology, Athipalayam"> Sri Ranganathar Institute of Engineering & Technology, Athipalayam
</option>
<option value=" Sri Shakthi Institute of Engineering and Technology, Chinniyampalayam"> Sri Shakthi Institute of Engineering and Technology, Chinniyampalayam
</option>
<option value=" Sri Venkateswara Institute of Information Technology and Management,Ettimadai"> Sri Venkateswara Institute of Information Technology and Management,Ettimadai
</option>
<option value=" Sriguru Institute of Technology , Kondayampalayam"> Sriguru Institute of Technology , Kondayampalayam
</option>
<option value=" Suguna College of Engineering, Civil Aerodrome"> Suguna College of Engineering, Civil Aerodrome
</option>
<option value=" SVS College of Engineering, Arasampalayam"> SVS College of Engineering, Arasampalayam
</option>
<option value=" Tamilnadu College of Engineering, Karumathampatti"> Tamilnadu College of Engineering, Karumathampatti
</option>
<option value=" Tejaa Shakthi Institute of Technology for Women , Karumathamapatti"> Tejaa Shakthi Institute of Technology for Women , Karumathamapatti
</option>
<option value=" United Institute of Technology , Periyanickenpalayam"> United Institute of Technology , Periyanickenpalayam,
</option>
<option value=" V.S.B. College of Engineering Technical Campus ,Kinathukadavu"> V.S.B. College of Engineering Technical Campus ,Kinathukadavu
</option>
<option value=" Vishnu Lakshmi College of Engineering&Technology Kanjikonampalayam"> Vishnu Lakshmi College of Engineering&Technology, Kanjikonampalayam
 </option>
<option value=" CK College of Engineering and Technology , Chellankuppam"> CK College of Engineering and Technology , Chellankuppam
</option>
<option value=" Dr. Navalar Nedunchezhiyan College of Engineering ,Tholudur"> Dr. Navalar Nedunchezhiyan College of Engineering ,Tholudur
</option>
<option value=" Krishnasamy College of Engineering and Technology ,Maruthathu "> Krishnasamy College of Engineering and Technology ,Maruthathu 
</option>
<option value=" M R K Institute of Technology , Kattumannarkoil"> M R K Institute of Technology , Kattumannarkoil
</option>
<option value=" St. Anne’s College of Engineering and Technology , Siruvathur"> St. Anne’s College of Engineering and Technology , Siruvathur
</option>
<option value=" University College of Engineering, Panruti"> University College of Engineering, Panruti
</option>
<option value=" Jayalakshmi Institute of Technology ,Thoppur"> Jayalakshmi Institute of Technology ,Thoppur
</option>
<option value=" Jayam College of Engineering and Technology , Pennagram"> Jayam College of Engineering and Technology , Pennagram
</option>
<option value=" Sapthagiri College of Engineering , Periyanahalli "> Sapthagiri College of Engineering , Periyanahalli 
</option>
<option value=" Shreenivasa Engineering College , Bommidi"> Shreenivasa Engineering College , Bommidi </option>
<option value=" Varuvan Vadivelan Institute of Technology , Gundalapatty"> Varuvan Vadivelan Institute of Technology , Gundalapatty
</option>
<option value=" SBM College of Engineering and Technology , Thamaraipadi"> SBM College of Engineering and Technology , Thamaraipadi
</option>
<option value=" Veerammal Engineering College , K.Singarakottai"> Veerammal Engineering College , K.Singarakottai
</option>
<option value=" SSM Institute of Engineering and Technology , Sindalagundu"> SSM Institute of Engineering and Technology , Sindalagundu
</option>
<option value=" Jainee College of Engineering & Technology , Panjampatti"> Jainee College of Engineering & Technology , Panjampatti
</option>
<option value=" Sri SubramanyaCollege of Engineering&Technology,Sukkamanaickanpatti"> Sri SubramanyaCollege of Engineering&Technology,Sukkamanaickanpatti
</option>
<option value=" Kodaikanal Institute of Technology , Kodaikanal"> Kodaikanal Institute of Technology , Kodaikanal
</option>
<option value=" Ratnavel Subramaniam College of Engineering and Technology, N.Paraipatti"> Ratnavel Subramaniam College of Engineering and Technology, N.Paraipatti
</option>
<option value=" R.V.S. Educational Trust's Group of Institutions , N.Paraipatti"> R.V.S. Educational Trust's Group of Institutions , N.Paraipatti
</option>
<option value=" University College of Engineering – Dindigul , Reddiar Chattram"> University College of Engineering – Dindigul , Reddiar Chattram
</option>
<option value=" N P R College of Engineering and Technology , Punnapatti"> N P R College of Engineering and Technology , Punnapatti
</option>
<option value=" PSNA College of Engineering and Technology , Muthanampatti"> PSNA College of Engineering and Technology , Muthanampatti </option>
<option value=" Christian College of Engineering and Technology , Oddanchatram"> Christian College of Engineering and Technology , Oddanchatram
</option>
<option value=" Velalar College of Engineering and Technology, Thindal "> Velalar College of Engineering and Technology, Thindal 
</option>
<option value=" Surya Engineering College, Kathirampatti"> Surya Engineering College, Kathirampatti
</option>
<option value=" Nandha Engineering College, Pichandampalayam"> Nandha Engineering College, Pichandampalayam
</option>
<option value=" Aishwarya College of Engineering and Technology, Paruvachi"> Aishwarya College of Engineering and Technology, Paruvachi
</option>
<option value=" Kongu Engineering College, Thoppupalayam"> Kongu Engineering College, Thoppupalayam
</option>
<option value=" M.P.Nachimuthu M.Jaganathan Engineering College, Chennimalai"> M.P.Nachimuthu M.Jaganathan Engineering College, Chennimalai
</option>
<option value=" Nandha College of Technology, Pitchandampalayam"> Nandha College of Technology, Pitchandampalayam
</option>
<option value=" Vidhya Mandhir Institute of Technology, Ingur"> Vidhya Mandhir Institute of Technology, Ingur
</option>
<option value=" Shree Venkateshwara Hi-Tech Engineering College, Mettupalayam"> Shree Venkateshwara Hi-Tech Engineering College, Mettupalayam
</option>
<option value=" Maharaja Engineering College for Women, Perundurai"> Maharaja Engineering College for Women, Perundurai
</option>
<option value=" Bannari Amman Institute of Technology, Alathukombai"> Bannari Amman Institute of Technology, Alathukombai
</option>
<option value=" JKK Munirajah College of Technology, Thookkanickenpalayam"> JKK Munirajah College of Technology, Thookkanickenpalayam
</option>
<option value=" Al-Ameen Engineering College, Karundevanpalayam"> Al-Ameen Engineering College, Karundevanpalayam
</option>
<option value=" Erode Sengunthar Engineering College, Thudupathi"> Erode Sengunthar Engineering College, Thudupathi </option>
<option value=" Institute of Road and Transport Technology, Sri Vasavi College"> Institute of Road and Transport Technology, Sri Vasavi College
</option>
<option value=" St. Joseph's College of Engineering, Old Mamallapuram Road"> St. Joseph's College of Engineering, Old Mamallapuram Road
</option>
<option value=" SRR Engineering College, Jeppiar Nagar"> SRR Engineering College, Jeppiar Nagar
</option>
<option value=" Sri Sai Ram Institute of Technology, West Tambaram"> Sri Sai Ram Institute of Technology, West Tambaram
</option>
<option value=" Sri Lakshmi Ammal Engineering College, Madambakkam"> Sri Lakshmi Ammal Engineering College, Madambakkam
</option>
<option value=" Sri Sai Ram Engineering College, West Tambaram"> Sri Sai Ram Engineering College, West Tambaram
</option>
<option value=" Sri Muthukumaran Institute of Technology, Chikkarayapuram"> Sri Muthukumaran Institute of Technology, Chikkarayapuram
</option>
<option value=" Shree Motilal Kanhaiyalal Fomra Institute of Technology, Thaiyur Village"> Shree Motilal Kanhaiyalal Fomra Institute of Technology, Thaiyur Village
</option>
<option value=" Magna College of Engineering , Redhills"> Magna College of Engineering , Redhills
</option>
<option value=" Kumaran Institute of Technology, Minjur"> Kumaran Institute of Technology, Minjur
</option>
<option value=" John Bosco Engineering College , Tiruvallur Taluk"> John Bosco Engineering College , Tiruvallur Taluk
</option>
<option value=" Jaya Institute of Technology , Kanchipadi"> Jaya Institute of Technology , Kanchipadi
</option>
<option value=" Jaya Suriya Engineering College ,Redhills"> Jaya Suriya Engineering College ,Redhills
</option>
<option value=" Jaya Engineering College , Thiruninravur"> Jaya Engineering College , Thiruninravur
</option>
<option value=" JNN Institute of Engineering , Uthukotai"> JNN Institute of Engineering , Uthukotai
</option>
<option value=" Indira Institute of Engineering & Technology , pandur"> Indira Institute of Engineering & Technology , pandur
</option>
<option value=" GRT Institute of Engineering and Technology , GRT Mahalakshmi Nagar"> GRT Institute of Engineering and Technology , GRT Mahalakshmi Nagar
</option>
<option value=" Gojan School of Business and Technology , Edappalayam"> Gojan School of Business and Technology , Edappalayam
</option>
<option value=" Easwari Engineering College , Ramapuram"> Easwari Engineering College , Ramapuram
</option>
<option value=" Bhajarang Engineering College , Ayathur"> Bhajarang Engineering College , Ayathur
</option>
<option value=" Aalim Muhammed Salegh College of Engineering , Muthapudupet"> Aalim Muhammed Salegh College of Engineering , Muthapudupet
</option>
<option value=" Alpha College of Engineering , Poonamallee"> Alpha College of Engineering , Poonamallee
</option>
<option value=" Sri Ramanathan Engineering College , Nadupatti"> Sri Ramanathan Engineering College , Nadupatti
</option>
<option value=" SCAD Institute of Technology , Palladam"> SCAD Institute of Technology , Palladam
</option>
<option value=" Sasurie College of Engineering , Vijayamangalam"> Sasurie College of Engineering , Vijayamangalam
</option>
<option value=" Professional Group of Institutions, Palladam"> Professional Group of Institutions, Palladam
</option>
<option value=" Maharaja Prithvi Engineering College , Kuppandampalayam"> Maharaja Prithvi Engineering College , Kuppandampalayam
</option>
<option value=" Jay Shriram Group of Institutions ,Avinashipalayam"> Jay Shriram Group of Institutions ,Avinashipalayam
</option>
<option value=" Jairupaa College of Engineering , Kathankanni "> Jairupaa College of Engineering , Kathankanni 
</option>
<option value=" Erode Builder Educational Trust's Group of Institutions , Nathakadaiyur"> Erode Builder Educational Trust's Group of Institutions , Nathakadaiyur
</option>
<option value=" Dr.Nallini Institute of Engineering and Technology , Achiyur"> Dr.Nallini Institute of Engineering and Technology , Achiyur
</option>
<option value=" RRASE College of Engineering, Vanchuvanchery"> RRASE College of Engineering, Vanchuvanchery
</option>
<option value=" Prince Dr. K. Vasudevan College of Engineering, Medavakkam"> Prince Dr. K. Vasudevan College of Engineering, Medavakkam
</option>
<option value=" Prince Shri Venkateshwara Padmavathy Engg. College, Medavakkam"> Prince Shri Venkateshwara Padmavathy Engg. College, Medavakkam
</option>
<option value=" Rajalakshmi Engineering College, Sriperumbudur"> Rajalakshmi Engineering College, Sriperumbudur
</option>
<option value=" Pallava Raja College of Engineering, Kolivakkam"> Pallava Raja College of Engineering, Kolivakkam
</option>
<option value=" Pallavan College of Engineering, Thimmasamudram"> Pallavan College of Engineering, Thimmasamudram
</option>
<option value=" P.T.Lee Chengalvaraya Naicker College of Engineering & Technology,Veliyur"> P.T.Lee Chengalvaraya Naicker College of Engineering & Technology,Veliyur
</option>
<option value=" Misrimal Navajee Munoth Jain Engineering College, Thorapakkam"> Misrimal Navajee Munoth Jain Engineering College, Thorapakkam
</option>
<option value=" P.B. College of Engineering, Sriperumpudur"> P.B. College of Engineering, Sriperumpudur
</option>
<option value=" Mohammed Sathak A.J. College of Engineering, Siruseri"> Mohammed Sathak A.J. College of Engineering, Siruseri
</option>
<option value=" Kings Engineering College, Sriperumbudur"> Kings Engineering College, Sriperumbudur
</option>
<option value=" Lord Ayyappa Institute of Engineering and Technology, Uthukadu"> Lord Ayyappa Institute of Engineering and Technology, Uthukadu
</option>
<option value=" Maamallan Institute of Technology, Sriperumpudur"> Maamallan Institute of Technology, Sriperumpudur
</option>
<option value=" Lord Venkateshwara Engineering College, Puliyambakkam"> Lord Venkateshwara Engineering College, Puliyambakkam
</option>
<option value=" Loyola Institute of Technology, Palanchur"> Loyola Institute of Technology, Palanchur
</option>
<option value=" K.C.G. college of Technology, Karapakkam"> K.C.G. college of Technology, Karapakkam
</option>
<option value=" The New Royal College of Engineering & Technology, Mamallapuram"> The New Royal College of Engineering & Technology, Mamallapuram
</option>
<option value=" A.C.T. College of Engineering and Technology, Maduranthagam"> A.C.T. College of Engineering and Technology, Maduranthagam
</option>
<option value=" St. Joseph’s Institute of Technology, Old Mamallapuram"> St. Joseph’s Institute of Technology, Old Mamallapuram
</option>
<option value=" Kanchi Pallavan Engineering College, Iyyangarkulam"> Kanchi Pallavan Engineering College, Iyyangarkulam
</option>
<option value=" G.K.M. College of Engineering and Technology, Perungalathur"> G.K.M. College of Engineering and Technology, Perungalathur
</option>
<option value=" Dhanalakshmi Srinivasan Business School, Mamallapuram"> Dhanalakshmi Srinivasan Business School, Mamallapuram
</option>
<option value=" Sri Sivasubramaniya Nadar College of Engineering, Thiruporur"> Sri Sivasubramaniya Nadar College of Engineering, Thiruporur
</option>
<option value=" Sri Krishna Institute of Technology,  Padappai"> Sri Krishna Institute of Technology,  Padappai
</option>
<option value=" Gopal Ramalingam Memorial Engineering College, Padappai"> Gopal Ramalingam Memorial Engineering College, Padappai
</option>
<option value=" Sri Krishna Engineering College, Serpanancherry"> Sri Krishna Engineering College, Serpanancherry
</option>
<option value=" Shri Andal Alagar College of Engineering, Maduranthagam"> Shri Andal Alagar College of Engineering, Maduranthagam
</option>
<option value=" Rajiv Gandhi College of Engineering, Sriperumbudur"> Rajiv Gandhi College of Engineering, Sriperumbudur
</option>
<option value=" Sakthi Mariamman Engineering College, Sriperumbudur"> Sakthi Mariamman Engineering College, Sriperumbudur
</option>
<option value=" Saveetha Engineering College, Sriperumbur"> Saveetha Engineering College, Sriperumbur
</option>
<option value=" Dhanalakshmi Srinivasan College of Engineering, Mamallapuram"> Dhanalakshmi Srinivasan College of Engineering, Mamallapuram
</option>
<option value=" Dhanalakshmi College of Engineering, Sriperumpudur"> Dhanalakshmi College of Engineering, Sriperumpudur
</option>
<option value=" Madha Institute of Engineering and Technology, Sadhanathapuram"> Madha Institute of Engineering and Technology, Sadhanathapuram
</option>
<option value=" PERI Institute of Technology, Chengalpattu"> PERI Institute of Technology, Chengalpattu
</option>
<option value=" New Prince Shri Bhavani College of Engineering, Gowrivakkam"> New Prince Shri Bhavani College of Engineering, Gowrivakkam
</option>
<option value=" Karpaga Vinayaga College of Engineering & Technology, Maduranthagam"> Karpaga Vinayaga College of Engineering & Technology, Maduranthagam
</option>
<option value=" Madha Engineering College, Kundrathur"> Madha Engineering College, Kundrathur
</option>
<option value=" Kalsar college of Engineering, Sriperumpudur"> Kalsar college of Engineering, Sriperumpudur
</option>
<option value=" Dhaanish Ahmed College of Engineering, Sriperumpudur"> Dhaanish Ahmed College of Engineering, Sriperumpudur
</option>
<option value=" Jeppiaar Engineering College, Sholinganallur"> Jeppiaar Engineering College, Sholinganallur
</option>
<option value=" Jerusalem College of Engineering, Pallikkaranai"> Jerusalem College of Engineering, Pallikkaranai
</option>
<option value=" Jei Mathaajee College of Engineering, Vishakandikuppam"> Jei Mathaajee College of Engineering, Vishakandikuppam
</option>
<option value=" Asan Memorial College of Engineering and Technology, Chengalpattu"> Asan Memorial College of Engineering and Technology, Chengalpattu
</option>
<option value=" Apollo Priyadarshanam Institute of Technology, Oragadam"> Apollo Priyadarshanam Institute of Technology, Oragadam
</option>
<option value=" ARS College of Engineering, Maraimalai"> ARS College of Engineering, Maraimalai
</option>
<option value=" D.M.I. College of Engineering, Sriperumpudur"> D.M.I. College of Engineering, Sriperumpudur
</option>
<option value=" Chendu College of Engineering & Technology, Maduranthagam"> Chendu College of Engineering & Technology, Maduranthagam
</option>
<option value=" Chennai Institute of Technology, Kundrathur"> Chennai Institute of Technology, Kundrathur
</option>
<option value=" Balaji Institute of Engineering and Technology, Thiruporur"> Balaji Institute of Engineering and Technology, Thiruporur</option>
<option value=" ARM College of Engineering and Technology, Chengalpattu"> ARM College of Engineering and Technology, Chengalpattu
</option>
<option value=" Aksheyaa College of Engineering, Madurantagam"> Aksheyaa College of Engineering, Madurantagam
</option>
<option value=" Apollo Engineering College, Sriperumbudur"> Apollo Engineering College, Sriperumbudur
</option>
<option value=" Annai Veilankanni’s College of Engineering, Nedungundram"> Annai Veilankanni’s College of Engineering, Nedungundram
</option>
<option value=" Arignar Anna Institute of Science and Technology, Sriperumpudur"> Arignar Anna Institute of Science and Technology, Sriperumpudur
</option>
<option value=" Anand Institute of Higher Technology, Kazhipattur"> Anand Institute of Higher Technology, Kazhipattur
</option>
<option value=" Adhi College of Engineering and Technology, Sankarapuram"> Adhi College of Engineering and Technology, Sankarapuram
</option>
<option value=" Agni College of Technology, Thalambur"> Agni College of Technology, Thalambur
</option>
<option value=" Adhiparasakthi Engineering College, Cheyyur"> Adhiparasakthi Engineering College, Cheyyur
</option>
<option value=" Valliammai Engineering College, Chengalpattu"> Valliammai Engineering College, Chengalpattu
</option>
<option value=" Thirumalai Engineering College, Krishnapuram"> Thirumalai Engineering College, Krishnapuram
</option>
<option value=" University College of Engineering, Kancheepuram"> University College of Engineering, Kancheepuram
</option>
<option value=" Vi Institute of Technology, Chengalpattu"> Vi Institute of Technology, Chengalpattu
</option>
<option value=" Sri Ramanujar Engineering College , Vandalur"> Sri Ramanujar Engineering College , Vandalur
</option>
<option value=" Sri Venkateswaraa College of Technology , Sriperumbudur"> Sri Venkateswaraa College of Technology , Sriperumbudur
</option>
<option value=" Sri Venkateswara College of Engineering , Sriperumbudur"> Sri Venkateswara College of Engineering , Sriperumbudur
</option>
<option value=" St. Joseph College of Engineering, Sriperumbudur"> St. Joseph College of Engineering, Sriperumbudur
</option>
<option value=" T.J. Institute of Technology , Karapakkam"> T.J. Institute of Technology , Karapakkam
</option>
<option value=" Tagore Engineering College , Rathinamangalam"> Tagore Engineering College , Rathinamangalam
</option>
<option value=" Thangavelu Engineering College , Karapakkam"> Thangavelu Engineering College , Karapakkam
</option>
<option value=" VINS Christian Women’s College of Engineering, Villukuri"> VINS Christian Women’s College of Engineering, Villukuri
</option>
<option value=" VINS Christian College of Engineering, Villukuri"> VINS Christian College of Engineering, Villukuri
</option>
<option value=" Annai Vailankanni College of Engineering, Azhagappapuram"> Annai Vailankanni College of Engineering, Azhagappapuram
</option>
<option value=" A.K.T.Memorial College of Engineering & Technology , Kallakurichi"> A.K.T.Memorial College of Engineering & Technology , Kallakurichi
</option>
<option value=" Thanthai Periyar Govt Institute of Technology , Bagayam "> Thanthai Periyar Govt Institute of Technology , Bagayam 
</option>
<option value=" Sri Nandhanam College of Engineering & Technology,  Tirupattur"> Sri Nandhanam College of Engineering & Technology,  Tirupattur
</option>
<option value=" Sri Krishna College of Engineering , Arakkonam"> Sri Krishna College of Engineering , Arakkonam
</option>
<option value=" Sree Krishna College of Engineering , Unnai"> Sree Krishna College of Engineering , Unnai
</option>
<option value=" Shri Sapthagiri Institute of Technology , Arakkonam"> Shri Sapthagiri Institute of Technology , Arakkonam
</option>
<option value=" Saraswathi Velu College of Engineering , Katrambakkam"> Saraswathi Velu College of Engineering , Katrambakkam
</option>
<option value=" Ranipettai Engineering College , Thenkadappanthangal"> Ranipettai Engineering College , Thenkadappanthangal
</option>
<option value=" Priyadarshini Engineering College , Vaniyambadi"> Priyadarshini Engineering College , Vaniyambadi
</option>
<option value=" Podhigai College of Engineering & Technology , Tirupattur"> Podhigai College of Engineering & Technology , Tirupattur
</option>
<option value=" Kingston Engineering College , Katpadi"> Kingston Engineering College , Katpadi
</option>
<option value=" Global Institute of Engineering & Technology ,  Melvisharam"> Global Institute of Engineering & Technology ,  Melvisharam
</option>
<option value=" G.G.R. College of Engineering ,  Pillayarkuppam"> G.G.R. College of Engineering ,  Pillayarkuppam
</option>
<option value=" Ganadipathy Tulsi's Jain Engineering College , Kaniyambadi"> Ganadipathy Tulsi's Jain Engineering College , Kaniyambadi
</option>
<option value=" C. Abdul Hakeem College of Engineering & Technology, Melvisharam"> C. Abdul Hakeem College of Engineering & Technology, Melvisharam
</option>
<option value=" Bharathidasan Engineering College , Nattrampalli "> Bharathidasan Engineering College , Nattrampalli 
</option>
<option value=" Annai Mira College of Engineering and Technology , Arappakkam"> Annai Mira College of Engineering and Technology , Arappakkam
</option>
<option value=" Adhiparasakthi College of Engineering"> Adhiparasakthi College of Engineering </option>
<option value=" Adhiparasakthi College of Engineering , Arcot"> Adhiparasakthi College of Engineering , Arcot
</option>
<option value=" V V College of Engineering , Sattankulam"> V V College of Engineering , Sattankulam
</option>
<option value=" University VOC College of Engineering, Bryant Nagar"> University VOC College of Engineering, Bryant Nagar </option>
<option value=" Unnamalai Institute of Technology , Kovilpatti"> Unnamalai Institute of Technology , Kovilpatti
</option>
<option value="St. Mother Theresa Engineering College, Srivaikundam"> 
St. Mother Theresa Engineering College, Srivaikundam
</option>
<option value=" National Engineering College , Kovilpatti"> National Engineering College , Kovilpatti
</option>
<option value=" Jayaraj Annapackiam CSI College of Engineering , Nazareth"> Jayaraj Annapackiam CSI College of Engineering , Nazareth
</option>
<option value="Infant Jesus College of Engineering and Technology , Keelavallanadu"> 
Infant Jesus College of Engineering and Technology , Keelavallanadu
</option>
<option value="Infant Jesus College of Engineering , Keelavallanadu"> Infant Jesus College of Engineering , Keelavallanadu
</option>
<option value="Holy Cross Engineering College , Thannoothu"> Holy Cross Engineering College , Thannoothu
</option>
<option value=" Dr. Sivanthi Aditanar College of Engineering , Tiruchendur"> Dr. Sivanthi Aditanar College of Engineering , Tiruchendur
</option>
<option value=" Dr. G.U. Pope College of Engineering , Sawyerpuram"> Dr. G.U. Pope College of Engineering , Sawyerpuram
</option>
<option value=" Chandy College of Engineering , Mullakkadu"> Chandy College of Engineering , Mullakkadu
</option>
<option value=" Anjalai Ammal Mahalingam Engineering College ,  Needamangalam"> Anjalai Ammal Mahalingam Engineering College ,  Needamangalam
</option>
<option value=" A.R.J. College of Engineering and Technology , Mannarkudi"> A.R.J. College of Engineering and Technology , Mannarkudi </option>
<option value="University College of Engineering – Thatchur"> 
University College of Engineering – Thatchur
</option>
<option value=" Thiruvalluvar College of Engineering and Technology ,  Vandavasi"> Thiruvalluvar College of Engineering and Technology ,  Vandavasi
</option>
<option value=" Sri Ramana Maharishi College of Engineering , Cheyyar"> Sri Ramana Maharishi College of Engineering , Cheyyar
</option>
<option value=" Sri Balaji Chockalingam Engineering College , Irumbedu"> Sri Balaji Chockalingam Engineering College , Irumbedu
</option>
<option value=" S.R.I. College of Engineering & Technology , Vandavasi"> S.R.I. College of Engineering & Technology , Vandavasi
</option>
<option value=" S.K.P. Institute of Technology , Somasipadi"> S.K.P. Institute of Technology , Somasipadi
</option>
<option value=" S.K.P Engineering College , Somasipadi"> S.K.P Engineering College , Somasipadi
</option>
<option value=" Oxford College of Engineering , Polur"> Oxford College of Engineering , Polur
</option>
<option value=" KRS College of Engineering , Vandavasi"> KRS College of Engineering , Vandavasi
</option>
<option value=" Arunai College of Engineering , Thenmathur"> Arunai College of Engineering , Thenmathur
</option>
<option value=" Arunai Engineering College , Thenmathur "> Arunai Engineering College , Thenmathur 
</option>
<option value=" Arulmigu Meenakshi Amman College of Engineering , Cheyyar"> Arulmigu Meenakshi Amman College of Engineering , Cheyyar
</option>
<option value=" Annamalaiar College of Engineering, Chetpet"> Annamalaiar College of Engineering, Chetpet
</option>
<option value=" Vel Tech  , Avadi"> Vel Tech  , Avadi
</option>
<option value=" Velammal Institute of Technology, Ponneri"> Velammal Institute of Technology, Ponneri
</option>
<option value=" Velammal Engineering College , Ambattur"> Velammal Engineering College , Ambattur </option>
<option value=" VelTech MultiTech Dr. Rangarajan Dr. Sakunthala, Ambattur"> 
VelTech MultiTech Dr. Rangarajan Dr. Sakunthala, Ambattur
</option>
<option value=" VelTech HighTech Dr. Rangarajan Dr. Sakunthala, Ambattur"> 
VelTech HighTech Dr. Rangarajan Dr. Sakunthala, Ambattur
</option>
<option value=" T.J.S. Engineering College , Gummidipoondi"> T.J.S. Engineering College , Gummidipoondi
</option>
<option value=" St. Peter's College of Engineering and Technology , Avadi"> St. Peter's College of Engineering and Technology , Avadi
</option>
<option value=" Srinivasa Institute of Engineering and Technology , Parivakkam"> Srinivasa Institute of Engineering and Technology , Parivakkam
</option>
<option value=" Sri Venkateswara Institute of Science and Technology , Thiruvallur"> Sri Venkateswara Institute of Science and Technology , Thiruvallur
</option>
<option value=" Sri Venkateswara College of Engineering & Technology, Thiruvallur"> Sri Venkateswara College of Engineering & Technology, Thiruvallur
</option>
<option value=" Sri Ram Engineering College , Veppampattu"> Sri Ram Engineering College , Veppampattu
</option>
<option value=" Sree Sastha Institute of Engineering and Technology , Chembarambakkam"> Sree Sastha Institute of Engineering and Technology , Chembarambakkam
</option>
<option value=" Sree Sastha College of Engineering , Chembarambakkam"> Sree Sastha College of Engineering , Chembarambakkam
</option>
<option value=" Siva Institute of Frontier Technology, Tiruvallur"> Siva Institute of Frontier Technology, Tiruvallur
</option>
<option value=" SAMS College of Engineering & Technology , Uthukotai"> SAMS College of Engineering & Technology , Uthukotai
</option>
<option value=" Sakthi Engineering College , Thiruninravur"> Sakthi Engineering College , Thiruninravur
</option>
<option value=" SKR Engineering College ,  Poonamallee"> SKR Engineering College ,  Poonamallee
</option>
<option value=" S.A. Engineering College , Thiruverkadu"> S.A. Engineering College , Thiruverkadu
</option>
<option value=" R.V.S. Padhmavathy College of Engineering, Gummidipoondi"> R.V.S. Padhmavathy College of Engineering, Gummidipoondi
</option>
<option value=" Rajalakshmi Institute of Technology , Sriperumpudur"> Rajalakshmi Institute of Technology , Sriperumpudur
</option>
<option value=" R.M.K. Engineering College , Gummidipoondi"> R.M.K. Engineering College , Gummidipoondi
</option>
<option value=" R.M.K. College of Engineering and Technology , Puduvoyal"> R.M.K. College of Engineering and Technology , Puduvoyal
</option>
<option value=" R.M.D. Engineering College , Gummidipoondi"> R.M.D. Engineering College , Gummidipoondi
</option>
<option value=" Prathyusha Institute of Technology and Management , Poonamallee"> Prathyusha Institute of Technology and Management , Poonamallee
</option>
<option value=" Panimalar Institute of Technology , Poonamallee"> Panimalar Institute of Technology , Poonamallee
</option>
<option value=" Panimalar Engineering College , Poonamallee"> Panimalar Engineering College , Poonamallee
</option>
<option value=" PMR Engineering College , Ambattur"> PMR Engineering College , Ambattur
</option>
<option value=" MIT Campus, Chromepet  "> MIT Campus, Chromepet  
</option>
<option value=" A.C.College of Engineering and Technology,  Guindy"> A.C.College of Engineering and Technology,  Guindy </option>
<option value=" VIT University, Vandalur"> VIT University, Vandalur
</option>
<option value=" National Institute of Technology, Tanjore"> National Institute of Technology, Tanjore
</option>
<option value=" Amrita Vishwa Vidyapeetham, Amritanagar"> Amrita Vishwa Vidyapeetham, Amritanagar
</option>
<option value=" VIT	University,Vellore"> VIT University,Vellore													</option>
<option value=" Anna University, Guindy"> Anna University, Guindy </option>
<option value=" THE MADURA COLLEGE, VIDHYA NAGAR"> THE MADURA COLLEGE, VIDHYA NAGAR
</option>
<option value="THIAGARAJAR SCHOOL OF MANAGEMENT, THIRUPARANKUNDRAM"> 
THIAGARAJAR SCHOOL OF MANAGEMENT, THIRUPARANKUNDRAM
</option>
<option value="HOLY CROSS COLLEGE (AUTONOMOUS), TEPPAKULAM"> 
HOLY CROSS COLLEGE (AUTONOMOUS), TEPPAKULAM
</option>
<option value="PANNAIKADU VEERAMMAL PARAMASIVAM, SINGARAKOTTAI"> 
PANNAIKADU VEERAMMAL PARAMASIVAM, SINGARAKOTTAI
</option>
<option value="R.V.S. SCHOOL OF ENGINEERING AND TECHNOLOGY , R.V.S NAGAR"> 
R.V.S. SCHOOL OF ENGINEERING AND TECHNOLOGY , R.V.S NAGAR
</option>
<option value=" ANNA UNIVERSITY ,TIRUCHIRAPPALLI"> ANNA UNIVERSITY ,TIRUCHIRAPPALLI
</option>
<option value="ST. XAVIER'S COLLEGE, PALAYAMKOTTAI"> 
ST. XAVIER'S COLLEGE, PALAYAMKOTTAI
</option>
<option value=" TIRUNELVELI MEDICAL COLLEGE, TIRUNELVELI"> TIRUNELVELI MEDICAL COLLEGE, TIRUNELVELI
</option>
<option value=" AYYA NADAR JANAKI AMMAL COLLEGE(AUTONOMOUS), SIVAKASI"> AYYA NADAR JANAKI AMMAL COLLEGE(AUTONOMOUS), SIVAKASI
</option>
<option value="V.H.N.S.N. COLLEGE,VIRUDHUNAGAR"> 
V.H.N.S.N. COLLEGE,
VIRUDHUNAGAR
</option>
<option value=" St. Xavier’s Catholic College of Engineering,Kalkulam Taluk"> St. Xavier’s Catholic College of Engineering,Kalkulam Taluk
</option>
<option value=" Narayanaguru College of Engineering,Vilavancode Taluk"> Narayanaguru College of Engineering,Vilavancode Taluk
</option>
<option value=" James College of Engineering and Technology,Navalkadu"> James College of Engineering and Technology,Navalkadu
</option>
<option value=" Satyam College of Engineering and Technology,Thovalai Taluk"> Satyam College of Engineering and Technology,Thovalai Taluk
</option>
<option value=" C.S.I. Institute of Technology,Thovalai"> C.S.I. Institute of Technology,Thovalai
</option>
<option value=" Lourdes Mount College of Engineering and Technology,Mullanganavilai"> Lourdes Mount College of Engineering and Technology,Mullanganavilai
</option>
<option value=" Sivaji College of Engineering and Technology,Vilavancode Taluk"> Sivaji College of Engineering and Technology,Vilavancode Taluk
</option>
<option value=" Marthandam College of Engineering and Technology,Kuttakuzhi"> Marthandam College of Engineering and Technology,Kuttakuzhi
</option>
<option value=" Lord Jegannath College of Engineering and Technology,Kumarapuram"> Lord Jegannath College of Engineering and Technology,Kumarapuram
</option>
<option value=" Udaya School of Engineering,Kalkulam Taluk"> Udaya School of Engineering,Kalkulam Taluk
</option>
<option value=" Ponjesly College of Engineering,Parvathipuram"> Ponjesly College of Engineering,Parvathipuram
</option>
<option value=" Arunachala College of Engineering for Women,Vellichanthai"> Arunachala College of Engineering for Women,Vellichanthai
</option>
<option value=" Sun College of Engineering and Technology,Thovalai"> Sun College of Engineering and Technology,Thovalai
</option>
<option value=" Stella Mary’s College of Engineering,Arutheganvilai"> Stella Mary’s College of Engineering,Arutheganvilai
</option>
<option value=" K N S K College of Engineering,Thirupathisaram"> K N S K College of Engineering,Thirupathisaram </option>
<option value=" Maria College of Engineering and Technology,Kalkulam Taluk"> Maria College of Engineering and Technology,Kalkulam Taluk
</option>
<option value=" Tamizhan College of Engineering and Technology,Thovalai"> Tamizhan College of Engineering and Technology,Thovalai
</option>
<option value=" M.E.T. Engineering College,Thovalai Village"> M.E.T. Engineering College,Thovalai Village
</option>
<option value=" Rohini College of Engineering & Technology,Paalkulam"> Rohini College of Engineering & Technology,Paalkulam
</option>
<option value=" University College of Engineering, Nagercoil,Konam"> University College of Engineering, Nagercoil,Konam
</option>
<option value=" Loyola Institute of Technology and Science,Thovalai"> Loyola Institute of Technology and Science,Thovalai
</option>
<option value=" Rajas International Institute of Technology for Women,Ozhuginasery"> Rajas International Institute of Technology for Women,Ozhuginasery
</option>
<option value=" MAR Ephraem College of Engineering & Technology,Elavuvilai"> MAR Ephraem College of Engineering & Technology,Elavuvilai
</option>
<option value=" Immanuel Arasar J J College of Engineering,Nattalam"> Immanuel Arasar J J College of Engineering,Nattalam
</option>
<option value=" Bethlahem Institute of Engineering,Vilavancode Taluk"> Bethlahem Institute of Engineering,Vilavancode Taluk
</option>
<option value=" M.Kumarasamy College of Engineering,Thalavapalayam"> M.Kumarasamy College of Engineering,Thalavapalayam
</option>
<option value=" P.S.V. College of Engineering and Technology,Balinayanapalli"> P.S.V. College of Engineering and Technology,Balinayanapalli
</option>
<option value=" DMI Engineering College,Thovalai"> DMI Engineering College,Thovalai
</option>
<option value=" Chettinad College of Engineering and Technology,Karur"> Chettinad College of Engineering and Technology,Karur
</option>
<option value=" Adhiyamaan College of Engineering,Hosur"> Adhiyamaan College of Engineering,Hosur
</option>
<option value=" M.Kumarasamy College of Engineering (M&T),Thalavapalayam"> M.Kumarasamy College of Engineering (M&T),Thalavapalayam
</option>
<option value=" VKS College of Engineering and Technology,Chinnaiyampalayam"> VKS College of Engineering and Technology,Chinnaiyampalayam
</option>
<option value=" P.T.R. College of Engineering and Technology ,Austinpatti"> P.T.R. College of Engineering and Technology ,Austinpatti
</option>
<option value=" N.S.N. College of Engineering and Technology,Thalapatti"> N.S.N. College of Engineering and Technology,Thalapatti
</option>
<option value=" Hosur Institute of Technology and Science,Beerpalli"> Hosur Institute of Technology and Science,Beerpalli
</option>
<option value=" Vickram College of Engineering,Thirumansolai"> Vickram College of Engineering,Thirumansolai
</option>
<option value=" Cheran College of Engineering,Cheran Nagar"> Cheran College of Engineering,Cheran Nagar
</option>
<option value=" Er. PerumalManimekalai College of Engineering,Nalaganakothapalli"> Er. PerumalManimekalai College of Engineering,Nalaganakothapalli
</option>
<option value=" LathaMathavan Engineering College ,Kidari Patti"> LathaMathavan Engineering College ,Kidari Patti
</option>
<option value=" Arulmurugan College of Engineering,Aravakuruchi Taluk"> Arulmurugan College of Engineering,Aravakuruchi Taluk
</option>
<option value=" Government College of Engineering,Madepalli"> Government College of Engineering,Madepalli
</option>
<option value=" SACS M.A.V.M.M. Engineering College,Kidaripatty"> SACS M.A.V.M.M. Engineering College,Kidaripatty
</option>
<option value=" V.S.B. Engineering College,Karudayampalayam Village"> V.S.B. Engineering College,Karudayampalayam Village
</option>
<option value=" Archana Institute of Technology,Thimmapuram"> Archana Institute of Technology,Thimmapuram </option>
<option value=" ULTRA College of Engineering andTechnology for Women,Ultra Nagar"> ULTRA College of Engineering andTechnology for Women,Ultra Nagar
</option>
<option value=" Karur College of Engineering,Athur"> Karur College of Engineering,Athur
</option>
<option value=" Sri Venkateshwara Institute of Engineering,Hosur"> Sri Venkateshwara Institute of Engineering,Hosur
</option>
<option value=" Raja College of Engineering and Technology ,Veerapanjan"> Raja College of Engineering and Technology ,Veerapanjan
</option>
<option value=" Thiagarajar College of Engineering ,Thirupparankundram"> Thiagarajar College of Engineering ,Thirupparankundram
</option>
<option value=" Sir Issac Newton College of Engg and Technology,Andhanapeta"> Sir Issac Newton College of Engg and Technology,Andhanapeta
</option>
<option value=" Pavai College of Technology ,Pachal"> Pavai College of Technology ,Pachal
</option>
<option value=" Vaigai College of Engineering ,Melur Taluk"> Vaigai College of Engineering ,Melur Taluk
</option>
<option value=" Haji Sheik Ismail Engineering College ,Thirukkuvalai Taluk"> Haji Sheik Ismail Engineering College ,Thirukkuvalai Taluk
</option>
<option value=" Sengunthar Engineering College ,Kumaramangalam"> Sengunthar Engineering College ,Kumaramangalam
</option>
<option value=" Velammal College of Engineering and Technology ,Viraganoor"> Velammal College of Engineering and Technology ,Viraganoor
</option>
<option value=" E.G.S. Pillay Engineering College ,Nagore"> E.G.S. Pillay Engineering College ,Nagore
</option>
<option value=" Paavai Engineering College , Pachal"> Paavai Engineering College , Pachal
</option>
<option value=" C.R. Engineering College , Valayapatti"> C.R. Engineering College , Valayapatti
</option>
<option value=" A.V.C. College of Engineering , Mayiladuthurai Taluk"> A.V.C. College of Engineering , Mayiladuthurai Taluk
</option>
<option value=" PGP College of Engineering and Technology , Paramathi Velur"> PGP College of Engineering and Technology , Paramathi Velur
</option>
<option value=" Mangayarkarasi College of Engineering, Paravai"> Mangayarkarasi College of Engineering, Paravai
</option>
<option value=" Vivekanandha Institute of Engineering and Technology for Women, Elayampalayam"> Vivekanandha Institute of Engineering and Technology for Women, Elayampalayam
</option>
<option value=" King College of Technology , N.Pudupatty"> King College of Technology , N.Pudupatty
</option>
<option value=" Fathima Michael College of Engineering & Technology , Kalimangalam Panchayat"> Fathima Michael College of Engineering & Technology , Kalimangalam Panchayat
</option>
<option value=" Vivekanandha College of Engineering for Women, Elayampalayam"> Vivekanandha College of Engineering for Women, Elayampalayam
</option>
<option value=" K S R Institute for Engineering and Technology , Thokkavadi"> K S R Institute for Engineering and Technology , Thokkavadi
</option>
<option value=" University College of Engineering, Thirukkuvalai"> University College of Engineering, Thirukkuvalai
</option>
<option value=" Vidyaa Vikas College of Engineering and Technology , Koottappalli"> Vidyaa Vikas College of Engineering and Technology , Koottappalli
</option>
<option value=" Selvam College of Technology , Pappinaickenpatti"> Selvam College of Technology , Pappinaickenpatti
</option>
<option value=" Sembodai Rukmani Varatharajan Engineering College, Vedaraniam"> Sembodai Rukmani Varatharajan Engineering College, Vedaraniam
</option>
<option value=" Vivekanandha Institute of Information and Management Studies , Elayampalayam"> Vivekanandha Institute of Information and Management Studies , Elayampalayam
</option>
<option value=" Paavaai Group of Institutions , Puduchatram"> Paavaai Group of Institutions , Puduchatram
</option>
<option value="K.S.Rangasamy College of Technology, Thokkavadi"> K.S.Rangasamy College of Technology, Thokkavadi</option>
<option value=" J.K.K.Nattraja College of Engineering and Technology, Komarapalayam"> J.K.K.Nattraja College of Engineering and Technology, Komarapalayam
</option>
<option value=" Gnanamani College of Technology , Pachal"> Gnanamani College of Technology , Pachal
</option>
<option value=" Muthayammal Engineering College , Kakkaveri"> Muthayammal Engineering College , Kakkaveri
</option>
<option value=" Vivekanandha College of Technology for Women, Elayampalayam"> Vivekanandha College of Technology for Women, Elayampalayam
</option>
<option value=" Excel College of Engineering and Technology, Sankari West"> Excel College of Engineering and Technology, Sankari West
</option>
<option value=" K S R College of Engineering, Thokkavadi"> K S R College of Engineering, Thokkavadi
</option>
<option value=" Paavai College of Engineering, Pachal"> Paavai College of Engineering, Pachal
</option>
<option value=" CMS College of Engineering, Eranapuram"> CMS College of Engineering, Eranapuram
</option>
<option value=" Mahendra Institute of Engineering and Technology, Vadugapalayam"> Mahendra Institute of Engineering and Technology, Vadugapalayam </option>
<option value=" Mahendra Engineering College, Vadugapalayam"> Mahendra Engineering College, Vadugapalayam
</option>
<option value=" Dr.Nagarathinam's College of Engineering, Minnakkal"> Dr.Nagarathinam's College of Engineering, Minnakkal
</option>
<option value=" Mahendra Institute of Technology , Vadugapalayam"> Mahendra Institute of Technology , Vadugapalayam
</option>
<option value=" Muthayammal College of Engineering, Kakkaveri"> Muthayammal College of Engineering, Kakkaveri
</option>
<option value=" Annai Mathammal Sheela Engineering College, Erumapatti"> Annai Mathammal Sheela Engineering College, Erumapatti
</option>
<option value=" Mahendra Engineering College for Women, Kumaramangalam"> Mahendra Engineering College for Women, Kumaramangalam
</option>
<option value=" Muthayammal Engineering College, Kakkaveri"> Muthayammal Engineering College, Kakkaveri
</option>
<option value=" Dhanalakshmi Srinivasan Engineering College, Perambalur"> Dhanalakshmi Srinivasan Engineering College, Perambalur
</option>
<option value=" SRG Engineering College, Aniyapuram"> SRG Engineering College, Aniyapuram
</option>
<option value=" Sengunthar College of Engineering, Kumaramangalam"> Sengunthar College of Engineering, Kumaramangalam
</option>
<option value=" Dhanalakshmi Srinivasan College of Engineering, Perambalur"> Dhanalakshmi Srinivasan College of Engineering, Perambalur
</option>
<option value=" SSM College of Engineering, Komarapalayam"> SSM College of Engineering, Komarapalayam
</option>
<option value=" Excel Engineering College, Sankari West"> Excel Engineering College, Sankari West
</option>
<option value=" Dhanalakshmi Srinivasan Institute of Research and Technology, Siruvachur"> Dhanalakshmi Srinivasan Institute of Research and Technology, Siruvachur
</option>
<option value=" Elizabeth College of Engineering and Technology, Veppanthattai Taluk"> Elizabeth College of Engineering and Technology, Veppanthattai Taluk
</option>
<option value=" Mahath Amma Institute of Engineering and Technology, Illuppur Taluk"> Mahath Amma Institute of Engineering and Technology, Illuppur Taluk
</option>
<option value=" Ganapathy Chettiar College of Engineering and Technology, Paramakudi"> Ganapathy Chettiar College of Engineering and Technology, Paramakudi
</option>
<option value=" Roever College of Engineering and Technology, Elambalur"> Roever College of Engineering and Technology, Elambalur
</option>
<option value=" MNSK College of Engineering, Vallathirakkottai"> MNSK College of Engineering, Vallathirakkottai
</option>
<option value=" Mohamed Sathak Engineering College, Kilakarai"> Mohamed Sathak Engineering College, Kilakarai
</option>
<option value=" Roever Engineering College, Elambalur"> Roever Engineering College, Elambalur
</option>
<option value=" Mookambigai College of Engineering, Kalamavur"> Mookambigai College of Engineering, Kalamavur
</option>
<option value=" Syed Ammal Engineering College, Achunthanvayal"> Syed Ammal Engineering College, Achunthanvayal
</option>
<option value=" Srinivasan Engineering College, Perambalur"> Srinivasan Engineering College, Perambalur
</option>
<option value=" Mother Terasa College of Engineering and Technology, Illuppur"> Mother Terasa College of Engineering and Technology, Illuppur
</option>
<option value=" University College of Engineering - Ramanathapuram, Pullangudi"> University College of Engineering - Ramanathapuram, Pullangudi
</option>
<option value=" Sri Ramakrishna College of Engineering, Perambalur"> Sri Ramakrishna College of Engineering, Perambalur
</option>
<option value=" Mount Zion College of Engineering and Technology, Pilivalam"> Mount Zion College of Engineering and Technology, Pilivalam
</option>
<option value=" AVS Engineering College, Ammapet"> AVS Engineering College, Ammapet
</option>
<option value=" Chendhuran College of Engineering and Technology, Pilivalam"> Chendhuran College of Engineering and Technology, Pilivalam
</option>
<option value=" Shanmuganathan Engineering College, Thirumayam Taluk"> Shanmuganathan Engineering College, Thirumayam Taluk
</option>
<option value=" Annapoorana Engineering College, Periyaseeragapadi"> Annapoorana Engineering College, Periyaseeragapadi
</option>
<option value="Kings College of Engineering, Gandaravakottai">Kings College of Engineering, Gandaravakottai
</option>
<option value=" Sri Bharathi Engineering College for Women, Alangudi"> Sri Bharathi Engineering College for Women, Alangudi </option>
<option value=" AVS Technical Campus, Chinna Goundapuram"> AVS Technical Campus, Chinna Goundapuram
</option>
<option value=" M.A.R. College of Engineering and Technology, Rasanaickenpatty"> M.A.R. College of Engineering and Technology, Rasanaickenpatty
</option>
<option value=" Sudharsan Engineering College, Kolathur"> Sudharsan Engineering College, Kolathur
</option>
<option value=" Bharathiyar Institute of Engineering for Women , Deviyakurichi"> Bharathiyar Institute of Engineering for Women , Deviyakurichi
</option>
<option value=" Dhirajlal Gandhi College of Technology, Sikkanampatty"> Dhirajlal Gandhi College of Technology, Sikkanampatty
</option>
<option value=" Salem College of Engineering and Technology, Mettupatty"> Salem College of Engineering and Technology, Mettupatty
</option>
<option value=" Aditanar College of Arts and Science, Virapandianpatnam"> Aditanar College of Arts and Science, Virapandianpatnam
</option>
<option value=" Ganesh College of Engineering, Mettupatti"> Ganesh College of Engineering, Mettupatti
</option>
<option value=" Shree Sathyam College of Engineering and Technology, Kuppanur"> Shree Sathyam College of Engineering and Technology, Kuppanur
</option>
<option value=" Thoothukudi Govt. Medical College, Thoothukudi"> Thoothukudi Govt. Medical College, Thoothukudi
</option>
<option value=" Government College of Engineering, Omalur"> Government College of Engineering, Omalur
</option>
<option value=" Sona College of Technology, Suramangalam"> Sona College of Technology, Suramangalam
</option>
<option value=" V.O. Chidambaram College, Tuticorin"> V.O. Chidambaram College, Tuticorin
</option>
<option value=" Greentech College of Engineering for Women, Narasingapuram"> Greentech College of Engineering for Women, Narasingapuram
</option>
<option value=" Sri Shanmugha College of Engineering and Technology, Morur"> Sri Shanmugha College of Engineering and Technology, Morur
</option>
<option value=" Renganayagi Varatharaj College of Engineering, Sivakasi"> Renganayagi Varatharaj College of Engineering, Sivakasi
</option>
<option value=" Knowledge Institute of Technology, Kakapalayam"> Knowledge Institute of Technology, Kakapalayam
</option>
<option value=" Tagore Institute of Engineering and Technology, Deviyakurichi"> Tagore Institute of Engineering and Technology, Deviyakurichi
</option>
<option value=" Sethu Institute of Technology, Kariapatti"> Sethu Institute of Technology, Kariapatti
</option>
<option value=" Mahendra College of Engineering, Minnampalli"> Mahendra College of Engineering, Minnampalli
</option>
<option value=" The Kavery College of Engineering, Mecheri"> The Kavery College of Engineering, Mecheri
</option>
<option value=" Sree Sowdambika College of Engineering, Aruppukottai"> Sree Sowdambika College of Engineering, Aruppukottai
</option>
<option value=" Narasu's Sarathy Institute of Technology, Poosaripatty"> Narasu's Sarathy Institute of Technology, Poosaripatty
</option>
<option value=" The Kavery Engineering College, Mecheri"> The Kavery Engineering College, Mecheri
</option>
<option value=" Sri Vidya College of Engineering & Technology, P. Kumaralingapuram"> Sri Vidya College of Engineering & Technology, P. Kumaralingapuram
</option>
<option value=" SRS College of Engineering & Technology, Kuppanur"> SRS College of Engineering & Technology, Kuppanur
</option>
<option value=" Vivekanandha Engineering College for Women, Sankari West"> Vivekanandha Engineering College for Women, Sankari West
</option>
<option value=" V.P. Muthaiah Pillai Meenakshi Ammal Engineering College for Women, Krishnankoil"> V.P. Muthaiah Pillai Meenakshi Ammal Engineering College for Women, Krishnankoil
</option>
<option value=" Ramco Institute of Technology, Rajapalayam"> Ramco Institute of Technology, Rajapalayam
</option>
<option value=" V.R.S. College of Engineering and Technology, Arasur"> V.R.S. College of Engineering and Technology, Arasur
</option>
<option value=" Mailam Engineering College, Tindivanam Taluk"> Mailam Engineering College, Tindivanam Taluk
</option>
<option value=" P.S.R. Rengasamy College of Engineering for Women, Sivakasi"> P.S.R. Rengasamy College of Engineering for Women, Sivakasi
</option>
<option value=" University College of Engineering, Villupuram"> University College of Engineering, Villupuram
</option>
<option value=" Maha Barathi Engineering College, Kallakurichi Taluk"> Maha Barathi Engineering College, Kallakurichi Taluk
</option>
<option value=" P.S.R. Engineering College, Appanaickenpatti"> P.S.R. Engineering College, Appanaickenpatti
</option>
<option value=" University College of Engineering, Tindivanam, Melpakkam"> University College of Engineering, Tindivanam, Melpakkam
</option>
<option value=" IFET College of Engineering, Valavanur"> IFET College of Engineering, Valavanur
</option>
<option value=" Mepco Schlenk Engineering College, Sivakasi"> Mepco Schlenk Engineering College, Sivakasi
</option>
<option value=" T.S.M. Jain College of Technology , Kallakurichi"> T.S.M. Jain College of Technology , Kallakurichi
</option>
<option value=" Idhaya Engineering College for Women , Chinna salem"> Idhaya Engineering College for Women , Chinna salem
</option>
<option value=" Kamaraj College of Engineering and Technology , SPGC Nagar"> Kamaraj College of Engineering and Technology , SPGC Nagar
</option>
<option value=" Kamaraj College of Engineering and Technology , SPGC Nagar"> Kamaraj College of Engineering and Technology , SPGC Nagar
</option>
<option value=" Surya Group of Institutions , Vikravandi"> Surya Group of Institutions , Vikravandi
</option>
<option value=" E.S. Engineering College , Ayyankoilpattu"> E.S. Engineering College , Ayyankoilpattu
</option>
<option value=" Kalasalingam Institute of Technology , Krishnankoil"> Kalasalingam Institute of Technology , Krishnankoil
</option>
<option value=" Sri Rangapoopathi College of Engineering , Alampoondi"> Sri Rangapoopathi College of Engineering , Alampoondi
</option>
<option value=" Dr. Pauls Engineering College , Vanur Taluk"> Dr. Pauls Engineering College , Vanur Taluk
</option>
<option value=" AAA College of Engineering & Technology , Sivakasi"> AAA College of Engineering & Technology , Sivakasi
</option>
<option value=" Sri Aravindar Engineering College , Vanur Taluk"> Sri Aravindar Engineering College , Vanur Taluk
</option>
<option value=" Annai Teresa College of Engineering , Thirunavalur"> Annai Teresa College of Engineering , Thirunavalur
</option>
<option value=" Vedhantha Institute of Technology, Padur"> Vedhantha Institute of Technology, Padur
</option>
<option value=" Saraswathy College of Engineering and Technology , Tindivanam"> Saraswathy College of Engineering and Technology , Tindivanam
</option>
<option value=" A.R. Engineering College , Kappiyampuliyur"> A.R. Engineering College , Kappiyampuliyur
</option>
<option value=" Imayam College of Information Technology , Kannanur"> Imayam College of Information Technology , Kannanur
</option>
<option value=" Government College of Engineering, Bodinayakkanur"> Government College of Engineering, Bodinayakkanur
</option>
<option value=" Ponnaiyah Ramajayam College of Engineering and Technology , Vallam"> Ponnaiyah Ramajayam College of Engineering and Technology , Vallam
</option>
<option value=" Imayam College of Engineering , Vadakkuveli"> Imayam College of Engineering , Vadakkuveli
</option>
<option value=" Bharath Niketan Engineering College , Thimmarasanaickanoor"> Bharath Niketan Engineering College , Thimmarasanaickanoor
</option>
<option value=" Parisutham Institute of Technology and Science , Nanjikottai"> Parisutham Institute of Technology and Science , Nanjikottai
</option>
<option value=" Dhanalakshmi Srinivasan Institute of Technology , Samayapuram"> Dhanalakshmi Srinivasan Institute of Technology , Samayapuram
</option>
<option value=" CSI College of Engineering , Ketti Valley"> CSI College of Engineering , Ketti Valley
</option>
<option value=" P.R. Engineering College , Vallam"> P.R. Engineering College , Vallam
</option>
<option value=" Cauvery College of Engineering and Technology , Perur"> Cauvery College of Engineering and Technology , Perur
</option>
<option value=" Vandayar Engineering College , Pulavarnatham"> Vandayar Engineering College , Pulavarnatham
</option>
<option value=" K.S.K. College of Engineering and Technology , Darasuram"> K.S.K. College of Engineering and Technology , Darasuram
</option>
<option value=" C.A.R.E. Group of Institutions , Kuttapatti"> C.A.R.E. Group of Institutions , Kuttapatti
</option>
<option value=" University College of Engineering, Pattukkottai"> University College of Engineering, Pattukkottai
</option>
<option value=" As-Salam College of Engineering and Technology, Aduthurai"> As-Salam College of Engineering and Technology, Aduthurai
</option>
<option value=" VPV College of Engineering , Thaneerpanthal"> VPV College of Engineering , Thaneerpanthal
</option>
<option value=" Star Lion College of Engineering and Technology , Thanjavur"> Star Lion College of Engineering and Technology , Thanjavur
</option>
<option value=" Arasu Engineering College , Thiruvisanallur"> Arasu Engineering College , Thiruvisanallur
</option>
<option value=" Theni Kammavar Sangam College of Technology , Koduvilarpatti"> Theni Kammavar Sangam College of Technology , Koduvilarpatti
</option>
<option value=" St. Joseph’s College of Engineering and Technology , Thanjavur"> St. Joseph’s College of Engineering and Technology , Thanjavur
</option>
<option value=" Annai College of Engineering and Technology , Kumbakonam"> Annai College of Engineering and Technology , Kumbakonam
</option>
<option value=" Nadar Saraswathi College of Engineering & Technology, Annanji"> Nadar Saraswathi College of Engineering & Technology, Annanji
</option>
<option value=" SMR East Coast College of Engineering & Technology, Peravurani Taluk"> SMR East Coast College of Engineering & Technology, Peravurani Taluk
</option>
<option value=" St. Michael College of Engineering & Technology , Kalayarkoil"> St. Michael College of Engineering & Technology , Kalayarkoil
</option>
<option value=" Sri Raaja Raajan College of Engg. and Technology, Karaikudi"> Sri Raaja Raajan College of Engg. and Technology, Karaikudi
</option>
<option value=" VSA Educational and Charitable Trust's Group of Institutions, Uthamasolapuram"> VSA Educational and Charitable Trust's Group of Institutions, Uthamasolapuram
</option>
<option value=" Parvathy's Arts and Science College, Begampur"> Parvathy's Arts and Science College, Begampur
</option>
<option value=" Pannai College of Engineering and Technology, Keelakandani"> Pannai College of Engineering and Technology, Keelakandani
</option>
<option value=" Thiagarajar College Of Arts and Science, Madurai"> Thiagarajar College Of Arts and Science, Madurai
</option>
<option value=" Alagappa Govt. Arts College, Karaikudi"> Alagappa Govt. Arts College, Karaikudi
</option>
<option value=" Pandian Saraswathi Yadav Engineering College, Thirumansolai"> Pandian Saraswathi Yadav Engineering College, Thirumansolai
</option>
<option value=" SVN College of Arts and Science, Nagamalai"> SVN College of Arts and Science, Nagamalai
</option>
<option value=" Sri Saradha Niketan College for Women, Amaravathiputhur"> Sri Saradha Niketan College for Women, Amaravathiputhur
</option>
<option value=" Madurai Institute of Engineering and Technology, Manamadurai Taluk"> Madurai Institute of Engineering and Technology, Manamadurai Taluk
</option>
<option value=" SN College of Arts and Science, Perungudi"> SN College of Arts and Science, Perungudi
</option>
<option value=" The Standard Fireworks Rajaratnam College for Women, Sivakasi"> The Standard Fireworks Rajaratnam College for Women, Sivakasi
</option>
<option value=" Karaikudi Institute of Technology & Karaikudi Institute of Management, Thalakkavur"> Karaikudi Institute of Technology & Karaikudi Institute of Management, Thalakkavur
</option>
<option value=" ANNAI FATHIMA ARTS AND SCIENCE COLLEGE, Alampatty"> ANNAI FATHIMA ARTS AND SCIENCE COLLEGE, Alampatty
</option>
<option value=" V.V.VANNIAPERUMAL COLLEGE FOR WOMEN, VIRUDUNAGAR"> V.V.VANNIAPERUMAL COLLEGE FOR WOMEN, VIRUDUNAGAR
</option>
<option value=" K.L.N. College of Information Technology ,  Pottapalayam"> K.L.N. College of Information Technology ,  Pottapalayam</option>
<option value=" M.V. Muthiah Govt. Arts College for Women, Dindigul"> M.V. Muthiah Govt. Arts College for Women, Dindigul
</option>
<option value=" Fisheries College and Research Insitute, Thoothukudi"> Fisheries College and Research Insitute, Thoothukudi
</option>
<option value=" K.L.N. College of Engineering, Pottapalayam"> K.L.N. College of Engineering, Pottapalayam
</option>
<option value=" N.P.R. Arts and Science College, Kunnapatti"> N.P.R. Arts and Science College, Kunnapatti
</option>
<option value=" SRM University, West Mambalam"> SRM University, West Mambalam
</option>
<option value=" A.C.College of Engineering and Technology , Karaikudi"> A.C.College of Engineering and Technology , Karaikudi
</option>
<option value=" G.T.N. Arts College, Dindigul"> G.T.N. Arts College, Dindigul
</option>
<option value=" SASTRA University, Tirumalaisamudram"> SASTRA University, Tirumalaisamudram
</option>


                          
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