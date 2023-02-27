import Head from 'next/head'
import { createStitches } from '@stitches/react';
import { violet, slate } from '@radix-ui/colors'
import React from 'react';

/* const {css} = createStitches({
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
}) */

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

/* export default function Home() {
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
} */

const {css} = createStitches({
  theme: {
    colors: {
      ...slate,
      ...violet,
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
  utils: {
    paddingX: value => ({
      paddingLeft: value,
      paddingRight: value,
    })
  }
})

const body = css({
  padding: 40,
  background: '$violet1',
})

const button = css({
  appearance: 'none',
  border: 'none',
  borderRadius: '$round',
  backgroundColor: 'transparent',
  paddingX: '$2',


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
        color: '$slate12',
        backgroundColor: '$slate3',
        '&:hover': { // nesting
          backgroundColor: '$slate4',
        },
      },
      purple: {
        color: '$violet12',
        backgroundColor: "$violet3",
        '&:hover': { // nesting
          backgroundColor: "$violet4",
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
        borderColor: '$slate7',
        '&:hover': { // nesting
          borderColor: "$slate8",
        },
      },
    },
    {
      variant: "purple",
      outlined: true,
      css: {
        borderColor: '$violet7',
        '&:hover': {
          borderColor: '$violet8'
        },
      },
    }
  ],


  defaultVariants: { // default value
    variant: 'gray',
    size: '1',
  }
})


const overlay = css ({ // fundo cinza pegando todo background
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgb(0, 0, 0, 0.2)',
})

const content = css({
  borderRadius: '$2',
  backgroundColor: 'white',
  padding: '$4',
  width: 400,
  left: '50%',
  top: '50%',
  transform: 'translate(4%, 4%)',
})


export default function Home() {
  const [open, setOpen] = React.useState(false) //saber se o dialog está aberto e poder abrir ele

  return (
    <div className={(body())}>
      <Head>
        <title>Stitches and Radix App</title>
      </Head>

      <div>
        <button onClick={() => setOpen(true)} className={button({variant: 'purple'})}>
          Open profile
        </button>
        {open && (
          <div>
            <div className={overlay()} />
          <div className={content()}>
            <h3>Edit Profile</h3>
            <p>Here you can edit your profile.</p>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Daniel'/>
            <button className={button({variant: 'purple'})}>Save changes</button>
            <button className={button({variant: 'gray'})} onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}