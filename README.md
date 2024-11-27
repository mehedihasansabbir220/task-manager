# Task Manager API with User Authentication

This project is a **Task Manager API** built with **Node.js** and **MongoDB**. It features user authentication and task management functionalities, allowing users to register, log in, and perform CRUD operations on tasks.

---

## **Features**

1. **User Authentication**:
   - Register new users.
   - Log in existing users.
   - Passwords hashed with `bcryptjs` for security.
   - JWT-based authentication for securing routes.

2. **Task Management**:
   - Create, read, update, and delete tasks.
   - Assign tasks to specific users.
   - Update task status.
   - Users can manage only their tasks.

3. **Error Handling**:
   - Centralized error handling middleware.

4. **Environment Configuration**:
   - Environment variables managed using `dotenv`.

---

## **Technologies Used**

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Token) for authentication
- bcrypt.js for password hashing
- dotenv for environment variable management
- nodemon for development

---

## **Installation**

### Prerequisites
- Node.js installed
- MongoDB instance running

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/mehedihasansabbir220/task-manager
   cd task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and define the following variables:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. Start the application:
   - For production:
     ```bash
     npm start
     ```
   - For development:
     ```bash
     npm run dev
     ```

---

## **API Endpoints**

### **Authentication**

#### Register a User
- **POST** `/api/auth/register`
- **Request Body:**
  ```json
  {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
      "message": "User registered successfully"
  }
  ```

#### Log in a User
- **POST** `/api/auth/login`
- **Request Body:**
  ```json
  {
      "email": "john.doe@example.com",
      "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
      "token": "<jwt-token>"
  }
  ```

### **Task Management**

#### Get All Tasks
- **GET** `/api/tasks`
- **Headers:**
  ```json
  {
      "Authorization": "Bearer <jwt-token>"
  }
  ```
- **Response:**
  ```json
  [
      {
          "_id": "<task_id>",
          "title": "Task Title",
          "description": "Task Description",
          "status": "pending",
          "assignedTo": "<user_id>",
          "createdBy": "<user_id>",
          "createdAt": "<timestamp>",
          "updatedAt": "<timestamp>"
      }
  ]
  ```

#### Create a Task
- **POST** `/api/tasks`
- **Headers:**
  ```json
  {
      "Authorization": "Bearer <jwt-token>"
  }
  ```
- **Request Body:**
  ```json
  {
      "title": "New Task",
      "description": "Task Description",
      "assignedTo": "<user_id>",
      "status": "pending"
  }
  ```
- **Response:**
  ```json
  {
      "message": "Task created successfully",
      "task": {
          "_id": "<task_id>",
          "title": "New Task",
          "description": "Task Description",
          "status": "pending",
          "assignedTo": "<user_id>",
          "createdBy": "<user_id>",
          "createdAt": "<timestamp>",
          "updatedAt": "<timestamp>"
      }
  }
  ```

#### Update a Task
- **PUT** `/api/tasks/:id`
- **Headers:**
  ```json
  {
      "Authorization": "Bearer <jwt-token>"
  }
  ```
- **Request Body:**
  ```json
  {
      "status": "completed"
  }
  ```
- **Response:**
  ```json
  {
      "message": "Task updated successfully",
      "task": {
          "_id": "<task_id>",
          "title": "New Task",
          "description": "Task Description",
          "status": "completed",
          "assignedTo": "<user_id>",
          "createdBy": "<user_id>",
          "createdAt": "<timestamp>",
          "updatedAt": "<timestamp>"
      }
  }
  ```

#### Delete a Task
- **DELETE** `/api/tasks/:id`
- **Headers:**
  ```json
  {
      "Authorization": "Bearer <jwt-token>"
  }
  ```
- **Response:**
  ```json
  {
      "message": "Task deleted successfully"
  }
  ```

---

## **Folder Structure**

```plaintext
project/
├── config/
│   └── db.js          # Database connection
├── controllers/
│   └── authController.js  # Auth logic
│   └── taskController.js  # Task logic
├── middlewares/
│   └── errorHandler.js    # Error handling middleware
├── models/
│   └── Task.js           # Task schema
│   └── User.js           # User schema
├── routes/
│   └── authRoutes.js     # Auth routes
│   └── taskRoutes.js     # Task routes
├── .env               # Environment variables
├── index.js           # Entry point
├── package.json       # Dependencies and scripts
```

---

## **Run Tests**
Currently, no tests are defined. You can add them in the future by defining them under the `test` script in `package.json`.

---

## **Contributing**
Feel free to fork this repository and submit pull requests for any enhancements or bug fixes.

---

## **License**
This project is licensed under the ISC License.

