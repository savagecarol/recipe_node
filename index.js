const express = require('express');
const recipesRouter = require('./routers/recipes');

// making object of express
const app = express();

//port
const PORT = process.env.PORT || 8000;

// middleware
app.use((req, res, next) => {
    const { method, path } = req;
    console.log(
    `New request to: ${method} ${path} at ${new Date().toISOString()}`
    );
    next();
  });

 app.use('/api/v1/recipes', recipesRouter);

// server
app.listen(PORT , () => {
    console.log(`Server is up on port ${PORT}.`);
})
