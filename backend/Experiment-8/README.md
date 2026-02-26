# Experiment 8: Develop RESTful APIs using Backend Framework

## Experiment Number
**Experiment No: 8**

---

## Experiment Title
**Develop RESTful APIs using Backend Framework**

---

## Aim
To design and implement RESTful APIs using a backend framework (Flask) that performs CRUD operations on student data stored in memory.

---

## Description
This experiment demonstrates how to build a backend server using Python Flask to handle HTTP requests and responses. A RESTful API was created that allows users to Create, Read, Update, and Delete student records. The student data is temporarily stored in an in-memory array (list), meaning data resets when the server restarts.

The API endpoints were tested using Postman to verify correctness and ensure proper request handling, validation, and responses.

---

## Functional Requirements
1. Create backend server using Flask.
2. Implement REST API endpoints for students.
3. Store data in memory (list variable).
4. Support CRUD operations:
   - Create student
   - View all students
   - View single student
   - Update student
   - Delete student
5. Validate input data.
6. Test APIs using Postman.
7. Deploy project online.

---

## Technologies Used
- Python 3  
- Flask Framework  
- REST API Architecture  
- Postman (API Testing)  
- Render (Deployment)  
- GitHub (Version Control)

---

## Features Implemented
- Modular routing using Flask Blueprint
- Unique ID generation for students
- JSON request and response handling
- Error handling with proper status codes
- Input validation
- RESTful API structure
- Deployment-ready backend

---
```

## 📂 Project Structure
EXPERIMENT-8/
├── **__pycache__/**
├── **routes/**
│   ├── **__pycache__/**
│   └── student_routes.py
├── **vir-env/**
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
---

## API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
POST | `/students` | Create new student |
GET | `/students` | Get all students |
GET | `/students/<id>` | Get single student |
PUT | `/students/<id>` | Update student |
DELETE | `/students/<id>` | Delete student |

---

## Sample JSON Request

### Create Student
```json
{
  "name": "Bedant",
  "age": 23
}
```
## Sample JSON Response
```json
{
  "id": 1,
  "name": "Bedant",
  "age": 22
}

```

Deployment Details

## GitHub Repository:
Repository Name: FSD-II
Username: Bedant186

## Live Deployment :
https://23bda70122-expepriment-8.netlify.app/


## Testing Instructions:
-Open Postman
-Enter API URL
-Select request method
-Add JSON body if required
-Click Send
-Verify response and status code

## Learning Outcomes:

After completing this experiment, the following concepts were learned:

Understanding REST API principles

Backend development using Flask

CRUD operations implementation

API testing with Postman

JSON request/response handling

Error handling and validation

Backend deployment process

Structuring scalable backend projects

## Conclusion

This experiment successfully demonstrated how to design and implement RESTful APIs using Flask. The CRUD operations were implemented and tested successfully. The project helped in understanding backend development concepts, API architecture, request handling, and deployment strategies. It provided practical exposure to real-world backend application development.

## Author

Bedant Singhania
Experiment 8 – RESTful API Development using Flask
