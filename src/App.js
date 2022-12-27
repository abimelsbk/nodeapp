import React from 'react'
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({
    "name": "",
    "email": "",
    "subject": "",
    "msg": ""
  });

  const handleClick = () => {

    axios.post('/test', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="App">


      <input type="text" placeholder="Your Name" onChange={(e) => {
        setData((prevState) => { return { ...prevState, "name": e.target.value } })
      }} />
      <input type="text" placeholder="email" onChange={(e) => {
        setData((prevState) => { return { ...prevState, "email": e.target.value } })
      }} />
      <input type="text" placeholder="Your Name" onChange={(e) => {
        setData((prevState) => { return { ...prevState, "subject": e.target.value } })
      }} />
      <textarea placeholder="Message" onChange={(e) => {
        setData((prevState) => { return { ...prevState, "msg": e.target.value } })
      }} ></textarea>

      <button onClick={() => handleClick()}>Send</button>

    </div>
  );
}

export default App;
