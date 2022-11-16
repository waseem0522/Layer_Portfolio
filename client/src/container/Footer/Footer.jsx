import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import StripeCheckout from "react-stripe-checkout";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    time: "",
    email: "",
    message: "",
    amount:"",
    country:"",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [disable, setDisable] = useState(false);

  const { username, address, phone, time,  email, message, } =
    formData;

  const [amount, setAmount] = useState(5000);
  const [name, setName] = useState("");

  

  

  const handleToken = (token) => {
    fetch("/payment/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, amount, name }),
    })
      .then((res) => res.json())
      .then((_) => {
        window.alert("Transaction Successful.");
      })
      .catch((_) => window.alert("Transaction Failed."));
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
  };

  // const handleNameChange = (e) => {
  //   const value = e.target.value;
  //   setName(value);
  // };

  const countries = [
    // {id:"1",name:"DAY"},
    // {id:"2",name:"NIGHTE"}
    { id: "1", name: "9:00AM TO 9:30 AM" },
    { id: "2", name: "9:30AM TO 10:00 AM " },
    { id: "3", name: "10:00AM TO 10:30 AM " },
    { id: "4", name: "10:30AM TO 11:00 PM " },
    { id: "5", name: "11:00PM TO 11:30 PM " },
    { id: "6", name: "11:30PM TO 12:00 PM " },
    { id: "7", name: "12:00PM TO 12:30 PM " },
    { id: "8", name: "12:30PM TO 1:00 PM " },
    { id: "9", name: "1:00PM TO 1:30 PM " },
    { id: "10", name: "1:30PM TO 2:00 PM " },
    { id: "11", name: "2:00PM TO 2:30 PM " },
    { id: "12", name: "2:30PM TO 3:00 PM " },
    { id: "13", name: "3:00PM TO 3:30 PM " },
    { id: "14", name: "3:30PM TO 4:00 PM " },
    { id: "15", name: "4:00PM TO 4:30 PM " },
    { id: "16", name: "4:30PM TO 5:00 PM " },
    { id: "17", name: "5:00PM TO 5:30 PM " },
    { id: "18", name: "5:30PM TO 6:00 PM " },
    { id: "19", name: "6:00PM TO 6:30 PM " },
    { id: "20", name: "6:30PM TO 7:00 PM " },
  ];

  const states = [
    { id: "1", nameStates: "RS: 50000" },
    { id: "2", nameStates: "RS: 40000" },
  ];



  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  console.log()
  console.log(amount)

  useEffect(() => {
    setCountry(countries);
  }, []);

  useEffect(() => {
    setState(states);
  }, []);

  const handleCountry = (id) => {
    const dt = states.filter((x) => x.countryId === id);
    setState(dt);
  };

  const handleClick = event => {
    event.currentTarget.disabled = true;
    console.log('button clicked');
  };

 

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async () => {
    const contact = {
      _type: "contact",
      name: formData.username,
      address: formData.address,
      phone: formData.phone,
      time: formData.time,
      email: formData.email,
      message: formData.message,
      amount: amount,
      country: country.value
    };
    let result = await fetch("http://localhost:5000/create", {
      method: "post",
      body: JSON.stringify(contact),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result
      .json()
      .then((_) => {
        
      })
      .catch((_) => window.alert("Message Sending Failed."));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">
            hello@micael.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +1 (123) 456-7890
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Address"
              name="address"
              value={address}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="number"
              placeholder="Your Phone Number"
              name="phone"
              value={phone}
              onChange={handleChangeInput}
            />
          </div>

          
              
            

          {/* <div className="app__flex">
            <input className="p-text" type="datetime-local" placeholder="Your End Time and Date" name="endtime" value={endtime} onChange={handleChangeInput} />
          </div> */}
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="Date"
              placeholder="Your Start Time and Date"
              name="time"
              value={time}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <select
              id="ddlCountry"
              className=""
              
              onChange={(e) => handleCountry(e.target.value)}
            >
              <option  value="0">Select Time</option>
              {country && country !== undefined
                ? country.map((ctr, index) => {
                    return (
                      <option className="p-text" key={index} value={ctr.id} 
                      >
                        {ctr.name}
                      </option>
                    );
                  })
                : "No Country"}
            </select>
          </div>
          <br></br>
          

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <FormControl sx={{ m: 1 }}>
          <div className="app__flex">
                <FormControl sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Amount
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={amount}
                    onChange={handleAmountChange}
                    startAdornment={
                      <InputAdornment position="start">PKR:</InputAdornment>
                    }
                    label="Amount"
                  />
                </FormControl></div>
                
              </FormControl>
              
              

          <button type="button" className="p-text1" onClick={handleSubmit} >
            
            {/* {!loading ? "Send Message" : "Sending..."}{" "} */}
            <StripeCheckout
                stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
                token={handleToken}
                name={name}
                panelLabel={`Donate`}
                currency="PKR"
                amount={amount * 100}
              ></StripeCheckout>
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
