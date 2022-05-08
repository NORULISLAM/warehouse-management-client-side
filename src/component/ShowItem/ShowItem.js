import React from 'react';
import useInventory from '../AddServiceDetails/ManageInventory/hooks/useInventory';



const ShowItem = ({ product }) => {
    const [inventory, setInventory] = useInventory();
    const { _id, img, name, comment, quantity, seller, price, stock } = product;
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure? DELETE This Item??');
        if (proceed) {
            const url = `https://mighty-plateau-24695.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventory.filter(inventor => inventor._id !== id);
                    setInventory(remaining);
                })
        }
    }
    return (

        <div>
            {
                inventory.map(inventor => <div key={inventor._id}>
                    <div className='product'>
                        <img src={img} alt="" />
                        <div className='product-info'>
                            <p className='product-name'>{name}</p>
                            <p>Price:${price}</p>
                            <p><small>Seller:{seller}</small></p>
                            <p><small>Quantity:{stock}</small></p>
                        </div>
                        <button onClick={() => handleDelete(inventor._id)} className="btn btn-info btn-update">DELETE</button>
                        {/* <button className="btn btn-info btn-update">Update</button> */}
                    </div>
                </div>)
            }
        </div>
    );
};

export default ShowItem;