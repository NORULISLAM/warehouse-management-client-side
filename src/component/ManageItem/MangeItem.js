import React from 'react';
import { useNavigate } from 'react-router-dom';

const MangeItem = ({ product }) => {
    const { _id, img, name, comment, quantity, seller, price } = product;
    const navigate = useNavigate();
    const navigateToAddItem = id => {
        navigate(`/additem/${id}`);
    }

    return (
        <div className="card-body text-center">
            <img src={img} className="img-thumbnail rounded" alt="" />
            <h5 className="card-title">Card title{name}</h5>

            <p className="card-text"> Comment: {comment}</p>
            <h5>Quantity: {quantity}</h5>
            <h5>Supplier Name: {seller}</h5>
            <h5>Price: {price}</h5>

            <button onClick={() => navigateToAddItem(_id)} className="btn btn-info">Update</button>
        </div>
    );
};

export default MangeItem;