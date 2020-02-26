import React, { useEffect, useState } from 'react';
import firebase from '../firebase/index';

export default function useAuth() {
  const [ userAuthenticated, setUserAuthenticated ] = useState(null);
  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged(user => {
      if ( user ) {
        setUserAuthenticated(user)
      } else {
        setUserAuthenticated(null)
      }
    });

    return () => unsuscribe()
  }, [])

  return userAuthenticated;
}