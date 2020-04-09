# evaluate-news-nlp
This is a project for using NLP in a existing application.


## Getting started
This project implements basic asynchronous requests to show how to implement external API calls and backend fetching with JavaScript.
The example is a News Analyzer app that requires the uses the Aylien API to analyze with NLP the sucjectivity and polarity of a specific website.
The user input should be an URL.

### Prerequisites

- Node JS installed
- Express
- Body Parser
- Cors
- Webpack
- Jest

To install these packages please run:
```
npm install express - to install the Express server
npm install body-parser - to install Body Parser
npm install cors - to install Cors
npm install webpack webpack-cli - to install Webpack
npm install -D jest - to install Jest
```


### Project Structure
```
src
- client
-- views
--- index.html
-- js
--- formHandler.js
--- updateUI.js
--- urlChecker.js
-- styles
--- base.scss
--- footer.scss
--- form.scss
--- header.scss
--- resets.scss
-- index.js
- server
-- index.js
server.js
website
- app.js
- index.html
- styles.css

```