import { createStitches } from "@stitches/react";
import { violet, slateDark, tomato, cyan } from '@radix-ui/colors';

export const {css} = createStitches({
    theme: {
        colors: {
          ...slateDark,
          ...violet,
          ...tomato,
          ...cyan,
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
        }),
        margingX: value => ({
          paddingLeft: value,
          paddingRight: value,
        })
    }
})

