import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom';
import Loader from '../loader';
export default function ProtectedRoute ({children})
{
    const {isAuthenticated,loading}=useSelector(state=>state.authState)
    //Used for accessing the myprofile page from incognito window
    if(!isAuthenticated && !loading)
    {
        return <Navigate to="/login"/>
    }
    if(isAuthenticated)
    {
        return children;
    }
    if(loading)
    {
        return <Loader/>
    }

}