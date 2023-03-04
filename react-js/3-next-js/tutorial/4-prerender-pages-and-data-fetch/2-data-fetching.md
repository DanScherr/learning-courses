# **Learning Courses:** :books::brain:

<br>

### This is the ***Pre-Rendering Data Fetching Tutorial tutorial*** of my learning with **Next.js directory**: :mortar_board::closed_book::robot:

<br>

# **SUMÁRIO:** :round_pushpin:

<br>

1. **[Pre_Rendering Data-Fetching](#pré-rendering-data-fetching)**
    1. **[With and without Data: Theory](#with-and-without-data)**
    1. **[Static Generation with Data using getStaticProps](#static-generation-with-data-using-getstaticprops)**
    1. **[Fetch External API](#fetch-external-api)**
    1. **[Query Database](#query-database)**
    1. **[Final Cons](#final-cons)**

<br>

1. # Pré-Rendering [Data-Fetching](https://nextjs.org/docs/basic-features/data-fetching/overview#getstaticprops-static-generation):
    Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

    1. ## **With and without data:**
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

        - Static Generation can be done with and without data.

        - So far, all the pages we’ve created do not require fetching external data. Those pages will automatically be statically generated when the app is built for production.

        - However, for some pages, you might not be able to render the HTML without first fetching some external data. Maybe you need to access the file system, fetch external API, or query your database at build time. Next.js supports this case — Static Generation with data — out of the box.

            ![](./../../../images/3-next-js-pre-rendering-after-fetching-data.png)

    1. ## **Static Generation with Data using getStaticProps:**
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

        - How does it work? Well, in Next.js, when you export a page component, you can also export an async function called getStaticProps. If you do this, then:

        1. ```getStaticProps``` runs at build time in production, and…
        2. Inside the function, you can fetch external data and send it as props to the page.

                export default function Home(props) { ... }

                export async function getStaticProps() {
                // Get external data from the file system, API, DB, etc.
                const data = ...

                // The value of the `props` key will be
                //  passed to the `Home` component
                return {
                    props: ...
                }
                }
        - Essentially, getStaticProps allows you to tell Next.js: “Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”

        3. **Using it**:
            Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

            1. Creating a simple blog architecture
                - The blog posts in our example will be stored as local markdown files in our application's directory (not fetched from an external data source), so we'll need to ***read the data from the file system***.

                In this section, we'll go through the steps of creating a blog that reads markdown data from the file system.

            2. Creating the markdown files
                1. First, create a new top-level directory called posts (this is not the same as pages/posts) in your root folder. Inside posts, create two files: pre-rendering.md and ssg-ssr.md.

                2. Now, code to posts/pre-rendering.md;

                3. Then, code to posts/ssg-ssr.md;

                - You might have noticed that each markdown file has a metadata section at the top containing title and date. This is called YAML Front Matter, which can be parsed using a library called [gray-matter](https://github.com/jonschlinkert/gray-matter).
                    1. Installing gray-matter:
                        ```npm install gray-matter```
            
            3. Creating the utility function to read the file system
                - Next, we’ll create a ***utility function for parsing data*** from the file system. With this utility function, we’d like to:

                    - Parse each markdown file and get title, date, and file name (which will be used as id for the post URL).
                    - List the data on the index page, sorted by date.
                
                1. Create a top-level directory called lib (created libraries - functions) in the root directory. Then, inside lib, create a file called posts.js, code;

            4. Using Static Generation (getStaticProps()):
                1. Add an import for getSortedPostsData and call it inside getStaticProps in pages/index.js.

                - By returning allPostsData inside the props object in getStaticProps, the blog posts will be passed to the Home component as a prop.

                2. Now you can access the blog posts in the Home component as a param.

                3. update the Home component to add another ```<section>``` tag with the data below the section with your self introduction. Don't forget to also change the props from () to ({ allPostsData });

    ![](./../../../images/3-next-js-pre-rendering-data-from-external.png)

    2. ## **Fetch External API**:
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

            export async function getSortedPostsData() {
            // Instead of the file system,
            // fetch post data from an external API endpoint
            const res = await fetch('..');
            return res.json();
            }

        - ***Note:*** Next.js polyfills fetch() on both the client and server. You don't need to import it.

    3. ## **Query Database**
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

            import someDatabaseSDK from 'someDatabaseSDK'

            const databaseClient = someDatabaseSDK.createClient(...)

            export async function getSortedPostsData() {
            // Instead of the file system,
            // fetch post data from a database
            return databaseClient.query('SELECT posts...')
            }

    - ## **Final Cons:**
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:
        
        - This is possible because getStaticProps ***only runs on the server-side.*** It will never run on the client-side. It won’t even be included in the JS bundle for the browser. That means ***you can write code such as direct database queries without them being sent to browsers.***

        - Because it’s meant to be run at build time, **you won’t be able to use data that’s only available during request time**, such as ***query parameters or HTTP headers***.

        - getStaticProps **can only be exported from a page.** You can’t export it from non-page files.
            - One of the reasons for this restriction is that React needs to have all the required data before the page is rendered.

<br>

***

<br>

- ### **Please, be welcome to check my profile:** :nerd_face::handshake:

<br>

<a href="https://github.com/DanScherr">
    <img src="./images/the-end-img.png" width="50%">
</a>