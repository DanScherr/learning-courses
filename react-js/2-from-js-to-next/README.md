# **Learning Courses:** :books::brain:

<br>

### This is the ***root directory*** of all my learning of **REACT.JS**: :mortar_board::closed_book::robot:

<br>

# **SUMÁRIO:** :round_pushpin:

<br>

1. [Intro](./1-intro/)

<br>

# **Intro:**

- ## **Design System (guide line):**
    - Muito utilizado em companhias que têm diversos microprodutos, nos quais podem reutilizar o design system, porém com tema diferente.
        - Código não muda, mas sim o tema.
    - Def: é uma biblioteca de components baseada em regras (tokens), que ajuda a criar produtos de maneira consistente. Assim, é possível criar diversos componentes com as mesmas propriedades.
    - Tudo que está relacionado sistemicamente para sua marca aparecer visualmente.
        - Uma dessas coisas é uma **biblioteca de Componentes**.
        - O **foco do Stitches** é na criadação dessa biblioteca de Componentes.

- ## **Tom de voz:**
    - É parte da definição da personalidade da marca e está na lista de considerações a serem feitas ao criar uma marca. 
    - Ele humaniza a marca, estabelece sua autoridade e apresenta ao público quem é e quais são os propósitos da marca, sendo fundamental para criar uma conexão com as pessoas.
    - É uma definição de uniformidade nas palavras, atitudes e valores de uma marca nos pontos de contato com o cliente.
    - É pela voz que a marca expressa sua personalidade e seus valores.
    -  É como a empresa comunica seus valores, sua identidade e seu posicionamento no mercado.

# Importing Next.js:

1. ```$ npm install react react-dom next```
    1. .package-lock.json (created)
    2. ./node_modules/ (created)

2. ### Things that **Next.js makes unecessary:**
    - Jumping back to the index_beforeNext.html file, you can delete the following code:
        - The **react and react-dom scripts**, since you’ve installed them with NPM.
        - The ```<html> and <body>``` tags because Next.js will create these you.
        - The code that interacts with app element and ReactDom.render() method.
        - The **Babel** script because Next.js has a compiler that transforms - JSX into valid JavaScript browsers can understand.
        - The ```<script type="text/jsx">``` tag.
        - The **React. part** of the **React**.useState(0) function 

