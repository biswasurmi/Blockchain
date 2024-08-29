import Swal from "sweetalert2";



const addToDB = id =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
   

    const quantity = cart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        cart[id] = newQuantity;
    }

    else{
        cart[id] = 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}


const removeOrderFromHistory = (orderId) => {
    let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    orderHistory = orderHistory.filter(order => order.id !== orderId);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
};

const getStoredCart = () =>{
    let shoppingCart = {};

    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('cart', JSON.stringify(shoppingCart));
        }
        Swal.fire(
            'Product Removed!',
            'You have removed a Product!',
            'info'
          )
    }
      setTimeout(() => window.location.reload(), 1000);
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('cart');
    window.location.reload();
}

const review = {
    getReviews: () => {
      return JSON.parse(localStorage.getItem('reviews')) || [];
    },
    saveReview: (reviews) => {
      localStorage.setItem('reviews', JSON.stringify(reviews));
    }
  };
  // Add these functions to localDB.js

export const saveOrder = (order) => {
    let orders = JSON.parse(localStorage.getItem('orderHistory')) || [];
    orders.push(order);
    localStorage.setItem('orderHistory', JSON.stringify(orders));
};

export const getOrderHistory = () => {
    return JSON.parse(localStorage.getItem('orderHistory')) || [];
};

export {
    
    addToDB,
    getStoredCart,
    removeFromDb,
  
    removeOrderFromHistory,
    deleteShoppingCart,
    review
}