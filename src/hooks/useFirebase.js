import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../pages/Login/Firebase/firebase.init";

firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const [loading, setLoading] = useState(true);

    const handleGoogleSignIn = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
         return signInWithPopup(auth,googleProvider)
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    };

    const logout = () => {
        setLoading(true)
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth,(user)=> {
            if(user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        })
        return () => unSubscribe;
    },[auth]);

    async function signUp (name,email,password) {
        await createUserWithEmailAndPassword(auth,email,password)
        await updateProfile(auth.currentUser,{displayName : name})
        const user = auth.currentUser;
        setUser(user);
    }

    return {handleGoogleSignIn,user, logout,loading,signUp}
}

export default useFirebase;