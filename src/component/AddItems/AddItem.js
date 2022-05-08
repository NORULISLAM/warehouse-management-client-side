import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddItem = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    const navigate = useNavigate();
    const navigateToaddDetails = event => {
        navigate('/addservice');
    }

    const navigate2 = useNavigate();
    const navigateToaddDetails2 = event => {
        navigate2('/managesinventory');
    }

    useEffect(() => {
        const url = `https://mighty-plateau-24695.herokuapp.com/service/${serviceId}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    console.log();
    return (
        <div className='100vh m-5 p-5 mx-auto'>
            <h1 className='mt-6'>Product ID: {service._id}</h1>
            <div className='product'>
                <img src={service.img} alt="" />
                <div className='product-info'>
                    <p className='product-name'>{service.name}</p>
                    <p>Price:${service.price}</p>
                    <p><small>Supplier:{service.seller}</small></p>
                    <p><small>Quantity:{service.stock}</small></p>
                    <p><small>Description:{service.description}</small></p>
                </div>
            </div>
            <button onClick={navigateToaddDetails} className='btn btn-danger mx-2'>Restock</button>
            <button className='btn btn-danger mx-2'>Delivered</button>

            <button onClick={navigateToaddDetails2} className='btn btn-danger mx-1'>Manage Inventories</button>

            {/* onClick={navigateToaddDetails} */}

            {/* <form>
                <div className="form-group m-3 p-3">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                </div>
            </form> */}

        </div>
    );
};

export default AddItem;