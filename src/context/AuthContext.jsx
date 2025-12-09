import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(() => {
        try {
            const userid = localStorage.getItem('userid');
            return userid ? localStorage.setItem(userid) : {}
        }catch (error) {
            return {
                user: "",
                logged: false
            }
        }
    });
    useEffect(() => {
        localStorage.setItem('userid', JSON.stringify(user))
    },[user])
    console.log("logged") 

    const login = (values) => {
       signInWithEmailAndPassword(auth, values.email, values.password)
            // .then((userCredential) => {
            //     const { user } = userCredential
            //     setUser({
            //         email: user.email,
            //         logged: true
            //     })
            //  })
            .catch((err) => console.log(err.message))
    }  

    const register = (values) => {
        // retorna una PROMESA del tipo userCredential(obj)
        createUserWithEmailAndPassword(auth, values.email, values.password)
            // .then((userCredential)=> {
            //    console.log(userCredential) 
            //    // por desestructuracion obtenemos los datos para login
            //    const { user } = userCredential

            //    setUser({
            //         email: user.email,
            //         logged: true
            //    })
            // }) 
            .catch((err) => console.log(err.message))
    }
    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                console.log(res)
            })
            .catch((err)=> console.log(err))
    }
    useEffect(() => {
        onAuthStateChanged( auth, (user) => {
            console.log(user)
            try {
                user 
                    ? setUser({
                        email: user.email,
                        logged: true
                    })
                    : setUser({
                        email: null,
                        logged:false
                    })
            }catch (error) {
                console.log(error)
            }
        })
    },[])

    const logout = () => {
       signOut(auth)
    }
    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            register,
            loginWithGoogle
        }}>
             {children}
        </AuthContext.Provider>  
    )
}