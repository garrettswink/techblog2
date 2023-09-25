const express = require("express");
const session = require("express-session");

const exphbs = require("express-handlebars");

const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(expess.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(_dirname, 'public')));
