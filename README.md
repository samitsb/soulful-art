# Soulful ART 🎨

**Soulful ART** is a modern MERN stack e-commerce platform dedicated to connecting art lovers with original paintings and unique art pieces. Our vision is to create a vibrant marketplace where users can **buy pre-made art, request custom pieces**, and **artists can sell their creations, host auctions, and offer on-demand art services**. We aim to be the go-to destination for authentic, soul-stirring art.

---

## 🚀 Tech Stack

Soulful ART is built with a powerful and flexible MERN stack:

### Frontend
* **Next.js (App Router)**: For server-side rendering, routing, and a highly performant React application.
* **shadcn/ui**: For beautifully designed and accessible UI components.
* **Formik & Yup**: For robust form handling and validation.
* **Axios**: For making HTTP requests to the backend API.
* **Redux**: For predictable state management across the application.

### Backend
* **Node.js & Express.js**: For building a fast, scalable, and robust API.
* **Mongoose**: For elegant MongoDB object modeling and database interactions.
* **bcrypt**: For secure password hashing.
* **jsonwebtoken (JWT)**: For secure, token-based user authentication.

### Database
* **MongoDB**: A NoSQL database for flexible and scalable data storage.

---

## 🛣️ Project Phases & Current Progress

We're building Soulful ART in a structured approach, focusing on delivering core features incrementally.

### Phase 1: Foundation & Authentication (Partially Completed ✅)

* **Project Setup**: Initialized Next.js frontend and Express backend, configured MongoDB with Mongoose.
* **User Registration**:
    * Secure user registration with **hashed passwords (bcrypt)**.
    * Backend logic implemented to prevent duplicate email registrations.
    * Frontend forms for a smooth registration process.
* **User Login**:
    * Backend endpoint for user login.
    * **JWT-based authentication** (integration in progress) for secure sessions.
    * Frontend login forms with basic input handling.
* **Error Handling**: Basic error and success feedback mechanisms.

### Phase 2: Core Art Marketplace (Next Steps)

* **Product/Art Schema**: Define comprehensive schemas for various art types (paintings, sculptures, digital art).
* **Art Listing & Display**:
    * Create API endpoints for adding, fetching, and displaying art pieces.
    * Develop product listing pages and individual art detail pages.
    * Implement image upload and management for art pieces.
* **User Dashboards**: Basic profile views for both buyers and artists.

### Phase 3: Buyer & Seller Specific Features

* **Buying Features**:
    * Shopping cart and checkout process for buying pre-made art.
    * **"Demand Painting/Art" Feature**: Users can post requests for custom art pieces.
    * Order management and history for buyers.
* **Seller Features**:
    * Artist dashboard for managing listed art.
    * **Art Auction Functionality**: Artists can list art for auction, and users can bid.
    * **On-Demand Art Management**: Artists can view and respond to custom art requests.

### Phase 4: Enhancements & Deployment

* **Search & Filtering**: Advanced search capabilities to find art by style, medium, artist, price, etc.
* **Reviews & Ratings**: Users can review purchased art and artists.
* **Notifications**: Email and in-app notifications for order updates, auction bids, etc.
* **Deployment**: Prepare and deploy the application to production.

---

## 🛠️ Getting Started

Follow these steps to set up and run Soulful ART on your local machine:

### Prerequisites

* **Node.js**: Ensure Node.js (LTS version recommended) is installed.
* **MongoDB Database**: Have a MongoDB instance running (local or cloud like MongoDB Atlas).

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/Soulful_ART.git](https://github.com/yourusername/Soulful_ART.git) # Replace with your actual repo URL
    cd Soulful_ART
    ```

2.  **Install backend dependencies:**
    ```bash
    cd server
    npm install
    ```

3.  **Install frontend dependencies:**
    ```bash
    cd ../client
    npm install
    ```

4.  **Configure environment variables:**
    * Create a `.env` file in the **`server`** directory.
    * Add your MongoDB connection string and a JWT secret:
        ```
        MONGODB_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret_key_for_jwt_auth
        ```
    * Create a `.env.local` file in the **`client`** directory.
    * Add your backend API URL:
        ```
        NEXT_PUBLIC_API_URL=http://localhost:5000/api
        ```

5.  **Start the backend server:**
    ```bash
    cd server
    npm run dev # or npm start, depending on your package.json script
    ```
    *The backend will typically run on `http://localhost:5