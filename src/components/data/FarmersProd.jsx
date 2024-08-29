import img100 from '../../images/spices/Basmati Rice.jpg';
import img1 from '../../images/spices/Carrot.jpg';
import img2 from '../../images/spices/Onion.jpg';
import img3 from '../../images/spices/potato.jpg';
import img4 from '../../images/spices/Pepper.jpg';
import img5 from '../../images/spices/Cauliflower.jpg';
import img6 from '../../images/spices/Grape.jpg';
import img7 from '../../images/spices/Broccoli.jpg';
import img8 from '../../images/spices/Garlic.jpg';
import img9 from '../../images/spices/Zucchini.jpg';
import img10 from '../../images/spices/Milk.jpg';
import img11 from '../../images/spices/Cheese.jpg';
import img12 from '../../images/spices/spinach.png';
import img13 from '../../images/spices/Butter.png';
import img14 from '../../images/spices/Cabbage.jpg';
import img15 from '../../images/spices/Cucumber.jpg';
import img16 from '../../images/spices/Tomato.jpg';
import img17 from '../../images/spices/Lettuce.jpg';
import img18 from '../../images/spices/mango.jpg';
import img19 from '../../images/spices/orange.png';
import img20 from '../../images/spices/str.webp';

const FarmersProd = [
    { 
        id: "1", 
        name: "Carrot", 
        description: "Carrots are sweet, crunchy vegetables rich in beta-carotene and other nutrients. They are versatile and can be eaten raw, cooked, or used in a variety of sweet and savory dishes.", 
        image: img1,
        price: "90", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "2", 
        name: "Onion", 
        description: "Onions are pungent, flavorful bulbs that are a staple in many cuisines. They can be used raw in salads, caramelized for a sweet flavor, or cooked in a variety of dishes to add depth and richness.", 
        image: img2,
        price: "70", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "3", 
        name: "Potato", 
        description: "Potatoes are starchy tubers that are a versatile staple in many diets. They can be baked, boiled, mashed, or fried and are used in a wide range of dishes from around the world.", 
        image: img3,
        price: "50", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "4", 
        name: "Pepper", 
        description: "Peppers come in a variety of colors and heat levels, from sweet bell peppers to spicy hot peppers. They are used in many dishes for their flavor, color, and nutritional benefits.", 
        image: img4,
        price: "120", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "5", 
        name: "Cauliflower", 
        description: "Cauliflower is a versatile vegetable with a mild flavor that can be roasted, boiled, fried, or eaten raw. It's a popular low-carb substitute for grains and is used in a variety of dishes.", 
        image: img5,
        price: "80", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "6", 
        name: "Grape", 
        description: "Grapes are sweet, juicy fruits that can be eaten fresh, dried into raisins, or used in cooking. They are rich in antioxidants and vitamins, making them a healthy snack.", 
        image: img6,
        price: "150", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "7", 
        name: "Broccoli", 
        description: "Broccoli is a nutrient-rich vegetable that can be steamed, roasted, or used in stir-fries. It's high in vitamins, minerals, and fiber, making it a healthy addition to any diet.", 
        image: img7,
        price: "110", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "8", 
        name: "Garlic", 
        description: "Garlic is a strong-flavored bulb used to add depth and aroma to dishes. It is used in cooking and is also known for its health benefits, including boosting the immune system.", 
        image: img8,
        price: "130", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "9", 
        name: "Zucchini", 
        description: "Zucchini is a mild-flavored summer squash that can be grilled, sautéed, or baked. It's low in calories and high in vitamins, making it a popular choice for healthy meals.", 
        image: img9,
        price: "90", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "10", 
        name: "Milk", 
        description: "Milk is a nutrient-rich liquid that is a staple in many diets. It is high in calcium, protein, and vitamins, and is used in a variety of drinks, cereals, and recipes.", 
        image: img10,
        price: "60", // Updated price without "৳"
        weight: "1L"
    },
    { 
        id: "11", 
        name: "Cheese", 
        description: "Cheese is a dairy product made from milk that comes in a variety of flavors, textures, and forms. It is used in cooking, baking, and as a snack, adding richness and flavor to dishes.", 
        image: img11,
        price: "300", // Updated price without "৳"
        weight: "500g"
    },
    { 
        id: "12", 
        name: "Spinach", 
        description: "Spinach is a leafy green vegetable rich in vitamins and minerals. It can be eaten raw in salads, sautéed as a side dish, or added to soups and stews for a nutritious boost.", 
        image: img12,
        price: "40", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "13", 
        name: "Butter", 
        description: "Butter is a dairy product made from churning cream, used in cooking, baking, and as a spread. It adds a rich flavor and creamy texture to dishes.", 
        image: img13,
        price: "200", // Updated price without "৳"
        weight: "500g"
    },
    { 
        id: "14", 
        name: "Cabbage", 
        description: "Cabbage is a leafy green or purple vegetable that is a staple in many dishes around the world. It can be eaten raw, sautéed, fermented, or cooked, offering a crisp texture and mild flavor.", 
        image: img14,
        price: "30", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "15", 
        name: "Cucumber", 
        description: "Cucumbers are crisp, refreshing vegetables often used in salads and sandwiches. They have a high water content, making them a hydrating snack.", 
        image: img15,
        price: "50", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "16", 
        name: "Tomato", 
        description: "Tomatoes are juicy, flavorful fruits often used in salads, sauces, and sandwiches. They are rich in vitamins and antioxidants, contributing to a healthy diet.", 
        image: img16,
        price: "70", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "17", 
        name: "Lettuce", 
        description: "Lettuce is a leafy green vegetable often used in salads and sandwiches. It's low in calories and high in fiber, making it a healthy addition to meals.", 
        image: img17,
        price: "40", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "18", 
        name: "Mango", 
        description: "Mangoes are sweet, tropical fruits that can be eaten fresh, dried, or used in smoothies and desserts. They are rich in vitamins A and C.", 
        image: img18,
        price: "180", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "19", 
        name: "Orange", 
        description: "Oranges are citrus fruits known for their sweet and tangy flavor. They are a great source of vitamin C and can be eaten fresh or juiced.", 
        image: img19,
        price: "150", // Updated price without "৳"
        weight: "1kg"
    },
    { 
        id: "20", 
        name: "Strawberries", 
        description: "Strawberries are juicy, sweet berries that can be eaten fresh, used in desserts, or added to salads. They are high in vitamins and antioxidants.", 
        image: img20,
        price: "250", // Updated price without "৳"
        weight: "1kg"
    }
];

export default FarmersProd;
