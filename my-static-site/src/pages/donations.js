import React from "react";
import { Head } from "react-static";
import Navbar from "../components/Navbar";
import SponsorshipPackage from "../components/SponsorshipPackage/";
import PayPalButton from "../components/PayPalButton";

import "../css/donations.css";

export default function Donations() {
  return (
    <div>
      <Head>
        <title>Donations</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Jura"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Cantarell"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Acme&display=swap"
          rel="stylesheet"
          type="text/css"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Basic&display=swap"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>
      <Navbar />
      <h1>DONATE</h1>
      <hr />
      <p id="thank-you-message">
        Dear prospective sponsor, <br />
        On behalf of UCSD Solar Car, we would like to thank you for your
        interest in partnering with our group. Your generosity will go a long
        way in contributing towards the project and towards each of our members'
        paths to success.
      </p>
      <hr />
      <div id="looking-for">
        <h1 className="donation-sub-heading">What We Are Looking for!</h1>
        <h4 className="list-categories">Service Donations</h4>
        <ul>
          <li className="donation-items">CNC </li>
          <li className="donation-items">Welding </li>
          <li className="donation-items">Thermoforming </li>
        </ul>
        <h4 className="list-categories">Material Donations</h4>
        <ul>
          <li className="donation-items">Carbon Fiber </li>
          <li className="donation-items">Fiberglass </li>
          <li className="donation-items">Resin </li>
          <li className="donation-items">3D Printer </li>
          <li className="donation-items">Motor </li>
          <li className="donation-items">Foam Core </li>
        </ul>
        <h4 className="list-categories">Monetary Donations</h4>
        <ul>
          <li className="donation-items">Purchasing parts and materials </li>
          <li className="donation-items">Travel Funds </li>
          <li className="donation-items">Car Insurance </li>
        </ul>
      </div>

      <SponsorshipPackage />

      <PayPalButton />
    </div>
  );
}
