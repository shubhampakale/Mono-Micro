# Monolithic React + Node.js/Express App

## Folder Structure

**client/** (React Frontend)
- `package.json`: Manages frontend dependencies (React, ReactDOM) and scripts.
- `src/App.js`: Main React component. Calls the backend API and displays the result.
- `src/index.js`: Entry point for the React app. Renders `App` into the DOM.
- `public/index.html`: HTML template for the React app. Contains the root div.

**server/** (Node.js/Express Backend)
- `package.json`: Manages backend dependencies (Express, CORS) and scripts.
- `index.js`: Main server file. Sets up Express, enables CORS, and defines the `/api/message` endpoint.

## How It Works
- The backend API is defined in `server/index.js` and exposes `/api/message`.
- The React frontend (`client/src/App.js`) fetches data from this API and displays the response.

## Running the App
1. Install dependencies for both frontend and backend:
   - `cd server && npm install`
   - `cd ../client && npm install`
2. Start the backend server:
   - `npm start` (from the `server` folder)
3. Start the React frontend:
   - Use a development server like `npm start` or build and serve the static files.

## Purpose
This project demonstrates a monolithic architecture where both frontend and backend are developed and run together, making it easy to connect and test API calls within a single codebase.
