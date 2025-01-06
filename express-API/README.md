
# Express Application API

This project is an Express-based application that manages user data with MongoDB as the database. It includes routes for user registration, login, CRUD operations on user data, and searching for users.

## Setup

### Prerequisites

- Node.js
- MongoDB

### Installing

Clone the repository to your local machine:

```bash
git clone <repository-url>
cd <repository-folder>
```

Install the required dependencies:

```bash
npm install
```

### Configuration

Create a `.env` file in the root directory of the project and add the following environment variables:

```plaintext
MONGODB_URI=mongodb+srv://<username>:<password>@<your-mongodb-cluster>/database
PORT=3000
```

Replace `<username>`, `<password>`, and `<your-mongodb-cluster>` with your actual MongoDB Atlas credentials.

### Running the Server

To start the server, run:

```bash
npm start
```

To start the server, in dev :
```bash
npm run dev
```

The server will be available at `http://localhost:3000/` or the port you specified in the `.env` file.

## API Routes

### Registration

- **POST /register**

  Registers a new user.

  **Request:**

  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phoneNo": "1234567890",
    "courses": "Web Development",
    "address": "1234 Main St",
    "password": "password123",
    "confirm_password": "password123",
    "role": "user",
    "approve": "pending"
  }
  ```

  **Response:**

  ```json
  {
    "message": "User registered successfully",
    "userId": "<MongoDB-UserId>"
  }
  ```

### Login

- **POST /login**

  Authenticates a user and allows login.

  **Request:**

  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

  **Response:**

  ```json
  {
    "message": "Logged in successfully",
    "user": {
      "email": "john.doe@example.com",
      "role": "user"
    }
  }
  ```

### Fetch All Users

- **GET /users**

  Retrieves all registered users.

  **Response:**

  ```json
  {
    "success": true,
    "data": [
      {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com"
      }
    ]
  }
  ```

### Update User

- **PUT /users/update/:id**

  Updates user information.

  **Request:**

  ```json
  {
    "firstName": "Jane"
  }
  ```

  **Response:**

  ```json
  {
    "success": true,
    "message": "User updated successfully",
    "userDetails": {
      "firstName": "Jane",
      "lastName": "Doe"
    }
  }
  ```

### Delete User

- **DELETE /users/delete/:id**

  Deletes a user.

  **Response:**

  ```json
  {
    "success": true,
    "message": "User deleted successfully"
  }
  ```

### Search User

- **GET /users/search**

  Searches for a user by email.

  **Query Parameter:** `?email=john.doe@example.com`

  **Response:**

  ```json
  {
    "success": true,
    "message": "User found",
    "userDetails": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    }
  }
  ```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
