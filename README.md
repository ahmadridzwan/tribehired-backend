# TribeHired Backend node.js Test

## Introduction
A simple node.js server to consume two different APIs:  
1. Posts endpoint (https://jsonplaceholder.typicode.com/posts)
2. Comments endpoint (https://jsonplaceholder.typicode.com/comments)

## Functionalities
The tasks for this test was to create two endpoints, namely:  
* Top posts endpoint  
    This endpoint returns the top posts with the most comments in descending order.  
    Endpoint is accessed under http://localhost:3000/posts

* Comment Search endpoint  
    This endpoint takes a specified query in the URL and returns matching comments that fits the query given.  
    Example endpoint is http://localhost:3000/comments/search?query=Nikita@garfield.biz , where the query in this case is 'Nikita@garfield.biz'.

## Installation and Testing
* Clone this repo. Run `git clone https://github.com/ahmadridzwan/tribehired-backend.git`
* Open the folder inside VS Code or similar, and run `npm install` to install dependency packages
* Once done, go ahead and run `npm run devstart` to start running the server. Ensure that no other local server is running on Port 3000, or this will not start. Stop the other server and run the command again.
* Visit the specified endpoints listed above
