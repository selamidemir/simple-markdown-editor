import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Editor from './Editor';
import Preview from './Preview';

function Content() {
  return (
    <Container>
        <Row>
            <Col className='col-12 col-lg-6'><Editor /></Col>
            <Col className='col-12 col-lg-6'><Preview /></Col>
        </Row>
    </Container>
  )
}

export default Content;