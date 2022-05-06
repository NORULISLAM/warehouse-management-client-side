import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddItem = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    const navigate = useNavigate();
    const navigateToaddDetails = event => {
        navigate('/addservice');
    }

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    console.log();
    return (
        <div className='100vh m-5 p-5 mx-auto'>
            <h1 className='mt-6'>Welcome to detail: {service.name}</h1>

            <button onClick={navigateToaddDetails} className='btn btn-danger'>Add item</button>



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