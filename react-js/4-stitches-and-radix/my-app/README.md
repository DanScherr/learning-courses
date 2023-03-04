# **Learning Courses:** :books::brain:

<br>

### This is the ***root directory*** of all my learning of **REACT.JS**: :mortar_board::closed_book::robot:

<br>

# **SUMÁRIO:** :round_pushpin:

<br>

1. **[STITCHES](#stitches)**
    1. **[Create Next.js app](#create-nextjs-app)**
    1. **[Install and configure Stitches](#install-and-configure-stitches)**
    1. **[Usint it](#using-it)**
        1. **[Using CSS](#using-css)**
        1. **[Creating Variants](#creating-variants)**
        1. **[Combining Variants](#combining-variants)**
        1. **[Responsive Variants](#responsive-variant)**
        1. **[Create and Define Theme](#create-and-define-theme-in-the-instance-of-stitches)**

1. **[RADIX](#radix)**
    1. **[Working with Color Sistems](#working-with-color-system)**
    1. **[Creating a Dialog Element](#creating-a-dialog-element)**
        1. **[Elemento Coringa](#elemento-coringa)**
        1. **[Making it accessible for people with disabilities](#making-it-accessible-for-people-with-disabilities)**

<br>

***

<br>

# **STITCHES:**
**BACK TO [THE TOP](#learning-courses-booksbrain)** :point_left::top:

- # **Create Next.js app:**
    **BACK TO [THE TOP](#learning-courses-booksbrain)** :point_left::top:
    1. If not, install yarn:

        ```$ npm install --global yarn```

    2. Create Next app:
        
        ```$ yarn create next-app```

    3. Run app:
        1. Enter app directory
            
            ```$ cd {app-directory}```

        2. Run dev
            
            ```$ yarn dev```

- # **[Install and Configure Stitches:](https://stitches.dev/docs/installation)**
    **BACK TO [THE TOP](#learning-courses-booksbrain)** :point_left::top:

    1. ## **With npm:**
        ```npm install @stitches/react```

    2. ## **With yarn:**
        ```yarn add @stitches/react```


- # **Using it:**
    **BACK TO [THE TOP](#learning-courses-booksbrain)** :point_left::top:

    1. ## **Using css:**
        **BACK TO [THE TOP](#learning-courses-booksbrain)** :point_left::top:

        1. ### Import:
            ```import { css } from '@stitches/react';```
        
        2. ### Using:
            ![](./../../images/4-1-stylying-with-css.png)

            ![](./../../images/4-1-stylying-with-css-web-result.png)

    2. ## **Creating Variants:**
        **BACK TO [THE TOP](#learning-courses-booksbrain)** :point_left::top:

        1. ### **Implementing it:**
            ![](./../../images/4-1-stylying-with-css-creating-variant.png)

            1. #### **Visualizing in browser:**
                ![](./../../images/4-1-stylying-with-css-creating-variant.png)

        2. ### **Default:**
            ![](./../../images/4-1-stylying-with-css-creating-variant-default.png)

            1. #### **Visualizing in browser:**
                ![](./../../images/4-1-stylying-with-css-creating-variant-default-result.png)

        
    3. ## **Combining Variants:**
        **BACK TO [THE TOP](#learning-courses-booksbrain)** :point_left::top:

        1. ### Creating:
            ![](./../../images/4-1-stylying-with-css-creating-compound-variant.png)

            1. ### **Visualizing in browser:**
                ![](./../../images/4-1-stylying-with-css-creating-compound-variant-result.png)

    4. ## **Responsive Variant:**
        **BACK TO [THE TOP](#learning-courses-booksbrain)** :point_left::top:

        1. ### Creating:
            ![](./../../images/4-1-stylying-with-css-creating-responsive-variant.png)

            1. #### **Visualizing in browser:**
                ![](./../../images/4-1-stylying-with-css-creating-responsive-variant-result-1.png)
                ![](./../../images/4-1-stylying-with-css-creating-responsive-variant-result-2.png)

    5. ## **[Create and Define Theme](https://stitches.dev/docs/tokens) in the instance of Stitches:**
        **BACK TO [THE TOP](#learning-courses-booksbrain)** :point_left::top:

        1. ### **Import:**
            ```import { createStitches } from '@stitches/react';```

        2. ### **Create:**
            ![](./../../images/4-1-stylying-with-css-creating-theme.png)

        3. ### **Implement it:**
            ![](./../../images/4-1-stylying-with-css-creating-theme-implementing-it.png)

        - Uso de variáveis CSS (o que é bom!)
        - Uso dos tokens da documentação.

<br>

***

<br>

# **RADIX:**

1. # **Working with [color system](https://www.radix-ui.com/colors):**
    **BACK TO [THE TOP](#learning-courses-booksbrain)** :point_left::top:
    1. ## **Installing it:**

        ```yarn add @radix-ui/colors```

    2. ## **Importing it:**
        
        ```import { violet, slate } from '@radix-ui/colors'```

        - we'll get the colors inside the {}

        - if we printed the color (console.log(violet)):
            - we would get a scale from 1 to 12 and in each token there's a value of a color.
            
            ![](./../../images/5-1-radix-color-console-log-violet.png)

2. # **Creating a Dialog Element:**
    **BACK TO [THE TOP](#learning-courses-booksbrain)** :point_left::top:

    1. We'll use it in our created Stitches theme (css):

        ![](./../../images/5-1-radix-color-using-in-theme.png)

    2. We'll reconfigure our tokens in our constants:
        - We have to use the correct color number [in the right place](https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale):

            ![](./../../images/5-1-radix-color-using-in-theme-configuring-it.png)


    3. ## **Elemento Coringa:**
        **BACK TO [THE TOP](#learning-courses-booksbrain)** :point_left::top:

        - we instantiate an empty css object

            ```const box = css({}) // vazio para ser acessado no código```

        - And then we can use it in our code as we wish:
            ![](./../../images/5-1-radix-elemento-curinga.png)

        - We can also use inheritance to create a css style cascade:
            ![](./../../images/5-1-radix-elemento-curinga-inheritance.png)
            
            ![](./../../images/5-1-radix-elemento-curinga-inheritance-2.png)

    4. ## **Making it accessible for people with disabilities:**
        **BACK TO [THE TOP](#learning-courses-booksbrain)** :point_left::top:

        1. Check specifications [on documentation](https://www.radix-ui.com/docs/primitives/components/dialog):
            1. Install:

                ```npm install @radix-ui/react-dialog```

            2. Implement Anatomy:
                - It's no longer necessary the React.useState

                ![](./../../images/5-1-radix-accessibility.png)

        - ### **For more UI Components, [check in here.](https://www.radix-ui.com/docs/primitives/overview/introduction)**



<br><br>

***
***

<br><br>

- ### **Please, be welcome to check my profile:** :nerd_face::handshake:

<br>

<a href="https://github.com/DanScherr">
    <img src="./images/the-end-img.png" width="50%">
</a>