import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const gitHubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    }
    const logOutUser = () =>{
        setLoading(true);
        setUser(null)
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log("auth sate of user", currentUser);
          setUser(currentUser);
          setLoading(false)
        });
        return () => {
          unSubscribe();
        };
      },[]);
    const userInfo = {
        user,
        loading,
        createUser,
        signInWithEmail,
        googleLogin,
        gitHubLogin,
        logOutUser,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;