import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
            <footer>
                <Container>
                      <Row>
                          <Col className='text-center py-3'> 
                                Copyright 2020 &copy; Gyansutrm Ltd. 
                          </Col>
                      </Row>  
                </Container>
            </footer>
      
    )
}

export default Footer
