import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
    colors:{
        gray:{
            "900": "#181823",
            "800": "#1f2039",
            "700": "#363646",
            "600": "#4b4d63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "200": "#b3b5c6",
            "100": "#01020c",
            "50": "#eeeef2",
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    styles: {
        global:{
            body:{
                bg:'gray.900',
                color: 'gray.50'
            }
        }
    }
})
