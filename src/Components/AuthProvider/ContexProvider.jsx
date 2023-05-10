import React, { createContext, useEffect, useState } from 'react';


export let contexM = createContext(null)

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'


import app from '../firebase/firebase.config'


let auth = getAuth(app)




const ContexProvider = ({ children }) => {

    let [loader, SetLoader] = useState(true)



    let [user, SettUser] = useState(null)

    let createUser = (email, password) => {
        SetLoader(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }

    let LoginUser = (email, password) => {

        SetLoader(true)


        return signInWithEmailAndPassword(auth, email, password)
    }


    let logOutUSer = () => {
        SetLoader(true)

        return signOut(auth)
    }




    useEffect(() => {

        let off = onAuthStateChanged(auth, observer => {

            SettUser(observer)


        })

        return (() => {

            SetLoader(false)

            off()

        })


    }, [])



    let userInfo = {
        user,
        createUser,
        LoginUser,
        logOutUSer,
        loader


    }



    return (
        <contexM.Provider value={userInfo}>
            {children}
        </contexM.Provider>
    )






};

export default ContexProvider;