3. ### **Three more changes from index_beforeNext.html you need to do to fully transition to a Next.js app:**
    - Move the index.js file to a new folder called pages (more on this later).
    - Add default export to your main React component to help Next.js distinguish which component to render as the main component of this page.
    - Add a script to your package.json file to run the Next.js development server while you develop. 

            {
            "scripts": { \ 
                "dev": "next dev"
            }

4. Running the development server:
    1. ```$ npm run dev```

# **Creating a Next.js app:**

- ## **How it works:**

    - ### The **environment** where your code runs: **Development vs. Production**.
        You can think of environments as the context in which your code is running.

        <br>

        - **Development:** During development, you’re building and running the application on your local machine.
            - **In the development stage**, Next.js optimizes for the developer and their experience building the application. It comes with features that aim to improve the Developer Experience such the TypeScript and ESLint integration, Fast Refresh, and more.

        
        <br>


        - **Going to production:** process of making your application ready to be deployed and consumed by users.
            - **In the production stage**, Next.js optimizes for the end-users, and their experience using the application. It aims to transform the code to make it performant and accessible.


        <br>


        - Since each environment has different considerations and goals, there is a lot that needs to be done to move an application from development to production. For instance, the application code needs to be **compiled**, **bundled**, **minified**, and **code split**.

            - Next.js handles much of these code transformations and underlying infrastructure to make it easier for your application to go to production.

            - This is made possible because Next.js has a **compiler written in Rust**, a low-level programming language, and SWC, a platform that can be used for compilation, minification, bundling, and more.

            <br>

            1. **Compiled**: Compiling refers to the process of taking code in one language and outputting it in another language or another version of that language.
                - Developers write code in languages that are more developer-friendly such as JSX, TypeScript, and modern versions of JavaScript. While these languages improve the efficiency and confidence of developers, they need to be compiled into JavaScript before browsers can understand them.
                - In Next.js, **compilation happens** during the development stage as you edit your code, and as part of the build step to prepare your application for production.

            
            <br>

            2. **Minifying:** Minification is the process of removing unnecessary code formatting and comments without changing the code’s functionality. The goal is to improve the application’s performance by decreasing file sizes.
                - In Next.js, JavaScript and CSS files are automatically minified for production.

            <br>

            3. **Bundling:** is the process of resolving the web of dependencies and merging (or ‘packaging’) the files (or modules) into optimized bundles for the browser, with the goal of reducing the number of requests for files when a user visits a web page.


            <br>

            4. **Code spliting**: Developers usually split their applications into multiple pages that can be accessed from different URLs. Each of these pages becomes a unique entry point into the application.

                - Code-splitting is the process of splitting the application’s bundle into smaller chunks required by each entry point. The goal is to improve the application's initial load time by only loading the code required to run that page.

                - Next.js has built-in support for code splitting. Each file inside your ```pages/``` directory will be automatically code split into its own JavaScript bundle during the build step.

                - Going further:
                    - Any code shared between pages is also split into another bundle to avoid re-downloading the same code on further navigation.
                    - After the initial page load, Next.js can start pre-loading the code of other pages users are likely to navigate to.
                    - Dynamic imports are another way to manually split what code is initially loaded.
            
            <br>

    - ### **When** your code runs: **Build Time vs. Runtime**
        - **Build Time:** is the name given to a series of steps that prepare your application code for production.
            - When you build your application, Next.js will transform your code into **production-optimized files** ready to be deployed to servers and consumed by users. **These files include:**

                - HTML files for statically generated pages
                - JavaScript code for rendering pages on the server
                - JavaScript code for making pages interactive on the client
                - CSS files


        <br>

        - **Run Time:** refers to the period of time when your application runs in **response to a user’s request**, after your application has been built and deployed.

    <br>

    - ### **Where** rendering happens: **Client vs. Server**
        In the context of web applications.

        <br>

        - **Client:** refers to the **browser** on a user’s device that ***sends a request to a server*** for your application code. It then ***turns the response it receives*** from the server ***into an interface*** the user can interact with.

        <br>

        - **Server:** refers to the **computer in a data centre** that ***stores your application code***, ***receives requests*** from a client, ***does some computation***, and ***sends back an appropriate response.***

        <br>

        - **Concepts:**

            <br>

            - **Rendering:** is the process to convert the code you write in React into the HTML representation of your UI.
                - Rendering can take place ***on the server*** or ***on the client***. It can happen either ***ahead of time*** at build time, or ***on every request at runtime***.

                - With Next.js, three types of rendering methods are available: **Server-Side Rendering**, **Static Site Generation**, and **Client-Side Rendering**.

                    - **Pre-Rendering:** Server-Side Rendering and Static Site Generation are also referred to as Pre-Rendering because the fetching of external data and transformation of React components into HTML happens before the result is sent to the client.

                    - **Client-Side Rendering vs. Pre-Rendering:** In a standard React application, the browser receives an empty HTML shell from the server along with the JavaScript instructions to construct the UI. This is called client-side rendering because **the initial rendering work happens on the user's device.**


                            Note: You can opt to use client-side rendering for specific components in your Next.js application by choosing to fetch data with React’s useEffect() or a data fetching hook such as useSWR.

                        - In contrast, Next.js **pre-renders every page by default.** Pre-rendering means the HTML is generated in advance, on a server, instead of having it all done by JavaScript on the user's device.

                        - In practice, this means that for a fully client-side rendered app, the user will see a blank page while the rendering work is being done. Compared to a pre-rendered app, where the user will see the constructed HTML.
                
                - **Server-Side Rendering:** With server-side rendering, the HTML of the page is ***generated on a server for each request.*** 
                    - The generated HTML, JSON data, and JavaScript instructions to make the page interactive are then sent to the client.

                    - On the client, the HTML is used to show a fast non-interactive page, while React uses the JSON data and JavaScript instructions to make components interactive (for example, attaching event handlers to a button). This process is called hydration.

                    - In Next.js, you can opt to server-side render pages by using getServerSideProps.

                - **Static Site Generation**: With Static Site Generation, the HTML is generated on the server, but unlike server-side rendering, there is no server at runtime (response from an user's request). Instead, content is generated once, at build time, when the application is deployed, and the HTML is stored in a CDN and re-used for each request.

                    - In Next.js, you can opt to statically generate pages by using getStaticProps.

                            Note: You can use Incremental Static Regeneration to create or update static pages after you’ve built your site. This means you do not have to rebuild your entire site if your data changes.

                <br>

    - ### **What is the Network?**
        It’s helpful to know where your application code is stored and run once it’s deployed to the network. You can think of the network as linked computers (or servers) capable of sharing resources. In the case of a Next.js application, your application code can be **distributed to origin servers**, **Content Delivery Networks (CDNs)**, and **the Edge.** Let’s see what each of these are:

        - **Origin Servers**: refers to the **main computer** that stores and runs the original version of your application code.
                
                We use the term origin to distinguish this server from the other places application code can be distributed to, such as CDN servers and Edge servers.

            - When an origin server receives a request, it does some computation before sending a response. The result of this computation work can be moved to a CDN (Content Delivery Network).

        - **Content Delivery Network:** CDNs store static content (such as HTML and image files) in multiple locations around the world and are placed between the client and the origin server. When a new request comes in, the closest CDN location to the user can respond with the cached result.

            - This reduces the load on the origin because the computation doesn’t have to happen on each request. It also makes it faster for the user because the response comes from a location geographically closer to them.

                    In Next.js, since pre-rendering can be done ahead of time, CDNs are well suited to store the static result of the work - making content delivery faster.

        - **The Edge**: The Edge is a generalized concept for the fringe (or edge) of the network, closest to the user. CDNs could be considered part of "the Edge" because they store static content at the fringe (edge) of the network.

            - Similar to CDNs, Edge servers are distributed to multiple locations around the world. But unlike CDNs, which store static content, some Edge servers can run small snippets of code.

            - This means both caching and code execution can be done at the Edge closer to the user.

            - By moving some work that was traditionally done client-side or server-side to the Edge, you can make your application more performant because it reduces the amount of code sent to the client, and part of the user's request does not have to go all the way back to the origin server - thus reducing latency. See Edge examples with Next.js here.

                    In Next.js, you can run code at the Edge with Middleware, and soon with React Server Components.

    



<br>

***

<br>

- ### **Please, be welcome to check my profile:** :nerd_face::handshake:

<br>

<a href="https://github.com/DanScherr">
    <img src="./images/the-end-img.png" width="50%">
</a>