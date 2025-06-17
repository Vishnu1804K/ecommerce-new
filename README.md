# MERN E-commerce Application

A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring modern UI design and complete shopping functionality.

## 🚀 Features

- **Product Management**: Browse products by categories (Men, Women, Kids)
- **Shopping Cart**: Add/remove items, quantity management, total calculation
- **Wishlist**: Save favorite items for later
- **User Authentication**: Login/Register functionality
- **Payment Integration**: Chapa payment gateway integration
- **Responsive Design**: Mobile-friendly interface
- **Search Functionality**: Find products quickly
- **Image Carousel**: Product image galleries
- **Category Filtering**: Browse by product categories

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **React Router** - Navigation
- **Material-UI** - UI components
- **Bootstrap** - CSS framework
- **Axios** - HTTP client
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Multer** - File upload
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
mern-ecommerce/
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── routes/         # Page components
│   │   ├── Context/        # React Context providers
│   │   ├── config/         # Configuration files
│   │   └── utils/          # Utility functions
│   └── package.json
├── server/                 # Backend Node.js application
│   ├── controllers/        # Route controllers
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── middlewares/       # Custom middlewares
│   ├── config/            # Database configuration
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vishnu1804K/ecommerce.git
   cd ecommerce
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the `server` directory:
   ```env
   PORT=5001
   MONGO_URI=your_mongodb_connection_string
   CHAPA_URL=https://api.chapa.co/v1/transaction/initialize
   CHAPA_AUTH=your_chapa_api_key
   ```

5. **Start the application**

   **Backend:**
   ```bash
   cd server
   npm start
   ```

   **Frontend:**
   ```bash
   cd client
   npm start
   ```

## 🌐 API Endpoints

### Items
- `GET /api/items` - Get all products
- `POST /api/items` - Add new product
- `PUT /api/items/:id` - Update product
- `DELETE /api/items/:id` - Delete product

### Payment
- `POST /api/payment` - Initialize payment
- `GET /api/payment/verify/:id` - Verify payment

## 🎨 Key Features Implementation

### Shopping Cart
- Add/remove items
- Quantity management
- Total price calculation
- Persistent cart state

### Wishlist
- Save favorite items
- Move items to cart
- Remove from wishlist

### Product Management
- Category-based filtering
- Product search
- Image carousel
- Related products

### User Experience
- Responsive design
- Loading states
- Error handling
- Smooth navigation

## 🔧 Configuration

### Database
The application uses MongoDB Atlas for data storage. Update the `MONGO_URI` in your `.env` file.

### Payment Gateway
Chapa payment gateway is integrated for checkout functionality. Add your Chapa API key to the `.env` file.

### Port Configuration
- Backend runs on port 5001 (configurable)
- Frontend runs on port 3000 (or next available)

## 📱 Screenshots

[Add screenshots of your application here]

## 🤝 Contributing

This is a personal project. For any suggestions or issues, please create an issue in the repository.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Vishnu Kancherla**
- GitHub: [@Vishnu1804K](https://github.com/Vishnu1804K)

## 🙏 Acknowledgments

- React.js community
- Material-UI team
- MongoDB Atlas
- Chapa payment gateway

---

**Note**: This project was created and maintained by Vishnu Kancherla as a full-stack e-commerce solution.
