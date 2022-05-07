import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
const UpdateUser = () => {
    const { id } = useParams();
    const [update, setUpdate] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdate(data));
    }, [])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/service/${id}`;
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
            })
    };
    return (
        <div className='container-fluid mx-auto m-5 p-5'>
            <h2 className='text-center mt-4'>Updating User: {update.name}</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3' placeholder='Qantity' {...register("stock")} />
                <input className='mb-3' placeholder='price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Update Item" />
            </form>
            {/* <form onSubmit={handleUpdate}>
                <input type="text" name="name" placeholder='Qantity' required />
                <br />
                <input type="email" name="name" placeholder='Email' required />
                <br />
                <input type="submit" value="Update Qantity" />

            </form> */}
        </div>
    );
};

export default UpdateUser;