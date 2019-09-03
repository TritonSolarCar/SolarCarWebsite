import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Event(props) {

  return (
    <div>
      <Card style={{ width: '100%' }}>
        <Row noGutters={ true }>
          <Col md="4">
            <Card.Img variant="left" src={ props.img } />
          </Col>
          <Col md="8">
            <Card.Body>
              <Card.Title>{ props.title }</Card.Title>
              <Card.Text>
                <small class="text-muted">{ props.date }</small>
              </Card.Text>
              <Card.Text>
              { props.description }
              </Card.Text>
              
            </Card.Body>
            </Col>
          </Row>
      </Card>
    </div>
  )
};