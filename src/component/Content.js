import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Editor from './Editor';
import Preview from './Preview';

function Content() {
  return (
    <Container>
        <Row>
            <Col><Editor /></Col>
            <Col><Preview /></Col>
        </Row>
    </Container>
  )
}

export default Content;