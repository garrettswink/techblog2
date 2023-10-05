# Tech Blog
Created by Garrett Swink

## User Story
AS A developer who writes about tech:
- I WANT a CMS-style blog site
- SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria
GIVEN a CMS-style blog site

WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

WHEN I click on the homepage option
THEN I am taken to the homepage

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

WHEN I choose to sign up
THEN I am prompted to create a username and password

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the 
site

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out


WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an 
updated dashboard

WHEN I click on the logout option in the navigation
THEN I am signed out of the site

WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

## App Dependencies
- Node Express
- Node Handlebars
- MySQL

## Installation Instructions
- Open Terminal
- Input Command: npm i
- Login to MySql
- Input Command: source db/schema.sql
- Quit MySql
- Input Command: npm run seed
- Input Command: nodemon sever.js
- Open Chrome Browswer
- Input Address: http://localhost:3001

### Installation Demo
![Untitled design (2)](https://github.com/garrettswink/techblog2/assets/22800055/39f0559c-1a3f-40fb-8228-dc14c0fdb50f)

## App Demo

### Signup, Login, Logout
![Untitled design](https://github.com/garrettswink/techblog2/assets/22800055/dd85f4ec-5d43-46fb-a1e4-02ce8899f27a)

### Create, Edit, Delete, Comment
![Untitled design](https://github.com/garrettswink/techblog2/assets/22800055/23b5259c-2334-4566-b9e1-7d8175507fe3)

## License
This project is registered under the [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) license.

For more information on this license, please visit https://opensource.org/licenses/MIT.
