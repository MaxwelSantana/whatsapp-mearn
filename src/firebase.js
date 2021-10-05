import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyB4ML5szb8fRVRZc_-juetT_FD0YSNafH8',
    authDomain: 'whatsapp-mearn-811fc.firebaseapp.com',
    projectId: 'whatsapp-mearn-811fc',
    storageBucket: 'whatsapp-mearn-811fc.appspot.com',
    messagingSenderId: '71860826501',
    appId: '1:71860826501:web:9b02f9ad6a8a78113154ec',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
const signGoogleWithPopup = () =>
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            return { credential, token, user };
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            return { errorCode, errorMessage, credential, email };
        });

export { signGoogleWithPopup };
