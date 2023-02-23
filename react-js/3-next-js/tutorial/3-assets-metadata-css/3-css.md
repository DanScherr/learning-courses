# **Learning Courses:** :books::brain:

<br>

### This is the ***... tutorial*** of my learning with **Next.js directory**: :mortar_board::closed_book::robot:

<br>

# **SUMÁRIO:** :round_pushpin:

1. **[CSS Styling](#css-styling)**
    1. **[CSS Modules](#css-modules)**
        1. **[Layout Component shared between all pages](#layout-component-shared-between-all-pages)**
            1. [Adding CSS](#adding-css)
        1. **[Automatically Generates Unique Class Names](#automatically-generates-unique-class-names)**
    1. **[Global Styles](#global-styles)**
        1. **[Adding Global CSS](#adding-global-css)**
    1. **[CSS Utility Classes](#create-stylesutilsmodulecss)**
    1. **[Styling tips](#styling-tips)**
        1. **[Using clsx library to toggle classes](#using-clsx-library-to-toggle-classes)**
        1. **[Customizing PostCSS Config](#customizing-postcss-config)**
        1. **[Using Saas](#using-sass)**


<br>

1. # CSS Styling:
    Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

    - If you look at your file structure, you'll see a **folder called styles** with two CSS files: 
        1. a global stylesheet (```globals.css```)
        2. a CSS module (```Home.module.css```).
        - If your project doesn't have those files, you can download the starter code here:
            ```npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/assets-metadata-css-starter"```

    1. ## **CSS Modules:**
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

        - allow you to locally scope CSS at the component-level by automatically creating unique class names. 
        - This allows you to use the same CSS class name in different files without worrying about class name collisions.
        - In addition to CSS modules, you can style your Next.js application in a variety of ways, including:

            1. Sass which allows you to import .css and .scss files.
            2. PostCSS libraries like [Tailwind CSS](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss).
            3. CSS-in-JS libraries such as [styled-jsx](https://github.com/vercel/styled-jsx), [styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components), and [emotion](https://github.com/vercel/next.js/tree/canary/examples/with-emotion).
        
        1. ### **Layout Component shared between all pages:**
            Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

            1. Create a top-level directory called components.
            1. Inside components, create a file called layout.js with the following content:

                    export default function Layout({ children }) {
                        return <div>{children}</div>;
                    }

            2. Then, open pages/posts/first-post.js, add an import for the Layout component, and make it the outermost component;

            3. #### **Adding CSS**
                Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

                1. Now, let’s add some styles to the Layout component. To do so, we’ll use CSS Modules, which lets you import CSS files in a React component.

                2. Create a file called components/layout.module.css with the following content:

                        .container {
                            max-width: 36rem;
                            padding: 0 1rem;
                            margin: 3rem auto 6rem;
                        }
                
                - **Important:** To use CSS Modules, the CSS file name must end with .module.css.

                3. To use this container class inside components/layout.js, you need to:

                    1. Import the CSS file and assign a name to it, like styles;
                    1. Use styles.container as the className.

            4. If you go to http://localhost:3000/posts/first-post now, you should see that the text is now inside a centered container.
        
        - ### Automatically Generates Unique Class Names
            Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

            - If you take a look at the HTML in your browser’s devtools, you’ll notice that the div rendered by the Layout component has a class name that looks like layout_container__...:
            - This is what CSS Modules does: It automatically generates unique class names. As long as you use CSS Modules, you don’t have to worry about class name collisions.
            -Furthermore, Next.js’s code splitting feature works on CSS Modules as well. It ensures the minimal amount of CSS is loaded for each page. This results in smaller bundle sizes.

            - CSS Modules are extracted from the JavaScript bundles at build time and generate .css files that are loaded automatically by Next.js.

        
    2. ## **Global Styles**:
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

        - CSS Modules are useful for component-level styles.
        - To load global CSS to your application, create a file called pages/_app.js with the following content:

                export default function App({   Component, pageProps }) {
                    return <Component {...pageProps} />;
                }

        - The default export of _app.js is a top-level React component that **wraps all the pages in your application.** You can use this component to keep state when navigating between pages, or to add global styles
        
        - **Important:** You need to restart the development server when you add pages/_app.js.
        
        1. ### **Adding Global CSS:**
            Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

            - In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
            1. Create a top-level styles directory and a global.css file.
            2. Add the following CSS inside styles/global.css. This code resets some styles and changes the color of the a tag:

                    html,
                    body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
                        Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                    line-height: 1.6;
                    font-size: 18px;
                    }

                    * {
                    box-sizing: border-box;
                    }

                    a {
                    color: #0070f3;
                    text-decoration: none;
                    }

                    a:hover {
                    text-decoration: underline;
                    }

                    img {
                    max-width: 100%;
                    display: block;
                    }

            3. Finally, import the CSS file inside the pages/_app.js file you've created earlier on;

            4. Restart server
        
    3. ## **Create styles/utils.module.css**
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

        - Second, let’s create a set of CSS utility classes (for text styles) that can be re-used across multiple components.

        1. Add a new CSS file called styles/utils.module.css

        - You can reuse these utility classes throughout your application, and you may even use utility classes in your global.css file. Utility classes refer to an approach of writing CSS selectors rather than a method (e.g. global styles, CSS modules, Sass, etc). Learn more about [utility-first CSS](https://tailwindcss.com/docs/utility-first).

        2. Update components/layout.js importing it.
        3. Update pages/index.js

    4. ## **Styling tips:**
        Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

        1. ### **Using clsx library to toggle classes**
            Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

            - clsx is a simple library that lets you toggle class names easily. You can install it using npm install clsx or yarn add clsx.
            - [documentation](https://github.com/lukeed/clsx).

        2. ### **Customizing PostCSS Config**
            Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

            - Out of the box, with no configuration, Next.js compiles CSS using PostCSS.

            - To customize PostCSS config, you can create a top-level file called postcss.config.js. This is useful if you're using libraries like Tailwind CSS.

            - Here are the steps to add Tailwind CSS:
                1. First, install the packages:
                    ```npm install -D tailwindcss autoprefixer postcss```
                2. create a postcss.config.js:

                        // postcss.config.js
                        module.exports = {
                        plugins: {
                            tailwindcss: {},
                            autoprefixer: {},
                        },
                        };

                3. It's recommend configuring content sources by specifying the content option on tailwind.config.js:

                        // tailwind.config.js
                        module.exports = {
                        content: [
                            './pages/**/*.{js,ts,jsx,tsx}',
                            './components/**/*.{js,ts,jsx,tsx}',
                            // For the best performance and to avoid false positives,
                            // be as specific as possible with your content configuration.
                        ],
                        };

        3. ### **Using Sass**:
            Back to **[top](#learning-courses-booksbrain)**. :point_left::top:
            
            - Out of the box, Next.js allows you to import Sass using both the .scss and .sass extensions. You can use component-level Sass via CSS Modules and the .module.scss or .module.sass extension.

            - Before you can use Next.js' built-in Sass support, be sure to install sass:
                ```npm install -D sass```

<br>

***

<br>

- ### **Please, be welcome to check my profile:** :nerd_face::handshake:

<br>

<a href="https://github.com/DanScherr">
    <img src="./images/the-end-img.png" width="50%">
</a>