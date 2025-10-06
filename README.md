# Jobby App

Jobby App is a modern job search platform built with React.js. It allows users to browse, filter, and view detailed information about job listings, including company details, skills required, and similar jobs. The app is fully responsive and provides a smooth user experience on both desktop and mobile devices.

## Features
- **User Authentication:** Secure login to access job listings.
- **Job Listings:** Browse jobs with company logos, ratings, locations, employment types, and salary details.
- **Search & Filters:** Search jobs by keyword, filter by employment type and salary range.
- **Job Details:** View detailed job descriptions, required skills, company culture, and similar jobs.
- **Responsive Design:** Optimized for mobile and desktop screens.

## React.js Concepts Used
- **Functional and Class Components:** The app uses both functional and class-based components for modularity and state management.
- **State Management:** Utilizes React's `useState` and class component `state` for dynamic UI updates.
- **Props:** Data is passed between components using props for reusability and separation of concerns.
- **Conditional Rendering:** Loader, error, and empty states are handled using conditional rendering.
- **Lists and Keys:** Job and skill lists are rendered using `.map()` with unique keys for performance.
- **React Router:** Implements navigation between pages (Home, Jobs, Job Details, Not Found) using `react-router-dom`.
- **CSS Modules:** Scoped CSS for each component to maintain clean and maintainable styles.
- **Responsive Design:** Media queries and flexible layouts for mobile compatibility.

## Practical Uses
- **Job Seekers:** Find jobs, filter by preferences, and view detailed company information.
- **Recruiters:** Showcase job openings and company culture to attract talent.
- **Learning Resource:** Demonstrates practical React.js concepts for beginners and intermediate developers.

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/Mahithesh/JobbyApp.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Screenshots
![Job List](screenshots/job-list.png)
![Job Details](screenshots/job-details.png)

## Author
Mahithesh

---
Feel free to explore, learn, and contribute!
