# react-charts
React charts using faker data on json server

This project includes BarChart & PieCharts from chart.js library. 
Faker.js is used to generate bulk dummy data of 100000 users. And to render data dynamically in the charts, json server is used as dummy Backend API.

Note: Please run the for loop for 1000/10000 times in faker.js file to see the charts in the browser. Since, i had run 'for loop' for 100000 times chrome browser said out of memory and browser became unresponsive.

Run this project in VS code or elsewhere as
1. To run the server:- 
json-server --watch faker.js --port 3004

2. To run the react app:- 
npm start

