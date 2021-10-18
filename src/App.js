import React, { useState, Fragment } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from './firebaseConfig.js';
import './App.css';

function App() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, currentUser => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
    setRegisterEmail('');
    setRegisterPassword('');
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
    setLoginEmail('');
    setLoginPassword('');
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className='app'>
      <div>
        <h3>Register User</h3>
        <input
          placeholder='Email..'
          value={registerEmail}
          onChange={e => setRegisterEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password..'
          value={registerPassword}
          onChange={e => setRegisterPassword(e.target.value)}
        />

        <button onClick={() => register()}>Create User</button>
      </div>

      <div>
        <h3>Login User</h3>
        <input
          placeholder='Email..'
          value={loginEmail}
          onChange={e => setLoginEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password..'
          value={loginPassword}
          onChange={e => setLoginPassword(e.target.value)}
        />

        <button onClick={() => login()}>Login</button>
      </div>

      <h4>User Logged In:</h4>
      {user?.email}

      <button onClick={() => logout()}>Sign Out</button>
    </div>
  );
}

export default App;
