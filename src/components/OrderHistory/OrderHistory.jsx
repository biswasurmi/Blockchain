import React, { useEffect, useState } from 'react';
import { getOrderHistory } from '../../utilities/localDB';


const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch order history from local storage
        const fetchedOrders = getOrderHistory();
        setOrders(fetchedOrders);
    }, []);

    return (
        <section className='bg-order_img bg-cover bg-center bg-no-repeat h-screen mt-[80px]'>
        <div className="container mx-auto p-4 ">
            <h1 className="text-2xl font-bold mb-4 ml-[550px] italic underline">Order History</h1>
            <table className="w-full border-collapse bg-grey-300 bg-opacity-70 ">
                <thead>
                    <tr className="bg-color1 justify-center">
                        <th className="border px-4 py-2">Image</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Quantity</th>
                        <th className="border px-4 py-2">Price</th>
                        <th className="border px-4 py-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? (
                        orders.map((order, index) => (
                            order.items.map((item, itemIndex) => (
                                <tr key={`${index}-${itemIndex}`}>
                                    <td className="border px-4 py-2">
                                        <img src={item.img} alt={item.name} className="w-16 h-16 object-cover " />
                                    </td>
                                    <td className="border px-4 py-2">{item.name}</td>
                                    <td className="border px-4 py-2">{item.quantity}</td>
                                    <td className="border px-4 py-2">${item.price}</td>
                                    <td className="border px-4 py-2">{new Date(order.date).toLocaleDateString()}</td>
                                </tr>
                            ))
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="border px-4 py-2 text-center">No orders found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </section>
    );
};

export default OrderHistory;
