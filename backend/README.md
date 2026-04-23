# Portfolio Backend

This is the backend server for your personal portfolio, built with Node.js, Express, and MongoDB.

## Features
- **Project API**: Served from MongoDB.
- **Skill API**: Served from MongoDB.
- **Contact Form**: Saves messages to MongoDB and sends email notifications via Nodemailer.

## Setup Instructions

1.  **Environment Variables**:
    Update the `backend/.env` file with your credentials:
    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/portfolio
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-app-password
    RECEIVER_EMAIL=your-email@gmail.com
    ```
    *Note: For Gmail, you may need to generate an "App Password".*

2.  **Install Dependencies**:
    ```bash
    cd backend
    npm install
    ```

3.  **Seed the Database**:
    Run the seed script to populate the database with initial data:
    ```bash
    node seed.js
    ```

4.  **Run the Server**:
    ```bash
    npm run dev  # Starts with nodemon
    # OR
    node server.js
    ```

## API Endpoints
- `GET /api/projects`: Fetch all projects.
- `GET /api/skills`: Fetch all skills.
- `POST /api/contact`: Send a contact message.
