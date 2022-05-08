import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ShowItem from '../ShowItem/ShowItem';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [item, setItem] = useState([]);
    useEffect(() => {

        const getItem = async () => {
            const email = user.email;
            const url = `https://mighty-plateau-24695.herokuapp.com/service?email=${email}`;
            const { data } = await axios.get(url);
            setItem(data);
        }
        getItem();

    }, [user])
    return (
        <div className='container-fluid mx-auto m-5 p-5 mt-5'>


            <h1 className='fw-bold text-center mt-2 text-primary'>My Item</h1>
            <div className='home-container'>
                <div className="manage-container">
                    {
                        item.map(product => <ShowItem
                            key={product._id}
                            product={product}
                        >
                        </ShowItem>)

                    }
                </div>
            </div>

        </div>
    );
};

export default MyItem;