import { css } from "./theme"

export const CheckboxRoot = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderColor: 'White',
    borderRadius: '$round',
    boxShadow: '0 2 10 var(--blackA7)',

    variants: {
        variant: {
            light: {
                backgroundColor: '$slateDark1',
                '&:hover': {
                    borderColor: '$cyan11',
                },      
                '&focus': {
                    boxShadow: '(0, 0, 0, 2, black)',
                },
            },
            dark: {
                backgroundColor: '$slateDark1',
                '&:hover': {
                    borderColor: '$tomato11',
                },      
                '&focus': {
                    boxShadow: '(0, 0, 0, 2, black)',
                },
            },
        },
    },
    
})

export const CheckboxIndicator = css({
    color: '$tomato7'
})
