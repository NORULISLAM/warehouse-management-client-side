import { sendPasswordResetEmail } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Loing = () => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,


    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle] =
        useSignInWithGoogle(auth);
    let errorElement;


    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleSubmit = event => {
        console.log(email);
        setEmail(event.target.email.value);
        setPassword(event.target.password.value);

        event.preventDefault();

        signInWithEmailAndPassword(email, password);
        console.log(email, password)
    }

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('email send')
            })
    }
    if (user) {
        navigate('/home')
        // navigate(from, { replace: true });
    }


    return (
        <div className='container w-50 mx-auto'>
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


                <Button onClick={() => signInWithGoogle()} variant="primary" type="submit">
                    Google Sing In
                </Button>
                {errorElement}

                <Button variant="link" type="submit">
                    Forget password?
                </Button>
                <br />
                <Button onClick={handlePasswordReset} variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            <p>Create new account ? <Link to='/register' className='text-danger pe-auto text-decoration-none'>Please Register</Link></p>
        </div>
    );
};

export default Loing;