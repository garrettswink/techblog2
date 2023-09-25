const { User } = require('../models');

const userData = [
    {
        username: 'Bob',
        email: 'bob@bob.com',
        password: 'password1'
    },
    {
        username: 'Sarah',
        email: 'sarah@sarah.com',
        password: 'password2'
    },
    {
        username: 'Frank',
        email: 'frank@frank.com',
        password: 'password3'
    },
    {
        username: 'Mike',
        email: 'mike@mike.com',
        password: 'password4'
    },
    {
        username: 'Rebecca',
        email: 'rebecca@rebecca.com',
        password: 'password5'
    },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;