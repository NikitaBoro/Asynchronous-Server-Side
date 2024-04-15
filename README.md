# Asynchronous-Server-Side

Cost Manager REStful Web Services

The final project includes developing specific parts of REStful Web Services that allow the development of a client application for managing our daily costs.


## Database

The database should be a MongoDB database (using the MongoDB Atlas service). 

The data should be organized in collections that at the minimum, includes the users and costs collections. 

The database should support having the costs organized according to categories. 

The categories should be the following: food, health, housing, sport, education, transportation, and other. 

The users collection should hold documents that (at the minimum) include the following properties: id, first_name, last_name, and birthday. 

The costs collection should hold documents that (at the minimum) include the following properties: user_id, year, month, day, id, description, category, and sum. 

The id should be generated on the server side. 

The id won’t be sent together with the request.

The database should be empty, except for a single document in users, that includes the details of an imaginary user, with the following data (please note that the names of all properties include small letters only):

id: 123123

first_name: moshe

last_name: israeli

birthday: January, 10th, 1990


## Application

The requirements include: 

(1) Users can add new cost items, specifying the sum, category, and description (at the minimum) together with the user_id to add the new cost item to a specific user. 

(2) Users can get a detailed report per specific month and year (for a specific user).

The application that runs on the server side should be developed using Express.js, it should be developed in JavaScript

(You cannot develop in TypeScript), and it should include REStful web services in accordance with the requirements listed in this document. 

Your code must use promises. The server side should be deployed on a server connected to the web.

Your project should include the following REStful web services endpoints:

### _____/addcost/ 

for adding a new cost item using the POST method. 

The parameters should be with the same names of the properties the newly added document should have.

The automatic test will try to add a new cost item by sending (with the POST method) the following parameters: 

user_id, year, month, day, description, category, and sum. The category will be one of the available ones, according to this document.

### _____/report/ 

for getting (using the GET method) a detailed report (in JSON) that shows the exact costs for a specific month and year. 

The parameters should be year, month and user_id. 

The returned JSON document should describe an object with properties whose names are the possible categories (all categories should be included). 

The value of every property should be an array that includes objects that describe cost items. 

The names of the properties in every object that describes a cost item should be in accordance with the properties in MongoDB.

The automatic test will try to get the report for a specific month, year and user by sending (with the GET method) the following parameters: 

user_id, 

month, 

and year. 

The expected returned document should look as the following example:

{

“food”:[{“day”:21,”description”:”chocolate in ikea”,”sum”:20},{“day”:5,”description”:”milk”,”sum”:6} ],

“health”:[ ],

“housing”:[ ],

“sport”:[ ],

“education”:[ ],

“transportation”:[ ],

“other”:[ ]

}

### _____/about/

for getting (using the GET method) a JSON that is an array of objects that describe the developers. 

Each developer should be described using the firstname, lastname, id, and email.

example:
[

{“firstname”:”dave”,”lastname”:”cohen”,”id”:234234,”email”:”daddd@gmail.com”},

{“firstname”:”tal”,”lastname”:”levy”,”id”:34534544,”email”:”tal@gmail.com”} ]

The ____ will be replaced with the link you (just the development team manager will need to submit that link) will submit at

a specific form created for submitting the final project. That form will be available at

https://forms.gle/Aqq3mbPXsDU2BAQN8.


### Code Style

The code in JavaScript should follow the style guide at 

http://www.abelski.com/courses/stylejs/languagerules.pdf and at

http://www.abelski.com/courses/stylejs/stylerules.pdf. 

Make sure that you don’t forget to add comments
