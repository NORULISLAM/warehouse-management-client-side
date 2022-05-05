import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 d-flex justity-content-center align-item-center'>
            <Spinner animation='border' variant='primary'></Spinner>
        </div>
    );
};

export default Loading;