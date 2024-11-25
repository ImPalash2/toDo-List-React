import React, { useState } from "react";
import "./passwordGenerator.css";
import copy from "./images/copy.svg";
import { NC, UC, LC, SC } from "./data/AllChars";
const PasswordGenerator = () => {
  const [passlen, setPasslen] = useState(10);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [fpass, setFpass] = useState("");

  const handleSubmit = (event) => {
    let charSet = "";
    let finalPass = "";
    if (uppercase || lowercase || number || symbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;
      const len = charSet.length;
      for (let i = 0; i < passlen; ++i) {
        let ch = charSet.charAt(Math.floor(Math.random() * len));
        finalPass += ch;
      }
      setFpass(finalPass);
    } else {
      alert("Select atleast one checkbox!");
    }
    event.preventDefault();
  };
  const handlePasslen = (event) => {
    setPasslen(event.target.value);
  };
  const handleClick = (event) => {
    navigator.clipboard.writeText(fpass);
    alert("Copied to clipboard.");
    setFpass("");
    setPasslen(10);
  };
  return (
    <div className="container">
      <div className="header">
        <h1>PassWord Generator</h1>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input type="text" readOnly value={fpass} />
            <div className="copy" onClick={handleClick}>
              <img src={copy} alt="" width={20} />
            </div>
          </div>
          <div className="options">
            <label htmlFor="passlen">Enter Password Length: </label>
            <input
              type="number"
              max={20}
              min={5}
              name="passlen"
              value={passlen}
              onChange={handlePasslen}
              width={20}
            />
          </div>
          <div className="options">
            <label htmlFor="uppercase">Add Uppercase Character </label>
            <input
              type="checkbox"
              name="uppercase"
              onChange={() => setUppercase(!uppercase)}
            />
          </div>
          <div className="options">
            <label htmlFor="lowercase">Add Lowercase Character </label>
            <input
              type="checkbox"
              name="lowercase"
              onChange={() => setLowercase(!lowercase)}
            />
          </div>
          <div className="options">
            <label htmlFor="number">Add Number Character </label>
            <input
              type="checkbox"
              name="number"
              onChange={() => setNumber(!number)}
            />
          </div>
          <div className="options">
            <label htmlFor="symbol">Add Symbol Character </label>
            <input
              type="checkbox"
              name="symbol"
              onChange={() => setSymbol(!symbol)}
            />
          </div>
          <div className="submitBtn">
            <button type="submit">Generate Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordGenerator;
