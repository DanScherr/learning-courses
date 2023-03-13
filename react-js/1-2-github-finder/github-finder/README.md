# **Learning Courses:** :books::brain:

## This is the ***GitHub Finder Project*** with **REACT.JS**, **Tailwind** and **Daisy UI**: :mortar_board::closed_book::robot:

***

- ## **SUMÁRIO:** :round_pushpin:

    1. [Create Next.js app](./1-intro/)

***

1. ## **Create react app**

    1. ```npx create-react-app github-finder --use-npm```
    2. ```cd github-finder```

2. ## **Installing dependencies**

    1. [Tail Wind](https://tailwindcss.com/):

        1. Intall: ```npm install -D tailwindcss```
        2. Create tailwind config file: ```npx tailwindcss init```
        3. Configure template paths on tailwind.config file.
        4. Replace index.css code with:

                @tailwind base;
                @tailwind components;
                @tailwind utilities;

    2. [Daisy UI](https://daisyui.com/):

        1. Install: ```npm i daisyui```
        2. Set it as required in plugins key on tailwind.config

    3. App.js:
        1. Clear and Implement

    4. Clear some other files:
        1. App.css
        2. logo.svg
        3. App.test.js
        4. reportWebVitals.js
        5. setupTest.js

    5. Install Router and Icons:
        1. ```npm i react-router-dom react-icons```

3. ## **Implement Project**

    1. Create components folder.
        Inside components create:
            1. layout folder

    2. Import BrowserRouter as Router and Route in App.js and wrap everything with it

    3. **Navbar:**
        1. Inside layout create Navbar.jsx file and implement it
        2. Import Navbar into App.js

    4. **Footer:**
        1. Inside layout create Footer.jsx file and implement it
        2. Import Navbar into App.js

    5. **Pages & Routes:**
        1. **Pages:**
            1. Create new foolder called pages under src
            2. Create pages:
                - Home.jsx
                - About.jsx
                - NotFound.jsx
            3. Import pages into App.js

        2. **Routes:**
            1. Import Routes
            2. Create Routes and Route for each Component inside main
                - We'll create it inside main so only our content will change as we redirect

4. ## **Working with GitHub API**

    1. Save on .env file our developer github token
        - we can access by: ```{process.env.REACT_APP_GITHUB_TOKEN}```

    2. Users
        1. Create new folder under components called users
        2. Create new file called UserResults.jsx and implement it
            1. we must import it on our Home page, not in App.js, because we have routes.
            2. Import useEffect Hook on UserResults
                - useEffect takes a function and an array of dependencies. we'll have an empty array because we want to run when our component loads
                - Because we want to upload right after our Component loads
            3. Create async function fetchUsers so that we can call on our useEffect when our component loads the screen and setUsers
            4. Import useState.
                - so that we can set our list of users and reset it whenever the user wants
                - it's the middle way of our backend app and our front-end UI
                1. Implement useState for user, setUsers and loading, setLoading
                    - Whenever we make a request to an API we should have a loader to validate the requisition
        3. Loadind Spinner:
            1. Create assets folder under layout folder
            2. Salve spinner.gif from github in it
            3. Create file Spinner.jsx under layout
            4. import spinner gif
            5. import Spinner Component into UserResults
        4. UserItem:
            1. Crate UserItem.jsx under components/users/
            2. Import it on UserResults
            3. Implement propTypes on UserItem

    3. UserContext using Reducers instead of useState:
        - there's also [Redux](https://react-redux.js.org/)
        1. Create new folder context under src
        2. Create new folder github under context
        3. Create file GithubContext.js
        4. Bring pieces of state and state functions from UserResult to GithubContext.js
        5. Import GithubProvider on App and wrap Components, so that we can have access to our data through the components
        6. Import those state contexts into UserResults with useContext (have to import)
        7. Creating Reducers:
            1. Create and Implement a GithubReducer.jsx file under context/github
            2. Import githubReducer on GithubContext and update code with Reducer logic
        8. Create Function setLoading with dispatch() method from userReducer and implement on fetchUsers

    4. Search Component Form:
        1. Create UserSearch.jsx Component under users/
        2. Import it into home page
        3. Implement:
            1. add forms
            2. State handles for the forms
            3. functions for event handling
            4. useState to show clear button only if there are users from context
        4. Create function for Search endpoint into GithubContext and update file
        5. Import it on UserSearch from useContext and Implement it
        6. Clear User Button


***

<br>

- ### **Please, be welcome to check my profile:** :nerd_face::handshake:

<br>

<a href="https://github.com/DanScherr">
    <img src="./images/the-end-img.png" width="50%">
</a>