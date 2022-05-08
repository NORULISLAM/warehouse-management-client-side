import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import MangeItem from '../ManageItem/MangeItem';
import StockSummary from '../MyItem/StockSumary/StockSummary';
import './Home.css'



const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://mighty-plateau-24695.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (

        <div className='mt-5'>
            <Banner></Banner>

            <h1 className='mt-5 text-center text-info'>Stock Product</h1>
            <div className='home-container'>
                <div className="manage-container">
                    {
                        product.slice(0, 6).map(product => <MangeItem
                            key={product._id}
                            product={product}
                        >
                        </MangeItem>)

                    }
                </div>
            </div>
            <h1 className='text-success fw-bold text-center mb-5'>Last Month Qantity Stock Summary</h1>
            <StockSummary></StockSummary>
        </div>
    );
};

export default Home;