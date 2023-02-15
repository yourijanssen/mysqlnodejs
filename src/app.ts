
// app.use('/add-product',(req, res, next) => {
//     res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>");
// });

// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');

// });

import express from "express";
import bodyParser from "body-parser";

const app = express();

const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRoutes);
app.use(adminRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
