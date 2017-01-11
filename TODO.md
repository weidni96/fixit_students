# Your Tasks #
This is a list of tasks you should solve in order to understand software tests, service APIs and Continuous Integration (CI).

### Precondition ###

Fork the Repository to your own user account at Github.

Log into [https://travis-ci.org](https://travis-ci.org) and enable your Repository for Continuous Integration. Exchange the badge URLs in the README and push these changes to Github. Wait for CI to finish and have a look at the output.

### 1 ###
Execute the following statement at the command-line and have a look at the output. Fix Errors!

`npm run lint`

### 2 ####

Execute the following statement at the command-line and have a look at the output. Fix failing tests!

`npm run test:integration`

**Hint**: use `npm start` to run the application and head over to [http://localhost:3000/documentation](http://localhost:3000/documentation) in order to have a look at the API description.

Add this step to the file `.travis.yml`, so CI executes tests automatically.

### 3 ###

Add tests for *delete basket items* in a separate file by copying `tests/integration_PostNewItem.js`. Subsequently modify these tests.

### 4 ###

Have a look at the code coverage by executing `npm run coverage`. Head to the `coverage` folder and search for the file `index.html`. Open it in a browser and dig through the code coverage report.

### 5 ###

Count your current Lines of Code (LOC) by executing `npm run countLOC:details` and look at the file

### Solutions ###
Each of the recent commits introduced new bugs to the code. By going through these commits, you'll be able to see what has changed and what is the correct solution, except for task #3.
