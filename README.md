[![Maintainability](https://api.codeclimate.com/v1/badges/dc6f8a667c4203e01e0e/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/Job-Funnel-fe/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/dc6f8a667c4203e01e0e/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/Job-Funnel-fe/test_coverage)

# QuickHire

You can find the deployed project at [QuickHire.dev](https://quickhire.dev)

## Contributors

|                                                                                   [Adam Reynolds](https://github.com/A-Lawrence-Reynolds)                                                                                    |                                                                                    [Anthony Hill](https://github.com/hillan1152)                                                                                     |                                                                                        [Austin Hadden](https://github.com/AustinHadden)                                                                                         |                                                                                    [Ana Monteiro](https://github.com/anamonteiro430)                                                                                     |                                                                                        [Billy Baney](https://github.com/bbaney)                                                                                         |                                                                                   [Mauricio Degregori](https://github.com/mdegregori1)                                                                                    | [Jordan Miller](https://github.com/jordanjmiller)                                                                                                                                                                                |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                              [<img src="https://avatars2.githubusercontent.com/u/51489495?s=460&v=4" width = "200" />](https://github.com/A-Lawrence-Reynolds)                                               |                                               [<img src="https://avatars3.githubusercontent.com/u/49995770?s=460&v=4" width = "200" />](https://github.com/hillan1152)                                               |                                                   [<img src="https://avatars2.githubusercontent.com/u/11279291?s=460&v=4" width = "200" />](https://github.com/AustinHadden)                                                    |                                              [<img src="https://avatars1.githubusercontent.com/u/44322565?s=460&&v=4" width = "200" />](https://github.com/anamonteiro430)                                               |                                                  [<img src="https://avatars1.githubusercontent.com/u/48811486?s=460&v=4" width = "200" />](https://github.com/bbaney)                                                   |                                                 [<img src="https://avatars1.githubusercontent.com/u/50679293?s=460&v=4" width = "200" />](https://github.com/mdegregori1)                                                 | [<img src="https://avatars0.githubusercontent.com/u/54548961?s=460&v=4" width = "200" />](https://github.com/jordanjmiller)                                                                                                      |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/A-Lawrence-Reynolds)[<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/reynolds-adam/) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/hillan1152)[<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/anthony-hill02/) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/AustinHadden)[<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/austin-hadden-b077a9194/) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/anamonteiro430)[<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/anamonteiro430/) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/bbaney)[<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/billy-baney-908a63172/) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/mdegregori1)[<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/mauricio-degregori/) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jordanjmiller)[<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/jordan-miller-3b04a5183/) |

<br>
<br>

## Project Overview

[Trello Board](https://trello.com/b/dorhqi4o/job-funnel)

[Product Canvas](https://www.notion.so/Job-Funnel-20ba287fac1c403c92a8ebb8766821a0)

[UX Design files](https://www.figma.com/file/zljtkyosMyzAa1UMpcAIEd/Quick-Hire-Judy?node-id=263%3A2)

[Backend Documentation](https://github.com/Lambda-School-Labs/Job-Funnel-be)

[Data Science Repo](https://github.com/Lambda-School-Labs/Job-Funnel-ds-API)

## Quickhire Description

Quickhire is a web application that streamlines the job search process by allowing users to search, store, and apply for jobs -- all in one place. It allows you, as a user, to login, search for jobs that you're interested in, save them, and apply to them.

Our mission is to simplify the job-search and hiring process by bringing both to the same platform. Future releases will include a recruiter side of the app, which will allow for both kinds of users to interact with one another --- whether it be through initial contact, through an interview, or through any part of the job search process.

### Key Features

- As a user, you can search for jobs using custom search filters
- You can view descriptions of those jobs, and apply -> Application capabilities redirect to link of third-party website
- If you've applied on the third-party site, you are able to mark that job as "applied", and visit it at any time
- The ability to save jobs that you want to revisit later
- Users are able to register/login to keep track of their saved data

## Tech Stack

### Front end built using:

#### React

- We needed a framework that would allow us to build a dynamic and interactive front-end, while allowing us to connect to multiple API's. React allowed us to do both in an effective, and efficient manner.

#### Less

- Less allowed us to nest styles, create variables and mixins, and create easy-to-read code for future iterations of Quickhire.

#### Styled-Components

- While we mainly used less, styled-components allowed us to create functional styling, such as a page loader, quite easily within its respective components.

#### React Router

- React router allowed us to easily navigate users from page-to-oage while effectively retaining the functionality of the site.

#### Jest

- JavaScript testing library, that allowed us to simply and effectively test our code on the both the front and back-end.

#### Front end deployed to Amplify

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  NODE_ENV - Set to "development" until ready for "production"
    *  JWT_SECRET - You can pick any secret for the .env file

# Installation Instructions

Clone this repo, store it locally, and run yarn to install your required dependencies.

## Other Scripts

```
* start - `yarn start`
* test - `yarn test`
```

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See our [Backend Documentation](https://github.com/Lambda-School-Labs/Job-Funnel-be) for details on the backend of our project.
