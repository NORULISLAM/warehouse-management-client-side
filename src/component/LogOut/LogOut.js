import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const LogOut = () => {
    const [error, setError] = useState('')
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError1] = useUpdateProfile(auth);

    useEffect(() => {
        if (error) {
            setError('do not type fluse password please !! Writing again.');
        }
    }, [error])


    const navigate = useNavigate();

    const navigateLogin = event => {


        navigate('/login');
    }

    // if (user) {
    //     navigate('/home');
    // }

    const handleRegister = async (event) => {

        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }
        if (!/(?=.*[0-9]).{8,}/.test(password)) {
            setError('please input password 8 digit number')
            return;
        }
        setValidated(true);

        setError('')
        await createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                const user = result.user;

                setEmail('');
                setPassword('')
                setName('')
                verifyEmail();
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
        await updateProfile({ displayName: name });
        toast('Updated profile');
        navigate("/home")
        event.preventDefault();


        // const email = emailRef.current.value;
        // const password = passwordRef.current.value;
        // const name = nameRef.current.value;

        // createUserWithEmailAndPassword(name, email, password);

    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('Email verification send')
            })
    }

    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }


    return (
        <div className='container-fluid w-50 mx-auto m-5 p-5'>
            <h2 className='text-primary text-center mt-4'>Please Register </h2>
            <Form noValidate validated={validated} onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Your Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="efgdfggfdw">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <Button variant="primary mx-auto w-50 d-block mb-2" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already an Account ? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default LogOut;