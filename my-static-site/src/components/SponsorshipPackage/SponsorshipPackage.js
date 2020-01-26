import React from "react";
import Table from "react-bootstrap/Table";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { Head } from "react-static";

const tierColors = {
  triton: "#5271FF",
  bronze: "#744F50",
  silver: "#A6A6A6",
  gold: "#FFBD59",
  platinum: "#737F92"
};

const h1Styles = {
  color: "#244e91",
  width: "100%",
  margin: "30px auto",
  textDecorationLine: "underline",
  fontFamily: "Acme"
};

const pStyle = {
  fontFamily: "Jaldi"
};

const containerStyle = {
  width: "80%"
};

export default function SponsorshipPackage() {
  return (
    <div class="container" style={containerStyle}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Jaldi&display=swap"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>

      <h1 style={h1Styles}>Sponsorship Levels</h1>
      <Table responsive striped bordered hover>
        <TableHead tierColors={tierColors} />
        <tbody>
          <TableRow
            perk="Facebook"
            triton={true}
            bronze={true}
            silver={true}
            gold={true}
            platinum={true}
            tierColors={tierColors}
          />
          <TableRow
            perk="Website Logo"
            triton={true}
            bronze={true}
            silver={true}
            gold={true}
            platinum={true}
            tierColors={tierColors}
          />
          <TableRow
            perk="T-shirt Logo"
            triton={false}
            bronze={true}
            silver={true}
            gold={true}
            platinum={true}
            tierColors={tierColors}
          />
          <TableRow
            perk="Car Decal"
            triton={false}
            bronze={false}
            silver={true}
            gold={true}
            platinum={true}
            tierColors={tierColors}
          />
          <TableRow
            perk="Trailer Decal"
            triton={false}
            bronze={false}
            silver={false}
            gold={true}
            platinum={true}
            tierColors={tierColors}
          />
          <TableRow
            perk="Promotional Use**"
            triton={false}
            bronze={false}
            silver={false}
            gold={false}
            platinum={true}
            tierColors={tierColors}
          />
        </tbody>
      </Table>
      <div>
        <p style={pStyle}>
          * Sponsors will be placed in the respective tier for the website.{" "}
          <br />* Sizes for the T-shirt logo and car decal will increase per
          tier. <br />* All sponsors will get recruiting access and invitation
          to team events. <br />
          ** Promotional use of the car includes: display at expos and/or
          company events. <br />
        </p>
      </div>
    </div>
  );
}
