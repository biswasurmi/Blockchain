import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getStoredCart, deleteShoppingCart } from '../../utilities/localDB';
import ProdData from '../data/ProdData';
import FarmersProd from '../data/FarmersProd';
import Retail from '../data/Retail';

const Checkout = () => {
    const navigate = useNavigate();
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const savedCart = getStoredCart();
        const allProducts = [...ProdData, ...FarmersProd, ...Retail];
        const cartItems = Object.keys(savedCart).map(key => {
            const product = allProducts.find(pd => pd.id === key);
            return product ? { ...product, quantity: savedCart[key] } : null;
        }).filter(product => product !== null);

        setCart(cartItems);
    }, []);

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({
            ...shippingInfo,
            [name]: value,
        });
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo({
            ...paymentInfo,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            
            setTimeout(() => {
                Swal.fire(
                    'Success!',
                    'Your order has been placed successfully!',
                    'success'
                ).then(() => {
                    deleteShoppingCart(); 
                    navigate('/'); 
                });
                setLoading(false);
            }, 2000);
        } catch (error) {
            console.error('Order submission failed:', error);
            Swal.fire(
                'Error!',
                'There was an issue placing your order. Please try again.',
                'error'
            );
            setLoading(false);
        }
    };

    const calculateSubtotal = (item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = parseInt(item.quantity, 10) || 0;
        return price * quantity;
    };

    const totalItems = cart.reduce((a, b) => a + (parseInt(b.quantity, 10) || 0), 0);
    const totalPrice = cart.reduce((a, b) => a + calculateSubtotal(b), 0);

    return (
        <section className=' bg-cover bg-center bg-no-repeat h-screen mt-[80px]'>
            <div className="container mx-auto ">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-2/3 px-4 bg-white   border-gray-200 p-4 rounded-lg shadow-lg">
                        <h1 className='text-2xl font-bold mb-4 text-center italic underline text-green-700 ml-[150px]'>Checkout</h1>
                        
                       
                        <div className="mb-6 ">
                            <h2 className='text-xl font-bold mb-4 ml-[390px] italic'>Order Summary</h2>
                            <table className="min-w-full bg-white border border-gray-200 ml-[120px]">
                                <thead className="bg-green-400 border-b border-gray-300 text-white">
                                    <tr>
                                        <th className="p-3 text-left">Product</th>
                                        <th className="p-3 text-left">Price</th>
                                        <th className="p-3 text-left">Quantity</th>
                                        <th className="p-3 text-left">Sub Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((product, index) => (
                                        <tr key={index} className='border-b border-gray-300'>
                                            <td className="p-3">{product.name}</td>
                                            <td className="p-3">{parseFloat(product.price).toFixed(2)} Taka</td>
                                            <td className="p-3">{product.quantity}</td>
                                            <td className="p-3">{calculateSubtotal(product).toFixed(2)} Taka</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h3 className='text-lg font-bold mt-4'>Total: {totalPrice.toFixed(2)} Taka</h3>
                        </div>

                    
                        <div className="mb-6">
                            <h2 className='text-xl font-bold mb-4'>Shipping Information</h2>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-4'>
                                    <label className='block text-gray-700'>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={shippingInfo.name}
                                        onChange={handleShippingChange}
                                        className='w-full border border-gray-300 p-2 rounded'
                                        required
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-gray-700'>Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={shippingInfo.address}
                                        onChange={handleShippingChange}
                                        className='w-full border border-gray-300 p-2 rounded'
                                        required
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-gray-700'>City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={shippingInfo.city}
                                        onChange={handleShippingChange}
                                        className='w-full border border-gray-300 p-2 rounded'
                                        required
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-gray-700'>Postal Code</label>
                                    <input
                                        type="text"
                                        name="postalCode"
                                        value={shippingInfo.postalCode}
                                        onChange={handleShippingChange}
                                        className='w-full border border-gray-300 p-2 rounded'
                                        required
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-gray-700'>Country</label>
                                    <input
                                        type="text"
                                        name="country"
                                        value={shippingInfo.country}
                                        onChange={handleShippingChange}
                                        className='w-full border border-gray-300 p-2 rounded'
                                        required
                                    />
                                </div>
                                
                               
                                <div className="mb-6">
                                    <h2 className='text-xl font-bold mb-4'>Payment Information</h2>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700'>Card Number</label>
                                        <input
                                            type="text"
                                            name="cardNumber"
                                            value={paymentInfo.cardNumber}
                                            onChange={handlePaymentChange}
                                            className='w-full border border-gray-300 p-2 rounded'
                                            required
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700'>Expiry Date</label>
                                        <input
                                            type="text"
                                            name="expiryDate"
                                            value={paymentInfo.expiryDate}
                                            onChange={handlePaymentChange}
                                            className='w-full border border-gray-300 p-2 rounded'
                                            required
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700'>CVV</label>
                                        <input
                                            type="text"
                                            name="cvv"
                                            value={paymentInfo.cvv}
                                            onChange={handlePaymentChange}
                                            className='w-full border border-gray-300 p-2 rounded'
                                            required
                                        />
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    className='w-full bg-green-500 text-white py-2 rounded'
                                    disabled={loading}
                                >
                                    {loading ? 'Processing...' : 'Place Order'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
