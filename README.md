📚 Full Stack Book Store MERN Project
A complete MERN stack project for managing a book store, including user authentication, book management, and order processing.

🛠️ How to Run This Project
Frontend Setup
Follow these steps to set up and run the frontend:

Clone or Unzip
Clone or extract the project repository.

Navigate to Frontend Directory

bash
Copy code
cd frontend
Configure Environment Variables

Create a .env.local file at the root level of the frontend directory (same location as package.json).

Add the following environment variables:

env
Copy code
VITE_API_KEY="YOUR_FIREBASE_API_KEY"
VITE_AUTH_DOMAIN="YOUR_FIREBASE_AUTH_DOMAIN"
VITE_PROJECT_ID="YOUR_FIREBASE_PROJECT_ID"
VITE_STORAGE_BUCKET="YOUR_FIREBASE_STORAGE_BUCKET"
VITE_MESSAGING_SENDER_ID="YOUR_FIREBASE_MESSAGING_SENDER_ID"
VITE_APP_ID="YOUR_FIREBASE_APP_ID"
Note: Replace YOUR_* placeholders with your Firebase configuration.

Install Dependencies
Run the following command to install required packages:

bash
Copy code
npm install
Run the Frontend
Start the development server:

bash
Copy code
npm run dev
Backend Setup
Follow these steps to set up and run the backend:

Clone or Unzip
Clone or extract the project repository.

Navigate to Backend Directory

bash
Copy code
cd backend
Install Dependencies
Run the following command to install required packages:

bash
Copy code
npm install
Configure Environment Variables

Create a .env file at the root level of the backend directory (same location as package.json).

Add the following environment variables:

env
Copy code
DB_URL="YOUR_MONGODB_CONNECTION_STRING"
JWT_SECRET_KEY="YOUR_SECRET_KEY"
Note: Replace YOUR_* placeholders with your MongoDB connection string and a secure JWT secret key.

Run the Backend
Start the development server:

bash
Copy code
npm run start:dev
📦 Technologies Used
Frontend: React.js, Vite, Firebase
Backend: Node.js, Express.js, MongoDB
Authentication: Firebase Auth, JWT
Styling: Material-UI, Tailwind CSS
📋 Features
Book Management: Add, edit, delete, and fetch books.
User Authentication: Secure login and signup functionality.
Order Processing: Place and manage orders.
Admin Panel: Overview and analytics for book store management.
📝 Notes
Make sure you have Node.js and MongoDB installed on your system.
Replace all placeholder values (YOUR_*) with your actual configuration values.
The backend uses JWT for secure API access; ensure your secret key is strong and kept private.
🚀 Project Commands Summary
Frontend
Command	Description
npm install	Install dependencies
npm run dev	Run the development server
Backend
Command	Description
npm install	Install dependencies
npm run start:dev	Run the backend server
💡 Tips
Keep your .env files private and add them to .gitignore to prevent accidental exposure.
Use strong, unique credentials for JWT and MongoDB.
Regularly update dependencies to avoid security vulnerabilities.
