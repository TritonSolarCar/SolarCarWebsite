import React, { Component } from "react";
import { Head } from 'react-static'
import Navbar from '../components/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import pieChart from "../images/major-distribution.png";
import teamImage from "../images/team.jpg";

import '../css/icon.css'
import '../css/team.css';


class Team extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Team</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        <Navbar />
        <Image src={ teamImage } fluid alt="Team"/>
        <Container>
        <div id="page-wrapper">
          <article id="main">
            <section>
              
            </section>
            <section className="wrapper style4 container">
              <div className="content">
                <section>
                  <header>
                    <h3>The Roster</h3>
                  </header>
                  <p>
                    The UCSD Solar Car Team has its roots firmly planted by a
                    spirit of excellence through diversity. With a variety of
                    students from contrasting educational as well as cultural
                    backgrounds, every member is equally responsible for the
                    team's success. Supervising them are the team leads, who go
                    the extra step to bring out the best in every one of them.
                  </p>
                  <p />
                  <p />
                </section>
              </div>
            </section>
            <section className="wrapper style1 container special">
              <img id="piechart" src={ pieChart } alt="Pie Chart" />
            </section>
            <section className="wrapper style1 container special mt-5">
              <div className="row">
                <div className="col-4 col-12-narrower">
                  <section>
                    <span className="icon featured fa-briefcase" />
                    <header>
                      <h3>Project Lead: Kieu Huynh</h3>
                    </header>
                    <p className="text-muted">Class of 2020 | Mechanical Engineering</p>
                  </section>
                </div>
                <div className="col-4 col-12-narrower">
                  <section>
                    <span className="icon featured fa-cogs" />
                    <header>
                      <h3>Mechanical Lead: Roy Choi</h3>
                    </header>
                    <p className="text-muted">Class of 2019 | Mechanical Engineering</p>
                  </section>
                </div>
                <div className="col-4 col-12-narrower">
                  <section>
                    <span className="icon featured fa-bolt" />
                    <header>
                      <h3>Electrical Lead: Bryan Thai</h3>
                    </header>
                    <p className="text-muted">Class of 2019 | Bioengineering</p>
                  </section>
                </div>
              </div>
            </section>

            <section className="wrapper style1 container special mt-3">
              <span className="icon featured fa-users" />
            </section>

            <section className="wrapper style1 container special mt-3">
              <div className="row">
                <div className="col-4 col-12-narrower">
                  <section>
                    <header>
                      <h3>Operations Team</h3>
                    </header>
                    <p>Camila Paik, Angela Yu</p>
                  </section>
                </div>
                <div className="col-4 col-12-narrower">
                  <section>
                    <header>
                      <h3>Mechanical Team</h3>
                    </header>
                    <p>
                      Roy Choi, Janet He, Eugine Lin, Angela Yu, Canwin Tso,
                      Sean Orellana, Jennie Coates, Arjun Ray, Arturo Medina,
                      Jesse Sanchez, Dustin Tengdyantono, Billy Park, Jacob
                      Watson, Sukhdeep Chera,
                    </p>
                  </section>
                </div>
                <div className="col-4 col-12-narrower">
                  <section>
                    <header>
                      <h3>Electrical Team</h3>
                    </header>
                    <p>
                      Bryan Thai, Dan Nguyen, Vivian Lee, Sara Dorr, Madeline
                      Tjoa, Jonathan Venegas, Daniel Renfrow
                    </p>
                  </section>
                </div>
              </div>
            </section>
          </article>
        </div>
        </Container>
      </div>
    );
  }
}

export default Team;
