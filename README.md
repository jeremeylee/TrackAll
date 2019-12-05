## Track All

[Track All](http://trackall.us-east-2.elasticbeanstalk.com/)

A general, all purpose list tracker web application. Track All allows you to create different categories and you're able to add new items to each category. I like tracking things such as shows I've watched, movies I've watched, current favorites in music, etc. Therefore, I decided to develop a full stack web application that allows me to create a list of anything and categorize it.

**Desktop Version:**
![Desktop Demo](/Demo/Desktop_Demo.gif)

**Mobile Version:**
![Mobile Demo](/Demo/Mobile_Demo.gif)

This app is a potential precursor/replacement for the Flow app that I was developing.

## Features

- Create new categories
- Edit the title of existing categories
- Delete existing categories and all of their items
- Add new items to a category
- Edit items within a category
- Delete unwanted items

Below is an example of the delete/edit features of the app

**Desktop Version:**
![Desktop Features](/Demo/Desktop_Features.gif)

**Mobile Version:**
![Mobile Features](/Demo/Mobile_Features.gif)

## Front End

The front end was developed using React and Material UI. I wanted to create a responsive website, so I went with a mobile first approach when developing the front end.

![Responsive Demo](/Demo/Responsive.gif)

## Back End

The back end was developed using Node.js and Express.js. I built a REST API that performed CRUD operations on a MondoDB database.

**API Endpoints for lists**

| Request | Route          |
| ------- | -------------- |
| GET     | /api/lists     |
| POST    | /api/lists     |
| PUT     | /api/lists/:id |
| DELETE  | /api/lists/:id |

**API Endpoints for categories**

| Request | Route               |
| ------- | ------------------- |
| GET     | /api/categories     |
| POST    | /api/categories     |
| PUT     | /api/categories/:id |
| DELETE  | /api/categories/:id |
