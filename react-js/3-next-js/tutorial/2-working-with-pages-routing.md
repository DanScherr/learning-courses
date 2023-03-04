# **Learning Courses:** :books::brain:

<br>

### This is the ***Working and Routing Pages Tutorial*** of my learning with **Next.js directory**: :mortar_board::closed_book::robot:

<br>

# **SUMÁRIO:** :round_pushpin:

<br>

1. **[Navigate between pages](./1-intro/)**
    - **[Pages in Next.js: Theory](#pages-in-nextjs)**
    1. **[Create new page](#create-new-page)**
    1. **[Link Component: Theory](#link-component)**
    1. **[Link on Page: Using it]()**
    1. **[Client Side Navigation](#client-side-navigation)**
        - [Code Splitting and Pre-Fetching](#code-splitting-and-prefetching)


<br>

# **Navigate between pages:**
Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

- Create a new page using the [integrated file system routing](https://nextjs.org/docs/routing/introduction).
- Learn how to use the [Link component](https://nextjs.org/docs/api-reference/next/link) to enable client-side navigation between pages.
- Learn about built-in support for code splitting and prefetching.

- ## **Pages in Next.js:**
    Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

    In Next.js, a page is a React Component exported from a file in the pages directory.

    Pages are associated with a route based on their file name. For example, in development:

    - pages/index.js is associated with the / route.
    - pages/posts/first-post.js is associated with the /posts/first-post route.

    We already have the pages/index.js file, so let’s create pages/posts/first-post.js to see how it works.

1. ## **Create new page:**
    Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

    1. Create a file called first-post.js inside the posts directory with the following content:

            export default function FirstPost() {
                return <h1>First Post</h1>;
                }

    - The component can have any name, but **you must export** it **as a default export.**

    - Now, make sure that the development server is running and visit http://localhost:3000/posts/first-post. You should see the page created.


2. ## **Link Component**:
    Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

    When linking between pages on websites, you use the ```<a>``` HTML tag.

    In Next.js, you can use the Link Component next/link to link between pages in your application. ```<Link>``` allows you to do client-side navigation and accepts props that give you better control over the navigation behavior.

3. ## **Using <Link>**:
    Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

    Import the Link class on index.ts (where you want to create the link):
        ```import Link from 'next/link';```
    
    - Make the change on the coding in index.js

4. ## **Client Side Navigation**:
    Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

    - The Link component enables client-side navigation between two pages in the same Next.js app.

    - Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.

    1. You may check-it by changing the background color and moving from onde page into another. You'll see that the background color persists between page transitions.
        - This shows that the browser does not load the full page and client-side navigation is working.

        - If you’ve used ```<a href="…"> ```instead of ```<Link href="…">``` and did this, the background color will be cleared on link clicks because the browser does a full refresh.`
    
    - ### **Code splitting and prefetching**:
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

        Next.js does **code splitting automatically**, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

        This ensures that the homepage **loads quickly** even if you have hundreds of pages.

        Only loading the code for the page you request also means that **pages become isolated**. If a certain page throws an error, the **rest of the application would still work**.

        Furthermore, in a production build of Next.js, **whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background.** By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!

<br>

***

<br>

- ### **Please, be welcome to check my profile:** :nerd_face::handshake:

<br>

<a href="https://github.com/DanScherr">
    <img src="./images/the-end-img.png" width="50%">
</a>