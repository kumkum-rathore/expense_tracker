# 💰 Expense Tracker

A full-stack web application for managing personal finances with real-time income/expense tracking. Built with React (Vite), Node.js/Express, MongoDB, and styled with Tailwind CSS.

## 🌟 Features

- ✅ **Add Transactions** - Record income and expense transactions
- ✅ **Real-time Balance** - View total balance, income, and expense breakdown
- ✅ **Transaction History** - See all transactions with timestamps and details
- ✅ **Delete Transactions** - Remove unwanted transactions
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile devices
- ✅ **Dark Mode Support** - Built-in dark mode with Tailwind CSS
- ✅ **Error Handling** - Comprehensive error messages and validation
- ✅ **Modern UI** - Beautiful interface with Tailwind CSS and Lucide icons

## 📋 Requirements

- **Node.js** (v14 or higher)
- **MongoDB** (local or MongoDB Atlas)
- **npm** or **yarn**

## 🚀 Installation & Setup

### 1. Clone or Extract Project
```bash
cd "expense tracker"
```

### 2. Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file (if not exists) with MongoDB URI
# .env should contain:
# MONGO_URI=mongodb://localhost:27017/expense-tracker

# Start the server
npm run dev
# or for production:
npm start
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Navigate to frontend
cd frontend/"expense tracker"

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

## 📁 Project Structure

```
expense-tracker/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   └── transactionController.js  # Business logic
│   ├── models/
│   │   └── Transaction.js        # Database schema
│   ├── routes/
│   │   └── transactionRoutes.js  # API endpoints
│   ├── .env                      # Environment variables
│   ├── package.json
│   └── server.js                 # Express app
│
└── frontend/
    └── expense tracker/
        ├── public/
        ├── src/
        │   ├── components/
        │   │   ├── Balance.jsx          # Balance cards
        │   │   ├── TransactionForm.jsx  # Add transaction form
        │   │   └── TransactionList.jsx  # Transaction history
        │   ├── App.jsx                  # Main app component
        │   ├── main.jsx                 # Entry point
        │   └── index.css                # Tailwind styles
        ├── index.html
        ├── package.json
        ├── tailwind.config.js          # Tailwind configuration
        ├── postcss.config.js           # PostCSS configuration
        └── vite.config.js              # Vite configuration
```

## 🔌 API Endpoints

### Get All Transactions
```
GET /api/transactions
```

### Add New Transaction
```
POST /api/transactions
Body: {
  "title": "Salary",
  "amount": 50000,
  "type": "income"  // or "expense"
}
```

### Delete Transaction
```
DELETE /api/transactions/:id
```

## 🛠️ Technologies Used

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin support

## 📝 Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb://localhost:27017/expense-tracker
PORT=5000
```

## 🎨 Styling

The application uses **Tailwind CSS** for styling with support for:
- Dark mode
- Responsive design
- Beautiful cards and forms
- Smooth transitions and animations

## 🐛 Troubleshooting

### Backend won't start
- Make sure MongoDB is running
- Check if port 5000 is available
- Verify .env file has correct MONGO_URI

### Frontend can't connect to backend
- Ensure backend is running on port 5000
- Check if CORS is properly configured
- Clear browser cache and try again

### MongoDB connection error
- Start MongoDB: `mongod` (on Windows/Mac/Linux)
- Or use MongoDB Atlas connection string in .env

## 📦 Available Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
npm run dev      # Start with auto-reload
npm start        # Start server
```

## 💡 Future Enhancements

- User authentication and authorization
- Budget management and alerts
- Category-wise expense tracking
- Export reports (CSV/PDF)
- Charts and analytics dashboard
- Recurring transactions
- Multi-currency support
- Data backup and restore

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Support

For issues or questions, please check the code comments or create an issue in the repository.

---

**Happy Tracking! 💸**
