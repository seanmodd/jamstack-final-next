import { createTheme } from '@material-ui/core/styles'
import '@fontsource/poppins'
import Poppins from '@fontsource/poppins'

const green = '#8344ff'
const darkGreen = '#6000b5'
const tan = '#FECEA8'
const lightRed = '#FF847C'
const red = '#E84A5F'
const offBlack = '#2A363B'
const grey = '#747474'

const material_theme = createTheme({
  palette: {
    primary: {
      main: green,
    },
    secondary: {
      main: darkGreen,
    },
    common: {
      tan,
      lightRed,
      red,
      offBlack,
    },
  },
  typography: {
    h1: {
      fontSize: '4.5rem',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 700,
      color: green,
    },
    h2: {
      fontFamily: 'Poppins',
      fontSize: '3rem',
      fontWeight: 500,
      color: '#fff',
    },
    h3: {
      fontFamily: 'Poppins',
      fontSize: '2rem',
      fontWeight: 300,
      color: green,
    },
    h4: {
      fontFamily: 'Poppins',
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: '3rem',
      color: '#fff',
    },
    h5: {
      fontFamily: 'Poppins',
      fontSize: '2rem',
      fontWeight: 700,
      fontStyle: 'italic',
      color: '#fff',
    },
    body1: {
      fontFamily: 'Poppins',
      fontSize: '1.5rem',
      color: grey,
    },
    body2: {
      fontFamily: 'Poppins',
      fontSize: '1.5rem',
      color: '#fff',
    },
  },
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: darkGreen,
      },
      label: {
        fontFamily: 'Poppins',
        fontSize: '1.5rem',
        color: '#fff',
        fontWeight: 400,
      },
    },
  },
})

export default material_theme
