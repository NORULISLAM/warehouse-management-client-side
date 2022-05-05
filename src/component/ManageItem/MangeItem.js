import React from 'react';

const MangeItem = ({ product }) => {
    const { _id, img, name, comment, quantity, seller, price } = product;
    return (
        <div className="card-body text-center">
            <img src={img} className="img-thumbnail rounded" alt="" />
            <h5 className="card-title">Card title{name}</h5>

            <p className="card-text"> Comment: {comment}</p>
            <h5>Quantity: {quantity}</h5>
            <h5>Supplier Name: {seller}</h5>
            <h5>Price: {price}</h5>

            <button>Update</button>
        </div>
    );
};

export default MangeItem;