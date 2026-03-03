import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import TripDashboard from './pages/TripDashboard.jsx'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1565c0',
    },
    secondary: {
      main: '#f57c00',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TripDashboard />
    </ThemeProvider>
  )
}
