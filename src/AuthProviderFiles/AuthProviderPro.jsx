import  { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebaseFunction/FirebaseAuthentication';
import useMagicAxiosBoss from '../HooksFiles/useMagicAxiosBoss';
import axios from 'axios';







 
export const AuthContextPro = createContext([])

const AuthProviderPro = ({children}) => {
     

    const [userProfile, setProfile] = useState(null)
    const [loader,setLoader] = useState(true)
    
    const auth = getAuth(app);




    function createRegister(email,password){
        setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const loginProfile=(email,password)=>{
        setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
    }
    
    function logoutProfile(){
        setLoader(true)
    return signOut(auth)
    }
    
    const createWithGoogle = new GoogleAuthProvider();
    const registerWithGoogle = () =>{
        setLoader(true)
    return signInWithPopup(auth, createWithGoogle)
    }
    
    
    
    
    
    
    useEffect(() => {
        const unheat = onAuthStateChanged(auth, currentUser => {
           setProfile(currentUser)
     

           if(currentUser){
            axios.post(`https://just-dance-server.vercel.app/jwt`, {email:currentUser.email}  )
            .then(data=>{
             console.log(data.data.token);
             localStorage.setItem('JWT-token',data.data.token)
             setLoader(false)
            })
         }else{
             localStorage.removeItem('JWT-token')
         }








    
     })
    
    
        return () => {
            return unheat()
        }
    
    
    }, [])
    
    
    
    


















    const passValue= {userProfile,loader,registerWithGoogle,logoutProfile,loginProfile,createRegister}



    return (
        <div>
 <AuthContextPro.Provider value={passValue}>
    {children}
</AuthContextPro.Provider>
        </div>
    );
};

export default AuthProviderPro;