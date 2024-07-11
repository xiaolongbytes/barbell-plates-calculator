# Why build this app?
1. I wanted a project to practice React and React Router
2. Trying to calculate barbell weights and figuring out required plates while lifting was very error-prone. 

https://github.com/xiaolongbytes/barbell-plates-calculator/assets/108032964/317b43b7-d206-4951-9fa3-b959de683f13

# Features:
1. Input form for available weights to be used to calculate plate configurations.
2. Tool to calculate plate configurations to produce a desired total weight.

# Future Features?:
1. Add testing. What happens if the weight isn't possible with the plates available?
2. Have it calculate plate configurations for an entire warm-up + workout circuit at once.
3. Toggle to chose between kilograms and pounds.
4. Deploy it!
5. Allow users to remove plate weights from the weight inventory table and add custom plate weights.

# How I built this app and lessons learned:
1. Created repo in GitHub and then cloned it locally.
    - Lessons learned from previous projects: Created a .gitignore with the Node template
2. Used create-react-app, then had to move files from the created folder to the root folder
    - Rename .js files to .jsx to prevent linting errors and file clarity
    - Lesson learned: use create-react-app first before creating the folder/repo to avoid having to move files around
3. Installed [react-router](https://reactrouter.com/en/main) to handle SPA routing and followed their tutorial [mostly](#alterations-to-the-react-router-tutorial)
4. Added [ESLint](https://eslint.org/), [ESLint React](https://www.npmjs.com/package/eslint-plugin-react), and [Prettier](https://prettier.io/docs/en/integrating-with-linters.html) to this project
    - ESLint is a linter
    - Prettier fixes the styling errors
5. Created pages, data, and component folders not because they're necessary, but because I like the organization
6. Create the pages files first to make sure the routing works, then created components to build up the pages, starting with the higher level components.
7. Separate constants into data/constants.js file and state management functions into data/state.js
8. Add styling!

# Data Flow Diagram
<img width="794" alt="Data Flow Diagram" src="https://github.com/xiaolongbytes/barbell-plates-calculator/assets/108032964/92f2f8d0-3a49-4bac-9821-3dfed9caf103">

# Entity Relation Diagram
<img width="794" alt="Data Flow Diagram" src="https://github.com/xiaolongbytes/barbell-plates-calculator/assets/108032964/46dbf262-d0ab-4e87-94be-4059d47e72d8">

# Alterations to the react-router tutorial:
## Adding a router
1. Don't follow the `import * as React from "react";` structure, instead do `import React from "react";`. This improves tree shaking resulting in smaller bundles.
2. Moved router to its own file and ReactDOM creation (of the tutorial) to index.jsx instead of being in main.jsx.
    - This is to contain all the router logic in one place that's easy to find
    - The ReactDOM creation was already in index.jsx due to create-react-app, so don't duplicate it

## The Root Route
1. This will be the global layout which will have the header/footer/navigation
2. DO NOT use the pattern `export default function Root() {}` pattern. Instead use `export const Name = () => {}`. 
    - Makes it easier to find references within editor and also helps IntelliSence find things easier compared to `export default`
    - Aliasing components must be done explicitly on import
    - Utilizes arrow functions for better scope management

## Client Side Routing
1. When building nav bar, use `<Link>`

## Handling Not Found Errors
1. Do this

## Contextual Errors
1. And this

## Nested Routes
1. Do this so the components get rendered inside the Root component

## Index Routes
1. Do this so that something besides just the Root is rendered when at /.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

