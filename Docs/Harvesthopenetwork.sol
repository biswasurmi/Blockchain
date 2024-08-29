// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HarvestHopeNetwork {
    // Define User structure
    struct User {
        string name;
        string userAddress; // This represents location or some other identifier
        string role; // Role can be Farmer, Inspector, etc.
        bool isRegistered;
        string[] reviews;
    }

    // Define Product structure
    struct Product {
        uint productId;
        string productName;
        string category;
        uint price;
        uint quantity;
        string rating;
        string expiryDate;
        address farmersId; // Use address for farmer
        bool isAuctioned;
        bool isCertified;
        bool isSold; // Add this flag to indicate if the product is sold
        string[] reviews;
    }

    // Define Auction structure
    struct Auction {
        uint farmersBid;
        uint wholesalersBid;
        uint minPrice;
        uint startPrice;
        uint timer; // Duration in seconds
        uint startTime; // Timestamp when auction started
        uint productId;
        address farmersId; // Use address for farmer
        bool isActive;
    }

    // Define state variables
    uint internal _lastProductId = 0;
    uint internal _lastAuctionId = 0;
    mapping(address => uint[]) private FarmerProducts; // Maps farmer address to list of productIds
    mapping(uint => Product) private products; // Maps productId to Product
    mapping(uint => Auction) private auctions; // Maps auctionId to Auction
    mapping(address => User) private users; // Maps user address to User

    // Register a new user
    function registerUser(
        string memory name, 
        string memory userAddress, 
        string memory role
    ) public {
        address userId = msg.sender; // Use msg.sender as user address
        require(!users[userId].isRegistered, "User is already registered.");
        users[userId] = User({
            name: name,
            userAddress: userAddress,
            role: role,
            isRegistered: true,
            reviews: new string[](0)
        });
    }
    // Function to give a review to a product
    function giveProductReview(uint productId, string memory review) public {
        require(products[productId].isSold, "Product is not sold.");
        require(users[msg.sender].isRegistered, "Reviewer is not registered.");
        
        products[productId].reviews.push(review); // Add the review to the product's reviews
        users[products[productId].farmersId].reviews.push(review); // Also add to the farmer's reviews
    }

    // Function to show reviews for a product owned by a specific user
    function showReviews(address userId, uint productId) public view returns (string[] memory) {
        require(users[userId].isRegistered, "User is not registered.");
        require(products[productId].isSold, "Product is not sold.");
        require(products[productId].farmersId == userId, "Product does not belong to the user.");

        return products[productId].reviews; // Return reviews for the specified product
    }
    // Generate the next product ID
    function nextProductId() internal returns (uint) {
        uint newProductId = _lastProductId;
        _lastProductId += 1;
        return newProductId;
    }

    // Generate the next auction ID
    function nextAuctionId() internal returns (uint) {
        uint newAuctionId = _lastAuctionId;
        _lastAuctionId += 1;
        return newAuctionId;
    }

    // Add a product for inspection
    function FarmeraddProductForInspection(
        string memory productName, 
        string memory category,
        uint quantity
    ) public {
        address userId = msg.sender;
        User storage user = users[userId];
        require(user.isRegistered, "User is not registered.");
        require(keccak256(bytes(user.role)) == keccak256(bytes("Farmer")), "User is not a farmer.");

        uint productId = nextProductId();
        Product memory newProduct = Product({
            productId: productId,
            productName: productName,
            category: category,
            price: 0,
            quantity: quantity,
            rating: "",
            expiryDate: "",
            farmersId: userId,
            isAuctioned: false,
            isCertified: false,
            isSold: false, // Initialize as false
            reviews: new string[](0)
        });

        products[productId] = newProduct;
        FarmerProducts[userId].push(productId);
    }

    // Function to certify products
    function certifyProducts() public {
        address userId = msg.sender;
        User storage user = users[userId];
        require(user.isRegistered, "User is not registered.");
        require(keccak256(bytes(user.role)) == keccak256(bytes("Inspector")), "User is not an inspector.");

        for (uint i = 0; i < _lastProductId; i++) {
            Product storage product = products[i];
            if (product.farmersId != userId && !product.isCertified) {
                product.isCertified = true;
            }
        }
    }

    // Function to send certified products to auction
    function sendCertifiedProductsToAuction(
        uint minPrice, 
        uint startPrice, 
        uint timer
    ) public {
        address userId = msg.sender;
        User storage user = users[userId];
        require(user.isRegistered, "User is not registered.");
        require(keccak256(bytes(user.role)) == keccak256(bytes("Farmer")), "User is not a farmer.");

        uint[] storage farmerProductList = FarmerProducts[userId];
        for (uint i = 0; i < farmerProductList.length; i++) {
            uint productId = farmerProductList[i];
            Product storage product = products[productId];

            // Check if the product is certified and not yet auctioned
            if (product.isCertified && !product.isAuctioned) {
                uint auctionId = nextAuctionId();
                Auction memory newAuction = Auction({
                    farmersBid: startPrice,
                    wholesalersBid: 0,
                    minPrice: minPrice,
                    startPrice: startPrice,
                    timer: timer,
                    startTime: block.timestamp,
                    productId: productId,
                    farmersId: userId,
                    isActive: true
                });

                auctions[auctionId] = newAuction;
                product.isAuctioned = true;
            }
        }
    }

    function isAuctionActive(uint auctionId) public view returns (bool) {
        Auction memory auction = auctions[auctionId];
        if (block.timestamp >= auction.startTime + auction.timer) {
            return false;
        }
        return auction.isActive;
    }

    function getAllOngoingAuctions() public view returns (Auction[] memory) {
        uint ongoingCount = 0;
        for (uint i = 0; i < _lastAuctionId; i++) {
            if (isAuctionActive(i)) {
                ongoingCount++;
            }
        }

        Auction[] memory ongoingAuctions = new Auction[](ongoingCount);
        uint index = 0;
        for (uint i = 0; i < _lastAuctionId; i++) {
            if (isAuctionActive(i)) {
                ongoingAuctions[index] = auctions[i];
                index++;
            }
        }
        return ongoingAuctions;
    }

    // Function to place a bid on an auction
    function FarmersplaceBid(uint auctionId, uint bidAmount) public {
        address userId = msg.sender;
        User storage user = users[userId];
        require(user.isRegistered, "User is not registered.");
        require(keccak256(bytes(user.role)) == keccak256(bytes("Farmer")), "User is not a farmer.");
        
        Auction storage auction = auctions[auctionId];
        require(isAuctionActive(auctionId), "Auction is not active.");
        require(bidAmount <= auction.farmersBid, "Bid amount exceeds current farmers bid.");
        require(bidAmount >= auction.wholesalersBid, "Bid amount is lower than the current wholesalers bid.");

        // Update the farmer's bid
        auction.farmersBid = bidAmount;
    }

    function WholesalersplaceBid(uint auctionId, uint bidAmount) public {
        address userId = msg.sender;
        User storage user = users[userId];
        require(user.isRegistered, "User is not registered.");
        require(keccak256(bytes(user.role)) == keccak256(bytes("Wholesaler")), "User is not a wholesaler.");
        
        Auction storage auction = auctions[auctionId];
        require(isAuctionActive(auctionId), "Auction is not active.");
        require(bidAmount <= auction.farmersBid, "Bid amount exceeds current farmers bid.");
        require(bidAmount >= auction.wholesalersBid, "Bid amount is lower than the current wholesalers bid.");

        // Update the farmer's bid
        auction.wholesalersBid = bidAmount;
    }
    // Function to update the sale status of products
    function farmersProductsForSale() public {
        address userId = msg.sender;
        User storage user = users[userId];
        
        // Check if the user is a registered farmer
        require(user.isRegistered, "User is not registered.");
        require(keccak256(bytes(user.role)) == keccak256(bytes("Farmer")), "User is not a farmer.");

        uint[] storage farmerProductList = FarmerProducts[userId];

        for (uint i = 0; i < farmerProductList.length; i++) {
            uint productId = farmerProductList[i];
            Product storage product = products[productId];

            // Check if the product belongs to the farmer and is certified and auctioned
            if (product.farmersId == userId && product.isCertified && product.isAuctioned) {
                uint auctionId = findAuctionByProductId(productId);
                if (auctionId != type(uint).max && !isAuctionActive(auctionId)) {
                    product.isSold = true; // Mark as sold if the auction is over
                }
            }
        }
    }
    // Helper function to find an auction by productId
    function findAuctionByProductId(uint productId) internal view returns (uint) {
        for (uint i = 0; i < _lastAuctionId; i++) {
            if (auctions[i].productId == productId) {
                return i;
            }
        }
        return type(uint).max; // Return a large number if auction is not found
    }
    // Function to get all products ready to be sold along with owner information
    function getAllProductsReadyToSell() public view returns (
        uint[] memory productIds,
        string[] memory productNames,
        string[] memory productCategories,
        uint[] memory productPrices,
        uint[] memory productQuantities,
        string[] memory productRatings,
        string[] memory productExpiryDates,
        address[] memory ownerIds,  // Updated to address[]
        string[] memory ownerRoles
    ) {
        uint totalProducts = _lastProductId;
        uint count = 0;

        // First, count how many products are ready to be sold
        for (uint i = 0; i < totalProducts; i++) {
            if (products[i].isSold) {
                count++;
            }
        }

        // Initialize arrays to store the product and owner information
        productIds = new uint[](count);
        productNames = new string[](count);
        productCategories = new string[](count);
        productPrices = new uint[](count);
        productQuantities = new uint[](count);
        productRatings = new string[](count);
        productExpiryDates = new string[](count);
        ownerIds = new address[](count);  // Updated to address[]
        ownerRoles = new string[](count);

        uint index = 0;

        for (uint i = 0; i < totalProducts; i++) {
            if (products[i].isSold) {
                // Retrieve the product and owner information
                Product storage prod = products[i];
                User storage owner = users[prod.farmersId];  // Corrected to farmersId

                // Store product details
                productIds[index] = prod.productId;
                productNames[index] = prod.productName;
                productCategories[index] = prod.category;
                productPrices[index] = prod.price;
                productQuantities[index] = prod.quantity;
                productRatings[index] = prod.rating;
                productExpiryDates[index] = prod.expiryDate;

                // Store owner information
                ownerIds[index] = prod.farmersId;  // Corrected to address
                ownerRoles[index] = owner.role;

                index++;
            }
        }

        return (
            productIds,
            productNames,
            productCategories,
            productPrices,
            productQuantities,
            productRatings,
            productExpiryDates,
            ownerIds,
            ownerRoles
        );
    }
    // Define history structures
    mapping(address => uint[]) public farmerHistory; // Maps farmer address to their sales history
    mapping(address => uint[]) public wholesalerHistory; // Maps wholesaler address to their purchase history
    mapping(address => uint[]) public retailerHistory; // Maps retailer address to their purchase history
    mapping(address => uint[]) public consumerHistory; // Maps consumer address to their purchase history
    // Function to buy a product
    function buyProduct(
        address buyerAddress, 
        uint productId, 
        uint quantity
    ) public {
        User storage buyer = users[buyerAddress];
        Product storage product = products[productId];
        
        require(buyer.isRegistered, "Buyer is not registered.");
        require(product.quantity >= quantity, "Not enough quantity available.");

        // Determine the product owner
        address ownerAddress = product.farmersId;
        User storage owner = users[ownerAddress];

        // Check role-based purchase permissions
        if (keccak256(bytes(owner.role)) == keccak256(bytes("Farmer"))) {
            require(keccak256(bytes(buyer.role)) == keccak256(bytes("Wholesaler")) || 
                    keccak256(bytes(buyer.role)) == keccak256(bytes("Retailer")) || 
                    keccak256(bytes(buyer.role)) == keccak256(bytes("Consumer")), 
                    "Only wholesalers, retailers, or consumers can buy from a farmer.");
        } else if (keccak256(bytes(owner.role)) == keccak256(bytes("Wholesaler"))) {
            require(keccak256(bytes(buyer.role)) == keccak256(bytes("Retailer")) || 
                    keccak256(bytes(buyer.role)) == keccak256(bytes("Consumer")), 
                    "Only retailers or consumers can buy from a wholesaler.");
        } else if (keccak256(bytes(owner.role)) == keccak256(bytes("Retailer"))) {
            require(keccak256(bytes(buyer.role)) == keccak256(bytes("Consumer")), 
                    "Only consumers can buy from a retailer.");
        } else {
            revert("Invalid owner role.");
        }

        // Update product details based on buyer's role
        if (keccak256(bytes(buyer.role)) == keccak256(bytes("Wholesaler"))) {
            product.price += 10;
            // Set new product owner role to wholesaler
            product.farmersId = buyerAddress; // Update to new owner (wholesaler)
        } else if (keccak256(bytes(buyer.role)) == keccak256(bytes("Retailer"))) {
            product.price += 20;
            // Set new product owner role to retailer
            product.farmersId = buyerAddress; // Update to new owner (retailer)
        }

        // Handle remaining stock and create new product if necessary
        uint remainingQuantity = product.quantity - quantity;
        if (remainingQuantity == 0) {
            delete products[productId];
        } else {
            // Create a new product entry with updated details
            uint newProductId = nextProductId();
            products[newProductId] = Product({
                productId: newProductId,
                productName: product.productName,
                category: product.category,
                price: product.price,
                quantity: quantity,
                rating: product.rating,
                expiryDate: product.expiryDate,
                farmersId: buyerAddress, // New owner
                isAuctioned: product.isAuctioned,
                isCertified: product.isCertified,
                isSold: true,
                reviews: new string[](0)
            });
        }

        // Update the transaction histories
        if (keccak256(bytes(owner.role)) == keccak256(bytes("Farmer"))) {
            farmerHistory[ownerAddress].push(productId);
        } else if (keccak256(bytes(owner.role)) == keccak256(bytes("Wholesaler"))) {
            wholesalerHistory[ownerAddress].push(productId);
        } else if (keccak256(bytes(owner.role)) == keccak256(bytes("Retailer"))) {
            retailerHistory[ownerAddress].push(productId);
        }

        if (keccak256(bytes(buyer.role)) == keccak256(bytes("Consumer"))) {
            consumerHistory[buyerAddress].push(productId);
        } else if (keccak256(bytes(buyer.role)) == keccak256(bytes("Retailer"))) {
            retailerHistory[buyerAddress].push(productId);
        } else if (keccak256(bytes(buyer.role)) == keccak256(bytes("Wholesaler"))) {
            wholesalerHistory[buyerAddress].push(productId);
        }
    }

    // Function to get history with simplified product details
    function getSimplifiedHistory(
        address userAddress,
        string memory role,
        string memory transactionStatus // Added input parameter
    ) public view returns (
        string[] memory productNames,
        string[] memory statuses, // Renamed to 'statuses' for clarity
        string[] memory ownerNames,
        uint[] memory productQuantities
    ) {
        // Fetch history based on user role
        uint[] storage history = roleBasedHistory(userAddress, role);
        uint historyLength = history.length;

        // Initialize arrays
        productNames = new string[](historyLength);
        statuses = new string[](historyLength);
        ownerNames = new string[](historyLength);
        productQuantities = new uint[](historyLength);

        for (uint i = 0; i < historyLength; i++) {
            Product storage prod = products[history[i]];
            User storage owner = users[prod.farmersId];

            productNames[i] = prod.productName;
            statuses[i] = transactionStatus; // Use the provided transaction status
            ownerNames[i] = owner.name;
            productQuantities[i] = prod.quantity;
        }

        return (
            productNames,
            statuses,
            ownerNames,
            productQuantities
        );
    }
    // Helper function to get history based on role
    function roleBasedHistory(address userAddress, string memory role) internal view returns (uint[] storage) {
        if (keccak256(bytes(role)) == keccak256(bytes("Farmer"))) {
            return farmerHistory[userAddress];
        } else if (keccak256(bytes(role)) == keccak256(bytes("Wholesaler"))) {
            return wholesalerHistory[userAddress];
        } else if (keccak256(bytes(role)) == keccak256(bytes("Retailer"))) {
            return retailerHistory[userAddress];
        } else if (keccak256(bytes(role)) == keccak256(bytes("Consumer"))) {
            return consumerHistory[userAddress];
        } else {
            revert("Invalid role.");
        }
    }

}
