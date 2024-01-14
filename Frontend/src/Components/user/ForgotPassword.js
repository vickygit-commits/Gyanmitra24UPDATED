import {Fragment,useEffect,useState} from 'react'
import MetaData from '../MetaData';
import { useDispatch,useSelector} from 'react-redux';
import { forgotPassword,clearAuthError } from '../../actions/userActions';
import { toast } from 'react-toastify';
import './Styles/PasswordStyles.css'

export default function ForgotPassword()
{
    const [email,setEmail]=useState("");
    const dispatch=useDispatch();
    const {error,message}=useSelector(state=>state.authState)
    const submitHandler = (e)=>
    {
        e.preventDefault();
        const formData =new FormData();
        formData.append('email',email);
        dispatch(forgotPassword(formData))
    }

    useEffect(()=>
    {
        if(message)
        {
            toast(message,{
                type:'success',
                position:toast.POSITION.BOTTOM_CENTER
            })
            setEmail("");
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
    },[message,error,dispatch])
    return (
        <Fragment>
                  <MetaData title={'Forgot Password- Gyanmitra 24'}/>
                  <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Enter your email address to get the link to reset your password.</p>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          
          onChange={e=>setEmail(e.target.value)}   
          style={{display:'block',width:'100%'}}       required
        />

        <button type="submit" id="button_sub" style={{marginTop:'5px'}}>Send</button>
      </form>
    </div>

        </Fragment>

      );
}