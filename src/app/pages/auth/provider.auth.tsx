import { ReactNode } from "react";
import { useAuth } from "../../../hooks/auth.hook";
import { Navigate } from "react-router-dom";

interface IProps{
    children: ReactNode;
}
const AuthProvider:React.FC<IProps> = ({children}) => {
    const {userCurrent} = useAuth()    
    return userCurrent ? children : <Navigate to={'/auth/sign-in'} replace/>
}
export default AuthProvider;