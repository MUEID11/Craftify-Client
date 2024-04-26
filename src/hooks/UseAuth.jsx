import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthPorvider';


const UseAuth = () => {
    const all = useContext(AuthContext)
    return all
};
export default UseAuth;