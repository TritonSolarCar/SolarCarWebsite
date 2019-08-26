import React from 'react'
import Table from 'react-bootstrap/Table'
import TableHead from './TableHead'
import TableRow from './TableRow'

const tierColors = {
  triton: '#5271FF',
  bronze: '#744F50',
  silver: '#A6A6A6',
  gold: '#FFBD59',
  platinum: '#737F92'
}

export default  function SponsorshipPackage() {
  return (
    <div class='container' >
      <h1>Sponsorship Levels</h1>
      <Table responsive striped bordered hover>
        <TableHead
          tierColors={tierColors}
        />
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
        * Sponsors will be placed in the respective tier for the website. <br/>
        * Sizes for the T-shirt logo and car decal will increase per tier. <br/>
        * All sponsors will get recruiting access and invitation to team events. <br/>
        ** Promotional use of the car includes: display at expos and/or company events. <br/>
      </div>
      <h1>What We Are Looking for</h1>
      <h2>Service Donations</h2>
      <ul>
        <li style={{display: 'inline', padding: '10px'}} >CNC </li>
        <li style={{display: 'inline', padding: '10px'}} >Welding </li>
        <li style={{display: 'inline', padding: '10px'}} >Thermoforming </li>
      </ul>
      <h2>Material Donations</h2>
      <ul>
        <li style={{display: 'inline', padding: '10px'}} >Carbon Fiber </li>
        <li style={{display: 'inline', padding: '10px'}} >Fiberglass </li>
        <li style={{display: 'inline', padding: '10px'}} >Resin </li>
        <li style={{display: 'inline', padding: '10px'}} >3D Printer </li>
        <li style={{display: 'inline', padding: '10px'}} >Motor </li>
        <li style={{display: 'inline', padding: '10px'}} >Foam Core </li>
      </ul>
      <h2>Monetary Donations</h2>
      <ul>
        <li style={{display: 'inline', padding: '10px'}} >Purchasing parts and materials </li>
        <li style={{display: 'inline', padding: '10px'}} >Travel Funds </li>
        <li style={{display: 'inline', padding: '10px'}} >Car Insurance </li>
      </ul>
    </div>
  )
};