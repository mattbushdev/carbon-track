# carbontrack

carbontrack is a mobile app that will calculate the amount of CO2 emitted for a journey based on a user’s vehicle. The app encourages alternative travel options and shows the user the route and if any emissions are saved on the journey.

## Table of contents

- [Description](#description)
- [How to Use](#how-to-use)
- [Built with](#built-with)

## Description

carbontrack was a team built project for the final sprint of the Northcoders Bootcamp. As a mobile app, carbontrack was built using ReactNative and incorporates AWS services such as Cognito and DynamoDB.Contributors to the original repo were [Tom](https://github.com/Arcticquiff), [Conor](https://github.com/conormullangit), [Jatinder](https://github.com/singhjptech/) and [Bora](https://github.com/Kimovi).

## How to use

To run the app a local copy will need to be taken and run through an iOS emulator.

Follow these steps:

1. Ensure that you have installed:

- Node.js (download [here](https://nodejs.org/en/)) using verison 16 or later.

2. Fork and Clone the repo
3. Open the repo and install the dependencies by running:

```
    npm install
```

4. Next, run:

```
    npm start
```

or

```
    expo start
```

5. Select choice of emulator through Expo

6. On the sign up page create an account with AWS Cognito and enter the code sent to your email to verify. Once verified you can then sign in.

7. Go ahead and start using the app!

## Built with

The technologies used for this project are listed below:

Frontend

- [React Native](https://reactjs.org/) v0.65
- [React Native Maps](https://github.com/react-native-maps/react-native-maps) v0.29.3
- [TypeScript](https://https://www.typescriptlang.org/) v4.0.0
- [Expo](https://https://www.typescriptlang.org/) v42.0.1

Backend

- [AWS Amplify](https://aws.amazon.com/amplify/) v4.2.9
- [AWS DynamoDB](https://aws.amazon.com/dynamodb/)
- [AWS Cognito](https://aws.amazon.com/cognito/)
- [axios](https://axios-http.com/) v13.0.0
