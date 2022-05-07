import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [item, setItem] = useState([]);
    useEffect(() => {

        const getItem = async () => {
            const email = user.email;
            const url = `http://localhost:5000/service?email=${email}`;
            const { data } = await axios.get(url);
            setItem(data);
        }
        getItem();

    }, [user])
    return (
        <div className='container-fluid w-50 mx-auto m-5 p-5'>
            <h1>This is only i added item list show: {item.length}</h1>
        </div>
    );
};

export default MyItem;