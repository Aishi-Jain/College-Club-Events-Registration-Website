import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "../config/firebase";

const Login = () => {
  let [name, setName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName);
      } else {
        setName("");
      }
    });
    return () => unsubscribe();
  }, []);

  async function signInWithGoogle(params) {
    try {
      await signInWithPopup(auth, googleProvider);
      setName(auth?.currentUser?.displayName);
    } catch (error) {
      console.error(error);
    }
  }

  async function logOut(params) {
    try {
      await signOut(auth);
      setName("");
    } catch (error) {
      console.error(error);
    }
  }

  //   auth && setName(auth?.currentUser?.name);
  console.log(auth?.currentUser?.email);
  return (
      (name === "") ? (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      ) : (
        <button onClick={logOut}>{name}</button>
      )
  )
};

export default Login;
