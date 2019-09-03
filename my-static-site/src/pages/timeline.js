import React from 'react'
import { Head } from 'react-static'
import Navbar from '../components/Navbar'
import Container from 'react-bootstrap/Container'
import YearSelector from '../components/YearSelector'
import TimelineList from '../components/TimelineList'
import JumpUpButton from '../components/JumpUpButton'


export default function Timeline() {
  return (
    <div>
      <Head>
        <title>Timeline</title>
      </Head>
      <Navbar />
      <Container>
        <h1>Timeline</h1>
        <YearSelector />
        <TimelineList />
        <JumpUpButton />
      </Container>
    </div>

  )
}
