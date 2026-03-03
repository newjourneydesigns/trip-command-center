import {
  AppBar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import HotelIcon from '@mui/icons-material/Hotel'
import MapIcon from '@mui/icons-material/Map'
import ScheduleIcon from '@mui/icons-material/Schedule'

const summaryCards = [
  { label: 'Flights', icon: <FlightTakeoffIcon fontSize="large" />, value: '0 booked' },
  { label: 'Hotels', icon: <HotelIcon fontSize="large" />, value: '0 booked' },
  { label: 'Destinations', icon: <MapIcon fontSize="large" />, value: '0 planned' },
  { label: 'Itinerary', icon: <ScheduleIcon fontSize="large" />, value: '0 events' },
]

export default function TripDashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <FlightTakeoffIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div">
            Trip Command Center
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Manage your trips, bookings, and itineraries from one place.
        </Typography>

        <Grid container spacing={3}>
          {summaryCards.map(({ label, icon, value }) => (
            <Grid item xs={12} sm={6} md={3} key={label}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box color="primary.main" sx={{ mb: 1 }}>
                    {icon}
                  </Box>
                  <Typography variant="h6">{label}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
