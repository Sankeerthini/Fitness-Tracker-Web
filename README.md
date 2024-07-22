# Fitness Tracker Web

## Overview

The Fitness Tracker Application is a web-based tool designed to help users manage their fitness activities, track progress, and set personal goals. This Angular application provides a streamlined and efficient user experience, offering features for tracking activities, setting goals, and inputting personal details. The project showcases modern web development practices and leverages Angular's robust framework to deliver a high-performance user interface.

Check out the gh-pages branch for more details on the codes!

[Live Demo](https://sankeerthini.github.io/Fitness-Tracker-Web/)

![Fitness Tracker](/demo.jpg)

## Technical Architecture

### Framework and Libraries
- **Angular**: Utilized as the primary framework for building a single-page application (SPA), providing a structured approach to component-based development and routing.
- **Bootstrap**: Employed for responsive design and pre-built styling components to ensure a consistent and accessible user interface.

### Key Components
**Home Page**

- Features a motivational poster and quote to engage users.
- Implements Angular components and services for dynamic content rendering.

**Activities Page**

- Allows users to input personal details (name, age, weight, height) and store them temporarily during the session.
- Utilizes Angular forms for data entry and validation.
- Enables users to log activities and their durations.
- Employs Angular’s reactive forms and services for real-time updates and state management.

**Goals Page**

- Facilitates goal-setting with options for number of sets or durations.
- Features Angular components to display goals in a card layout with functionality for adding and removing goals.

## Technical Implementation

- **Angular CLI**: Used for project scaffolding, development, and build processes. The angular.json file is configured to output the build files to the docs directory for GitHub Pages deployment.
- **Routing**: Implemented with Angular Router to navigate between different views (home, activities, track activities, goals).
- **State Management**: Managed through Angular services to temporarily hold data during the session.

## Development Process

### Setup and Configuration

Angular CLI is used to initialize and manage the project.
angular.json is configured to specify build and output settings, with the output path set to docs for deployment purposes.

### Building the Application

The application is built using the Angular CLI with the command ng build --prod --base-href=https://Sankeerthini.github.io/Fitness-Tracker-Web/.
Production builds are configured to optimize performance and include necessary assets.

### Deployment

The application is deployed to GitHub Pages by pushing the build output from the docs directory to the main branch of the GitHub repository.

### Development Tools
Visual Studio Code: Primary code editor, with extensions for Angular development, linting, and formatting.
Git: Version control system used for managing changes and deployment processes.

