# AgriTrace AI – Smart Farm-to-Processor Management Platform

[![MongoDB](https://img.shields.io/badge/MongoDB-8+-green.svg)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-5+-black.svg)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-19+-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-24+-green.svg)](https://nodejs.org/)

## Project Title and Description

**AgriTrace AI** is an end-to-end, full-stack platform built to empower agricultural processors with complete visibility and traceability across their network of contracted farmers. By connecting the company, their field officers, and farmers in a single digital ecosystem, the platform streamlines farm-to-processor operations while ensuring accurate, real-time data flow.

Leveraging AI-driven insights and data analytics, AgriTrace AI enables smarter crop management, predicts harvest outcomes, and optimizes resource allocation—helping agricultural companies make informed decisions from planting to processing.

### Purpose and Problem Solved

Traditional farm-to-processor supply chains often rely on manual, paper-based record-keeping and siloed systems. This fragmentation leads to inefficiencies, delayed payments, inconsistent crop quality, and a lack of predictive insights necessary for proactive decision-making.

AgriTrace AI addresses these challenges by providing a single, integrated digital platform that ensures:
- Complete traceability – Every farm activity is recorded, auditable, and easily accessible.
- Real-time monitoring – Track farmer operations and crop performance as they happen.
- AI-powered recommendations – Mitigate risks, optimize resource allocation, and forecast yields accurately.
- Centralized data management – Replaces scattered manual systems with a reliable, unified source of truth.

By combining digitization, AI, and intuitive interfaces, AgriTrace AI empowers agroprocessors to make data-driven decisions, reduce operational risks, and improve efficiency across their network of contracted farmers.


### Sustainable Development Goals (SDGs)
AgriTrace AI aligns with key UN Sustainable Development Goals to drive meaningful impact:

- **SDG 2: Zero Hunger** - Enhances food supply chain efficiency through AI-driven yield forecasting and reduced post-harvest losses.
- **SDG 9: Industry & Innovation** - Builds digital infrastructure for modern agriculture, fostering innovation in the processing industry.
- **SDG 12: Responsible Production** - Ensures traceability and verification of sustainable sourcing and production practices.

## Features

- **Farmer Registration and Management**: Register farmers with details like name, location, contracted crops, and contact info. View and update farmer profiles.
- **Crop Tracking and Farm Activities**: Log and monitor farming activities such as planting, weeding, fertilizing, and harvesting for each farmer.
- **Seed/Fertilizer/Pesticide Management**: Track inputs used in farming activities to ensure compliance and optimize usage.
- **Harvesting and Collection Details**: Record harvest collections including weight, quality grade, and payment status.
- **Payment Tracking**: Manage and update payment statuses for collections, ensuring timely farmer compensation.
- **AI Insights and Recommendations**: Leverage AI to analyze farm data, generate qualitative insights, and provide predictive forecasts for yields and risks.
- **Dashboard Analytics**: Visualize data through interactive charts (e.g., yield by region, quality distribution, collections over time).
- **User Roles and Authentication**: Support for Admin (managers), Field Officers, and Farmers with role-based access control.
- **Responsive UI**: Modern, mobile-friendly interface built with React and TailwindCSS.

## Technology Stack

### Frontend
- **React 19**: Component-based UI library for building dynamic user interfaces.
- **Vite**: Fast build tool and development server for modern web projects.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **React Router DOM**: Client-side routing for single-page application navigation.
- **Axios**: HTTP client for API requests.
- **Chart.js & React-Chartjs-2**: Data visualization library for charts and graphs.
- **React Toastify**: Notification system for user feedback.
- **Headless UI & Heroicons**: Accessible UI components and icons.

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing farmer, activity, and collection data.
- **Mongoose**: ODM for MongoDB, providing schema validation and data modeling.
- **JWT (JSON Web Tokens)**: Secure authentication and authorization.
- **bcryptjs**: Password hashing for user security.
- **CORS**: Cross-origin resource sharing for API access.

### AI/ML Components
- **OpenAI GPT-4**: Integrated via OpenAI API for generating insights, summaries, and forecasts based on farm data.
- **Custom Analytics**: Aggregation pipelines in MongoDB for quantitative data analysis (e.g., charts).

### Other Tools
- **dotenv**: Environment variable management.
- **Nodemon**: Development tool for auto-restarting the server.
- **ESLint**: Code linting for maintaining code quality.

Explore AgriTrace AI through the following resources:

## 🚀 Live Demo

### Frontend
🔗 [View Live App](https://agritrace-ai.vercel.app)

### Backend
🔗 [View API Base URL](https://agritrace-ai.onrender.com)

---

## 🔐 Demo Credentials

These are test accounts for demonstration purposes. Use them to log in and explore the app. 

- **Manager Login**: Email: `demo-admin@agritrace-ai.com` | Password: `admin@123`
- **Field Officer Login**: Email: `demo-officer@agritrace-ai.com` | Password: `fieldofficer@123`

Note: Demo users have read-only access and cannot modify data.

---

## 🎥 Demo Video

[Watch the demo](https://www.dropbox.com/scl/fi/h1yxioxi5jy3vp07boxv0/AgriTrace-AI_Demo.mp4?rlkey=7480b05c8n6041kpmoxp8ut96&st=ntl58aod&dl=0)

If the video doesn't load, [watch the demo here](https://www.dropbox.com/scl/fi/h1yxioxi5jy3vp07boxv0/AgriTrace-AI_Demo.mp4?rlkey=7480b05c8n6041kpmoxp8ut96&st=ntl58aod&dl=0).

---



## Installation and Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- OpenAI API Key (for AI features)

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   OPENAI_API_KEY=your_openai_api_key
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000`.

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

### Running the Full Application
- Ensure MongoDB is running.
- Start the backend first, then the frontend.
- Access the application via the frontend URL.

## Usage

### For Field Officers
- Register new farmers and log farm activities (e.g., planting, harvesting).
- Record collections and update details.

### For Company Managers (Admins)
- Access the dashboard for AI insights and analytics.
- View charts on yields, quality, and trends.
- Generate farmer summaries and yield forecasts.
- Manage payments and overall operations.

Example Workflow:
1. **Register a Farmer**: Admin/Field Officer logs in and registers a farmer with crop details.
2. **Add Activity**: Log planting activity with inputs used.
3. **Record Collection**: After harvest, record weight, grade, and mark for payment.
4. **View Insights**: Admin checks dashboard for AI-generated insights on risks and forecasts.

## API Documentation Overview

The platform uses RESTful APIs with JWT-based authentication. All endpoints require authorization except login.

### Key Endpoints
- **Authentication**: `POST /api/auth/login`, `POST /api/auth/register`, `GET /api/auth/me`
- **Farmers**: `GET /api/farmers`, `POST /api/farmers`, `GET /api/farmers/:id`, `PUT /api/farmers/:id`, `DELETE /api/farmers/:id`
- **Activities**: `POST /api/activities`, `GET /api/activities/:farmerId`
- **Collections**: `POST /api/collections`, `GET /api/collections`, `PUT /api/collections/:id/pay`
- **AI Insights**: `GET /api/ai/insights`, `GET /api/ai/farmer-summary/:farmerId`, `GET /api/ai/analytics/*` (various chart data and forecasts)

### Request/Response Structure
- Requests: JSON payloads with required fields (e.g., `{ "name": "John Doe", "crop": "Maize" }`).
- Responses: JSON with data or error messages (e.g., `{ "message": "Farmer registered successfully" }`).
- Validation: Server-side validation ensures data integrity; errors return 400/500 status codes.

For detailed API docs, refer to the backend route files or use tools like Postman for testing.

## AI Functionality

AgriTrace AI integrates OpenAI's GPT-4 to transform raw farm data into actionable intelligence:

- **Qualitative Insights**: Analyzes recent activities to identify trends, risks (e.g., yield shortages), and opportunities.
- **Farmer Summaries**: Generates concise lifecycle summaries for individual farmers.
- **Quantitative Analytics**: Aggregates data for charts like activity distribution, collections over time, yield by region, and quality grades.
- **Predictive Forecasting**: Uses planting data to forecast harvest timelines, predict surpluses/shortages, and highlight risks.

AI responses are generated in real-time based on database queries, ensuring relevance and accuracy. Note: Requires a valid OpenAI API key.

## Folder Structure

```
AgriTrace/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Business logic (auth, farmers, AI, etc.)
│   ├── middleware/      # Authentication and authorization
│   ├── models/          # MongoDB schemas (User, Farmer, etc.)
│   ├── routes/          # API route definitions
│   ├── server.js        # Main server file
│   └── package.json     # Backend dependencies
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── context/     # React context for auth
│   │   ├── pages/       # Page components
│   │   ├── services/    # API service functions
│   │   └── main.jsx     # App entry point
│   └── package.json     # Frontend dependencies
└── README.md            # This file
```

## 📸 Screenshots
### Dashboard Overview
![Dashboard](./screenshots/dashboard.png)
*Interactive dashboard showing AI insights and analytics.*

### Farmer Management
![Farmers Page](./screenshots/farmers.png)
*Farmer registration and profile management interface.*

### Add Activity
![Add Activity](./screenshots/add-activity.png)
*Form for logging farm activities with seed, fertilizer, and pesticide tracking.*

### API Response Example
![API Response](./screenshots/api-response.png)
*Sample API response for data verification.*


## Contribution Guidelines
We welcome contributions! To get started:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a Pull Request.


