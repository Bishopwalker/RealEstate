import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';

const MortgageCalculator = ({ closeModal, homePrice }) => {



    const [price, setPrice] = React.useState(homePrice);
    const [percentDown, setPercentDown] = React.useState('10');
    const [numYears, setNumYears] = React.useState('30');
    const [interestRate, setInterestRate] = React.useState('3.925');
    const [payment, setPayment] = React.useState('');

    const computePayment = () => {
        let iAmount = price - (price * (percentDown / 100));
        let iPayments = numYears * 12;
        let iRate = interestRate / 100 / 12;
        let iPayment = (iAmount * iRate) / (1 - Math.pow(1 + iRate, -1 * iPayments));
        setPayment(Math.floor(iPayment * 100) / 100);
    };

    return (
        <Modal
            open
            onClose={closeModal}
            aria-labelledby="mortgage-calculator-modal"
            aria-describedby="mortgage-calculator-description"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    width: '60%',
                    backgroundColor: 'white',
                    padding: '2rem',
                    outline: 'none',
                    borderRadius: '8px',
                }}
            >
                <Typography variant="h6">Calculate Payment</Typography>
                <form>
                    {/* Mortgage calculator form inputs */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Price"
                                type="text"
                                value={"$" + price}
                                onChange={(e) => setPrice(e.target.value)}
                                onBlur={(e) => {
                                    if (e.target.value === '' || isNaN(e.target.value) || e.target.value < 0) {
                                        setPrice('0');
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Percent Down"
                                type="text"
                                value={percentDown + '%'}
                                onChange={(e) => setPercentDown(e.target.value)}
                                onBlur={(e) => {
                                    if (
                                        e.target.value === '' ||
                                        isNaN(e.target.value) ||
                                        e.target.value < 0 ||
                                        e.target.value > 100
                                    ) {
                                        setPercentDown('0');
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Years to Finance"
                                type="text"
                                value={numYears}
                                onChange={(e) => setNumYears(e.target.value)}
                                onBlur={(e) => {
                                    if (e.target.value === '' || isNaN(e.target.value) || e.target.value < 0) {
                                        setNumYears('0');
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Interest Rate"
                                type="text"
                                value={interestRate + '%'}
                                onChange={(e) => setInterestRate(e.target.value)}
                                onBlur={(e) => {
                                    if (
                                        e.target.value === '' ||
                                        isNaN(e.target.value) ||
                                        e.target.value > 100 ||
                                        e.target.value < 0
                                    ) {
                                        setInterestRate('0');
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Payment" type="text" value={"$" + payment} readOnly />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={computePayment}>
                                Compute
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Button variant="contained" onClick={closeModal}>
                    Close Window
                </Button>
            </Box>
        </Modal>
    );
};

export default MortgageCalculator;
