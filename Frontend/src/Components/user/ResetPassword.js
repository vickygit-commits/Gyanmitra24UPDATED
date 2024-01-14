import MetaData from '../MetaData';
import {Fragment,useEffect,useState} from 'react'
import { clearAuthError, resetPassword  } from '../../actions/userActions';
import {useDispatch,useSelector,} from 'react-redux'
import {toast} from 'react-toastify'
import { useNavigate,useParams } from 'react-router-dom';
import './Styles/PasswordStyles.css'

export default function ResetPassword()
{
    const[password,setPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")
    const dispatch=useDispatch();
    const {isAuthenticated,error}=useSelector(state=>state.authState)
    const navigate=useNavigate();
    const {token}=useParams();
    const submitHandler=(e)=>
    {
        e.preventDefault();
        const formData=new FormData();
        formData.append('password',password)
        formData.append('confirmPassword',confirmPassword)
        dispatch(resetPassword(formData,token))
    }
    useEffect(()=>
    {
        if(isAuthenticated)
        {
            toast('Password Reset Successfully',{
                type:'success',
                position:toast.POSITION.BOTTOM_CENTER
            })
            navigate('/')
            return;
        }
        if(error)
        {
            toast(error,
            {
                position:toast.POSITION.BOTTOM_CENTER,
                type:'error',
                onOpen:()=>{dispatch(clearAuthError)}
            })
            return ;
        }
    },[isAuthenticated,error,dispatch,navigate])
    return (
        <Fragment>
                  <MetaData title={'Reset Password'}/>
                  <div className="reset-password-container">
    
    <h2>Reset Password</h2>
    <form onSubmit={submitHandler}>
      <label htmlFor="password">New Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={e=>setPassword(e.target.value)}
        required
      />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={e=>setConfirmPassword(e.target.value)}
        required
      />

<button type="submit" id="button_sub">Reset Password</button>
    </form>
  </div>

        </Fragment>

      );
    }