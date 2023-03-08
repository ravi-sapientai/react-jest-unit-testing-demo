# React Application Unit Testing with Jest

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

### `npm test -- --coverage`

Launches the test runner in the interactive watch mode with test coverage\
See the section about [coverage reporting](https://create-react-app.dev/docs/running-tests/#coverage-reporting) for more information.

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

## What is Unit Testing?
* Unit testing is a testing method that tests an individual unit of software in isolation. 
* Unit testing for React Apps means testing an individual React Component.

“Unit testing is a great discipline, which can lead to 40% – 80% reductions in bug density.” - Eric Elliotte

## The Test Pyramid (By Martin Fowler)
![](https://martinfowler.com/articles/practical-test-pyramid/testPyramid.png)

## Benefits of Unit Testing

### 1. Process Becomes Agile
Agile Testing process is the main advantage of unit testing. When you add more features to the software, it might affect the older designs and you might need to make changes to the old design and code later. This can be expensive and require extra effort. But if you do unit testing, the whole process becomes much faster and easier.

### 2. Quality of code
Unit testing significantly improves the quality of the code. It helps developers to identify the smallest defects that can be present in the units before they go for the integration testing.

### 3. Facilitates change
Refactoring the code or updating the system library becomes much easier when you test each component of the app individually.

### 4. Smooth Debugging
The debugging process is very simplified by doing unit testing. If a certain test fails, then only the latest changes that have been made to the code need to be debugged.

### 5. Reduction in cost
When bugs are detected at an early stage, through unit testing, they can be fixed at almost no cost as compared to a later stage, let’s say during production, which can be really expensive.

## Best Practices in Unit Testing

### 1. Use one test file per component
Separate different tests into different files to make them well separated, keep the files slim, and make them easily maintainable.

<img width="280" alt="image" src="https://user-images.githubusercontent.com/9147189/223621057-ea8e1b8a-c2f2-4f38-9baa-0b4f553a09d9.png">

### 2. Organize your tests with ***describe*** and ***test/it***
Use ***describe*** to create blocks that group several related tests together and use ***test*** or ***it*** to execute individual test cases. 

<img width="470" alt="image" src="https://user-images.githubusercontent.com/9147189/223621256-868a00f7-d587-431e-abda-5b1a72b7e3f8.png">

### 3. Setup and reset commons in ***beforeEach/afterEach*** hooks
Use ***beforeEach*** and ***afterEach*** hook to set up common code for test cases and reset all mocks after your tests.

<img width="464" alt="image" src="https://user-images.githubusercontent.com/9147189/223621454-d5c8ba08-2206-4d08-a5f5-aaf47fd1ae31.png">

### 4. Use the three A’s pattern 
Arrange/Act/Assert (AAA) is a pattern for organizing unit tests. It breaks tests down into three clear and distinct steps:
* **Arrange**: Perform the setup and initialization required for the test.
* **Act**: Take action(s) required for the test.
* **Assert**: Verify the outcome(s) of the test.

<img width="467" alt="image" src="https://user-images.githubusercontent.com/9147189/223621695-e0744157-fe45-4998-bdfc-5564bf53c754.png">

### 5. Also test what should not happen
When writing tests, a common practice is to test what a function should do. But you should not only test the obvious but also test the edge cases and negative cases.

<img width="396" alt="image" src="https://user-images.githubusercontent.com/9147189/223621830-50b5f186-0b62-4fbe-835e-ba2b57b35348.png">

### 6. Make your tests deterministic
Your tests should not depend on each other. It goes without saying, but for your tests to be deterministic, you want to ensure that your tests don't depend on each other. Each test case should be independent of the other and should be able to pass on its own.

<img width="452" alt="image" src="https://user-images.githubusercontent.com/9147189/223621914-6c54f360-3320-4899-b9d0-36520bad7986.png">

### 7. Don’t duplicate implementation logic
You might copy the same flaws in the logic over to your test suite which means your test suite will pass, but not because it is working correctly. Rather, it contains the same bug as your function. Always test the outcomes, not the implementation.

<img width="389" alt="image" src="https://user-images.githubusercontent.com/9147189/223622073-d09db0ee-fdcc-4a92-a92b-dd6bdc3bdd01.png">

### 8. Run your tests as part of your deployment
Run your test suite before each deployment to ensure you didn't accidentally break any functionality. That way, you can ensure that no bugs are released into a test/production environment for parts of your application that are already covered by tests.

<img width="402" alt="image" src="https://user-images.githubusercontent.com/9147189/223622151-95964da4-f024-4851-a933-ad05ab79fe18.png">

## Author
[Osanda Nimalarathna](https://osandadeshan.github.io/ "Osanda Nimalarathna")
