# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Project Summary
This project consists of a simple React application with multiple pages and components. Below is a summary of each file and its purpose:

Components
Header.jsx
Purpose: Renders a navigation header with links to different pages.
Usage: Used in the layout of the application to provide navigation.

FetchData.jsx
Purpose: Fetches data from the GitHub API and renders a list of repositories.
Usage: Used in the Skills page to display GitHub repositories.

Pages
Home.jsx
Purpose: Displays the landing page content.
Usage: Accessed when navigating to the root URL ("/").

About.jsx
Purpose: Displays information about the author.
Usage: Accessed when navigating to the "/about" URL. Receives props for header, image, and paragraph.

Skills.jsx
Purpose: Displays a list of GitHub repositories.
Usage: Accessed when navigating to the "/skills" URL. Utilizes the FetchData component.

Contact.jsx
Purpose: Displays a contact form.
Usage: Accessed when navigating to the "/contact" URL. Allows users to submit contact information.

Styling
Header.scss: Styles for the header component.
About.scss: Styles for the about page.
Contact.scss: Styles for the contact page.
Home.scss: Styles for the home page.
Skills.scss: Styles for the skills page.

App.jsx
Purpose: Handles routing and renders different components based on the URL.
Usage: Entry point of the application. Imports components and sets up routes using React Router.

ReadMe.md

Purpose: Provides a summary and overview of the project, including file descriptions and usage instructions.
This project aims to showcase my skills, display GitHub repositories, and provide a means for users to contact me. It utilizes React for front-end development and React Router for navigation. Styling is done using SaSS for improved organization and modularity.


React Hooks Overview

useState:
Functionality: useState is a React hook used for managing state within functional components.
Usage in the Project: It is used in the Contact component to manage form data (name, email, message) and update the state when input fields change.
Reason for Usage: useState is ideal for handling form data in functional components. It simplifies state management by allowing us to declare state variables directly within the component, enhancing readability and maintainability.

useEffect:
Functionality: useEffect is a React hook used for performing side effects in functional components, such as data fetching, subscriptions, or manual DOM manipulations.
Usage in the Project: It is used in the FetchData component to fetch data from the GitHub API when the component mounts. It also handles error states if the data fetching fails.
Reason for Usage: useEffect is essential for handling asynchronous operations and side effects in React components. In this project, it ensures that data is fetched from the GitHub API when the component mounts, providing up-to-date information about the author's repositories.