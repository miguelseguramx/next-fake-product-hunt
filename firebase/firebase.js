import app from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    if(!app.apps.length){
      app.initializeApp(firebaseConfig)
    }
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }

  // Create new user
  async SingUp(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(email,password);
    return await newUser.user.updateProfile({
      displayName: name
    })
  }
  
  // Login 
  async LogIn(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  // Logout
  async LogOut() {
    await this.auth.signOut();
  }
}

const firebase = new Firebase();
export default firebase;