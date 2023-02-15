import express from "express";

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware");
    next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log("In another middleware");
    res.send("<h1>Hello from Express!</h1>");
});

const server = app.listen(3000, () => {
  console.log("Server started on port 3000");
});
