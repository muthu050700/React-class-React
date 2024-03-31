// import React, { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Card
        cardTitle="Free"
        price="0"
        data1="Single User"
        data2="50GB Storage"
        data3="Unlimited Public"
        data4="Community Access"
        data5="Unmimited Private Project"
        data6="Dedicated Phone Support"
        data7="Free Subdomain"
        data8="Monthly Status Reports"
        check="fa-solid fa-check"
        wrong="fa-solid fa-xmark"
      />
      <Card
        cardTitle="Plus"
        price="9"
        data1="5 User"
        data2="50GB Storage"
        data3="Unlimited Public"
        data4="Community Access"
        data5="Unmimited Private Project"
        data6="Dedicated Phone Support"
        data7="Free Subdomain"
        data8="Monthly Status Reports"
        check="fa-solid fa-check"
        wrong="fa-solid fa-xmark"
      />
      <Card
        cardTitle="Pro"
        price="49"
        data1="Unlimted User"
        data2="50GB Storage"
        data3="Unlimited Public"
        data4="Community Access"
        data5="Unmimited Private Project"
        data6="Dedicated Phone Support"
        data7="Free Subdomain"
        data8="Monthly Status Reports"
        check="fa-solid fa-check"
        wrong="fa-solid fa-xmark"
      />
    </>
  );
}
export default App;
function Card({
  cardTitle,
  price,
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
}) {
  function checking(data) {
    if (cardTitle === "Free") {
      const features = [
        "Single User",
        "50GB Storage",
        "Unlimited Public",
        "Community Access",
      ];
      function checkingValue() {
        for (let i = 0; i <= features.length - 1; i++) {
          if (data === features[i]) {
            return true;
          }
        }
      }
      return checkingValue();
    } else if (cardTitle === "Plus") {
      const features = [
        "5 User",
        "50GB Storage",
        "Unlimited Public",
        "Community Access",
        "Unmimited Private Project",
        "Dedicated Phone Support",
        "Free Subdomain",
      ];
      function checkingValue() {
        for (let i = 0; i <= features.length - 1; i++) {
          if (data === features[i]) {
            return true;
          }
        }
      }
      return checkingValue();
    } else if (cardTitle === "Pro") {
      const features = [
        "Unlimted User",
        "50GB Storage",
        "Unlimited Public",
        "Community Access",
        "Unmimited Private Project",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports",
      ];
      function checkingValue() {
        for (let i = 0; i <= features.length - 1; i++) {
          if (data === features[i]) {
            return true;
          }
        }
      }
      return checkingValue();
    }
  }
  function checkingTheValue(data, value) {
    if (data === true) {
      return `✔️ ${value}`;
    } else {
      return <span className="lite">{`❌ ${value}`}</span>;
    }
  }
  return (
    <div className="flex-container">
      <div className="container">
        <div className="card-container">
          <div className="card-details">
            <h5>{cardTitle}</h5>
            <h2>${price}/month</h2>
            <p>
              <span>{checkingTheValue(checking(data1), data1)}</span>
            </p>
            <p>{checkingTheValue(checking(data2), data2)}</p>
            <p>{checkingTheValue(checking(data3), data3)}</p>
            <p>{checkingTheValue(checking(data4), data4)}</p>
            <p>{checkingTheValue(checking(data5), data5)}</p>
            <p>{checkingTheValue(checking(data6), data6)}</p>
            <p>{checkingTheValue(checking(data7), data7)}</p>
            <p>{checkingTheValue(checking(data8), data8)}</p>
            <button className="btn">button</button>
          </div>
        </div>
      </div>
    </div>
  );
}
