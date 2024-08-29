import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../images/Feature/account.jpg'
import img2 from '../../images/Feature/history.png'
import img3 from '../../images/Feature/wishlist.jpg'
import img4 from '../../images/Feature/aboutis.png'

const FeatureSection = () => {
    const navigate = useNavigate();

    const features = [
        { image: img1, title: 'Account Details', link: '/AccountDetails' },
        { image: img2, title: 'Order History', link: '/OrderHistory' },
        { image: img3, title: 'Wishlist', link: '/Wishlist' },
        { image: img4, title: 'Support', link: '/support' }
    ];

    return (
        <section className="bg-green-100 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-28 h-28 object-cover mt-4"
                            />
                            <div className="p-4 text-center w-full">
                                <button
                                    onClick={() => navigate(feature.link)}
                                    className="mt-4 w-full bg-green-100 text-green-900 hover:bg-white hover:text-green-600 font-semibold text-m py-2 rounded-md transition-all duration-300"
                                >
                                    {feature.title}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default FeatureSection;


