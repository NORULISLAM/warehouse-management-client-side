import { sendPasswordResetEmail } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Loing = () => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,


    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth);

    const [signInWithGoogle] =
        useSignInWithGoogle(auth);
    let errorElement;


    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleSubmit = event => {

        setEmail(event.target.email.value);
        setPassword(event.target.password.value);

        event.preventDefault();

        signInWithEmailAndPassword(email, password);

    }

    const handlePasswordReset = async () => {

        // const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('sent email')
        }
        else {
            toast('please enter your email')
        }
        // .then(() => {
        //     console.log('email send')
        // })
    }
    if (user) {
        // navigate('/home')
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }

    const navigateLogOut = event => {


        navigate('/logout');
    }


    return (
        <div className='container-fluid w-50 mx-auto m-5 p-5'>
            <h2 className='text-primary text-center mt-4'>Please Login </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={(event) => setEmail(event.target.value)} name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={(event) => setPassword(event.target.value)} name='password' type="password" placeholder="Password" required />
                </Form.Group>


                {/* <Button onClick={() => signInWithGoogle()} variant="primary" type="submit">
                    Google Sing In
                </Button> */}

                {errorElement}

                <button className='btn btn-link text-primary pe-auto text-decoration-none' variant="link" type="submit" onClick={handlePasswordReset}>
                    Resset password?
                </button>
                <br />
                <Button onClick={handlePasswordReset} variant="primary mx-auto w-50 d-block mb-2" type="submit">
                    Log In
                </Button>
            </Form>
            <p>Create new account ? <Link to='/logout' className='text-danger pe-auto text-decoration-none' onClick={navigateLogOut}>Please Register</Link></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Loing;