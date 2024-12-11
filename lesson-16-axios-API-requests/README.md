# Lesson 16: Axios API Requests

This lesson demonstrates how to use **Axios** for making API requests in a React application to handle dynamic data effectively.

---

## Features

### **Axios Basics**
- **GET Requests**: Retrieve data from an external API.
- **POST Requests**: Send data to an API for creating resources.
- **PUT Requests**: Update existing resources via API.
- **DELETE Requests**: Remove resources from the server.

### **Components Overview**
- **Home Page**: Displays fetched posts from the API.
- **New Post Page**: Allows users to submit new posts to the API.
- **Edit Post Page**: Enables editing existing posts via the API.
- **Post Page**: Displays detailed post data fetched from the API.
- **About Page**: Provides information about the app.
- **Missing Page**: A fallback 404-style page for invalid routes.

---

## **Routing**
- Uses **React Router** to define and handle navigation between the following pages:
  - **Home**: `/`
  - **New Post**: `/post`
  - **Edit Post**: `/edit/:id`
  - **Post Page**: `/post/:id`
  - **About**: `/about`
  - **Missing Page**: For all unmatched routes.
