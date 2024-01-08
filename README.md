# Frontend Mentor - Devjobs Web App

## Table of contents

- [Overview](#overview)
  - [Project features](#project-features)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

**Live Site URL: [Devjobs on Netlify](https://devjobs-gd.netlify.app/)**

This project is a front-end web application utilizing Firebase for data storing purposes developed as a portfolio project. It is based on the [Frontend Mentor - Devjobs Web App](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l) challenge, where the goal was to build a jobs board using local data.json for data retrieval. The primary objective was to replicate the provided design while incorporating additional features and maintaining responsiveness for various screen sizes.

### Project features

- **Filter Functionality**: Users can filter jobs on the index page based on title, location, and job type (full-time position).
- **Search results with SearchParams**: Search results can be accessed using the custom link with the selected SearchParams.
- **Data fetched from Firebase**: I've uploaded the data provided by the challenge to my Firebase account in order to have more control over the data and data fetching.
- **Job Details**: Clicking on a job allows users to view more information and apply for the job.
- **Responsive Design**: The application provides an optimal layout for different screen sizes, ensuring a seamless user experience.
- **Interactive Elements**: Hover states have been implemented for all interactive elements throughout the site.

### Links

- Live Site URL: [Devjobs on Netlify](https://devjobs-gd.netlify.app/)

## My process

### Built with

- React
- React Query
- TypeScript
- Tailwind
- Vite and Netlify (build and deployment)

### What I learned

- **TypeScript Mastery**: Navigating the TypeScript landscape in this project was an enlightening journey. Initial hiccups, stemming from inconsistent usage, eventually paved the way for a profound appreciation. TypeScript ceased to be a mere type-checker, evolving into a robust ally, enhancing code clarity, and reshaping my coding mindset.

- **Navigating API Complexity**: Dealing with APIs, using Fetch and Firebase, presented intricate challenges like pagination and search result storage. Despite less-than-perfect solutions, each obstacle was a lesson in nuanced API interactions. React Router emerged as a key player, offering structured navigation for effective problem-solving.

- **Third-Party Wisdom Integration**: Recognizing the limitations of my bespoke solutions, the integration of the ts-hooks library emerged as a pivotal decision. This choice emphasized the practicality of leveraging community-backed expertise. Third-party libraries not only refined project functionality but also signaled a shift towards collaborative and efficient development practices.

### Continued development

- **Enhancing Search Result Interaction**: Improving my proficiency in working with search results is a priority for continued development. Recognizing that this is a prevalent pattern, refining my current solution can significantly elevate the user experience. Exploring more efficient querying mechanisms, optimizing result display, and incorporating user-friendly features will be pivotal in achieving this goal.

- **Handling Empty Search Inputs**: Addressing the current behavior when users submit empty search parameters is a key area for enhancement. In its current state, the application displays all search results, which might not align with the expected user experience. To mitigate this, future iterations could enforce the requirement of at least one input from the user or implement a more intuitive approach. Options include showcasing a curated set of results based on user data or a service preference, or displaying a limited, paginated query of random results. Striking a balance between user guidance and data presentation will be a focal point in refining this aspect of the application.

## Author

- Website - [My personal portfolio page](https://gd-portfolio.vercel.app/)
