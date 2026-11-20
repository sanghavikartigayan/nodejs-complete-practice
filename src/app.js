const express = require("express");
const bodyParser = require('body-parser');

const path = require('path');

const adminRoutes = require("./routes/adminRoutes");
const shopRoutes = require('./routes/shopRoutes');
const errorController = require('./controller/errorController');

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Body parser for handling form data - res body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
