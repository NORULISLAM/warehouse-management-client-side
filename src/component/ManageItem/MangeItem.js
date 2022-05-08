import React from 'react';
import { useNavigate } from 'react-router-dom';
import './manageItem.css'

const MangeItem = ({ product }) => {
    const { _id, img, name, comment, quantity, seller, price, stock, description } = product;
    const navigate = useNavigate();
    const navigateToAddItem = id => {
        navigate(`/additem/${id}`);
    }
    // /${id}
    return (

        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
                <p><small>Supplier:{seller}</small></p>
                <p><small>Quantity:{stock}</small></p>
                <p><small>Description:{description}</small></p>
            </div>
            <button onClick={() => navigateToAddItem(_id)} className="btn btn-info btn-update">Update</button>
        </div>

    );
};

export default MangeItem;