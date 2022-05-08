import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
const UpdateUser = () => {
    const { id } = useParams();
    const [update, setUpdate] = useState({});
    useEffect(() => {
        const url = `https://mighty-plateau-24695.herokuapp.com/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdate(data));
    }, [])


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const url = `https://mighty-plateau-24695.herokuapp.com/service/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('User Details Update Successfull');

            })
    };
    return (
        <div className='container-fluid w-50 mx-auto m-5 p-5'>
            <h2 className='text-primary text-center mt-4'>Update Item: {update.name}</h2>

            {/* <div className='product'> */}
            {/* <img src={update.img} alt="" />
                <div className='product-info'>
                    <p className='product-name'>{update.name}</p>
                    <p>Price:${update.price}</p>
                    <p><small>Seller:{update.seller}</small></p>
                    <p><small>Quantity:{update.stock}</small></p> */}
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='name' {...register("name")} required />
                <input className='mb-3' placeholder='Qantity' type="number"{...register("stock")} required />
                <input className='mb-3' placeholder='price' type="number" {...register("price")} required />
                <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} required />
                <input type="submit" value="Restock Item" />
            </form>
        </div>

        // </div>

        // </div>
    );
};

export default UpdateUser;