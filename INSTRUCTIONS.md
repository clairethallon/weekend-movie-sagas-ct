# React-Redux with Redux-Sagas

This week you have two separate parts to work on:

1. Adding features to an existing Movie App with React-Redux and Redux-Sagas
2. Practicing SQL

Be sure to do both parts!

---

## Add Features to our Movie App

For this weekend challenge you'll be expanding on a movie management application! We're already able to see movies that exist in our DB. We'll need to be able to see detailed view for each individual movie, including genres associated with that movie. We also need to able to add a new movie's information.

## Database Setup

1. Create a database named `saga_movies_weekend`
2. Run the queries from `database.sql` on the `saga_movies_weekend` database

## Install Dependencies

1. `npm install`
2. `npm run server`
3. `npm run client`

## Notes

### Relationships
Genres can be applied to many different movies. Movies can have multiple genres. This is Many-to-Many! Junction Table time!

We've given you the database complete with a junction table and data for `movies_genres`.
 
### Movies
We've added some movie posters in the `public/images` folder, and the database is set up to use them. If you want your own posters, you'll want to add the files there!

---

## Feature List

> NOTE: Start by taking inventory of the existing code. Part of the work for setting up sagas has been done for you.

### Home / List Page

This view is completed already! It displays all of the movies in the movie database. 

######
######
######

- TODO: When a movie poster is clicked, a user should be brought to the `/details` view for that movie.
- TODO: Have a way to get to the Add Movie Page

### Details Page

This should show all details **including ALL genres** for the selected movie. You will need to store this data in redux!

 > Hint : You can make a GET request for a specific movie. Remember `req.params` and `:id`?

- TODO: The details page should have a `Back to List` button, which should bring the user to the Home/List Page

> Base functionality does not require the movie details to load correctly after refresh of the browser.

### Add Movie Page

This should show:

- an input field (for the movie title)
- an input field (for the movie poster image URL))
- a textarea (for the movie description)
- a dropdown (for the genres)

The Add Movie page should have the buttons:

- `Cancel` button, which should bring the user to the Home/List Page
- `Save` button, which should save these inputs in the database and bring the user to the Home/List Page (which now has the new movie)

**Base functionality does not require being able to select more than one genre for a new movie**

> Hint: Look at the /api/movie POST route -- it's been made already but is performing 2 queries: one to store the movie information and another to store the genre in the junction table.

> Hint: You'll want to use the genres that are in the db for your dropdown

---
