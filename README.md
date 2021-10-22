# Evaluate a news article with Natural Language Processing

* A single page website where users could post any article URL and get it analyzed using NLP.
* The website checks whether the provided URL is valid or not before submitting results.
* The website uses MeaningCloud's Sentiment Analysis API to analyze the articles.
* The website uses webpack to provide both development and production environments.
* The website tests its js functions using jest.
* The website contains workbox service worker to get some offline functionality.

## General Information

* This is the Third project in Udacity's Advanced Web Development course. The project was created using simple vanilla js, html and sass files.

* The goal of this project is to practice with:
  - Setting up Webpack
  - Sass styles
  - Webpack Loaders and Plugins
  - Creating layouts and page design
  - Service workers
  - Using APIs and creating requests to external urls

* On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## TL;DR

To use the website right away:

* Install all project dependencies with `npm install`
* Start the server using `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the website in the development mode.<br />
Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

### `npm run test`

Launches the test runner to test the client js functions using Jest.<br />

### `npm run build-prod`

Builds the website for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run build-dev`

Runs the website in development mode using webpack-dev-server.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.