import React from 'react'
import { Head } from 'react-static'
import Navbar from '../components/Navbar'
import SponsorshipPackage from '../components/SponsorshipPackage'
import PayPalButton from '../components/PayPalButton'


export default function Donations() {
  return (
    <div>
      <Head>
        <title>Donations</title>
      </Head>
      <Navbar />
      <SponsorshipPackage />
      <PayPalButton />
    </div>
  )
}