# Refranero API

The Refranero API provides access to a collection of Spanish "refranes", with a word-by-word translation to English and a more appropriate English equivalent.
The Spanish "refranero" is a beautiful treasury of nuggets of wisdom to guide our lives, and sometimes, interpreting them doesn't quite cut it. Here, you'll find refranes, proverbs and expressions from across a multitude of Spanish-speaking countries.

The inspiration from this comes from the pains of being bilingual. My brain has lost the ability to distinguish between English and Spanish, so more often than not, I subconsciously use word-by-word translations in either language, creating amusing conversations for the people around me.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features
- Retrieve a random proverb.
- Get all proverbs in the collection.
- Search for a proverb by its ID.
- Count the total number of proverbs.
- Built with TypeScript for type safety and scalability.

## Technologies Used
- [Node.js](https://nodejs.org/) - JavaScript runtime for building the API.
- [Express.js](https://expressjs.com/) - Web framework for handling routes and middleware.
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript for better development experience.
- [Jest](https://jestjs.io/) - Testing framework for unit and integration tests.
- [Supertest](https://www.npmjs.com/package/supertest) - HTTP assertions for testing API endpoints.
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management.
- [helmet](https://www.npmjs.com/package/helmet) - Security middleware for HTTP headers.
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger.
- [cors](https://www.npmjs.com/package/cors) - Middleware for enabling Cross-Origin Resource Sharing.

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/sergiocast97/refranero-api.git
   cd refranero-api
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

3. Create a `.env` file in the root directory and add any required environment variables:
   ```env
   PORT=3000
   NODE_ENV=development
   ```

4. Build the project (if using TypeScript):
   ```sh
   pnpm build
   ```

5. Start the server:
   ```sh
   pnpm start
   ```

6. For development mode with hot-reloading:
   ```sh
   pnpm dev
   ```

The API will be available at `http://localhost:3000`.

## Usage

You can interact with the API using tools like [Postman](https://www.postman.com/), curl, or any HTTP client.

## API Endpoints

### `GET /`
- **Description**: Retrieve a random proverb.
- **Response**:
  ```json
  {
    "id": 5,
    "spanish": "Pan para hoy, hambre para mañana",
    "spanglish": "Bread for today, hunger for tomorrow",
    "english": "Laugh today, cry tomorrow"
  }
  ```

### `GET /all`
- **Description**: Retrieve all proverbs in the collection.
- **Response**:
  ```json
  [
    {
      "id": 5,
      "spanish": "Pan para hoy, hambre para mañana",
      "spanglish": "Bread for today, hunger for tomorrow",
      "english": "Laugh today, cry tomorrow"
    },
    {
      "id": 6,
      "spanish": "Más sabe el diablo por viejo que por diablo",
      "spanglish": "The devil knows more for being old than for being the devil",
      "english": "With age comes wisdom"
    },
  ]
  ```

### `GET /:id`
- **Description**: Retrieve a proverb by its ID.
- **Parameters**:
  - `id` (integer): The ID of the proverb.
- **Response**:
  ```json
  {
      "id": 5,
      "spanish": "Pan para hoy, hambre para mañana",
      "spanglish": "Bread for today, hunger for tomorrow",
      "english": "Laugh today, cry tomorrow"
  }
  ```

### `GET /count`
- **Description**: Get the total number of proverbs.
- **Response**:
  ```json
  {
    "count": 21
  }
  ```

## Development

### Run Tests
Run unit and integration tests:
```sh
pnpm test
```

### Lint Code
Lint and fix code issues:
```sh
pnpm lint
```

### Type Checking
Check for TypeScript errors:
```sh
pnpm typecheck
```

### Development Mode
Start the server in development mode with hot-reloading:
```sh
pnpm dev
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```sh
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

(Rebuild in Go coming soon ✌🏼)

Made with ♥️ by Sergio Castillo
