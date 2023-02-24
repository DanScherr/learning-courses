# **Learning Courses:** :books::brain:

<br>

### This is the ***Deploy your app tutorial*** of my learning with **Next.js directory**: :mortar_board::closed_book::robot:

<br>

# **SUMÁRIO:** :round_pushpin:

<br>

1. [Intro](./1-intro/)

<br>

# **Intro:**
Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

1. ## **Push to GitHub:**
    1. If you haven’t initialized the git repository locally for your Next.js app, do so now:

        ```$ git remote add origin https://github.com/<username>/nextjs-blog.git```

    2. Push the Next.js app to your GitHub repository.

        ```$ git push -u origin main```

2. ## **Deploy to Vercel:**
    - Vercel is a serverless platform for static and hybrid applications built to integrate with your headless content, commerce, or database. We make it easy for frontend teams to develop, preview, and ship delightful user experiences, where performance is the default. You can start using it for free — no credit card required.

    1. Follow [these steps](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy) to continue..

3. ## **Other Hosting Options:**
    - If you’ve followed the instructions so far, your package.json should have the following build and start scripts:

            {
                "scripts": {
                    "dev": "next",
                    "build": "next build",
                    "start": "next start"
                }
            }

    1. In your own hosting provider, run the build script once, which builds the production application in the .next folder.

        ```$ npm run build```

    2. After building, the start script starts a Node.js server that supports hybrid pages, serving both statically generated and server-side rendered pages, and API Routes.

        ```$ npm run start```

    3. Tip: You can customize the start script in package.json to accept a PORT parameter by updating it as: "start": "next start -p $PORT".

<br>

***

<br>

- ### **Please, be welcome to check my profile:** :nerd_face::handshake:

<br>

<a href="https://github.com/DanScherr">
    <img src="./images/the-end-img.png" width="50%">
</a>