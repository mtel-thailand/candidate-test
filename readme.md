# Code Test – React & Express

This project contains both frontend (React) and backend (Express) components with a NoSQL database.
Mock data is already provided. Your task is to make the failing tests pass (make all tests green).

## Time Limit

  - You have 30 minutes to complete the tests.
  - You are required to finish within this time frame.
  - If the time limit is exceeded, the interview will be ended immediately.

## Structure

  - Backend: cinema/backend
  - Frontend: cinema/client

## Important Order of Work

  1. You must complete the backend tests first.
  2. The frontend tests depend on backend functionality, so they will not pass until the backend issues are resolved.
  
## Backend Instructions
  1. Navigate to the backend:
  ```
  cd cinema/backend
  ```
  2. Run the tests:
  ```
  yarn test
  ```
  3. There are 4 test cases: 
  - The first test already passes.
  - Fix the last three failing tests.

## Frontend Instructions

  1. Make sure the backend server is running with: `yarn dev` (inside cinema/backend)
  2. Navigate to the frontend:
  ```
  cd cinema/client
  ```
  3. Run the tests:
  ```
  yarn test
  ```
  4. There are 2 test cases.
  - The first test already passes. 
  - Fix the second failing test.

## Goal

  1. Focus only on the failing tests.
  2. Do not modify tests that already pass.
  3. Keep changes minimal and targeted.
  4. Ensure all tests are green before finishing.
