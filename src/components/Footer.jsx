import React  from "react";
import { Container,Row,Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

const Footer =() =>{
        return(
            <footer className="bg-success text-secondary text-center py-5 mt-5">
                <Container>
                    <Row>
                        <Col md={6}>
                        <p>Tienda De Compras Compulsivas</p>
                        <p>Pumacahua  535, Parque Chacabuco</p>
                        </Col>
                        <Col md={6}>
                        <div>
                            <a href="#" className="text-white me-3">
                                <i className="fa fa-facebook fa-2x"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="fa fa-twitter fa-2x"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="fa fa-instagram fa-2x"></i>
                            </a>
                        </div>
                        </Col>
                    </Row>
                </Container>

            </footer>
  );
}
export default Footer;