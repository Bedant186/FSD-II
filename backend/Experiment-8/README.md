# Experiment 9: Implement Authentication using Tokens

## Experiment Number
**Experiment No: 9**

---

## Experiment Title
**Implement Authentication using Tokens**

---

## Aim
To implement authentication mechanisms in a backend server using **Flask**, including **Basic Authentication, Custom Token Authentication, and JWT Authentication**, and test them using **Postman**.

---

## Description
Authentication ensures that only authorized users can access protected resources in an application. In this experiment, a **Flask-based backend server** is developed to demonstrate three authentication methods:

1. **Basic Authentication**
   - Username and password are sent in the **Authorization Header**.

2. **Custom Token Authentication**
   - After login, a token is generated and sent in a **custom header (`x-auth-token`)**.

3. **JWT Authentication**
   - A **JSON Web Token (JWT)** is generated after login and sent using the **Bearer Authorization header**.

All APIs are tested using **Postman**, and the backend application is deployed using **Render**.

---

## Functional Requirements

1. Create a **Flask backend server**.
2. Implement **Basic Authentication** using username and password.
3. Implement **Token-based Authentication** using custom headers.
4. Implement **JWT Authentication** using bearer tokens.
5. Test all APIs using **Postman**.
6. Deploy the backend server on **Render**.
7. Provide documentation and screenshots.

---

## Technologies Used

| Technology | Purpose |
|------------|--------|
| Python | Backend programming |
| Flask | Web framework |
| Flask-JWT-Extended | JWT authentication |
| Postman | API testing |
| Render | Cloud deployment |
| GitHub | Version control |

---

## Features Implemented

- Basic Authentication using **Authorization Header**
- Token-based Authentication using **Custom Header**
- JWT Authentication using **Bearer Token**
- Secure **Protected Routes**
- Backend deployment on **Render**

---
```

## 📂 Project Structure
<<<<<<< HEAD
EXPERIMENT-8/
├── __pycache__/
├── routes/
│   ├── __pycache__/
│   └── student_routes.py
├── vir-env/
│   ├── Include/
│   ├── Lib/
│   ├── Scripts/
│   ├── .gitignore
│   └── pyvenv.cfg
├── app.py
├── run.py
├── README.md
└── requirements.txt
```
=======




### File Explanation

- **app.py** → Main Flask application containing API routes.
- **requirements.txt** → Python dependencies required to run the project.
- **routes/** → Folder containing authentication routes.
- **README.md** → Documentation of the project.

>>>>>>> a74ec2e (Added README for Experiment 9)
---

## API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/` | Check server status |
| GET | `/basic-protected` | Basic Authentication |
| POST | `/token-login` | Generate Custom Token |
| GET | `/token-protected` | Access using token |
| POST | `/jwt-login` | Generate JWT token |
| GET | `/jwt-protected` | Access using JWT token |

---

## Sample JSON Request

<<<<<<< HEAD
### Create Student
```json
{
  "name": "Bedant",
  "age": 23
}
```
## Sample JSON Response
=======
### Token Login

**POST** `/token-login`

>>>>>>> a74ec2e (Added README for Experiment 9)
```json
{
  "username": "admin",
  "password": "admin123"
}
{
  "token": "YWRtaW4="
}

```

Deployment Details

<<<<<<< HEAD
## GitHub Repository:
Repository Name: FSD-II
Username: Bedant186

## Live Deployment :
https://two3bda70122-experiment-8.onrender.com

## Testing Instructions:
-Open Postman
-Enter API URL
-Select request method
-Add JSON body if required
-Click Send
-Verify response and status code

## Learning Outcomes:
=======
The backend API was deployed using Render Cloud Platform.

Deployment Steps

Created a repository on GitHub.

Uploaded the Flask project files.

Connected the repository to Render.

Selected Python Environment.

Installed dependencies from requirements.txt.

Deployed the Flask application.

GitHub Repository

Repository Name: FSD-II
GitHub Username: Bedant186

Live Deployment (Frontend Preview)

https://23bda70122-expepriment-8.netlify.app/

Testing Instructions
Step 1: Run the Flask Server
Step 2: Open Postman and test the APIs

Learning Outcomes
>>>>>>> a74ec2e (Added README for Experiment 9)

After completing this experiment, the following concepts were learned:

Understanding authentication mechanisms in backend systems.

Implementing Basic Authentication using Flask.

Creating custom token authentication systems.

Implementing JWT authentication for secure APIs.

Testing APIs using Postman.

Deploying backend applications on Render.

## Conclusion

This experiment demonstrated how authentication can be implemented in REST APIs using Flask. Three different authentication methods—Basic Authentication, Custom Token Authentication, and JWT Authentication—were implemented and tested successfully using Postman. The backend application was also deployed on Render, making it accessible online.

## Author

Bedant Singhania
<<<<<<< HEAD
Experiment 8 – RESTful API Development using Flask
=======

Experiment 9 – Implement Authentication using Tokens
>>>>>>> a74ec2e (Added README for Experiment 9)
