import { useState } from 'react'
import { Grid } from '@mui/material';
import Card from './Components/Card'
function App() {

  return (
    <Grid container spacing={2} gap={2}>
      <Grid item xs={12} display="flex" justifyContent="center">
          <Card />
      </Grid>
      <Grid  gap={2} item xs={12} flexDirection="row" display="flex" justifyContent="center">
          <Card />
          <Card />
      </Grid>
    </Grid>
  )
}

export default App
