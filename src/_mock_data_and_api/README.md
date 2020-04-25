# remember
after you have changed or updated data in the mockData.js, 
run 'yarn start' or 'yarn start:api' to populate the db.json file (our faked "backend database")

## if changing name on a type
- remember to update referenses in stories
- remember to update referenses in api functions, e.g. 'api/regionsApi.js'

## if adding a new type with new Api
remember to add the reducer from the slice
> see: '\src\api\README.md' for details



## when adding new types to mockData.js 
it also has to be added in createMockDb.js in the lines below

```js
const {myDummyObjects } = mockData;
const data = JSON.stringify({ myDummyObjects }); //stringify needed for writing to file
``` 

## when post or put data
look for the "Declaring custom routes
in apiServer.js
```js

// Declaring custom routes below. Add custom routes before JSON Server router
server.post("/myDummyObjects/", function (req, res, next) {
```