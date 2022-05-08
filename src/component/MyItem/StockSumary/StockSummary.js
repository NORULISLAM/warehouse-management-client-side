import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const StockSummary = () => {
    const [stock, setStock] = useState([])
    useEffect(() => {
        axios.get('https://mighty-plateau-24695.herokuapp.com/service')
            .then(data => setStock(data.data));
    }, []);

    return (
        <div className='mb-5 m-5 text-center' style={{ width: '100%', height: 300 }}>
            <h2 className='text-primary fw-bold text-center mt-2'>STOCK ITEM</h2>
            <ResponsiveContainer>
                <PieChart width={800} height={600}>
                    <Pie data={stock} dataKey="stock" cx="50%" cy="50%" outerRadius={90} fill="#8884d8" />
                    <Pie data={stock} dataKey="stock" cx="50%" cy="50%" innerRadius={90} outerRadius={100} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
            </ResponsiveContainer>

        </div>



    );
};

export default StockSummary;