// Express imports
const express = require("express");
const session = require("express-session");

// Handlebar imports
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers: require("./utils/helpers") });

// Sequelize Imports
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Import paths
const app = express();
const path = require('path');
const routes = require("./controllers");
const PORT = process.env.PORT || 3001;

// Session object
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

// Set up
app.use(routes);
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({
        secret: process.env.SECRET,
        store: new SequelizeStore({ db: sequelize }),
        resave: false,
        saveUninitialized: false,
    })
);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
  });
