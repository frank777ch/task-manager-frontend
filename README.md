# Task Manager Frontend

This is the frontend of the Task Manager application, built with React.

## Features

- User registration and authentication
- Task management (create, update, delete, view)
- Course management (create, update, delete, view)
- Evaluation management (create, update, delete, view)
- School management (create, update, delete, view)

## Technologies Used

- React
- Axios for API requests
- React Router for routing

## Getting Started

### Prerequisites

- Node.js installed

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo.git
    cd your-repo/frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root of the project with the following content:
    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    ```

4. Start the development server:
    ```sh
    npm start
    ```

### Project Structure

frontend/
│
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── AuthForm.css
│ │ ├── Login.js
│ │ ├── Register.js
│ │ ├── Tasks/
│ │ │ ├── CreateTask.js
│ │ │ ├── EditTask.js
│ │ │ ├── TaskList.js
│ │ │ └── ...
│ │ ├── Courses/
│ │ │ ├── CreateCourse.js
│ │ │ ├── EditCourse.js
│ │ │ ├── CourseList.js
│ │ │ └── ...
│ │ ├── Evaluations/
│ │ │ ├── CreateEvaluation.js
│ │ │ ├── EditEvaluation.js
│ │ │ ├── EvaluationList.js
│ │ │ └── ...
│ │ ├── Schools/
│ │ │ ├── CreateSchool.js
│ │ │ ├── EditSchool.js
│ │ │ ├── SchoolList.js
│ │ │ └── ...
│ │ ├── Dashboard.js
│ │ ├── Home.js
│ │ └── ...
│ ├── App.js
│ ├── index.js
│ └── ...
├── .env
└── package.json


### Usage

- Visit the home page to see an overview of the application.
- Register a new user or login with existing credentials.
- Use the dashboard to manage tasks, courses, evaluations, and schools.
