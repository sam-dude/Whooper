"use client"
import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from "@/utils/firebase";

export const userAuthContext = createContext();

export function UserAuthProvider({ children }) {
    const [user, setUser] = useState("");
        function signUp(email, password){
            return createUserWithEmailAndPassword(auth, email, password);
        }
        function logIn(email, password){
            return signInWithEmailAndPassword(auth, email, password);
        }
        function logOut() {
            return signOut(auth);
        }
        function googleSignIn() {
            const googleAuthProvider = new GoogleAuthProvider();
            return signInWithPopup(auth, googleAuthProvider);
        }
        function resetPassword(email) {
            return sendPasswordResetEmail(auth, email);
        }
        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
            });
            return () => {
                unsubscribe();
            }
        }, []);
    return <userAuthContext.Provider value={{user, signUp, logIn, logOut, googleSignIn, resetPassword}}>{children}</userAuthContext.Provider>
}
