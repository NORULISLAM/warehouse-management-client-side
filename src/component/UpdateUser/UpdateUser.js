import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    return (
        <div className='container-fluid mx-auto m-5 p-5'>
            <h2 className='text-center mt-4'>Updating User: {id}</h2>
        </div>
    );
};

export default UpdateUser;