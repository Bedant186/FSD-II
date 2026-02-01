# Experiment 4 – State Management in React

##  Experiment Title
**Implementation of Local State and Global State Management in React**

---

## Aim
To understand and implement **state management in React** by creating:
1. A **Local State Counter** using React Hooks
2. A **Global State Counter** using Redux

---

##  Experiment Number
**Experiment – 4**

---

##  Description of the Experiment

In this experiment, a React application is developed to demonstrate the difference between **local state** and **global state** management.

- **Local State Counter** is implemented using the `useState` hook, where the state is confined to a single component.
- **Global State Counter** is implemented using **Redux**, where the state is stored centrally and shared across components using the Redux store and Provider.

This experiment helps in understanding how state behaves at different levels of a React application and when to choose local or global state.

---

## Technologies Used

- React JS
- Redux
- React-Redux
- Vite
- JavaScript (ES6)
- HTML & CSS

---

## Features Implemented

- Increment, decrement, and reset functionality
- Local state management using `useState`
- Global state management using Redux Store
- Clean component-based architecture

---

src/
│── assets/
│
│── components/
│ └── context/
│   |── CounterGlobalContextAPI.jsx
│ ├── CounterGlobalContextParent.jsx
│ ├── CounterLocalState.jsx
│ └── CounterReduxParent.jsx
│
│── store/
│ ├── CounterReducer.jsx
│ └── Store.jsx
│
│── App.css
│── App.jsx
│── index.css
│── main.jsx

## Learning Outcomes

After completing this experiment, the learner is able to:

1. Understand the concept of **state in React**
2. Differentiate between **local state and global state**
3. Implement `useState` hook for component-level state
4. Create and configure a **Redux store**
5. Use `Provider` to make global state accessible
6. Apply Redux in real-world React applications
7. Improve modularity and scalability of React projects

---

##  Deployment Details

- The complete project has been **uploaded to GitHub** for code management.
- The application has been **successfully deployed on Netlify**, making it accessible online.

---

## Conclusion

This experiment successfully demonstrates how state management works in React using both local and global approaches. It provides practical understanding of Redux and prepares the learner to manage complex application states efficiently.

---

**Submitted as part of React JS Laboratory – Experiment 4**


