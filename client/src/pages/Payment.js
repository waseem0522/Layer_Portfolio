import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import "../App.css"


function Payment() {
    const [amount, setAmount] = useState(0);
    const [name, setName] = useState('');

    const handleToken = (token) => {
        fetch("/payment/donate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, amount, name }),
            })
            .then(res => res.json())
            .then(_ => {
                window.alert("Transaction Successful.");
            }).catch(_ => window.alert("Transaction Failed."))
    }

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value);
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
    };

    return ( <
            div >
            <
            div className = "App"
            style = {
                {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: "100vh",
                    flexDirection: 'column',
                    gap: 15,
                }
            } >
            <
            FormControl sx = {
                { m: 1 } } >
            <
            FormControl sx = {
                { m: 1 } } >
            <
            InputLabel htmlFor = "outlined-adornment-amount" > Amount < /InputLabel> <
            OutlinedInput id = "outlined-adornment-amount"
            value = { amount }
            onChange = { handleAmountChange }
            startAdornment = { < InputAdornment position = "start" > Rs: < /InputAdornment>}
                label = "Amount" /
                >
                <
                /FormControl>    <
                FormControl sx = {
                    { m: 1 } } >
                <
                InputLabel htmlFor = "outlined-adornment-amount" > Name < /InputLabel> <
                OutlinedInput
                id = "outlined-adornment-amount"
                value = { name }
                onChange = { handleNameChange }
                startAdornment = { < InputAdornment position = "start" > Name: < /InputAdornment>}
                    label = "Name" /
                    >
                    <
                    /FormControl> <
                    /FormControl> <
                    StripeCheckout
                    stripeKey = { process.env.REACT_APP_STRIPE_KEY || "" }
                    token = { handleToken }
                    name = { name }
                    panelLabel = { `Donate` }
                    currency = "PKR"
                    amount = { amount * 100 }

                    >

                    <
                    /StripeCheckout> <
                    /div> <
                    /div>
                )
            }

            export default Payment