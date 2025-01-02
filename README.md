# Student Management Portal

This repository contains a **Student Management Portal** with both **Backend** (Spring Boot) and **Frontend** (React.js). The backend handles the API and data management, while the frontend provides a user interface for interacting with the backend.

## Project Structure

- **`student-portal-backend/`**: Contains the backend API built using **Spring Boot** to manage student data.
- **`student-portal-ui/`**: Contains the frontend application built using **React.js** to manage and display student information.

## Setup Instructions

### Backend (Spring Boot)

1. Navigate to the `backend/` directory:

   ```bash
   cd student-portal-backend

2. Build project using maven:

   ```bash
   mvn clean install

3. Start the Spring Boot application:

   ```bash
   mvn spring-boot:run

The backend will be accessible at http://localhost:8080.

### UI (React.js)
  Navigate to the student-portal-ui/ directory:
  1. npm install
  2. npm start
  
  The frontend will be accessible at http://localhost:3000.

## API Endpoints
    The backend exposes the following API endpoints:
    
    GET /students: Retrieve a list of all students.
    POST /students: Add a new student.
    PUT /students/{id}: Update an existing student.
    DELETE /students/{id}: Delete a student.

## Features
  Add, update, delete, and view student records.
  REST API built using Spring Boot.
  Frontend built using React.js.

## Technologies Used
  1) Backend:
  Spring Boot for backend logic and API development.
  H2 Database for storing student information.
  Maven for project management and dependency management.

  2) Frontend:
  React.js for building the user interface.
  Axios for making API calls to the backend.
  CSS for styling the components.

### UI

   ![uiImage](https://github.com/user-attachments/assets/67b83fef-be4a-468e-842f-3834e1661330)

