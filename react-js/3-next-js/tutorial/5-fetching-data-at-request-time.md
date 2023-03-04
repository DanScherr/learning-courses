# **Learning Courses:** :books::brain:

<br>

### This is the ***... tutorial*** of my learning with **Next.js directory**: :mortar_board::closed_book::robot:

<br>

# **SUMÁRIO:** :round_pushpin:

<br>

1. **[Fetching Data at Request Time](#fetching-data-at-request-time)**
    1. **[Using getServerSideProps](#using-getserversideprops)**
    1. **[SWR](#swr)**

<br>

# **Fetching Data at Request Time:**
Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

- If you need to fetch data at request time instead of at build time, you can try [Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering).

- To use **Server-side Rendering**, you need to export ***getServerSideProps*** instead of getStaticProps from your page.

1. # Using getServerSideProps:
    Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

        export async function getServerSideProps(context) {
                return {
                    props: {
                    // props for your component
                    },
                };
            }

    - Because getServerSideProps is called at request time, ***its parameter ```(context)``` contains request specific parameters.***

    - **You should** use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time. Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.

2. # **Client-side Rendering:**
    Back to **[top](#learning-courses-booksbrain)**. :point_left::top:

    1. ## **How it works:**
        1. Statically generate (pre-render) parts of the page that do not require external data.
        2. When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.

        - **Example:** 
            This approach works well for user dashboard pages Because a dashboard is a private, user-specific page, SEO is not relevant, and the page doesn’t need to be pre-rendered. The data is frequently updated, which requires request-time data fetching.

    2. ## **[SWR](https://swr.vercel.app/pt-BR):**
        - The team behind Next.js has created a **React hook** for data fetching called SWR. We highly recommend it ***if you’re fetching data on the client side.*** It handles caching, revalidation, focus tracking, refetching on interval, and more.

                import useSWR from 'swr';

                function Profile() {
                const { data, error } = useSWR('/api/user', fetch);

                if (error) return <div>failed to load</div>;
                if (!data) return <div>loading...</div>;
                return <div>hello {data.name}!</div>;
                }
        

<br>

***

<br>

- ### **Please, be welcome to check my profile:** :nerd_face::handshake:

<br>

<a href="https://github.com/DanScherr">
    <img src="./images/the-end-img.png" width="50%">
</a>