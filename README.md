# Challenges Microservice

## Overview
This microservice is designed to handle challenges within your application. It provides functionalities for managing and processing challenges seamlessly.

## Features
- **Supabase Integration:** Utilizes the `@supabase/supabase-js` library for seamless integration with Supabase.
- **HTTP Requests:** Employs the `axios` library for making HTTP requests.
- **Express Server:** Utilizes the `express` framework to set up a server.
- **Middleware:** Incorporates `cors` for handling Cross-Origin Resource Sharing and `morgan` for logging HTTP requests.
- **Environment Variables:** Uses `dotenv` for managing environment variables.

## Prerequisites
- Node.js (>=14.0.0)
- npm package manager

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and add necessary environment variables (Refer to `.env.example`).

## Usage
- Run the microservice with `npm start`.
- For development with automatic restarts, use `npm run dev`.

## Scripts
- `npm start`: Start the microservice in production mode.
- `npm run dev`: Start the microservice in development mode using nodemon.
- `npm test`: Placeholder script for running tests.

## Contributing
Feel free to contribute by opening issues or submitting pull requests. Please follow our [contributing guidelines](CONTRIBUTING.md).

## License
This project is licensed under the [ISC License](LICENSE).
