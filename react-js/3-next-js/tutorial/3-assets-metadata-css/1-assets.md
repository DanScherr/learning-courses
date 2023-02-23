# **Learning Courses:** :books::brain:

<br>

### This is the ***... tutorial*** of my learning with **Next.js directory**: :mortar_board::closed_book::robot:

<br>

# **SUMÁRIO:** :round_pushpin:

<br>

1. **[Static Assets](#assets)**
    1. **[Save Picture](#save-picture)**
    1. **[Image Component and Image Optimization: Theory](#use-image-component-and-image-optimization)**
    1. **[Image Component: Using it](#using-an-image-component)**

<br>

1. ## **Assets:**
    Back to **[top](#learning-courses-booksbrain)**. :point_left::top:
    
    Next.js can serve static assets, like images, under the top-level **public directory**. Files inside public can be referenced from the root of the application similar to pages.

    The public directory is also useful for robots.txt, Google Site Verification, and any other static assets. Check out the documentation for [Static File Serving](https://nextjs.org/docs/basic-features/static-file-serving) to learn more.

    1. ## **Save Picture:**
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

        1. Create an images directory inside of the public directory.
        1. Save the picture as profile.jpg in the public/images directory.
        1. The image size can be around 400px by 400px.
        1. You may remove the unused SVG logo file directly under the public directory.
    
    2. ### **Use Image Component and Image Optimization:**
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

        - **Image Component** Handles for you:
            - Ensuring your image is responsive on different screen sizes
            - Optimizing your images with a third-party tool or library
            - Only loading images when they enter the viewport
        - Next.js also has support for **Image Optimization** by default. 
            - **This allows for resizing, optimizing, and serving images in modern formats** like WebP when the browser supports it. 
            - This avoids shipping large images to devices with a smaller viewport.
            - It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.
            - Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized.
    
    3. ### **Using an Image Component:**
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

        1. Update components/layout.module.css;

<br>

***

<br>

- ### **Please, be welcome to check my profile:** :nerd_face::handshake:

<br>

<a href="https://github.com/DanScherr">
    <img src="./images/the-end-img.png" width="50%">
</a>