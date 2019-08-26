import React from 'react'
import { Head } from 'react-static'
import Navbar from '../components/Navbar'

export default function Welcome() {
  return (
    <div>
      <Head>
        <title>Donations</title>
      </Head>
      <Navbar />
      <h1>
        Sponsorship Package
      </h1>
    </div>
  )
}