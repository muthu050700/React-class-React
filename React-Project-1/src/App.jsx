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
  check,
  wrong,
}) {
  const features = [
    "single user",
    "50GB storage",
    "unlimited public",
    "community access",
    "unlimited private project",
    "dedicated phone support",
    "free subdomain",
    "monthly status reports",
  ];
  const free = [
    "single user",
    "50GB storage",
    "unlimited public",
    "community access",
  ];
  function forChecking(data1, data2) {
    data2.map((value, index) => {
      if (data1[index] === data2[index]) {
        console.log(value);
      } else {
        console.log("false");
      }
    });
  }
  forChecking(free, features);
  if (price === 0) {
    console.log(0);
  }
  return (
    <div className="flex-container">
      <div className="container">
        <div className="card-container">
          <div className="card-details">
            <h5>{cardTitle}</h5>
            <h2>${price}/month</h2>
            <p>
              <i class={check}></i>
              {data1}
            </p>
            <p>
              <i class={check}></i>
              {data2}
            </p>
            <p>
              <i class={check}></i>
              {data3}
            </p>
            <p>
              <i class={check}></i>
              {data4}
            </p>
            <p className="lite">
              <i class={wrong}></i>
              {data5}
            </p>
            <p className="lite">
              <i class={wrong}></i>
              {data6}
            </p>
            <p className="lite">
              <i class={wrong}></i>
              {data7}
            </p>
            <p className="lite">
              <i class={wrong}></i>
              {data8}
            </p>
            <button className="btn">button</button>
          </div>
        </div>
      </div>
    </div>
  );
}
