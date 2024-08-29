import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { review } from '../../utilities/localDB'; 
import '../../App.css';

const Rev = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
   
    const storedReviews = review.getReviews();
    setReviews(storedReviews);

    if (storedReviews.length > 0) {
      const totalRating = storedReviews.reduce((acc, review) => acc + review.rating, 0);
      setAverageRating(totalRating / storedReviews.length);
    }
  }, []);

  const handleSubmit = () => {
    if (name && description && rating > 0) {
      const newReview = { name, description, rating };
      const updatedReviews = [...reviews, newReview];
      
      setReviews(updatedReviews);
      review.saveReview(updatedReviews); 

      const totalRating = updatedReviews.reduce((acc, review) => acc + review.rating, 0);
      setAverageRating(totalRating / updatedReviews.length);

      // Reset the form fields
      setName('');
      setDescription('');
      setRating(0);
    } else {
      alert('Please fill out all fields and provide a rating.');
    }
  };

  return (
    <div className="p-4 mx-auto bg-custom_bg bg-cover bg-no-repeat h-screen">
      <h2 className="text-xl font-bold mb-4 text-green-950 uppercase underline decoration-black text-center">
        Submit a Review
      </h2>
      <div className="flex flex-col items-center mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" p-2 w-full max-w-lg mb-2  border-2 border-color1"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className=" border-2 border-color1 p-2 w-full max-w-lg mb-2"
        />
        <div className="flex items-center mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={24}
              onClick={() => setRating(star)}
              className={star <= rating ? 'text-yellow-500 cursor-pointer' : 'text-gray-400 cursor-pointer'}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-white hover:scale-105 duration-300 text-black py-3 px-4 border-2 border-black rounded-full mt-4 hover:bg-custom_gradient hover:text-white ml-[5px]"
          >
            Submit
          </button>
        </div>
      </div>
      {averageRating > 0 && (
        <div className="mb-4 text-center">
          <h3 className="text-lg font-bold">Rating: {averageRating.toFixed(1)} / 5</h3>
        </div>
      )}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-bold mb-4">Reviews:</h3>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="flex items-start border p-4 mb-4 w-full max-w-lg rounded-lg bg-custom_gradient bg-opacity-30 shadow-md"
            >
              {/* Rounded shape with the first letter of the name */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white text-2xl font-bold mr-4">
                {review.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white italic text-xl">{review.name}</h4>
                <p className="text-white">{review.description}</p>
                <div className="flex mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      size={20}
                      className={star <= review.rating ? 'text-yellow-500' : 'text-gray-400'}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to submit one!</p>
        )}
      </div>
    </div>
  );
};

export default Rev;
