# **Learning Courses:** :books::brain:

<br>

### This is the ***... tutorial*** of my learning with **Next.js directory**: :mortar_board::closed_book::robot:

<br>

# **SUMÁRIO:** :round_pushpin:

<br>

1. **[Assets](./1-assets.md)**
1. **[Metadata - Customizing head html tag](#metadata)**
    1. **[Adding head title](#adding-head-to-first-postjs))**
    1. **[Third Party JavaScript](#third-party-javascript)**
1. **[CSS](./3-css.md)**

<br>


1. # **Metadata:**
    Back to **[top](#learning-courses-booksbrain)**. :point_left::top:
    

    1. ## **Adding Head to first-post.js:**
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

        We haven't added a ```<title>``` to our /posts/first-post route. Let's add one.

        1. Open the pages/posts/first-post.js file and add an import for Head from next/head at the beginning of the file.

        2. Then, update the exported FirstPost component to include the Head component. For now, we‘ll add just the title tag.

    2. ## **Third party javascript:**
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

        - refers to any scripts that are added from a third-party source. 
        Usually, third-party scripts are included in order to introduce newer functionality into a site that does not need to be written from scratch, such as analytics, ads, and customer support widgets.

        1. **Adding Third-Party JavaScript:**
            - scripts that need to load and execute as soon as possible are usually added within the ```<head>``` of a page. Using a regular HTML ```<script>``` element, an external script would be added as follows:

                    <Head>
                    <title>First Post</title>
                    <script src="https://connect.facebook.net/en_US/sdk.js" />
                    </Head>
            
            - Using the Script Component:
                - next/script is an extension of the HTML ```<script>``` element and optimizes when additional scripts are fetched and executed.

                1. ```import Script from 'next/script';``` in first-post;

                2. code script on first-post;

                3. Notice that a few additional properties have been defined in the Script component:

                    - ```strategy``` controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
                    - ```onLoad``` is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly

                
<br>

***

<br>

- ### **Please, be welcome to check my profile:** :nerd_face::handshake:

<br>

<a href="https://github.com/DanScherr">
    <img src="./images/the-end-img.png" width="50%">
</a>