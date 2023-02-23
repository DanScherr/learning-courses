# **Learning Courses:** :books::brain:

<br>

### This is the ***Dynamic Routing Tutorial*** of my learning with **Next.js directory**: :mortar_board::closed_book::robot:

<br>

# **SUMÁRIO:** :round_pushpin:

<br>

1. **[Dynamic Routing](#dynamic-routing)**

<br>

# **Dynamic Routing:**
Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

- # What will be covered:
    - How to **statically generate pages** with dynamic routes using ***getStaticPaths***.
    - **How to write getStaticProps** to fetch the data for each blog post.
    - How to **render markdown** using ***remark***.
    - How to **pretty-print date strings**.
    - How to **link to a page with dynamic routes**.
    - Some ***useful information*** on dynamic routes.

1. # **Page Path Depends on External Data:**
    Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

    - Case where ***each page path depends on*** **external data**.

    - Next.js allows you to ***statically generate pages*** with ***paths that depend on external data***. This enables **dynamic URLs** in Next.js.

    ![](./../../images/6-dyn-routing-static-page-generation-diagram.png)

    1. ## **How to Statically Generate Pages with Dynamic Routes:**
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

        - We want each post to have the path /posts/<id>, where <id> is the name of the markdown file under the top-level posts directory.
        - Since we have ssg-ssr.md and pre-rendering.md, we’d like the paths to be /posts/ssg-ssr and /posts/pre-rendering.

        - ### **Overview of the Steps:**
            1. First, we’ll create a page called [id].js under pages/posts. Pages that begin with [ and end with ] are dynamic routes in Next.js.

            2. In pages/posts/[id].js, we’ll write code that will render a post page — just like other pages we’ve created.

                    import Layout from '../../components/layout';

                    export default function Post() {
                        return <Layout>...</Layout>;
                    }

            3. **Export an async function** called **getStaticPaths** from this page. 
                - In this function, we need to ***return a list of possible values for id***.

                        import Layout from '../../components/layout';

                        export default function Post() {
                            return <Layout>...</Layout>;
                        }

                        export async function getStaticPaths() {
                            // Return a list of possible value for id
                        }

            4. Finally, we need to **implement getStaticProps again** - this time, to fetch necessary data for the blog post with a given id. getStaticProps is given params, which contains id (because the file name is [id].js:

                    import Layout from '../../components/layout';

                    export default function Post() {
                        return <Layout>...</Layout>;
                    }

                    export async function getStaticPaths() {
                        // Return a list of possible value for id
                    }

                    export async function getStaticProps({ params }) {
                        // Fetch necessary data for the blog post using params.id
                    }

            ![](./../../images/6-dyn-routing-static-page-generation-summarized-picture.png)

        1. ### **Implementing getStaticPaths:**
            1. Create a file called ```[id].js``` inside the pages/posts directory.
            2. Also, remove first-post.js inside the pages/posts directory — we’ll no longer use this.
            3. Then, open lib/posts.js and add the following getAllPostIds function at the bottom.
                - **Important:** The returned list is not just an array of strings — it must be an array of objects that look like the comment above. Each object must have the params key and contain an object with the id key (because we’re using ```[id]``` in the file name). Otherwise, getStaticPaths will fail.
            4. Finally, we'll import the getAllPostIds function and use it inside getStaticPaths. 
                1. Open pages/posts/```[id]```.js 
                2. copy the following code above the exported Post component;
                - paths contains the array of known paths returned by getAllPostIds(), which include the params defined by pages/posts/[id].js. Learn more in the paths key documentation
                - Ignore fallback: false for now — we’ll explain that later.
            5. Implement getPostData in /lib/posts.js
            6. Implement code in /pages/posts/```[id].js``` to getStaticProps.
            7. Now, let's update the Post component to use postData. In pages/posts/[id].js replace the exported Post component with the following code:

        2. ### Render Markdown content:
            - To render markdown content, we’ll use the remark library. 
            
            1. Install it:
                ```npm install remark remark-html```

            2. Then, open lib/posts.js and add the following imports to the top of the file;

            3. And update the getPostData() function in the same file as follows to use remark;
                - ***Important:*** We added the async keyword to getPostData because we need to use await for remark. async/await allow you to fetch data asynchronously.

            4. That means we need to update getStaticProps in pages/posts/[id].js to use await when calling getPostData:

            5. Finally, update the Post component in pages/posts/[id].js to render contentHtml using dangerouslySetInnerHTML.

        3. ### **Polishing the Post Page:**
            1. **Adding title to the Post Page**:
                - In pages/posts/[id].js, let’s add the title tag using the post data. You'll need to add an import for next/head at the top of the file and add the title tag by updating the Post component:
            2. **Formatting the Date**:
                1. To format the date, we’ll use the date-fns library. First, install it:
                    ```npm install date-fns```
                2. Next, create a file called components/date.js and add the following Date component.
                3. Now, open pages/posts/[id].js, add an import for the Date component at the top of the file, and use it over {postData.date};
            3. **Adding CSS**:
                1. Finally, let’s add some CSS using the file styles/utils.module.css we added before. Open pages/posts/[id].js, then add an import for the CSS file, and replace the Post component with the following code;

        4. ### **Polishing the Index Page**:
            1. #### **Adding links to each post page using the Link component.**
                1. Open pages/index.js and add the following imports at the top of the file for Link and Date;
                2. Then, near the bottom of the Home component in the same file, replace the li tag with the following;
        
        5. ### **Dynamic Routes Details:**
            1. #### **Fetch External API or Query Database**:
                Check [on here.](https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details);
            2. #### Development vs. Production
                - **In development** (npm run dev or yarn dev), getStaticPaths runs ***on every request.***
                - **In production**, getStaticPaths runs ***at build time.***
            3. #### Fallback:
                -  Recall that we returned fallback: false from getStaticPaths. What does this mean?

                - If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.

                - If fallback is true, then the behavior of getStaticProps changes:

                - The paths returned from getStaticPaths will be rendered to HTML at build time.
                The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a “fallback” version of the page on the first request to such a path.
                In the background, Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.
                If fallback is blocking, then new paths will be server-side rendered with getStaticProps, and cached for future requests so it only happens once per path.

                - This is beyond the scope of our lessons, but you can learn more about fallback: true and fallback: 'blocking' in the fallback documentation.
            
            4. #### **Catch-all Routes**:
                - Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets. For example:

                    - pages/posts/[...id].js matches /posts/a, but also /posts/a/b, /posts/a/b/c and so on.

            5. ### **Router:**
                - If you want to access the Next.js router, you can do so by importing the [useRouter](https://nextjs.org/docs/api-reference/next/router#userouter) hook from next/router.

            6. #### **404 Pages:**
                - To create a custom 404 page, create pages/404.js with a Custom404() Component. This file is statically generated at build time.

            7. ### **More examples:**
                - **Check [it on.](https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details)**

<br>

***

<br>

- ### **Please, be welcome to check my profile:** :nerd_face::handshake:

<br>

<a href="https://github.com/DanScherr">
    <img src="./images/the-end-img.png" width="50%">
</a>