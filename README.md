# Birdie Test

Deployed to [Heroku](https://powerful-castle-05756.herokuapp.com/).

## Overview of actions taken
- Backend
   - Added TypeORM
   - Extracted important information from payload JSON to reduce amount of data sent for each event
   - A display string has been added to event objects for easier display in the frontend
   - Route for retrieving chunks of events - `/events?page=x`
   - Route for retrieving some summary information - `/summary` 
- Front-end
   - Added event information and a top level summary
   - Sagas control retrieval of each set of information
   - moment.js has been used to parse and format dates
    
## Shortfalls
Some areas that need improving if this were taken further
- Loading messages/behaviour isn't exactly pretty
- Paging behaviour (load more events) could miss events if new ones arrive during use (due to the basic use of take and skip)
- Once there are no more events to load you can keep requesting more (nothing breaks, it's just not ideal)
- Events could be grouped by date
- Refactoring of action structure due to similarities between requesting events/summaries
- Some tests have been omitted for brevity, where similar tests have been demonstrated
- The heroku deployment isn't the tidiest
   
## Setup
An example `ormconfig.json` is provided, this file is used in the absence of `process.env.DATABASE_URL`. This connection 
will be used for tests as well as the development server. At least one of these connection types needs to exist to start
the backend up.

The front-end is proxy'd to point to the default port that the backend uses.

## Usage

1. Start the API. (Run the following commands within the `backend` folder)

   a. Install the dependencies
   ```
   npm install
   ```
   
   b. Run the HTTP server (will start on port `8000`)
   ```
   npm run dev
   ```
2. Start the React app  (Run the following commands within the `front-end` folder)

    a. Install the dependencies
   ```
   npm install
   ```
   
   b. Run the application (will start on port `3000`)
   ```
   npm start
   ```
