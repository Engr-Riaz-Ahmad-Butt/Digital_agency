

import React from 'react';
import '../../styles/testimonials.css';

import { Container, Row, Col } from 'reactstrap';

import ImageContainer from '../Container/ImageContainer';

export default function Testimonials() {
  return (
    <div id='about'>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='12' md='12'>

              <div>
                <ImageContainer />

              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

