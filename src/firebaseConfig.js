import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAPXUHGM2eSl-KFdt23i4QP6TUY9YtHCe0',
  authDomain: 'fir-auth-tutorial-22461.firebaseapp.com',
  projectId: 'fir-auth-tutorial-22461',
  storageBucket: 'fir-auth-tutorial-22461.appspot.com',
  messagingSenderId: '199632555336',
  appId: '1:199632555336:web:877dcc1943c778adebb77d',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
