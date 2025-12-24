import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmZ3e433A8CbSJ0u0f_yjXV76Q2vS0AiE",
    authDomain: "homework-c4cd5.firebaseapp.com",
    projectId: "homework-c4cd5",
    storageBucket: "homework-c4cd5.firebasestorage.app",
    messagingSenderId: "666435927128",
    appId: "1:666435927128:web:4a11eb8f65b944a6661e2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

