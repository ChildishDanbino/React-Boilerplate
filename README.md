## React Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The goal of the project was to complete the challenge while creating a boiler plate that would be available to
myself for future projects. While, the challenge itself was pretty simple I decided to build the boilerplate to scale to a much larger
application using best practices found in the react eco-system and configuring some of my favorite tools i've encountered over the years.


## Architecture Choices

The project architecture was built with one thing in mind. Moving as much logic as possible out of components and into selectors
and middleware. The project was built to scale to handle much larger / complex problems than the one presented. Basic styling was
applied but overall was not as much as a concern as building a project that could scale.


## Tooling

- React:  [Github](https://github.com/facebook/react) 
- Typescript: [Github](https://github.com/microsoft/TypeScript)
- React-Redux: [Github](https://github.com/reduxjs/react-redux)
- Redux:  [Github](https://github.com/reduxjs/redux)
- Reselect: [Github](https://github.com/reduxjs/reselect)
- Redux-Saga: [Github](https://github.com/redux-saga/redux-saga)
- Formik: [Github](https://github.com/jaredpalmer/formik)
- Yup: [Github](https://github.com/jquense/yup)
- Styled Components: [Github](https://github.com/styled-components/styled-components)
- Axios: [Github](https://github.com/axios/axios)

## Tooling Choices
 - Redux: After using tons of other state management options throughout the years I still find myself going
 back to Redux. The boilerplate can be a bit of a pain to setup in the beginning but the event emitter pattern
 allows for time travel debugging making finding issues so much easier in the long run.
 
 - Reselect: Reselect is such a powerful tool that should almost be required when using redux. The ability 
 to compute memoized data and pass that directly into your components allows you to move a ton of 
 logic out of components and into selectors that are easiply testable. 
 
 - Redux Saga: Saga Middleware was a game changer when I discovered it. Similar to Redux-Observable
 but without having to learn the RxJS API. This lib allows you to do complex "flows" and move those processes
 out of components and into middleware that can be called by a simple action.dispatch()
 
 - Formik / Yup: These two libraries together make building / validating forms in react a breeze. After years of using 
 Redux-Form switching to Formik was a game changer. Much simplier API and data can be manually passed into Redux if need be.
 
 - Styled-Components: CSS-In-JSS is the future when it comes to styling components in React / React Native. I've 
 used this lib for years and love it. The ability to change properties based on props make dynamic styles much easier and feels
 more natural than changes classNames via SASS / CSS.
 
 - Axios: Common promise based request lib. Great when you need simple ways to make basic api calls. Request Promise
 is also a great alternative.

## CI/CD

 I wanted to play around with a couple CI/CD options including Jenkins and Github Actions.
 
 - Jenkins: Setup via Jenkinsfile and using the following tutorial [Jenkins Tutorial for React](https://jenkins.io/doc/tutorials/build-a-node-js-and-react-app-with-npm/)
 - GitHub Actions: Setup using Github Actions Docs - Note: This job should be combined into one step but I wanted to break it out into steps
   as an example of doing multiple steps in one pipeline [Github Actions WorkFlow Syntax](https://help.github.com/en/articles/workflow-syntax-for-github-actions)

## Available Scripts

In the project directory, you can run:
Testing Branch

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint / tslint errors in the console.

### `yarn test`

Launches the test runner using jest<br>
