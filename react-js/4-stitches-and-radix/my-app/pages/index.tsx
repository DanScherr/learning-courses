import Head from 'next/head'
import { createStitches } from '@stitches/react';

const {css} = createStitches({
  theme: {
    colors: {
      baseGray: 'gainsboro',
      darkGray: 'lightgray',
      basePurple: 'blueViolet',
      darkPurple: 'darkViolet ',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
      7: '35px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
      7: '35px',
    },
    fontSizes: {
      1: '13px',
      2: '15px',
    },
    radii: {
      round: '9999px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
    },
  },
})

const body = css({padding: 40})

const button = css({
  appearance: 'none',
  border: 'none',
  borderRadius: 9999,
  background: 'transparent',

  '&:hover': { // nesting
    backgroundColor: 'LightGray',
  },

  variants: {
    size: {
      1: {
        height: '$5',
        fontSize: '$1',
      },
      2: {
        height: '$7',
        fontSize: '$2',
      },
    },

    variant: {
      gray: {
        background: '$baseGray',
        '&:hover': { // nesting
          backgroundColor: '$baseGray',
        },
      },
      purple: {
        backgroundColor: "$basePurple",
        '&:hover': { // nesting
          backgroundColor: "$darkPurple",
        },
      },
    },
    outlined: {
      true: {
        border: '1px solid',
        background: 'transparent',
      }
    }
  },

  compoundVariants: [
    { // combining variants
      variant: "gray",
      outlined: true,
      css: {
        borderColor: '$darkGray',
      },
    },
    {
      variant: "purple",
      outlined: true,
      css: {
        borderColor: '$darkPurple',
        '&:hover': {
          color: 'White',
        },
      },
    }
  ],


  defaultVariants: { // default value
    variant: 'gray',
    size: '1',
  }
})

/* import { css } from '@stitches/react';

const body = css({padding: 40})

const button = css({
  appearance: 'none',
  border: 'none',
  borderRadius: 9999,
  background: 'transparent',

  '&:hover': { // nesting
    backgroundColor: 'LightGray',
  },

  variants: {
    size: {
      1: {
        height: 25,
        fontSize: 13,
      },
      2: {
        height: 35,
        fontSize: 15,
      },
    },

    variant: {
      gray: {
        background: 'Gainsboro',
        '&:hover': { // nesting
          backgroundColor: 'LightGray',
        },
      },
      purple: {
        backgroundColor: 'BlueViolet',
        '&:hover': { // nesting
          backgroundColor: 'DarkViolet',
        },
      },
    },
    outlined: {
      true: {
        border: '1px solid',
        background: 'transparent',
      }
    }
  },

  compoundVariants: [
    { // combining variants
      variant: "gray",
      outlined: true,
      css: {
        borderColor: 'DarkGray',
      },
    },
    {
      variant: "purple",
      outlined: true,
      css: {
        borderColor: 'DarkViolet',
        '&:hover': {
          color: 'White',
        },
      },
    }
  ],


  defaultVariants: { // default value
    variant: 'gray',
    size: '1',
  }
}) */

export default function Home() {
  return (
    <div className={(body())}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <div>
        <h1>Hello there.</h1>
        <br></br>
        <button className={button({variant: "gray"})}>Botão</button>
        <button className={button({variant: "purple"})}>Botão2</button>
        <button className={button()}>Botão deffault</button>
        <button className={button({outlined: true})}>Botão outlined default</button>
        <button className={button({variant: "purple", outlined: true, size: '2'})}>Botão outlined purple</button>
        <button className={button({
          size: {
            '@initial': '1',
            '@media (min-width: 300px)': '2'
          }
        })}>Responsive Button</button>
      </div>

    </div>
  )
}
