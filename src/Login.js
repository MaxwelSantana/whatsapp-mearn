import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { signGoogleWithPopup } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [, dispatch] = useStateValue();
    const signIn = () => {
        signGoogleWithPopup()
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt=""
                />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    );
}

export default Login;
