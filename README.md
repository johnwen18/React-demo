# Setting up the Project
```
cd ReactDemo
npm install
npm run start:dev
```
Now open up [http://localhost:8080](http://localhost:8080)
in development mode,`Ctrl+S` then webpack will compiled automatically
The browser automatically reloads with your new code as well

or run production environment:
```sh
NODE_ENV=production npm start
# For Windows users:
# SET "NODE_ENV=production" && npm start
```


---
# reference

First you'll need [Node.js](https://nodejs.org) and the package manager
that comes with it: [npm](https://www.npmjs.com/).

Once you've got that working, head to the command line where we'll set
up our project.

## Clone the Tutorial

```
git clone https://github.com/reactjs/react-router-tutorial
cd react-router-tutorial
cd lessons/01-setting-up
npm install
npm start
```

Now open up [http://localhost:8080](http://localhost:8080)

Feel free to poke around the code to see how we're using webpack and npm
scripts to run the app.

You should see a "Hello React Router" message in the browser.

## Make Some Changes

Open up `modules/App.js` and change the text to something like "Hello
<your name>". The browser automatically reloads with your new code.

---

# Production-ish Server

Webpack dev server is not a production server. Let's make a production
server and a little environment-aware script to boot up the right server
depending on the environment.

Now run:

```sh
NODE_ENV=production npm start
# For Windows users:
# SET "NODE_ENV=production" && npm start
```

