import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromDb, getStoredCart, deleteShoppingCart, saveOrder } from '../../utilities/localDB';
import Swal from 'sweetalert2';
import ProdData from '../data/ProdData.jsx';
import FarmersProd from '../data/FarmersProd';
import Retail from '../data/Retail';

const Cart = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getStoredCart();
        const allProducts = [...ProdData, ...FarmersProd, ...Retail];
        const cartItems = Object.keys(savedCart).map(key => {
            const product = allProducts.find(pd => pd.id === key);
            return product ? { ...product, quantity: savedCart[key] } : null;
        }).filter(product => product !== null);

        setCart(cartItems);
    }, []);

    const handleQuantityChange = (id, increment) => {
        let updatedCart = [...cart];
        const itemIndex = updatedCart.findIndex(product => product.id === id);

        if (itemIndex !== -1) {
            const item = updatedCart[itemIndex];
            const newQuantity = item.quantity + increment;

            if (newQuantity <= 0) {
                removeFromDb(id); 
                updatedCart = updatedCart.filter(product => product.id !== id);
            } else {
                item.quantity = newQuantity;
                updatedCart[itemIndex] = item;

                let savedCart = getStoredCart();
                savedCart[id] = item.quantity;
                localStorage.setItem('cart', JSON.stringify(savedCart));
            }

            setCart(updatedCart);
        }
    };

    const handleClick = () => {
        if (cart.length > 0) {
            const order = {
                id: new Date().toISOString(),
                items: cart.map(product => ({
                    id: product.id,
                    img: product.image,
                    name: product.name,
                    quantity: product.quantity,
                    price: product.price
                })),
                date: new Date().toISOString()
            };

            saveOrder(order);
            navigate('/ProceedCheckOut'); 
            
        } else {
            Swal.fire(
                'Error!',
                'Your Cart is Empty!',
                'error'
            );
        }
    };

    // Calculate subtotal and total price
    const calculateSubtotal = (item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = parseInt(item.quantity, 10) || 0;
        return price * quantity;
    };

    const totalItems = cart.reduce((a, b) => a + (parseInt(b.quantity, 10) || 0), 0);
    const totalPrice = cart.reduce((a, b) => a + calculateSubtotal(b), 0);

    return (
        <section className='bg-cart_bg bg-cover bg-center bg-no-repeat h-screen mt-[80px]'>
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-2/3 px-4 bg-green-50 bg-opacity-50">
                        <h1 className='text-2xl font-bold mb-4 text-center italic underline text-green-700'>Shopping Cart</h1>
                        {cart.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white bg-opacity-70 border border-gray-200">
                                    <thead className="bg-green-600 border-b border-gray-300 text-white">
                                        <tr>
                                            <th className="p-3 text-left">Image</th>
                                            <th className="p-3 text-left">Product</th>
                                            <th className="p-3 text-left">Price</th>
                                            <th className="p-3 text-left">Quantity</th>
                                            <th className="p-3 text-left">Sub Total</th>
                                            <th className="p-3 text-left">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((product, index) => (
                                            <tr key={index} className='border-b border-green-800'>
                                                <td className="p-3">
                                                    <img src={product?.image} className='w-16 h-16 object-cover' alt={product?.name} />
                                                </td>
                                                <td className="p-3">{product?.name}</td>
                                                <td className="p-3">{parseFloat(product?.price).toFixed(2)} Taka</td>
                                                <td className="p-3 flex items-center">
                                                    <button 
                                                        onClick={() => handleQuantityChange(product.id, -1)}
                                                        className='bg-gray-200 px-2 py-1 rounded-l'
                                                    >
                                                        -
                                                    </button>
                                                    <span className='px-4'>{product?.quantity}</span>
                                                    <button 
                                                        onClick={() => handleQuantityChange(product.id, 1)}
                                                        className='bg-gray-200 px-2 py-1 rounded-r'
                                                    >
                                                        +
                                                    </button>
                                                </td>
                                                <td className="p-3">{calculateSubtotal(product).toFixed(2)} Taka</td>
                                                <td className="p-3">
                                                    <button 
                                                        onClick={() => {
                                                            removeFromDb(product.id);
                                                            setCart(cart.filter(p => p.id !== product.id));
                                                        }} 
                                                        className='bg-red-500 text-white px-4 py-2 rounded'
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button 
                                    onClick={() => deleteShoppingCart()} 
                                    className='mt-4 bg-red-500 text-white px-4 py-2 rounded'
                                >
                                    Remove All Products
                                </button>
                            </div>
                        ) : (
                            <p className='p-4 bg-green-400 text-gray-600'>
                                Your Cart is empty <Link to='/products' className='text-blue-500 underline'>Go Back</Link>
                            </p>
                        )}
                    </div>

                    <div className="w-full lg:w-1/3 px-4 mt-4 lg:mt-0">
                        <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-lg">
                            <h2 className='text-xl font-bold mb-4 text-center'>Summary</h2>
                            <h3 className='text-lg'>Sub Total: {totalItems} Item(s)</h3>
                            <h3 className='text-lg mb-4'>Price: {totalPrice.toFixed(2)} Taka</h3>
                            <button 
                                onClick={handleClick} 
                                className='w-full bg-green-500 text-white py-2 rounded'
                                disabled={cart.length === 0}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
