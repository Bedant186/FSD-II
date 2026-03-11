#  Experiment 5: Optimizing Frontend Performance Using Lazy Loading

##  Experiment No.
**5**

## UID
**23BDA70122**

##  Experiment Title  
**Optimizing Frontend Performance by Implementing Lazy Loading in a Single Page Application**

---

##  Aim  
To optimize frontend performance by implementing **lazy loading** in a **Single Page Application (SPA)**, ensuring faster initial load time and efficient resource usage.

---

##  Description of the Experiment  

This experiment demonstrates how frontend performance can be improved using **lazy loading techniques** in a React-based Single Page Application.

The application consists of **three main pages**:
- **Home**
- **About**
- **Contact**

All pages are loaded within a **single-page architecture**, where components are **dynamically imported** and rendered only when required. This reduces the initial bundle size and improves application responsiveness.

Lazy loading ensures that:
- Only essential components are loaded during the first render  
- Additional components are fetched on demand  
- Overall page load time is optimized  

---

## Technologies Used  

- React.js  
- JavaScript (ES6+)  
- React Router  
- Lazy Loading (`React.lazy()` and `Suspense`)  
- HTML5  
- CSS3  
- Git & GitHub  
- Netlify (Deployment)  

---

##  Features Implemented  

- Single Page Application (SPA)  
- Lazy loading of components  
- Route-based code splitting  
- Faster initial page load  
- Smooth navigation between pages  
- Responsive user interface  
- Live deployment  

---

## 📂 Project Structure

```
project-root/
│── index.html
│
│── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
│── package.json
└── vite.config.js
```



---

##  Learning Outcomes  

After completing this experiment, I learned:

1. How lazy loading improves frontend performance  
2. Difference between traditional loading and on-demand component loading  
3. Implementation of `React.lazy()` and `Suspense`  
4. Benefits of Single Page Applications  
5. How to reduce initial bundle size  
6. Deployment using Netlify  
7. Version control using GitHub  

---

##  Deployment & Repository  

- **GitHub Repository**:  
  https://github.com/Bedant186/FSD-II  

- **Netlify Deployment**:  
  https://23bda70122-expepriment-5.netlify.app/

The complete project has been uploaded to **GitHub** for version control and deployed on **Netlify** for live access.

---

##  Conclusion  

This experiment successfully demonstrates how lazy loading can significantly enhance frontend performance in a Single Page Application. By loading components only when required, the application becomes faster, more efficient, and scalable. Lazy loading is an essential optimization technique for modern web applications.

---

##  Acknowledgement  

This experiment was carried out as part of the **Full Stack Development – II (FSD-II)** coursework to understand and apply frontend performance optimization techniques.
