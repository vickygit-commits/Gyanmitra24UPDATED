import MetaData from '../MetaData';
import {Fragment,useEffect,useState} from 'react'
import { clearAuthError, updatePassword as updatePasswordAction } from '../../actions/userActions';
import {useDispatch,useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import './Styles/PasswordStyles.css'
export default function UpdatePassword()
{
    const [password,setPassword]=useState("");
    const [oldPassword,setoldPassword]=useState("");
    const dispatch =useDispatch();
    const{isUpdated,error}=useSelector(state=>state.authState)
    const submitHandler=(e)=>
    {
        e.preventDefault();
        const formData=new FormData();
        formData.append('oldPassword',oldPassword)
        formData.append('password',password)
        dispatch(updatePasswordAction(formData))
    }
    useEffect(()=>
    {
        if(isUpdated)
        {
            toast(`Password updated Succesfully`,
            {
                type:'success',
                position:toast.POSITION.BOTTOM_CENTER
            })
            setoldPassword("");
            setPassword("");
            return ;
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
    },[isUpdated,error,dispatch])
    return (
        <Fragment>
                  <MetaData title={'Change Password- Gyanmitra 24'}/>
                  <div className=" ChangePassContainer">
                <form  onSubmit={submitHandler}>
                    <h1 className="mt-2 mb-5">
                        Update Password
                    </h1>
                    <label htmlfor="old_password_field">Old Password:</label>
        <input
          type="password"
          id="old_password_field"
          value={oldPassword}
          onChange={e=>setoldPassword(e.target.value)}
          required
        />

        <label htmlfor="new_password_field">New Password:</label>
        <input
          type="password"
          id="new_password_field"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          required
        />
                    <button type="submit" id="button_sub">Submit</button>
                </form>
        </div>

        </Fragment>

      );

    
}