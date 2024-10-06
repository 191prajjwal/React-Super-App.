
import { useContext } from 'react';
import { AppContext } from './../context/AppContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({children}) {

const {user}= useContext(AppContext)
return user? children : <Navigate to ="/register"/>
}
