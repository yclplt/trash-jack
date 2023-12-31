import React, { useEffect, useState } from 'react'
import { Grid, Snackbar } from '@mui/material';
import Card from './Components/Card'
import StrategyData from './Data/strategyData.js';
import MessagesData from './Data/MessagesData';

function App() {
  const [card1, setCard1] = React.useState(null);
  const [card2, setCard2] = React.useState(null);
  const [dealer, setDealer] = React.useState(null);
  const [showSnackbar, setShowSnackbar] = React.useState(false);
  const [messageSnackbar, setMessageSnackbar] = React.useState("");

  useEffect(() => {
    if (card1 && card2 && dealer) {
      getStrategy();
    }
  }, [card1, card2, dealer]);

  const getStrategy = () => {
    const dealerCard = dealer?.deger === "A" ? "A" : dealer?.puan;
    const totalCard = card1?.puan + card2.puan > 17 ? 17 : card1?.puan + card2.puan
    let strategy = StrategyData[`${dealerCard}`][`${totalCard}`];

    if (card1.deger === "A" || card2?.deger === 'A') {
      let aceCard = card1.deger === "A" ? card2?.puan : card1?.puan;
      aceCard = aceCard > 8 ? 8 : aceCard;
      strategy = StrategyData[`${dealerCard}`][`A${aceCard}`];
    }

    if (card1.deger === card2?.deger) {
      strategy = StrategyData[`${dealerCard}`][`${card1.puan}${card2.puan}`];

    }
    const messages = MessagesData[`${strategy}`]
    setShowSnackbar(true);
    setMessageSnackbar(messages)
  }

  return (
    <>
      <Grid container spacing={2} gap={2} sx={{ height: '100vh'}}>
        <Grid item xs={12} display="flex" justifyContent="center" alignItems="end">
          <Card onChange={(value) => setDealer(value)} />
        </Grid>
        <Grid gap={2} item xs={12} flexDirection="row" display="flex" justifyContent="center">
          <Card onChange={(value) => setCard1(value)} />
          <Card onChange={(value) => setCard2(value)} />
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={showSnackbar}
        message={messageSnackbar}
      />
    </>
  )
}

export default App
