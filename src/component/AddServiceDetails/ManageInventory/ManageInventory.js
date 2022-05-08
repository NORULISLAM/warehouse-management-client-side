import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from './hooks/useInventory';

const ManageInventory = () => {
    const [inventory, setInventory] = useInventory();

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure? DELETE This Item??');
        if (proceed) {
            const url = `https://mighty-plateau-24695.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    const remaining = inventory.filter(inventor => inventor._id !== id);
                    setInventory(remaining);
                })
        }
    }
    console.log(inventory);
    return (
        <div className='container-fluid mx-auto m-5 p-5'>
            <h1 className='text-info text-center mt-4'>Manage Your Inventory</h1>
            {

                inventory.map(inventor => <div key={inventor._id}>
                    <table className="table table-striped table-dark container-fluid w-80 mx-auto mt-5 p-5 mb-5">
                        <thead>
                            <tr>
                                <th scope="col"><img className='rounded m-3' style={{ width: '40px' }} src={inventor.img} alt="" />{inventor.name}</th>
                                <th scope="col">Price:{inventor.price}$</th>
                                <th scope="col">description:{inventor.description}</th>
                                <th scope="col"><Link to={`/update/${inventor._id}`}><button className='btn btn-info'>Add New Item</button></Link>
                                </th>
                                <th scope="col"> <button onClick={() => handleDelete(inventor._id)} className='btn btn-danger'>DELETE</button></th>
                            </tr>

                        </thead>

                    </table>
                </div>)
            }
        </div>
    );
};

export default ManageInventory;